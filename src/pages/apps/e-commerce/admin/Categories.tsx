import { useState, useEffect } from 'react';
import {
    Card,
    Col,
    Row,
    Button,
    Table,
    Modal,
    Form,
    Badge,
    Accordion,
    Spinner
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faEdit,
    faTrash,
    faLink,
    faUnlink,
    faChevronDown,
    faChevronRight,
    faFolder,
    faFolderOpen
} from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import PageBreadcrumb from 'components/common/PageBreadcrumb';

const API_URL = import.meta.env.VITE_API_URL;

interface Subcategoria {
    id: string;
    nombre: string;
}

interface Categoria {
    IdCategory: string;
    name: string;
    subcategorias: Subcategoria[];
}

const Categories = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [allSubcategorias, setAllSubcategorias] = useState<Subcategoria[]>([]);
    const [loading, setLoading] = useState(true);
    const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

    // Modales
    const [showCategoryModal, setShowCategoryModal] = useState(false);
    const [showSubcategoryModal, setShowSubcategoryModal] = useState(false);
    const [showRelateModal, setShowRelateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Formularios
    const [categoryForm, setCategoryForm] = useState({ id: '', name: '' });
    const [subcategoryForm, setSubcategoryForm] = useState({ id: '', nombre: '', idCategoria: '' });
    const [relateForm, setRelateForm] = useState({ idCategoria: '', idSubcategoria: '' });
    const [deleteTarget, setDeleteTarget] = useState<{ type: 'category' | 'subcategory' | 'relation'; id: string; name: string; categoryId?: string } | null>(null);

    // Estados de carga
    const [saving, setSaving] = useState(false);

    // Breadcrumb
    const breadcrumbItems = [
        { label: 'Admin', url: '/admin' },
        { label: 'Categorías', active: true }
    ];

    // Cargar datos
    const loadData = async () => {
        setLoading(true);
        try {
            const [catRes, subRes] = await Promise.all([
                fetch(`${API_URL}/api/categorias`),
                fetch(`${API_URL}/api/categorias/subcategorias/todas`)
            ]);

            const catData = await catRes.json();
            const subData = await subRes.json();

            if (catData.ok) {
                // Filtrar subcategorías null y asegurar que sea un array
                const categoriasLimpias = catData.categorias.map((cat: Categoria) => ({
                    ...cat,
                    subcategorias: Array.isArray(cat.subcategorias) 
                        ? cat.subcategorias.filter((sub: Subcategoria) => sub && sub.id)
                        : []
                }));
                setCategorias(categoriasLimpias);
            }
            if (subData.ok) {
                setAllSubcategorias(subData.subcategorias || []);
            }
        } catch (error) {
            console.error('Error cargando datos:', error);
            toast.error('Error al cargar los datos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadData();
    }, []);

    // ==================== CATEGORÍAS ====================

    const handleOpenCategoryModal = (categoria?: Categoria) => {
        if (categoria) {
            setCategoryForm({ id: categoria.IdCategory, name: categoria.name });
        } else {
            setCategoryForm({ id: '', name: '' });
        }
        setShowCategoryModal(true);
    };

    const handleSaveCategory = async () => {
        if (!categoryForm.name.trim()) {
            toast.warning('El nombre es obligatorio');
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const isEdit = !!categoryForm.id;

            const response = await fetch(
                `${API_URL}/api/categorias${isEdit ? `/${categoryForm.id}` : ''}`,
                {
                    method: isEdit ? 'PUT' : 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token || ''
                    },
                    body: JSON.stringify({ name: categoryForm.name })
                }
            );

            const data = await response.json();

            if (data.ok || response.ok) {
                toast.success(isEdit ? 'Categoría actualizada' : 'Categoría creada');
                setShowCategoryModal(false);
                loadData();
            } else {
                toast.error(data.msg || 'Error al guardar');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al guardar la categoría');
        } finally {
            setSaving(false);
        }
    };

    // ==================== SUBCATEGORÍAS ====================

    const handleOpenSubcategoryModal = (idCategoria: string, subcategoria?: Subcategoria) => {
        if (subcategoria) {
            setSubcategoryForm({ id: subcategoria.id, nombre: subcategoria.nombre, idCategoria });
        } else {
            setSubcategoryForm({ id: '', nombre: '', idCategoria });
        }
        setShowSubcategoryModal(true);
    };

    const handleSaveSubcategory = async () => {
        if (!subcategoryForm.nombre.trim()) {
            toast.warning('El nombre es obligatorio');
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const isEdit = !!subcategoryForm.id;

            let response;
            if (isEdit) {
                response = await fetch(`${API_URL}/api/categorias/subcategoria/${subcategoryForm.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token || ''
                    },
                    body: JSON.stringify({
                        name: subcategoryForm.nombre,
                        categoryId: subcategoryForm.idCategoria
                    })
                });
            } else {
                response = await fetch(`${API_URL}/api/categorias/subcategoria`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-token': token || ''
                    },
                    body: JSON.stringify({
                        nombre: subcategoryForm.nombre,
                        idCategoria: subcategoryForm.idCategoria
                    })
                });
            }

            const data = await response.json();

            if (data.ok || response.ok) {
                toast.success(isEdit ? 'Subcategoría actualizada' : 'Subcategoría creada');
                setShowSubcategoryModal(false);
                loadData();
            } else {
                toast.error(data.msg || 'Error al guardar');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al guardar la subcategoría');
        } finally {
            setSaving(false);
        }
    };

    // ==================== RELACIONAR ====================

    const handleOpenRelateModal = (idCategoria: string) => {
        setRelateForm({ idCategoria, idSubcategoria: '' });
        setShowRelateModal(true);
    };

    const handleRelateSubcategory = async () => {
        if (!relateForm.idSubcategoria) {
            toast.warning('Selecciona una subcategoría');
            return;
        }

        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${API_URL}/api/categorias/relacionar`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-token': token || ''
                },
                body: JSON.stringify({
                    idCategoria: relateForm.idCategoria,
                    idSubcategoria: relateForm.idSubcategoria
                })
            });

            const data = await response.json();

            if (data.ok) {
                toast.success('Subcategoría relacionada');
                setShowRelateModal(false);
                loadData();
            } else {
                toast.error(data.msg || 'Error al relacionar');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al relacionar');
        } finally {
            setSaving(false);
        }
    };

    // ==================== ELIMINAR ====================

    const handleOpenDeleteModal = (type: 'category' | 'subcategory' | 'relation', id: string, name: string, categoryId?: string) => {
        setDeleteTarget({ type, id, name, categoryId });
        setShowDeleteModal(true);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;

        setSaving(true);
        try {
            const token = localStorage.getItem('token');
            let url = '';

            switch (deleteTarget.type) {
                case 'category':
                    url = `${API_URL}/api/categorias/${deleteTarget.id}`;
                    break;
                case 'subcategory':
                    url = `${API_URL}/api/categorias/subcategoria/${deleteTarget.id}`;
                    break;
                case 'relation':
                    url = `${API_URL}/api/categorias/${deleteTarget.categoryId}/subcategoria/${deleteTarget.id}`;
                    break;
            }

            const response = await fetch(url, {
                method: 'DELETE',
                headers: { 'x-token': token || '' }
            });

            const data = await response.json();

            if (data.ok || response.ok) {
                const messages = {
                    category: 'Categoría eliminada',
                    subcategory: 'Subcategoría eliminada',
                    relation: 'Relación eliminada'
                };
                toast.success(messages[deleteTarget.type]);
                setShowDeleteModal(false);
                loadData();
            } else {
                toast.error(data.msg || 'Error al eliminar');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('Error al eliminar');
        } finally {
            setSaving(false);
            setDeleteTarget(null);
        }
    };

    // Obtener subcategorías disponibles para relacionar
    const getAvailableSubcategorias = (categoryId: string) => {
        const categoria = categorias.find(c => c.IdCategory === categoryId);
        const relacionadas = categoria?.subcategorias.map(s => s.id) || [];
        return allSubcategorias.filter(s => !relacionadas.includes(s.id));
    };

    if (loading) {
        return (
            <div className="text-center py-5">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3 text-body-tertiary">Cargando categorías...</p>
            </div>
        );
    }

    return (
        <div>
            <PageBreadcrumb items={breadcrumbItems} />

            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="mb-0">Gestión de Categorías</h2>
                <Button variant="primary" onClick={() => handleOpenCategoryModal()}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Nueva Categoría
                </Button>
            </div>

            <Row>
                <Col lg={8}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Categorías y Subcategorías</h5>
                        </Card.Header>
                        <Card.Body className="p-0">
                            {categorias.length === 0 ? (
                                <div className="text-center py-5">
                                    <p className="text-body-tertiary mb-3">No hay categorías</p>
                                    <Button variant="primary" size="sm" onClick={() => handleOpenCategoryModal()}>
                                        Crear primera categoría
                                    </Button>
                                </div>
                            ) : (
                                <Accordion activeKey={expandedCategory || undefined}>
                                    {categorias.map((categoria) => (
                                        <Accordion.Item eventKey={categoria.IdCategory} key={categoria.IdCategory}>
                                            <Accordion.Header
                                                onClick={() => setExpandedCategory(
                                                    expandedCategory === categoria.IdCategory ? null : categoria.IdCategory
                                                )}
                                            >
                                                <div className="d-flex align-items-center justify-content-between w-100 me-3">
                                                    <div className="d-flex align-items-center">
                                                        <FontAwesomeIcon
                                                            icon={expandedCategory === categoria.IdCategory ? faFolderOpen : faFolder}
                                                            className="text-warning me-2"
                                                        />
                                                        <span className="fw-semibold">{categoria.name}</span>
                                                        <Badge bg="secondary" className="ms-2">
                                                            {categoria.subcategorias.length} subcategorías
                                                        </Badge>
                                                    </div>
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body className="p-0">
                                                {/* Acciones de la categoría */}
                                                <div className="d-flex gap-2 p-3 bg-body-secondary border-bottom">
                                                    <Button
                                                        size="sm"
                                                        variant="outline-primary"
                                                        onClick={() => handleOpenCategoryModal(categoria)}
                                                    >
                                                        <FontAwesomeIcon icon={faEdit} className="me-1" />
                                                        Editar
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline-success"
                                                        onClick={() => handleOpenSubcategoryModal(categoria.IdCategory)}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} className="me-1" />
                                                        Nueva Subcategoría
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline-info"
                                                        onClick={() => handleOpenRelateModal(categoria.IdCategory)}
                                                        disabled={getAvailableSubcategorias(categoria.IdCategory).length === 0}
                                                    >
                                                        <FontAwesomeIcon icon={faLink} className="me-1" />
                                                        Relacionar Existente
                                                    </Button>
                                                    <Button
                                                        size="sm"
                                                        variant="outline-danger"
                                                        onClick={() => handleOpenDeleteModal('category', categoria.IdCategory, categoria.name)}
                                                    >
                                                        <FontAwesomeIcon icon={faTrash} className="me-1" />
                                                        Eliminar
                                                    </Button>
                                                </div>

                                                {/* Lista de subcategorías */}
                                                {categoria.subcategorias.length === 0 ? (
                                                    <div className="text-center py-4 text-body-tertiary">
                                                        <small>No hay subcategorías en esta categoría</small>
                                                    </div>
                                                ) : (
                                                    <Table hover className="mb-0">
                                                        <thead>
                                                            <tr>
                                                                <th>Subcategoría</th>
                                                                <th className="text-end" style={{ width: 200 }}>Acciones</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {categoria.subcategorias.map((sub) => (
                                                                <tr key={sub.id}>
                                                                    <td>
                                                                        <FontAwesomeIcon icon={faChevronRight} className="text-body-tertiary me-2" />
                                                                        {sub.nombre}
                                                                    </td>
                                                                    <td className="text-end">
                                                                        <Button
                                                                            size="sm"
                                                                            variant="link"
                                                                            className="text-primary p-1"
                                                                            title="Editar"
                                                                            onClick={() => handleOpenSubcategoryModal(categoria.IdCategory, sub)}
                                                                        >
                                                                            <FontAwesomeIcon icon={faEdit} />
                                                                        </Button>
                                                                        <Button
                                                                            size="sm"
                                                                            variant="link"
                                                                            className="text-warning p-1"
                                                                            title="Quitar de esta categoría"
                                                                            onClick={() => handleOpenDeleteModal('relation', sub.id, sub.nombre, categoria.IdCategory)}
                                                                        >
                                                                            <FontAwesomeIcon icon={faUnlink} />
                                                                        </Button>
                                                                        <Button
                                                                            size="sm"
                                                                            variant="link"
                                                                            className="text-danger p-1"
                                                                            title="Eliminar subcategoría"
                                                                            onClick={() => handleOpenDeleteModal('subcategory', sub.id, sub.nombre)}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrash} />
                                                                        </Button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </Table>
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    ))}
                                </Accordion>
                            )}
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card>
                        <Card.Header>
                            <h5 className="mb-0">Todas las Subcategorías</h5>
                        </Card.Header>
                        <Card.Body>
                            {allSubcategorias.length === 0 ? (
                                <p className="text-body-tertiary text-center mb-0">No hay subcategorías</p>
                            ) : (
                                <div className="d-flex flex-wrap gap-2">
                                    {allSubcategorias.map((sub) => (
                                        <Badge key={sub.id} bg="light" text="dark" className="px-3 py-2">
                                            {sub.nombre}
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </Card.Body>
                    </Card>

                    <Card className="mt-4">
                        <Card.Header>
                            <h5 className="mb-0">Resumen</h5>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-between mb-2">
                                <span>Total Categorías:</span>
                                <strong>{categorias.length}</strong>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Total Subcategorías:</span>
                                <strong>{allSubcategorias.length}</strong>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Modal Categoría */}
            <Modal show={showCategoryModal} onHide={() => setShowCategoryModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{categoryForm.id ? 'Editar' : 'Nueva'} Categoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nombre de la categoría</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Tecnología, Ropa, Hogar..."
                            value={categoryForm.name}
                            onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
                            autoFocus
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowCategoryModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveCategory} disabled={saving}>
                        {saving ? <Spinner size="sm" /> : 'Guardar'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Subcategoría */}
            <Modal show={showSubcategoryModal} onHide={() => setShowSubcategoryModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{subcategoryForm.id ? 'Editar' : 'Nueva'} Subcategoría</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Nombre de la subcategoría</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ej: Smartphones, Camisetas, Cocina..."
                            value={subcategoryForm.nombre}
                            onChange={(e) => setSubcategoryForm({ ...subcategoryForm, nombre: e.target.value })}
                            autoFocus
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowSubcategoryModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleSaveSubcategory} disabled={saving}>
                        {saving ? <Spinner size="sm" /> : 'Guardar'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Relacionar */}
            <Modal show={showRelateModal} onHide={() => setShowRelateModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Relacionar Subcategoría Existente</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Selecciona una subcategoría</Form.Label>
                        <Form.Select
                            value={relateForm.idSubcategoria}
                            onChange={(e) => setRelateForm({ ...relateForm, idSubcategoria: e.target.value })}
                        >
                            <option value="">Seleccionar...</option>
                            {getAvailableSubcategorias(relateForm.idCategoria).map((sub) => (
                                <option key={sub.id} value={sub.id}>{sub.nombre}</option>
                            ))}
                        </Form.Select>
                        <Form.Text className="text-muted">
                            Solo se muestran subcategorías que no están relacionadas con esta categoría.
                        </Form.Text>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowRelateModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={handleRelateSubcategory} disabled={saving}>
                        {saving ? <Spinner size="sm" /> : 'Relacionar'}
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Modal Eliminar */}
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmar Eliminación</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {deleteTarget && (
                        <p>
                            ¿Estás seguro de que deseas{' '}
                            {deleteTarget.type === 'relation' ? 'quitar la relación de' : 'eliminar'}{' '}
                            <strong>{deleteTarget.name}</strong>?
                            {deleteTarget.type === 'category' && (
                                <span className="text-danger d-block mt-2">
                                    ⚠️ Esto también eliminará todas las relaciones con subcategorías.
                                </span>
                            )}
                            {deleteTarget.type === 'subcategory' && (
                                <span className="text-danger d-block mt-2">
                                    ⚠️ Esto eliminará la subcategoría de todas las categorías donde esté relacionada.
                                </span>
                            )}
                        </p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete} disabled={saving}>
                        {saving ? <Spinner size="sm" /> : 'Eliminar'}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Categories;

