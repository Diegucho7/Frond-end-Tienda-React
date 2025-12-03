import { ColumnDef } from '@tanstack/react-table';
import AdvanceTable from 'components/base/AdvanceTable';
import { currencyFormat } from 'helpers/utils';
import { Link } from 'react-router';
import AdvanceTableFooter from 'components/base/AdvanceTableFooter';
import Avatar from 'components/base/Avatar';
import Badge from 'components/base/Badge';
import { BadgeBg } from 'components/base/Badge';
import FeatherIcon from 'feather-icons-react';
import { OrderFromBackend } from 'pages/apps/e-commerce/admin/Orders';

const API_URL = import.meta.env.VITE_API_URL;

// Helper para obtener el badge de estado de pago
const getPaymentStatusBadge = (status: string): { label: string; type: BadgeBg; icon: string } => {
  const statusMap: Record<string, { label: string; type: BadgeBg; icon: string }> = {
    pending: { label: 'Pendiente', type: 'warning', icon: 'clock' },
    paid: { label: 'Pagado', type: 'success', icon: 'check' },
    cancelled: { label: 'Cancelado', type: 'secondary', icon: 'x' },
    failed: { label: 'Fallido', type: 'danger', icon: 'info' },
    refunded: { label: 'Reembolsado', type: 'info', icon: 'refresh-cw' }
  };
  return statusMap[status] || { label: status, type: 'secondary', icon: 'help-circle' };
};

// Helper para obtener el badge de estado de cumplimiento
const getFulfillmentStatusBadge = (status: string): { label: string; type: BadgeBg; icon: string } => {
  const statusMap: Record<string, { label: string; type: BadgeBg; icon: string }> = {
    unfulfilled: { label: 'Sin cumplir', type: 'danger', icon: 'x' },
    fulfilled: { label: 'Cumplido', type: 'success', icon: 'check' },
    partial: { label: 'Parcial', type: 'warning', icon: 'info' },
    ready_pickup: { label: 'Listo para recoger', type: 'info', icon: 'info' },
    delivered: { label: 'Entregado', type: 'success', icon: 'check' },
    cancelled: { label: 'Cancelado', type: 'secondary', icon: 'x' },
    delayed: { label: 'Retrasado', type: 'danger', icon: 'alert-circle' }
  };
  return statusMap[status] || { label: status, type: 'secondary', icon: 'help-circle' };
};

// Helper para traducir tipo de entrega
const getDeliveryTypeLabel = (type: string): string => {
  const typeMap: Record<string, string> = {
    standard: 'Envío estándar',
    express: 'Express',
    free: 'Envío gratis',
    local_pickup: 'Retiro local',
    local_delivery: 'Entrega local',
    cash_on_delivery: 'Pago contra entrega'
  };
  return typeMap[type] || type;
};

// Formatear fecha
const formatDate = (dateString: string): string => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const ordersTableColumns: ColumnDef<OrderFromBackend>[] = [
  {
    accessorKey: 'orderNumber',
    header: 'Orden',
    cell: ({ row: { original } }) => {
      const { id, orderNumber } = original;
      return (
        <Link
          to={`/admin/apps/e-commerce/admin/order-details/${id}`}
          className="fw-semibold"
        >
          #{orderNumber}
        </Link>
      );
    },
    meta: {
      headerProps: { style: { width: '8%' }, className: 'pe-3 ps-0' },
      cellProps: { className: 'ps-0' }
    }
  },
  {
    accessorKey: 'total',
    header: 'Total',
    cell: ({ row: { original } }) => currencyFormat(original.total),
    meta: {
      headerProps: { style: { width: '8%' }, className: 'text-end' },
      cellProps: { className: 'text-end fw-semibold text-body-highlight' }
    }
  },
  {
    id: 'customer',
    accessorFn: ({ customer }) => customer.name,
    header: 'Cliente',
    cell: ({ row: { original } }) => {
      const { name, img, id } = original.customer;
      const avatarSrc = img ? `${API_URL}/api/uploads/usuarios/${img}` : undefined;
      return (
        <Link
          to={`/admin/apps/e-commerce/admin/customer-details/${id}`}
          className="d-flex align-items-center"
        >
          {avatarSrc ? (
            <Avatar src={avatarSrc} size="m" />
          ) : (
            <Avatar size="m" className="bg-primary-subtle text-primary">
              {name?.charAt(0)?.toUpperCase() || 'U'}
            </Avatar>
          )}
          <p className="mb-0 ms-3 text-body-emphasis fw-bold">{name}</p>
        </Link>
      );
    },
    meta: {
      headerProps: {
        style: { width: '22%', minWidth: 200 },
        className: 'ps-8'
      },
      cellProps: { className: 'ps-8 py-0 white-space-nowrap' }
    }
  },
  {
    id: 'payment_status',
    accessorFn: ({ paymentStatus }) => paymentStatus,
    header: 'Estado de pago',
    cell: ({ row: { original } }) => {
      const badge = getPaymentStatusBadge(original.paymentStatus);
      return (
        <Badge
          bg={badge.type}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={
            <FeatherIcon
              icon={badge.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {badge.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { style: { width: '12%' }, className: 'pe-3' }
    }
  },
  {
    id: 'fulfilment_status',
    accessorFn: ({ fulfillmentStatus }) => fulfillmentStatus,
    header: 'Estado de cumplimiento',
    cell: ({ row: { original } }) => {
      const badge = getFulfillmentStatusBadge(original.fulfillmentStatus);
      return (
        <Badge
          bg={badge.type}
          variant="phoenix"
          iconPosition="end"
          className="fs-10"
          icon={
            <FeatherIcon
              icon={badge.icon}
              size={12.8}
              className="ms-1"
            />
          }
        >
          {badge.label}
        </Badge>
      );
    },
    meta: {
      headerProps: { style: { width: '15%', minWidth: 180 }, className: 'pe-3' }
    }
  },
  {
    id: 'delivery_type',
    accessorKey: 'deliveryType',
    header: 'Tipo de entrega',
    cell: ({ row: { original } }) => getDeliveryTypeLabel(original.deliveryType),
    meta: {
      headerProps: { style: { width: '15%' } },
      cellProps: { className: 'text-body fs-9' }
    }
  },
  {
    id: 'date',
    accessorKey: 'createdAt',
    header: 'Fecha',
    cell: ({ row: { original } }) => formatDate(original.createdAt),
    meta: {
      headerProps: { className: 'text-end' },
      cellProps: {
        className: 'text-body-tertiary fs-9 ps-4 text-end white-space-nowrap'
      }
    }
  }
];

const OrdersTable = () => {
  return (
    <div>
      <AdvanceTable tableProps={{ className: 'phoenix-table fs-9' }} />
      <AdvanceTableFooter pagination />
    </div>
  );
};

export default OrdersTable;
