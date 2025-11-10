import { useEffect, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router';

interface Categoria {
  IdCategory: string;
  name: string;
}

const OrganizeFormCard = ({ category, setCategory, className }: { category: string; setCategory: (value: string) => void; className?: string }) => {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    const cargarCategorias = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/categorias', {
          method: 'GET',
          headers: {
            'x-token': localStorage.getItem('accessToken') ?? ''
          }
        });

        const data = await response.json();
        console.log('Respuesta completa:', data);

        // ✅ si la API devuelve un array directamente
        if (Array.isArray(data)) {
          setCategorias(data);
        } else if (data.categorias) {
          // por si acaso el backend cambia la estructura
          setCategorias(data.categorias);
        } else {
          throw new Error('Formato de respuesta inesperado');
        }
      } catch (error) {
        console.error('Error al cargar categorías:', error);
      }
    };

    cargarCategorias();
  }, []);
  return (
    <Card className={className}>
      <Card.Body>
        <h4 className="mb-4">Organizar</h4>
        <Row className="gx-3 gy-4">
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
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
            >
              <option value="">Seleccione una categoría</option>
              {categorias.map((cat) => (
                <option key={cat.IdCategory} value={cat.IdCategory}>
                  {cat.name}
                </option>
              ))}
            </Form.Select>
            {/* <Form.Select aria-label="category">
              <option value="men-cloth">Hola</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select> */}
          </Col>
          <Col xs={12} sm={6} xl={12}>
            <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-body-highlight">Sub Categoría</h5>
              <Link className="fw-bold fs-9" to="#!">
                Agregar Sub Categoría
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Hombre</option>
              <option value="women-cloth">Mujer</option>
              <option value="kid-cloth">Niños</option>
            </Form.Select>
          </Col>
          {/* <Col xs={12} sm={6} xl={12}>
            <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-2 text-body-highlight">Collection</h5>
              <Link className="fw-bold fs-9" to="#!">
                Add new collection
              </Link>
            </div>
            <Form.Control placeholder="Collection" />
          </Col> */}
          {/* <Col xs={12} sm={6} xl={12}>
            <div className="d-flex flex-wrap flex-between-center gap-2 mb-2">
              <h5 className="mb-0 text-body-highlight">Tags</h5>
              <Link className="fw-bold fs-9 lh-sm" to="#!">
                View all tags
              </Link>
            </div>
            <Form.Select aria-label="vendor">
              <option value="men-cloth">Men's Clothing</option>
              <option value="women-cloth">Womens's Clothing</option>
              <option value="kid-cloth">Kid's Clothing</option>
            </Form.Select>
          </Col> */}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default OrganizeFormCard;
