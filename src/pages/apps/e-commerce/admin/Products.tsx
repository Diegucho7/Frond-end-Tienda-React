import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FilterButtonGroup, {
  FilterMenu
} from 'components/common/FilterButtonGroup';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import ProductsTable, {
  productsTablecolumns
} from 'components/tables/ProductsTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import { productsTableData, ProductsTableProductType } from 'data/e-commerce/products';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useState, useEffect } from 'react';

import { useNavigate } from "react-router";

const API_URL = import.meta.env.VITE_API_URL;

const tabItems: FilterTabItem[] = [
  {
    label: 'All',
    value: 'all',
    count: 68817
  },
  {
    label: 'Published',
    value: 'published',
    count: 70348
  },
  {
    label: 'Drafts',
    value: 'drafts',
    count: 17
  },
  {
    label: 'On discount',
    value: 'on_discount',
    count: 810
  }
];

const filterMenus: FilterMenu[] = [
  {
    label: 'Category',
    items: [
      {
        label: 'Plants'
      },
      {
        label: 'Furniture'
      },
      {
        label: 'Fashion'
      }
    ]
  },
  {
    label: 'Vendor',
    items: [
      {
        label: 'Blue Olive Plant sellers. Inc'
      },
      {
        label: 'Beatrice Furnitures'
      },
      {
        label: 'Kizzstore'
      }
    ]
  }
];


const Products = () => {
  const navigate = useNavigate();

  const [productsData, setProductsData] = useState<ProductsTableProductType[]>([]);


  useEffect(() => {

    const tablaDatos = async () => {
      try {
        const response = await fetch(`${API_URL}/api/productos`, {
          method: 'GET',

        });

        const json = await response.json();
        const mappedProducts: ProductsTableProductType[] = json.products.map((item: any) => ({
          idProduct: item.IdProduct,
          product: item.name,
          productImage: `${API_URL}/api/uploads/productos/${item.imagenes[0]}`, // ajusta si tienes otra ruta
          price: parseFloat(item.price),
          category: item.categoria, // puedes reemplazar con el nombre si tienes un mapa de categorías
          tags: [item.marca], // podrías agregar tags desde item.description si quieres
          starred: false, // valor predeterminado
          vendor: item.marca,
          publishedOn: new Date().toLocaleString(), // o usa fecha real si la tienes
        }));

        setProductsData(mappedProducts);
      } catch (err) {
        console.error('Error al obtener productos:', err);
      }
    };
    tablaDatos();
  }, []);

  const table = useAdvanceTable({
    data: productsData,
    columns: productsTablecolumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">Productos</h2>
        <FilterTab tabItems={tabItems} className="mb-2" />
        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <SearchBox
                placeholder="Search products"
                onChange={handleSearchInputChange}
              />
              <div className="scrollbar overflow-hidden-y">
                <FilterButtonGroup menus={filterMenus} />
              </div>
              <div className="ms-xxl-auto">
                <Button variant="link" className="text-body me-4 px-0">
                  <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
                  Export
                </Button>
                <Button
                  variant="primary"
                  onClick={() => navigate("/admin/apps/e-commerce/admin/add-product")}
                >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add product
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            <ProductsTable />
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Products;
