import { ColumnDef } from '@tanstack/react-table';

export interface UsuarioOrder {
  idUser: string;
  nombreUsuario: string;
  email: string;
}

export const ordersUsersColumns: ColumnDef<UsuarioOrder>[] = [
  {
    accessorKey: 'idUser',
    header: 'ID Usuario',
    cell: ({ row }) => {
      const id = row.original.idUser;
      return <span className="fw-semibold">#{id.slice(0, 8)}...</span>;
    },
    meta: {
      headerProps: { style: { width: '10%' } },
      cellProps: { className: 'fw-semibold' }
    }
  },
  {
    accessorKey: 'nombreUsuario',
    header: 'Nombre',
    cell: ({ row }) => {
      return <span className="fw-bold">{row.original.nombreUsuario}</span>;
    },
    meta: {
      headerProps: { style: { width: '30%' } },
      cellProps: { className: 'text-body-emphasis' }
    }
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => row.original.email,
    meta: {
      headerProps: { style: { width: '30%' } },
      cellProps: { className: 'text-body' }
    }
  }
];
