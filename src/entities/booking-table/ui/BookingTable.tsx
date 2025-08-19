import { Table } from 'antd';
import type { TableProps } from 'antd/lib/table';

import { ActionTableIcon } from '../../../assets/icons/ActionTableIcon.tsx';
import { GearIcon } from '../../../assets/icons/GearIcon.tsx';
import { Button } from '../../../shared/ui/button';
import type { Booking } from '../model/types.ts';

interface Props extends TableProps<Booking> {
  data: Booking[];
}

const columns: TableProps<Booking>['columns'] = [
  { title: 'ID', dataIndex: 'id', key: 'id', sorter: (a, b) => a.id - b.id },
  {
    title: 'Дата бронирования',
    dataIndex: 'bookingDate',
    key: 'bookingDate',
    sorter: (a, b) => new Date(a.bookingDate).getTime() - new Date(b.bookingDate).getTime(),
  },
  {
    title: 'Идентификатор пассажира',
    dataIndex: 'passengerId',
    key: 'passengerId',
    sorter: (a, b) => a.passengerId - b.passengerId,
  },
  {
    title: 'Идентификатор рейса',
    dataIndex: 'flightId',
    key: 'flightId',
    sorter: (a, b) => a.flightId - b.flightId,
  },
  {
    title: (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <GearIcon />
      </div>
    ),
    key: 'action',
    width: '5%',
    align: 'center',
    render: (text: Booking) => (
      <Button type="text" onClick={() => console.log(text)}>
        <ActionTableIcon />
      </Button>
    ),
  },
];

export const BookingTable = ({ data }: Props) => {
  return <Table dataSource={data} columns={columns} />;
};
