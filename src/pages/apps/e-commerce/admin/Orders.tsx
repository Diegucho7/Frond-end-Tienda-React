import { faFileExport, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import FilterButtonGroup, {
  FilterMenu
} from 'components/common/FilterButtonGroup';
import FilterTab, { FilterTabItem } from 'components/common/FilterTab';
import PageBreadcrumb from 'components/common/PageBreadcrumb';
import SearchBox from 'components/common/SearchBox';
import OrdersTable, { ordersTableColumns } from 'components/tables/OrdersTable';
import { defaultBreadcrumbItems } from 'data/commonData';
import useAdvanceTable from 'hooks/useAdvanceTable';
import AdvanceTableProvider from 'providers/AdvanceTableProvider';
import { ChangeEvent, useCallback, useEffect, useState, useMemo } from 'react';
import { Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';

const API_URL = import.meta.env.VITE_API_URL;

// Tipos para órdenes del backend
export interface OrderFromBackend {
  id: string;
  orderNumber: string;
  total: number;
  customer: {
    id: string;
    name: string;
    img?: string;
  };
  paymentStatus: 'pending' | 'paid' | 'cancelled' | 'failed' | 'refunded';
  fulfillmentStatus: 'unfulfilled' | 'fulfilled' | 'partial' | 'ready_pickup' | 'delivered' | 'cancelled' | 'delayed';
  deliveryType: string;
  createdAt: string;
  totalItems: number;
}

interface OrderStats {
  totalOrders: number;
  pendingPayments: number;
  pendingOrders: number;
  completedOrders: number;
  failedPayments: number;
}

const filterMenus: FilterMenu[] = [
  {
    label: 'Estado de pago',
    items: [
      { label: 'Todos', onClick: () => { } },
      { label: 'Pendiente', onClick: () => { } },
      { label: 'Pagado', onClick: () => { } },
      { label: 'Cancelado', onClick: () => { } },
      { label: 'Fallido', onClick: () => { } },
      { label: 'Reembolsado', onClick: () => { } }
    ]
  },
  {
    label: 'Estado de cumplimiento',
    items: [
      { label: 'Todos', onClick: () => { } },
      { label: 'Sin cumplir', onClick: () => { } },
      { label: 'Cumplido', onClick: () => { } },
      { label: 'Parcial', onClick: () => { } },
      { label: 'Listo para recoger', onClick: () => { } },
      { label: 'Entregado', onClick: () => { } },
      { label: 'Cancelado', onClick: () => { } },
      { label: 'Retrasado', onClick: () => { } }
    ]
  }
];

const Orders = () => {
  const [orders, setOrders] = useState<OrderFromBackend[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<OrderStats | null>(null);
  const [activeTab, setActiveTab] = useState('all');
  // Filters para uso futuro con el backend
  const paymentFilter = undefined;
  const fulfillmentFilter = undefined;

  // Fetch estadísticas
  const fetchStats = useCallback(async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/api/orders/stats`, {
        headers: { 'x-token': token || '' }
      });
      const data = await response.json();
      if (data.ok) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, []);

  // Fetch órdenes
  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      let url = `${API_URL}/api/orders/all?limit=100`;

      if (paymentFilter !== undefined) {
        url += `&paymentStatus=${paymentFilter}`;
      }
      if (fulfillmentFilter !== undefined) {
        url += `&fulfillmentStatus=${fulfillmentFilter}`;
      }

      const response = await fetch(url, {
        headers: { 'x-token': token || '' }
      });
      const data = await response.json();

      if (data.ok) {
        setOrders(data.orders || []);
      } else {
        toast.error(data.msg || 'Error al cargar órdenes');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast.error('Error de red al cargar órdenes');
    } finally {
      setLoading(false);
    }
  }, [paymentFilter, fulfillmentFilter]);

  useEffect(() => {
    fetchOrders();
    fetchStats();
  }, [fetchOrders, fetchStats]);

  // Filtrar órdenes según el tab activo
  const filteredOrders = useMemo(() => {
    switch (activeTab) {
      case 'pending_payment':
        return orders.filter(o => o.paymentStatus === 'pending');
      case 'unfulfilled':
        return orders.filter(o => o.fulfillmentStatus === 'unfulfilled');
      case 'completed':
        return orders.filter(o => o.fulfillmentStatus === 'fulfilled' || o.fulfillmentStatus === 'delivered');
      case 'refunded':
        return orders.filter(o => o.paymentStatus === 'refunded');
      case 'failed':
        return orders.filter(o => o.paymentStatus === 'failed');
      default:
        return orders;
    }
  }, [orders, activeTab]);

  // Tab items dinámicos
  const tabItems: FilterTabItem[] = useMemo(() => [
    {
      label: 'Todos',
      value: 'all',
      count: stats?.totalOrders || orders.length
    },
    {
      label: 'Pago pendiente',
      value: 'pending_payment',
      count: stats?.pendingPayments || orders.filter(o => o.paymentStatus === 'pending').length
    },
    {
      label: 'Sin cumplir',
      value: 'unfulfilled',
      count: stats?.pendingOrders || orders.filter(o => o.fulfillmentStatus === 'unfulfilled').length
    },
    {
      label: 'Completados',
      value: 'completed',
      count: stats?.completedOrders || orders.filter(o => o.fulfillmentStatus === 'fulfilled' || o.fulfillmentStatus === 'delivered').length
    },
    {
      label: 'Reembolsados',
      value: 'refunded',
      count: orders.filter(o => o.paymentStatus === 'refunded').length
    },
    {
      label: 'Fallidos',
      value: 'failed',
      count: stats?.failedPayments || orders.filter(o => o.paymentStatus === 'failed').length
    }
  ], [stats, orders]);

  const table = useAdvanceTable({
    data: filteredOrders,
    columns: ordersTableColumns,
    pageSize: 10,
    pagination: true,
    sortable: true,
    selection: true
  });

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    table.setGlobalFilter(e.target.value || undefined);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  const handleExport = () => {
    // Crear CSV de órdenes
    const headers = ['Orden', 'Total', 'Cliente', 'Estado Pago', 'Estado Cumplimiento', 'Tipo Entrega', 'Fecha'];
    const csvData = filteredOrders.map(order => [
      order.orderNumber,
      order.total,
      order.customer.name,
      order.paymentStatus,
      order.fulfillmentStatus,
      order.deliveryType,
      new Date(order.createdAt).toLocaleString('es-ES')
    ]);

    const csvContent = [headers, ...csvData].map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `ordenes_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    toast.success('Órdenes exportadas correctamente');
  };

  if (loading && orders.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center py-5">
        <Spinner animation="border" variant="primary" />
        <span className="ms-3">Cargando órdenes...</span>
      </div>
    );
  }

  return (
    <div>
      <PageBreadcrumb items={defaultBreadcrumbItems} />
      <div className="mb-9">
        <h2 className="mb-4">Órdenes</h2>
        <FilterTab
          tabItems={tabItems}
          className="mb-2"
          onTabChange={handleTabChange}
        />

        <AdvanceTableProvider {...table}>
          <div className="mb-4">
            <div className="d-flex flex-wrap gap-3">
              <SearchBox
                placeholder="Buscar órdenes..."
                onChange={handleSearchInputChange}
              />
              <div className="scrollbar overflow-hidden-y">
                <FilterButtonGroup menus={filterMenus} />
              </div>
              <div className="ms-xxl-auto">
                <Button
                  variant="link"
                  className="text-body me-4 px-0"
                  onClick={handleExport}
                >
                  <FontAwesomeIcon icon={faFileExport} className="fs-9 me-2" />
                  Exportar
                </Button>
                <Button variant="primary" disabled>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Agregar orden
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-n4 px-4 mx-lg-n6 px-lg-6 bg-body-emphasis border-top border-bottom border-translucent position-relative top-1">
            {loading ? (
              <div className="text-center py-5">
                <Spinner animation="border" size="sm" variant="primary" />
                <span className="ms-2">Actualizando...</span>
              </div>
            ) : filteredOrders.length === 0 ? (
              <div className="text-center py-5">
                <p className="text-body-tertiary mb-0">No hay órdenes para mostrar</p>
              </div>
            ) : (
              <OrdersTable />
            )}
          </div>
        </AdvanceTableProvider>
      </div>
    </div>
  );
};

export default Orders;
