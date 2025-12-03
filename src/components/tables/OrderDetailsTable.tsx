import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { Link } from 'react-router';
import { useMemo } from 'react';
import { OrderProduct } from 'pages/apps/e-commerce/admin/OrderDetails';

const API_URL = import.meta.env.VITE_API_URL;

const columns: ColumnDef<OrderProduct>[] = [
  {
    id: 'productImage',
    accessorKey: 'image',
    header: '',
    cell: ({ row: { original } }) => {
      const imageSrc = original.image
        ? `${API_URL}/api/uploads/productos/${original.image}`
        : '/placeholder-product.png';
      return (
        <div className="rounded-2 border border-translucent d-inline-block">
          <img src={imageSrc} alt={original.name} width={53} />
        </div>
      );
    },
    meta: { cellProps: { className: 'py-2' } }
  },
  {
    accessorKey: 'name',
    header: 'Productos',
    cell: ({ row: { original } }) => {
      const { name, productId } = original;
      return (
        <Link to={`/admin/apps/e-commerce/admin/edit-product/${productId}`} className="fw-semibold line-clamp-2">
          {name}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { minWidth: 300 } },
      cellProps: { className: '' }
    }
  },
  {
    accessorKey: 'brand',
    header: 'Marca',
    meta: {
      headerProps: { style: { width: 120 }, className: 'ps-4' },
      cellProps: { className: 'white-space-nowrap text-body ps-4' }
    }
  },
  {
    accessorKey: 'code',
    header: 'Código',
    meta: {
      headerProps: { style: { width: 120 }, className: 'ps-4' },
      cellProps: {
        className: 'white-space-nowrap text-body-tertiary fw-semibold ps-4'
      }
    }
  },
  {
    accessorKey: 'price',
    header: 'Precio',
    cell: ({ row: { original } }) => currencyFormat(original.price),
    meta: {
      headerProps: { style: { width: 120 }, className: 'ps-4 text-end' },
      cellProps: { className: 'text-body fw-semibold text-end ps-4' }
    }
  },
  {
    accessorKey: 'quantity',
    header: 'Cantidad',
    meta: {
      headerProps: { style: { width: 100 }, className: 'ps-4 text-center' },
      cellProps: { className: 'text-center ps-4 text-body-tertiary' }
    }
  },
  {
    id: 'total',
    accessorFn: ({ price, quantity }) => price * quantity,
    header: 'Total',
    cell: ({ row: { original } }) =>
      currencyFormat(original.total || original.price * original.quantity),
    meta: {
      headerProps: { style: { width: 150 }, className: 'ps-4 text-end' },
      cellProps: { className: 'fw-bold text-body-highlight text-end ps-4' }
    }
  }
];

interface OrderDetailsTableProps {
  products: OrderProduct[];
}

const OrderDetailsTable = ({ products = [] }: OrderDetailsTableProps) => {
  const table = useAdvanceTable({
    data: products,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true
  });

  const subtotal = useMemo(() => {
    return products.reduce(
      (sum, item) => sum + (item.subtotal || item.price * item.quantity),
      0
    );
  }, [products]);

  return (
    <div>
      <AdvanceTableProvider {...table}>
        <div className="border-y border-translucent">
          <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
          <div className="d-flex flex-between-center py-3">
            <p className="text-body-emphasis fw-semibold lh-sm mb-0">
              Subtotal de artículos :
            </p>
            <p className="text-body-emphasis fw-bold lh-sm mb-0">
              {currencyFormat(subtotal)}
            </p>
          </div>
        </div>
      </AdvanceTableProvider>
    </div>
  );
};

export default OrderDetailsTable;
