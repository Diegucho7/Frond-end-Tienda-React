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

  const [marca, setMarca] = useState('');
  const [code, setCode] = useState('');
  const [category, setCategory] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const agregarProducto = async () => {
    console.log('Datos enviados:', {
      name,
      code: 'justcode',
      marca: 'marca',
      category: '82fa7496-dc5b-11ef-93cc-9c81b2f8c3e7',
      price,
      description
    });
    console.log('Agregando producto...');
    try {
      const response = await fetch('http://localhost:3000/api/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-token': localStorage.getItem('accessToken') ?? '',
        },
        body: JSON.stringify({
          name,
          code,
          marca: 'marca',
          category: '82fa7496-dc5b-11ef-93cc-9c81b2f8c3e7',
          price,
          description,
          stock
        }),
      });


      const productData = {
        name,
        code,
        description,
        price,
        stock
      };

      console.log(productData);
      console.log('Datos enviados:', {
        name,
        code,
        marca: 'marca',
        category: '82fa7496-dc5b-11ef-93cc-9c81b2f8c3e7',
        price,
        description,
        stock: 100
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Error al agregar el producto');
      }

      const data = await response.json();
      console.log('Producto agregado:', data);

    } catch (err: any) {

      console.error('Error completo:', err);
      console.error('Error message:', err.message);
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
