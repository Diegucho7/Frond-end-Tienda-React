import Button from 'components/base/Button';
import Dropzone from 'components/base/Dropzone';
import TinymceEditor from 'components/base/TinymceEditor';
import OrganizeFormCard from 'components/cards/OrganizeFormCard';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import InventoryTab from 'components/tabs/InventoryTab';
import { defaultBreadcrumbItems } from 'data/commonData';
import { Col, Form, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router';
const EditProduct = () => {
    const { id: productId } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [marca, setMarca] = useState('');
    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [subcategory, setSubcategory] = useState('');
    const [productFiles, setProductFiles] = useState<(File | string)[]>([]);
    const API_URL = import.meta.env.VITE_API_URL;

    const parseJsonSafely = async (response: Response) => {
        const text = await response.text();
        const isJson = response.headers.get('content-type')?.includes('application/json');
        try {
            return isJson ? JSON.parse(text || '{}') : null;
        } catch {
            console.error('Respuesta no es JSON válido:', text);
            return null;
        }
    };
    useEffect(() => {
        const cargarDatosProducto = async () => {
            try {
                // ✅ Cargar producto desde el backend
                const { products } = await cargarProducto();
                const producto = products[0]; // obtener el primer producto del array

                // ✅ Actualizar los estados
                setName(producto.name || '');
                setDescription(producto.description || '');
                setPrice(producto.price?.toString() || '');
                setStock(producto.stock?.toString() || '');
                setMarca(producto.marca || '');
                setCode(producto.code || '');
                setCategory(producto.category || '');
                setSubcategory(producto.subcategory || '');
                setProductFiles(producto.imagenes || []);

            } catch (error: any) {
                console.error('Error al cargar producto:', error);
                toast.error('Error al cargar los datos del producto');
            }
        };

        if (productId) {
            cargarDatosProducto();
        }
    }, [productId]);
    const subirImagenes = async (productoId: string) => {
        if (!productoId) throw new Error('Producto sin id');

        // Filtrar solo archivos nuevos (File), no URLs existentes (string)
        const archivosNuevos = productFiles.filter((file): file is File => file instanceof File);

        // Si no hay archivos nuevos, no hacer nada
        if (archivosNuevos.length === 0) {
            console.log('No hay imágenes nuevas para subir');
            return { ok: true, msg: 'No hay imágenes nuevas para subir' };
        }

        console.log('Subiendo', archivosNuevos.length, 'imágenes nuevas');

        const formData = new FormData();
        // Agregar cada archivo con el nombre 'imagenes'
        for (const file of archivosNuevos) {
            formData.append('imagenes', file, file.name);
        }

        const token = localStorage.getItem('token') ?? '';

        const response = await fetch(`${API_URL}/api/uploads/productos/${productoId}`, {
            method: 'PUT',
            body: formData,
            headers: {
                'x-token': token,
                // NO establecer Content-Type - el navegador lo hace automáticamente con el boundary
            },
        });

        const data = (await parseJsonSafely(response)) ?? {
            ok: false,
            msg: 'El backend no devolvió JSON (revisa los logs)',
        };

        if (!response.ok || !data.ok) {
            throw new Error(data.msg || `Error al subir imágenes (${response.status})`);
        }

        return data;
    };

    const editProducto = async () => {
        if (!productId) {
            toast.error('No se pudo determinar el ID del producto');
            return;
        }

        try {
            // 1. Actualizar datos del producto
            const response = await fetch(`${API_URL}/api/productos/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': localStorage.getItem('token') ?? '',
                },
                body: JSON.stringify({
                    IdProduct: productId,
                    name,
                    code,
                    marca,
                    category,
                    subcategory,
                    price: Number(price),
                    regularPrice: Number(price),
                    salePrice: Number(price),
                    description: description || 'Sin descripción',
                    stock: Number(stock),
                }),
            });

            const data = (await parseJsonSafely(response)) ?? {
                ok: false,
                msg: 'El backend no devolvió JSON (revisa los logs)',
            };

            if (!response.ok || !data.ok) {
                toast.error(data.msg || `Error al editar producto (${response.status})`);
                return;
            }

            // 2. Subir imágenes nuevas (si las hay)
            try {
                await subirImagenes(productId);
            } catch (imgError: any) {
                console.warn('Error al subir imágenes:', imgError.message);
                // No fallar todo si solo fallan las imágenes
                toast.warning('Producto actualizado, pero hubo un error con las imágenes');
                return;
            }

            toast.success('¡Producto actualizado correctamente!');
            console.log('✅ Producto actualizado correctamente:', data);

        } catch (error: any) {
            console.error('Error al editar producto:', error);
            toast.error(error.message || 'Error al actualizar el producto');
        }
    };

    const cargarProducto = async () => {
        if (!productId) {
            throw new Error('No se pudo determinar el ID del producto');
        }

        const response = await fetch(`${API_URL}/api/productos/${productId}`, {
            method: 'GET',
            headers: {
                'x-token': localStorage.getItem('token') ?? ''
            }
        });
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.msg || 'Producto no encontrado');
        }
        return data;
    };

    return (
        <div>
            <PageBreadcrumb items={defaultBreadcrumbItems} />
            <form className="mb-9">
                <div className="d-flex flex-wrap gap-3 flex-between-end mb-5">
                    <div>
                        <h2 className="mb-2">Actualizar Producto</h2>
                        <h5 className="text-body-tertiary fw-semibold">
                            Orders placed across your store
                        </h5>
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                        <Button
                            variant="phoenix-secondary"
                            type="button"
                            onClick={() => navigate('/admin/apps/e-commerce/admin/products')}
                        >
                            Descartar
                        </Button>
                        {/* <Button variant="phoenix-primary" type="button">
                            Save draft
                        </Button> */}
                        <Button variant="primary" type="button" onClick={(e) => {
                            e.preventDefault(); // ← esto evita que el form se recargue
                            editProducto();
                        }}>
                            Editar Producto
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
                                defaultFiles={productFiles}
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
                        </Row>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default EditProduct;
