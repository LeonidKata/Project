import { Table } from 'antd';
import type { TableProps } from 'antd/lib/table';

import { ActionTableIcon } from '../../../assets/icons/ActionTableIcon.tsx';
import { Button } from '../../../shared/ui/button';
import type { Aircraft } from '../model/types.ts';

interface Props extends TableProps {
  data: Aircraft[];
}

const columns: TableProps<Aircraft>['columns'] = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  {
    title: 'Номер борта',
    dataIndex: 'aircraftNumber',
    key: 'aircraftNumber',
  },
  { title: 'Номер', dataIndex: 'model', key: 'model' },
  { title: 'Год выпуска', dataIndex: 'modelYear', key: 'modelYear' },
  {
    title: 'Дальность полёта (км)',
    dataIndex: 'flightRange',
    key: 'flightRange',
  },
  {
    title: '',
    key: 'action',
    width: '5%',
    render: (text: Aircraft) => (
      <Button type="text" onClick={() => console.log(text)}>
        <ActionTableIcon />
      </Button>
    ),
  },
];

export const AircraftTable = ({ data }: Props) => {
  return <Table dataSource={data} columns={columns} />;
};
