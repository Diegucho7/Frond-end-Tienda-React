import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import Scrollbar from 'components/base/Scrollbar';
import QuantityButtons from 'components/common/QuantityButtons';
import { CartItemType } from 'data/e-commerce/products';
import { currencyFormat } from 'helpers/utils';
import { useMemo, useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_URL = import.meta.env.VITE_API_URL;

interface EcomCartTableProps {
  products: CartItemType[];
  onUpdateQuantity?: (productId: string | number, quantity: number) => void;
  onRemoveProduct?: (productId: string | number) => void;
}

const EcomCartTable = ({ products, onUpdateQuantity, onRemoveProduct }: EcomCartTableProps) => {
  // Calcular subtotal dinámicamente
  const subtotal = useMemo(() => {
    return products.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }, [products]);

  const itemCount = useMemo(() => {
    return products.reduce((acc, item) => acc + item.quantity, 0);
  }, [products]);

  if (products.length === 0) {
    return (
      <div className="text-center py-5">
        <div className="mb-3">
          <FontAwesomeIcon icon={faTrash} className="text-body-tertiary" style={{ fontSize: '3rem' }} />
        </div>
        <h5 className="text-body-tertiary">Tu carrito está vacío</h5>
        <p className="text-body-tertiary mb-0">
          <Link to="/products-filter">Explorar productos</Link>
        </p>
      </div>
    );
  }

  return (
    <Scrollbar style={{ maxHeight: '100%' }} className="table-scrollbar">
      <Table className="phoenix-table fs-9 mb-0 border-top border-translucent">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col" style={{ minWidth: 250 }}>
              PRODUCTO
            </th>
            <th className="text-end" scope="col" style={{ width: 120 }}>
              PRECIO
            </th>
            <th className="text-center" scope="col" style={{ width: 150 }}>
              CANTIDAD
            </th>
            <th className="text-end" scope="col" style={{ width: 120 }}>
              TOTAL
            </th>
            <th className="text-end pe-0" scope="col" style={{ width: 50 }} />
          </tr>
        </thead>
        <tbody className="list" id="cart-table-body">
          {products.map(product => (
            <EcomCartTableRow
              product={product}
              key={product.id}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveProduct={onRemoveProduct}
            />
          ))}

          <tr className="cart-table-row bg-body-highlight">
            <td
              className="text-body-emphasis fw-semibold ps-0 fs-8"
              colSpan={4}
            >
              Subtotal ({itemCount} {itemCount === 1 ? 'artículo' : 'artículos'}) :
            </td>
            <td className="text-body-emphasis fw-bold text-end fs-8">
              {currencyFormat(subtotal, { minimumFractionDigits: 2 })}
            </td>
            <td />
          </tr>
        </tbody>
      </Table>
    </Scrollbar>
  );
};

interface EcomCartTableRowProps {
  product: CartItemType;
  onUpdateQuantity?: (productId: string | number, quantity: number) => void;
  onRemoveProduct?: (productId: string | number) => void;
}

const EcomCartTableRow = ({ product, onUpdateQuantity, onRemoveProduct }: EcomCartTableRowProps) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [isUpdating, setIsUpdating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const initialQuantityRef = useRef(product.quantity);

  // Sincronizar con props cuando cambie externamente
  useEffect(() => {
    setQuantity(product.quantity);
    initialQuantityRef.current = product.quantity;
  }, [product.quantity]);

  const total = useMemo(() => {
    return product.price * quantity;
  }, [product.price, quantity]);

  // Actualizar cantidad en el backend cuando cambie
  useEffect(() => {
    // No actualizar si es el valor inicial o si es menor a 1
    if (quantity === initialQuantityRef.current || quantity < 1) return;

    const timeoutId = setTimeout(async () => {
      setIsUpdating(true);
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/api/shoppingcart/${String(product.IdCart)}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-token': token || '',
          },
          body: JSON.stringify({ quantity }),
        });

        if (response.ok) {
          initialQuantityRef.current = quantity;
          onUpdateQuantity?.(product.id, quantity);
        } else {
          toast.error('Error al actualizar cantidad');
          setQuantity(initialQuantityRef.current); // Revertir
        }
      } catch (error) {
        console.error('Error updating quantity:', error);
        toast.error('Error al actualizar cantidad');
        setQuantity(initialQuantityRef.current); // Revertir
      } finally {
        setIsUpdating(false);
      }
    }, 800); // Debounce de 800ms

    return () => clearTimeout(timeoutId);
  }, [quantity, product.IdCart, product.id, onUpdateQuantity]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/shoppingcart/${String(product.IdCart)}`, {
        method: 'DELETE',
        headers: {
          'x-token': token || '',
        },
      });

      if (response.ok) {
        toast.success('Producto eliminado del carrito');
        onRemoveProduct?.(product.id);
        // Recargar para actualizar la lista
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        toast.error('Error al eliminar producto');
        setIsDeleting(false);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Error al eliminar producto');
      setIsDeleting(false);
    }
  };

  return (
    <tr className={`cart-table-row ${isDeleting ? 'opacity-50' : ''}`}>
      <td className="py-2">
        <Link to={`/product-details/${product.id}`}>
          <div className="border border-translucent rounded-2 overflow-hidden" style={{ width: 60, height: 60 }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/placeholder-product.png';
              }}
            />
          </div>
        </Link>
      </td>
      <td>
        <Link
          className="fw-semibold line-clamp-2 text-decoration-none"
          to={`/product-details/${product.id}`}
        >
          {product.name}
        </Link>
        {product.color && product.color !== 'white' && (
          <small className="text-body-tertiary d-block">Color: {product.color}</small>
        )}
        {product.size && product.size !== 'small' && (
          <small className="text-body-tertiary d-block">Talla: {product.size}</small>
        )}
      </td>
      <td className="fw-semibold text-end">
        {currencyFormat(product.price, { minimumFractionDigits: 2 })}
      </td>
      <td className="text-center">
        <div className="d-flex justify-content-center">
          <QuantityButtons
            type="secondary"
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
        {isUpdating && (
          <small className="text-body-tertiary">Actualizando...</small>
        )}
      </td>
      <td className="fw-bold text-body-highlight text-end">
        {currencyFormat(total, { minimumFractionDigits: 2 })}
      </td>
      <td className="text-end ps-2">
        <Button
          size="sm"
          variant="link"
          className="text-danger p-0"
          onClick={handleDelete}
          disabled={isDeleting}
          title="Eliminar del carrito"
        >
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </td>
    </tr>
  );
};

export default EcomCartTable;
