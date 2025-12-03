import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { currencyFormat } from 'helpers/utils';
import { useState, useMemo } from 'react';
import { Button, Card, Form, Stack } from 'react-bootstrap';
import { Link } from 'react-router';

export interface BoughtTogetherProduct {
  id: string;
  name: string;
  price: number;
  img: string;
  checked?: boolean;
}

const ProductListItem = ({
  product,
  onToggle
}: {
  product: BoughtTogetherProduct;
  onToggle: (id: string, checked: boolean) => void;
}) => {
  const [checked, setChecked] = useState(product.checked ?? true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
    onToggle(product.id, e.target.checked);
  };

  return (
    <div className="d-flex align-items-center">
      <Form.Check
        checked={checked}
        className="me-2"
        onChange={handleChange}
      />
      <img
        className="border border-translucent rounded"
        src={product.img}
        width="53"
        alt={product.name}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <div className="ms-2 flex-grow-1">
        <Link
          className="fs-9 fw-bold line-clamp-2 mb-2 text-decoration-none"
          to={`/product-details/${product.id}`}
        >
          {product.name}
        </Link>
        <h5 className="mb-0">{currencyFormat(product.price)}</h5>
      </div>
    </div>
  );
};

interface UsuallyBoughtTogetherCardProps {
  className?: string;
  products: BoughtTogetherProduct[];
  currentProductName?: string;
  onAddToCart?: (products: BoughtTogetherProduct[]) => void;
}

const UsuallyBoughtTogetherCard = ({
  className,
  products,
  currentProductName,
  onAddToCart
}: UsuallyBoughtTogetherCardProps) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(
    new Set(products.map(p => p.id))
  );

  const handleToggle = (id: string, checked: boolean) => {
    setSelectedIds(prev => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(id);
      } else {
        newSet.delete(id);
      }
      return newSet;
    });
  };

  const { total, selectedCount, selectedProducts } = useMemo(() => {
    const selected = products.filter(p => selectedIds.has(p.id));
    return {
      total: selected.reduce((sum, p) => sum + p.price, 0),
      selectedCount: selected.length,
      selectedProducts: selected
    };
  }, [products, selectedIds]);

  const handleAddToCart = () => {
    if (onAddToCart && selectedProducts.length > 0) {
      onAddToCart(selectedProducts);
    }
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <Card className={className}>
      <Card.Body>
        <h5 className="text-body-emphasis">Frecuentemente comprados juntos</h5>
        {currentProductName && (
          <div className="w-75">
            <p className="text-body-tertiary fs-9 fw-bold line-clamp-2">
              junto con {currentProductName}
            </p>
          </div>
        )}
        <Stack className="border-dashed border-y border-translucent py-4 gap-4 mb-3">
          {products.map(product => (
            <ProductListItem
              product={product}
              key={product.id}
              onToggle={handleToggle}
            />
          ))}
        </Stack>
        <div className="d-flex align-items-end justify-content-between">
          <div>
            <h5 className="mb-2 text-body-tertiary text-opacity-85">Total</h5>
            <h4 className="mb-0 text-body-emphasis">
              {currencyFormat(total)}
            </h4>
          </div>
          <Button
            variant="outline-warning"
            disabled={selectedCount === 0}
            onClick={handleAddToCart}
          >
            {selectedCount > 0
              ? `Agregar ${selectedCount} al carrito`
              : 'Selecciona productos'
            }
            <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UsuallyBoughtTogetherCard;
