import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import TinymceEditor from 'components/base/TinymceEditor';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import VariantFormCard from 'components/cards/VariantFormCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import InventoryTab from 'components/tabs/InventoryTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface Props {
  value: string;
  onChange: (value: string) => void;
  options?: any;
}
const AddProduct = () => {


  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [regularPrice, setRegularPrice] = useState('');
  const [marca, setMarca] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [productFiles, setProductFiles] = useState<File[]>([]);

  const agregarProducto = async () => {
    try {
      // 1️⃣ Crear producto
      const productoId = await crearProducto();

      // 2️⃣ Subir imágenes solo si hay archivos
      if (productFiles.length > 0) {
        await subirImagenes(productoId);
      }

      alert('Producto y sus imágenes se subieron correctamente');
    } catch (error: any) {
      alert('Error al subir producto: ' + error.message);
    }
  };

  const subirImagenes = async (productoId: string) => {
    try {
      const formData = new FormData();
      productFiles.forEach((file) => {
        formData.append('imagenes', file);
      });

      const response = await fetch(`http://localhost:3000/api/uploads/productos/${productoId}`, {
        method: 'PUT',
        body: formData,
        headers: {
          'x-token': localStorage.getItem('accessToken') ?? ''
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
      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': localStorage.getItem('accessToken') ?? ''
        },
        body: JSON.stringify({
          name,
          code,
          marca: "Maers34",
          category: '82fa7496-dc5b-11ef-93cc-9c81b2f8c3e7',
          price,
          regularPrice: 3,
          description,
          stock
        })
      });

      const data = await response.json(); // ✅ solo una vez
      console.log('Respuesta bruta del backend:', data);

      if (!response.ok || !data.ok) {
        throw new Error(data.msg || 'Error al crear producto');
      }

      const productoId = data.producto?.IdProduct;
      console.log('🆔 ID del producto creado:', productoId);
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
              Orders placed across your store
            </h5>
          </div>
          <div className="d-flex flex-wrap gap-2">
            <Button variant="phoenix-secondary" type="button">
              Discard
            </Button>
            <Button variant="phoenix-primary" type="button">
              Save draft
            </Button>
            <Button variant="primary" type="button" onClick={(e) => {
              e.preventDefault(); // ← esto evita que el form se recargue
              agregarProducto();
            }}>
              Publish product
            </Button>
          </div>
        </div>
        <Row className="g-5">
          <Col xs={12} xl={8}>
            <h4 className="mb-3">Product Title</h4>
            <Form.Control placeholder="Write title here..." className="mb-5" value={name} onChange={e => setName(e.target.value)} />

            <h4 className="mb-3">Product Code</h4>
            <Form.Control placeholder="Write code here..." className="mb-5" value={code} onChange={e => setCode(e.target.value)} />


            <div className="mb-6">
              <h4 className="mb-3">Product Description</h4>
              <TinymceEditor value={description} onChange={(content: string) => setDescription(content)}
                options={{
                  height: '15rem',
                  placeholder: 'Write a description here...'
                }}
              />
            </div>
            <div className="mb-5">
              <h4 className="mb-3">Display images</h4>
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
              <InventoryTab price={price} setPrice={setPrice} stock={stock} setStock={setStock} />
            </div>
          </Col>
          <Col xs={12} xl={4}>
            <Row className="g-2">
              <Col xs={12} xl={12}>
                <OrganizeFormCard className="mb-3" />
              </Col>
              <Col xs={12} xl={12}>
                <VariantFormCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default AddProduct;
