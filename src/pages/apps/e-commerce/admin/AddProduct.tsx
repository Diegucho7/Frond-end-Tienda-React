import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import TinymceEditor from 'components/base/TinymceEditor';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import InventoryTab from 'components/tabs/InventoryTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;
const AddProduct = () => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [costPrice, setCostPrice] = useState('');
  const [marca, setMarca] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [productFiles, setProductFiles] = useState<(File | string)[]>([]);

  const navigate = useNavigate();

  const agregarProducto = async () => {
    // Validaciones (campos requeridos por el backend)
    if (!name.trim()) {
      toast.warning('El nombre del producto es obligatorio');
      return;
    }
    if (!price || Number(price) <= 0) {
      toast.warning('El precio debe ser mayor a 0');
      return;
    }
    if (!category) {
      toast.warning('Selecciona una categoría');
      return;
    }
    if (!description.trim()) {
      toast.warning('La descripción es obligatoria');
      return;
    }
    if (stock === '' || Number(stock) < 0) {
      toast.warning('El stock debe ser 0 o mayor');
      return;
    }

    try {
      // Crear producto
      const productoId = await crearProducto();

      if (!productoId) {
        throw new Error('No se pudo obtener el ID del producto');
      }

      // Subir imágenes solo si hay archivos
      if (productFiles.length > 0) {
        await subirImagenes(productoId);
      }

      toast.success("¡Producto agregado correctamente!");
      navigate(`/admin/apps/e-commerce/admin/products`);
    } catch (error: any) {
      console.error('Error:', error);
      toast.error(error.message || 'Hubo un error al crear el producto');
    }
  };

  const subirImagenes = async (productoId: string) => {
    try {
      const formData = new FormData();
      productFiles.forEach((file) => {
        formData.append('imagenes', file);
      });

      const response = await fetch(`${API_URL}/api/uploads/productos/${productoId}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'x-token': localStorage.getItem('token') ?? ''
        }
      });

      const data = await response.json();
      if (!data.ok) {
        throw new Error(data.msg || 'Error al subir imágenes');
      }
      return data;
    } catch (error: any) {
      console.error('Error al subir imágenes:', error);
      throw error;
    }
  };

  const crearProducto = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('No hay sesión activa. Por favor inicia sesión.');
      }

      // Preparar datos - convertir a números
      // El backend requiere: name, price, regularPrice, category, description
      const productData = {
        name: name.trim(),
        code: code.trim() || null,
        marca: marca.trim() || null,
        category: category,
        subcategory: subcategory || null,
        price: Number(price),             // Requerido
        regularPrice: Number(price),      // Requerido
        salePrice: Number(price),
        costPrice: costPrice ? Number(costPrice) : 0,
        description: description || 'Sin descripción',  // Requerido
        stock: Number(stock)
      };

      console.log('📦 Enviando producto:', productData);

      const response = await fetch(`${API_URL}/api/productos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': token
        },
        body: JSON.stringify(productData)
      });

      const data = await response.json();
      console.log('📨 Respuesta del servidor:', data);

      if (!response.ok) {
        // Mostrar mensaje específico del backend
        throw new Error(data.msg || data.message || `Error ${response.status}: ${response.statusText}`);
      }

      if (!data.ok) {
        throw new Error(data.msg || 'Error al crear producto');
      }

      const productoId = data.producto?.IdProduct;
      if (!productoId) {
        throw new Error('El servidor no devolvió el ID del producto');
      }

      return productoId;

    } catch (error: any) {
      console.error('⚠️ Error al crear producto:', error);
      throw error;
    }
  };
  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <form className="mb-9">
        <div className="d-flex flex-wrap gap-3 flex-between-end mb-5">
          <div>
            <h2 className="mb-2">Agregar Producto</h2>
            <h5 className="text-body-tertiary fw-semibold">
              Pedidos realizados en tu tienda
            </h5>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="phoenix-secondary" type="button">
              Descartar
            </Button>
            <Button variant="phoenix-primary" type="button">
              Guardar Borrador
            </Button>
            <Button variant="primary" type="button" onClick={(e) => {
              e.preventDefault(); // ← esto evita que el form se recargue
              agregarProducto();
            }}>
              Publicar Producto
            </Button>
          </div>
        </div>
        <Row className="g-5">
          <Col xs={12} xl={8}>
            <h4 className="mb-3">Titulo de Producto</h4>
            <Form.Control placeholder="Escribe el título aquí..." className="mb-5" value={name} onChange={e => setName(e.target.value)} />

            <h4 className="mb-3">Código de Producto</h4>
            <Form.Control placeholder="Escribe el código aquí..." className="mb-5" value={code} onChange={e => setCode(e.target.value)} />


            <div className="mb-6">
              <h4 className="mb-3">Descripción del Producto</h4>
              <TinymceEditor value={description} onChange={(content: string) => setDescription(content)}
                options={{
                  height: '15rem',
                  placeholder: 'Escribe una descripción aquí...'
                }}
              />
            </div>
            <div className="mb-5">
              <h4 className="mb-3">Mostrar imágenes</h4>
              <Dropzone
                className="mb-3"
                accept={{
                  'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                }}
                multiple={true}
                setPhotos={setProductFiles}
              />
            </div>
            <div>
              <h4 className="mb-3">Inventory</h4>
              {/* <InventoryTab /> */}
              <InventoryTab price={price} setPrice={setPrice} stock={stock} setStock={setStock} costPrice={costPrice} setCostPrice={setCostPrice} />
            </div>
          </Col>
          <Col xs={12} xl={4}>
            <Row className="g-2">
              <Col xs={12} xl={12}>
                <OrganizeFormCard
                  category={category}
                  setCategory={setCategory}
                  subcategory={subcategory}
                  setSubcategory={setSubcategory}
                  marca={marca}
                  setMarca={setMarca}
                  className="mb-3"
                />
              </Col>
              {/* <Col xs={12} xl={12}>
                <VariantFormCard />
              </Col> */}
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddProduct;
