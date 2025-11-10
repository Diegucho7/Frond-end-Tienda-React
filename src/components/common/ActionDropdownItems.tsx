import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

interface Props {
  productId: string;
  onDelete?: () => void; // opcional, el padre puede pasar una función para refrescar la lista
}

const ActionDropdownItems = ({ productId, onDelete }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!window.confirm('¿Seguro que deseas eliminar este producto?')) return;

    try {
      setLoading(true);

      const response = await fetch(`http://localhost:3000/api/productos/${productId}`, {
        method: 'DELETE',
        headers: {
          'x-token': localStorage.getItem('accessToken') ?? ''
        }
      });

      // algunos endpoints devuelven 204 No Content (sin JSON). Lo manejamos:
      let data: any = { ok: response.ok };
      if (response.headers.get('content-type')?.includes('application/json')) {
        data = await response.json();
      }

      console.log('Respuesta al eliminar:', data);

      if (!response.ok || (data && data.ok === false)) {
        throw new Error(data?.msg || 'Error al eliminar el producto');
      }

      alert('✅ Producto eliminado correctamente');

      // callback para que el padre actualice la lista (si lo pasó)
      if (onDelete) onDelete();
    } catch (error: any) {
      console.error('⚠️ Error al eliminar producto:', error);
      alert(error?.message || 'Error al eliminar el producto');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dropdown.Item eventKey="1">Ver</Dropdown.Item>
      <Dropdown.Item eventKey="2">Exportar</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item
        eventKey="4"
        className="text-danger"
        onClick={handleDelete}           // ← aquí llamas a handleDelete
        disabled={loading}              // opcional: deshabilitar mientras elimina
      >
        {loading ? 'Eliminando...' : 'Eliminar'}
      </Dropdown.Item>
    </>
  );
};

export default ActionDropdownItems;
