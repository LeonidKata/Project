import { Table } from 'antd';
import type { TableProps } from 'antd/lib/table';

import { ActionTableIcon } from '../../../assets/icons/ActionTabIcon';
import type { Destination } from '../../../entities/DestinationTable/model/type';
import { Button } from '../../../shared/ui/button';

interface Props extends TableProps {
  data: Destination[];
}

const columns: TableProps<Destination>['columns'] = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'Cтрана',
    dataIndex: 'countryName',
    key: 'countryName',
  },
  {
    title: 'Город',
    dataIndex: 'cityName',
    key: 'cityName',
  },

  {
    title: 'Имя аэропорта',
    dataIndex: 'airportName',
    key: 'airportName',
  },

  {
    title: 'Код аэропорта',
    dataIndex: 'airportCode',
    key: 'airportCode',
  },

  {
    title: 'Часовой пояс',
    dataIndex: 'timezone',
    key: 'timezone',
  },
  {
    title: '',
    key: 'action',
    width: '5%',
    render: (text: Destination) => (
      <Button type="text" onClick={() => console.log(text)}>
        <ActionTableIcon />
      </Button>
    ),
  },
];

export const DestinationTable = ({ data }: Props) => {
  return <Table dataSource={data} columns={columns} />;
};
