import { useEffect, useState } from 'react';
import { Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router';
const API_URL = import.meta.env.VITE_API_URL;

interface Categoria {
  IdCategory: string;
  name: string;
}

interface Subcategoria {
  id: string;
  nombre: string;
}

interface OrganizeFormCardProps {
  category: string;
  setCategory: (value: string) => void;
  subcategory?: string;
  setSubcategory?: (value: string) => void;
  marca?: string;
  setMarca?: (value: string) => void;
  className?: string;
}

const OrganizeFormCard = ({
  category,
  setCategory,
  subcategory = '',
  setSubcategory,
  marca = '',
  setMarca,
  className
}: OrganizeFormCardProps) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [subcategorias, setSubcategorias] = useState<Subcategoria[]>([]);
  const [loadingCategorias, setLoadingCategorias] = useState(true);
  const [loadingSubcategorias, setLoadingSubcategorias] = useState(false);

  // Cargar categorías al montar
  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        setLoadingCategorias(true);
        const response = await fetch(`${API_URL}/api/categorias`, {
          method: 'GET',
          headers: {
            'x-token': localStorage.getItem('token') ?? ''
          }
        });

        const data = await response.json();

        if (Array.isArray(data)) {
          setCategorias(data);
        } else if (data.categorias) {
          setCategorias(data.categorias);
        } else {
          throw new Error('Formato de respuesta inesperado');
        }
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      } finally {
        setLoadingCategorias(false);
      }
    };

    cargarCategorias();
  }, []);

  // Cargar subcategorías cuando cambia la categoría
  useEffect(() => {
    if (!category) {
      setSubcategorias([]);
      if (setSubcategory) setSubcategory('');
      return;
    }

    const cargarSubcategorias = async () => {
      try {
        setLoadingSubcategorias(true);
        const response = await fetch(`${API_URL}/api/categorias/${category}/subcategorias`, {
          method: 'GET',
          headers: {
            'x-token': localStorage.getItem('token') ?? ''
          }
        });

        const data = await response.json();

        if (data.ok && data.subcategorias) {
          setSubcategorias(data.subcategorias);
        } else {
          setSubcategorias([]);
        }
      } catch (error) {
        console.error('Error al cargar subcategorías:', error);
        setSubcategorias([]);
      } finally {
        setLoadingSubcategorias(false);
      }
    };

    cargarSubcategorias();
  }, [category]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    // Limpiar subcategoría al cambiar categoría
    if (setSubcategory) setSubcategory('');
  };

  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-4">Organizar</h4>
        <Row className="gx-3 gy-4">
          {/* Categoría */}
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-body-highlight">Categoría</h5>
              <Link className="fw-bold fs-9" to="#!">
                Agregar nueva categoría
              </Link>
            </div>
            <Form.Select
              aria-label="category"
              value={category}
              onChange={handleCategoryChange}
              disabled={loadingCategorias}
            >
              <option value="">
                {loadingCategorias ? 'Cargando...' : 'Seleccione una categoría'}
              </option>
              {categorias.map((cat) => (
                <option key={cat.IdCategory} value={cat.IdCategory}>
                  {cat.name}
                </option>
              ))}
            </Form.Select>
          </Col>

          {/* Subcategoría */}
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-body-highlight">Subcategoría</h5>
              <Link className="fw-bold fs-9" to="#!">
                Agregar subcategoría
              </Link>
            </div>
            <div className="position-relative">
              <Form.Select
                aria-label="subcategory"
                value={subcategory}
                onChange={(e) => setSubcategory?.(e.target.value)}
                disabled={!category || loadingSubcategorias || subcategorias.length === 0}
              >
                <option value="">
                  {!category
                    ? 'Primero seleccione una categoría'
                    : loadingSubcategorias
                      ? 'Cargando...'
                      : subcategorias.length === 0
                        ? 'No hay subcategorías'
                        : 'Seleccione una subcategoría'}
                </option>
                {subcategorias.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.nombre}
                  </option>
                ))}
              </Form.Select>
              {loadingSubcategorias && (
                <Spinner
                  size="sm"
                  animation="border"
                  className="position-absolute"
                  style={{ right: 35, top: 10 }}
                />
              )}
            </div>
          </Col>

          {/* Marca */}
          {setMarca && (
            <Col xs={12} sm={6} xl={12}>
              <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
                <h5 className="mb-0 text-body-highlight">Marca</h5>
              </div>
              <Form.Control
                placeholder="Ingrese la marca del producto"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
              />
            </Col>
          )}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrganizeFormCard;
