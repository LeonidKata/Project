import { Table } from 'antd';
import type { TableProps } from 'antd/lib/table';

import { ActionTableIcon } from '../../../assets/icons/ActionTabIcon';
import { Button } from '../../../shared/ui/button';
import type { Tickets } from '../model/type';

interface Props extends TableProps {
  data: Tickets[];
}

const columns: TableProps<Tickets>['columns'] = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'ФИО',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'Номер билет',
    dataIndex: 'ticketNumber',
    key: 'ticketNumber',
  },

  {
    title: 'Код',
    dataIndex: 'flightCode',
    key: 'flightCode',
  },

  {
    title: 'Отлёт',
    dataIndex: 'departureDateTime',
    key: 'departureDateTime',
  },

  {
    title: 'Прилёт',
    dataIndex: 'arrivalDateTime',
    key: 'arrivalDateTime',
  },
  {
    title: 'Номер посадки',
    dataIndex: 'boardingNumber',
    key: 'boardingNumber',
  },
  {
    title: '',
    key: 'action',
    width: '5%',
    render: (text: Tickets) => (
      <Button type="text" onClick={() => console.log(text)}>
        <ActionTableIcon />
      </Button>
    ),
  },
];

export const TicketsTable = ({ data }: Props) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10, hideOnSinglePage: false, position: ['bottomLeft'] }}
    />
  );
};
