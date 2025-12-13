import PhoenixOffcanvas from 'components/base/PhoenixOffcanvas';
import Section from 'components/base/Section';
import React, { useEffect, useState, useMemo, useCallback, useRef, memo } from 'react';
import { Badge, Button, Col, Form, InputGroup, Pagination, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Scrollbar from 'components/base/Scrollbar';
import ProductCard from 'components/common/ProductCard';
import { Product } from 'data/e-commerce/products';
import {
  faChevronLeft,
  faChevronRight,
  faChevronDown,
  faChevronUp,
  faFilter,
  faSearch,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from 'react-router';

const API_URL = import.meta.env.VITE_API_URL;
const PRODUCTS_PER_PAGE = 12;

// Componente de input con debounce interno
const DebouncedInput = memo(({
  value,
  onChange,
  placeholder,
  type = 'text',
  delay = 500
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  delay?: number;
}) => {
  const [localValue, setLocalValue] = useState(value);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Sincronizar cuando el valor externo cambia (ej: al limpiar)
  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalValue(newValue);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      onChange(newValue);
    }, delay);
  };

  return (
    <Form.Control
      type={type}
      placeholder={placeholder}
      size="sm"
      value={localValue}
      onChange={handleChange}
    />
  );
});

interface Subcategoria {
  id: string;
  nombre: string;
}

interface Categoria {
  IdCategory: string;
  name: string;
  subcategorias: Subcategoria[];
}

interface Filters {
  search: string;
  categories: string[];
  subcategories: string[];
  brands: string[];
  minPrice: string;
  maxPrice: string;
}

const ProductsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Estado de productos
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  // Estado de categorías desde el backend
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);

  // Estado de filtros
  const [filters, setFilters] = useState<Filters>({
    search: searchParams.get('search') || '',
    categories: searchParams.get('category') ? [searchParams.get('category')!] : [],
    subcategories: searchParams.get('subcategory') ? [searchParams.get('subcategory')!] : [],
    brands: [],
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
  });

  // Estado de secciones expandidas
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    categories: true,
    subcategories: true,
    brands: false,
    price: true
  });

  // Estado de paginación
  const [currentPage, setCurrentPage] = useState(1);

  // Estado del offcanvas (mobile)
  const [show, setShow] = useState(false);

  // Cargar categorías desde el backend
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        setLoadingCategorias(true);
        const response = await fetch(`${API_URL}/api/categorias`);
        const data = await response.json();

        if (data.ok && data.categorias) {
          // Limpiar subcategorías null
          const categoriasLimpias = data.categorias.map((cat: Categoria) => ({
            ...cat,
            subcategorias: Array.isArray(cat.subcategorias)
              ? cat.subcategorias.filter((sub: Subcategoria) => sub && sub.id)
              : []
          }));
          setCategorias(categoriasLimpias);
        }
      } catch (err) {
        console.error('Error al obtener categorías:', err);
      } finally {
        setLoadingCategorias(false);
      }
    };

    fetchCategorias();
  }, []);

  // Cargar productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${API_URL}/api/productos`);
        const json = await response.json();

        const mappedProducts: Product[] = (json.products || []).map((item: any) => ({
          id: item.IdProduct,
          name: item.name,
          image: item.imagenes?.[0]
            ? `${API_URL}/api/uploads/productos/${item.imagenes[0]}`
            : undefined,
          price: parseFloat(item.price) + 10,
          salePrice: parseFloat(item.price),
          category: item.category,        // ID de categoría
          categoryName: item.categoria,   // Nombre de categoría
          subcategory: item.subcategory,  // ID de subcategoría
          brand: item.marca,
          extra: item.categoria,
          starred: true,
          publishedOn: new Date().toLocaleString(),
          verified: true
        }));

        setAllProducts(mappedProducts);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Extraer marcas únicas de los productos
  const availableBrands = useMemo(() => {
    const brands = new Set<string>();
    allProducts.forEach(product => {
      if (product.brand) {
        brands.add(product.brand);
      }
    });
    return Array.from(brands).sort();
  }, [allProducts]);

  // Obtener subcategorías de las categorías seleccionadas
  const availableSubcategories = useMemo(() => {
    if (filters.categories.length === 0) {
      // Si no hay categoría seleccionada, mostrar todas las subcategorías
      const allSubs: Subcategoria[] = [];
      categorias.forEach(cat => {
        cat.subcategorias.forEach(sub => {
          if (!allSubs.find(s => s.id === sub.id)) {
            allSubs.push(sub);
          }
        });
      });
      return allSubs;
    }

    // Mostrar subcategorías de las categorías seleccionadas
    const subs: Subcategoria[] = [];
    filters.categories.forEach(catId => {
      const cat = categorias.find(c => c.IdCategory === catId);
      if (cat) {
        cat.subcategorias.forEach(sub => {
          if (!subs.find(s => s.id === sub.id)) {
            subs.push(sub);
          }
        });
      }
    });
    return subs;
  }, [categorias, filters.categories]);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    // Filtro por búsqueda
    if (filters.search.trim()) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        (product.brand && product.brand.toLowerCase().includes(searchLower))
      );
    }

    // Filtro por categorías (por ID)
    if (filters.categories.length > 0) {
      result = result.filter(product => {
        return filters.categories.includes(product.category || '');
      });
    }

    // Filtro por subcategorías (por ID)
    if (filters.subcategories.length > 0) {
      result = result.filter(product => {
        return filters.subcategories.includes(product.subcategory || '');
      });
    }

    // Filtro por marcas
    if (filters.brands.length > 0) {
      result = result.filter(product => {
        return filters.brands.includes(product.brand || '');
      });
    }

    // Filtro por precio mínimo
    if (filters.minPrice) {
      const min = parseFloat(filters.minPrice);
      if (!isNaN(min)) {
        result = result.filter(product => {
          const productPrice = product.salePrice ?? product.price ?? 0;
          return productPrice >= min;
        });
      }
    }

    // Filtro por precio máximo
    if (filters.maxPrice) {
      const max = parseFloat(filters.maxPrice);
      if (!isNaN(max)) {
        result = result.filter(product => {
          const productPrice = product.salePrice ?? product.price ?? 0;
          return productPrice <= max;
        });
      }
    }

    return result;
  }, [allProducts, filters]);

  // Productos paginados
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Total de páginas
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  // Resetear página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  // Actualizar URL con filtros
  useEffect(() => {
    const params = new URLSearchParams();
    if (filters.search) params.set('search', filters.search);
    if (filters.categories.length === 1) params.set('category', filters.categories[0]);
    if (filters.subcategories.length === 1) params.set('subcategory', filters.subcategories[0]);
    if (filters.minPrice) params.set('minPrice', filters.minPrice);
    if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
    setSearchParams(params, { replace: true });
  }, [filters, setSearchParams]);

  // Handlers
  const handleCategoryChange = useCallback((categoryId: string, checked: boolean) => {
    setFilters(prev => {
      const newCategories = checked
        ? [...prev.categories, categoryId]
        : prev.categories.filter(c => c !== categoryId);

      // Si se deselecciona una categoría, también quitar sus subcategorías
      let newSubcategories = prev.subcategories;
      if (!checked) {
        const cat = categorias.find(c => c.IdCategory === categoryId);
        if (cat) {
          const subIds = cat.subcategorias.map(s => s.id);
          newSubcategories = prev.subcategories.filter(s => !subIds.includes(s));
        }
      }

      return {
        ...prev,
        categories: newCategories,
        subcategories: newSubcategories
      };
    });
  }, [categorias]);

  const handleSubcategoryChange = useCallback((subcategoryId: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      subcategories: checked
        ? [...prev.subcategories, subcategoryId]
        : prev.subcategories.filter(s => s !== subcategoryId)
    }));
  }, []);

  const handleBrandChange = useCallback((brand: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      brands: checked
        ? [...prev.brands, brand]
        : prev.brands.filter(b => b !== brand)
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setFilters({
      search: '',
      categories: [],
      subcategories: [],
      brands: [],
      minPrice: '',
      maxPrice: '',
    });
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const activeFiltersCount =
    filters.categories.length +
    filters.subcategories.length +
    filters.brands.length +
    (filters.minPrice ? 1 : 0) +
    (filters.maxPrice ? 1 : 0) +
    (filters.search ? 1 : 0);

  const hasActiveFilters = activeFiltersCount > 0;

  // Renderizar paginación
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return (
      <Pagination className="mb-0 justify-content-center justify-content-md-end">
        <Pagination.Prev
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </Pagination.Prev>
        {startPage > 1 && (
          <>
            <Pagination.Item onClick={() => setCurrentPage(1)}>1</Pagination.Item>
            {startPage > 2 && <Pagination.Ellipsis disabled />}
          </>
        )}
        {pages}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <Pagination.Ellipsis disabled />}
            <Pagination.Item onClick={() => setCurrentPage(totalPages)}>
              {totalPages}
            </Pagination.Item>
          </>
        )}
        <Pagination.Next
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </Pagination.Next>
      </Pagination>
    );
  };

  // Componente de sección colapsable
  const FilterSection = ({
    title,
    section,
    children,
    badge
  }: {
    title: string;
    section: string;
    children: React.ReactNode;
    badge?: number;
  }) => (
    <div className="mb-4">
      <div
        className="d-flex justify-content-between align-items-center mb-2 cursor-pointer"
        onClick={() => toggleSection(section)}
        style={{ cursor: 'pointer' }}
      >
        <h6 className="mb-0 fw-semibold text-body-highlight">
          {title}
          {badge && badge > 0 && (
            <Badge bg="primary" className="ms-2" pill>{badge}</Badge>
          )}
        </h6>
        <FontAwesomeIcon
          icon={expandedSections[section] ? faChevronUp : faChevronDown}
          className="text-body-tertiary"
          size="sm"
        />
      </div>
      {expandedSections[section] && (
        <div className="ps-1">
          {children}
        </div>
      )}
    </div>
  );

  // Contenido de filtros
  const filterContent = (
    <>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h5 className="mb-0 fw-bold">Filtros</h5>
        <div className="d-flex gap-2">
          {hasActiveFilters && (
            <Button
              variant="link"
              size="sm"
              className="p-0 text-danger"
              onClick={clearFilters}
            >
              Limpiar todo
            </Button>
          )}
          <button className="btn p-0 d-lg-none" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      {/* Búsqueda */}
      <div className="mb-4">
        <InputGroup size="sm">
          <InputGroup.Text>
            <FontAwesomeIcon icon={faSearch} />
          </InputGroup.Text>
          <DebouncedInput
            placeholder="Buscar productos..."
            value={filters.search}
            onChange={(value) => setFilters(prev => ({ ...prev, search: value }))}
            delay={300}
          />
          {filters.search && (
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => setFilters(prev => ({ ...prev, search: '' }))}
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          )}
        </InputGroup>
      </div>

      {/* Categorías */}
      <FilterSection
        title="Categorías"
        section="categories"
        badge={filters.categories.length}
      >
        {loadingCategorias ? (
          <div className="text-center py-2">
            <div className="spinner-border spinner-border-sm text-primary" role="status" />
          </div>
        ) : categorias.length === 0 ? (
          <small className="text-body-tertiary">No hay categorías</small>
        ) : (
          <div className="d-flex flex-column gap-1">
            {categorias.map(cat => (
              <Form.Check
                key={cat.IdCategory}
                type="checkbox"
                id={`cat-${cat.IdCategory}`}
                label={
                  <span>
                    {cat.name}
                    <small className="text-body-tertiary ms-1">
                      ({allProducts.filter(p => p.category === cat.IdCategory).length})
                    </small>
                  </span>
                }
                checked={filters.categories.includes(cat.IdCategory)}
                onChange={(e) => handleCategoryChange(cat.IdCategory, e.target.checked)}
              />
            ))}
          </div>
        )}
      </FilterSection>

      {/* Subcategorías */}
      {availableSubcategories.length > 0 && (
        <FilterSection
          title="Subcategorías"
          section="subcategories"
          badge={filters.subcategories.length}
        >
          <div className="d-flex flex-column gap-1">
            {availableSubcategories.map(sub => (
              <Form.Check
                key={sub.id}
                type="checkbox"
                id={`sub-${sub.id}`}
                label={
                  <span>
                    {sub.nombre}
                    <small className="text-body-tertiary ms-1">
                      ({allProducts.filter(p => p.subcategory === sub.id).length})
                    </small>
                  </span>
                }
                checked={filters.subcategories.includes(sub.id)}
                onChange={(e) => handleSubcategoryChange(sub.id, e.target.checked)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Marcas */}
      {availableBrands.length > 0 && (
        <FilterSection
          title="Marcas"
          section="brands"
          badge={filters.brands.length}
        >
          <div className="d-flex flex-column gap-1" style={{ maxHeight: 200, overflowY: 'auto' }}>
            {availableBrands.map(brand => (
              <Form.Check
                key={brand}
                type="checkbox"
                id={`brand-${brand}`}
                label={
                  <span>
                    {brand}
                    <small className="text-body-tertiary ms-1">
                      ({allProducts.filter(p => p.brand === brand).length})
                    </small>
                  </span>
                }
                checked={filters.brands.includes(brand)}
                onChange={(e) => handleBrandChange(brand, e.target.checked)}
              />
            ))}
          </div>
        </FilterSection>
      )}

      {/* Rango de precios */}
      <FilterSection title="Precio" section="price">
        <div className="d-flex gap-2 align-items-center">
          <DebouncedInput
            type="number"
            placeholder="Mín"
            value={filters.minPrice}
            onChange={(value) => setFilters(prev => ({ ...prev, minPrice: value }))}
            delay={800}
          />
          <span className="text-body-tertiary">-</span>
          <DebouncedInput
            type="number"
            placeholder="Máx"
            value={filters.maxPrice}
            onChange={(value) => setFilters(prev => ({ ...prev, maxPrice: value }))}
            delay={800}
          />
        </div>
        {(filters.minPrice || filters.maxPrice) && (
          <Button
            variant="link"
            size="sm"
            className="p-0 mt-2 text-danger"
            onClick={() => setFilters(prev => ({ ...prev, minPrice: '', maxPrice: '' }))}
          >
            Limpiar precio
          </Button>
        )}
      </FilterSection>

      {/* Resumen */}
      <div className="mt-4 p-3 bg-body-secondary rounded">
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-body-tertiary">
            {filteredProducts.length} de {allProducts.length} productos
          </small>
          {hasActiveFilters && (
            <Badge bg="primary" pill>{activeFiltersCount} filtros</Badge>
          )}
        </div>
      </div>
    </>
  );

  return (
    <div>
      {/* Offcanvas para mobile */}
      <PhoenixOffcanvas
        open={show}
        onHide={handleClose}
        style={{ width: 320, top: 92 }}
        className="py-4 px-4 products-filter-offcanvas"
        fixed
      >
        <Scrollbar style={{ height: '100%' }}>
          {filterContent}
        </Scrollbar>
      </PhoenixOffcanvas>

      <Section className="pt-5 pb-9">
        {/* Header con filtros activos */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-4 gap-3">
          <div className="d-flex align-items-center gap-3">
            <Button
              variant="phoenix-secondary"
              size="sm"
              className="d-lg-none"
              onClick={handleShow}
            >
              <FontAwesomeIcon icon={faFilter} className="me-2" />
              Filtros
              {hasActiveFilters && (
                <Badge bg="primary" className="ms-2">{activeFiltersCount}</Badge>
              )}
            </Button>
            <h5 className="mb-0 d-none d-lg-block">
              {filteredProducts.length} productos encontrados
            </h5>
          </div>

          {/* Tags de filtros activos */}
          {hasActiveFilters && (
            <div className="d-flex flex-wrap gap-2">
              {filters.categories.map(catId => {
                const cat = categorias.find(c => c.IdCategory === catId);
                return cat ? (
                  <Badge
                    key={catId}
                    bg="light"
                    text="dark"
                    className="d-flex align-items-center gap-1 px-2 py-1"
                  >
                    {cat.name}
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="cursor-pointer"
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleCategoryChange(catId, false)}
                    />
                  </Badge>
                ) : null;
              })}
              {filters.subcategories.map(subId => {
                let subName = '';
                categorias.forEach(cat => {
                  const sub = cat.subcategorias.find(s => s.id === subId);
                  if (sub) subName = sub.nombre;
                });
                return subName ? (
                  <Badge
                    key={subId}
                    bg="info"
                    className="d-flex align-items-center gap-1 px-2 py-1"
                  >
                    {subName}
                    <FontAwesomeIcon
                      icon={faTimes}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleSubcategoryChange(subId, false)}
                    />
                  </Badge>
                ) : null;
              })}
              {filters.brands.map(brand => (
                <Badge
                  key={brand}
                  bg="secondary"
                  className="d-flex align-items-center gap-1 px-2 py-1"
                >
                  {brand}
                  <FontAwesomeIcon
                    icon={faTimes}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleBrandChange(brand, false)}
                  />
                </Badge>
              ))}
            </div>
          )}
        </div>

        <Row>
          {/* Sidebar de filtros (desktop) */}
          <Col lg={3} xxl={2} className="d-none d-lg-block">
            <div
              className="position-sticky"
              style={{ top: '1rem', height: 'calc(100vh - 2rem)' }}
            >
              <Scrollbar style={{ height: 'calc(100vh - 2rem)' }}>
                {filterContent}
              </Scrollbar>
            </div>
          </Col>

          {/* Grid de productos */}
          <Col lg={9} xxl={10}>
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
                </div>
                <p className="mt-3 text-body-tertiary">Cargando productos...</p>
              </div>
            ) : paginatedProducts.length === 0 ? (
              <div className="text-center py-5">
                <h4 className="text-body-tertiary">No se encontraron productos</h4>
                <p className="text-body-tertiary mb-3">
                  Intenta con otros filtros o términos de búsqueda
                </p>
                <Button variant="primary" onClick={clearFilters}>
                  Limpiar filtros
                </Button>
              </div>
            ) : (
              <>
                <Row className="gx-3 gy-5">
                  {paginatedProducts.map(product => (
                    <Col xs={6} sm={6} md={4} xl={3} xxl={2} key={product.id}>
                      <ProductCard product={product} />
                    </Col>
                  ))}
                </Row>

                <div className="mt-5">
                  {renderPagination()}
                </div>
              </>
            )}
          </Col>
        </Row>
      </Section>
    </div>
  );
};

export default ProductsFilter;
