import type { ColumnsType } from 'antd/es/table';

import { Table } from '../../../shared/ui/Table/Table';
import type { TimeZoneTable } from '../model/types';

interface Props {
  data: TimeZoneTable[];
  loading?: boolean;
  pagination?: {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number) => void;
  };
}

const columns: ColumnsType<TimeZoneTable> = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Страна', dataIndex: 'countryName', key: 'countryName' },
  { title: 'Город', dataIndex: 'cityName', key: 'cityName' },
  { title: 'Среднее время по Гринвичу (GMT)', dataIndex: 'gmt', key: 'gmt' },
  { title: 'Зимнее среднее время по Гринвичу (GMT)', dataIndex: 'gmtWinter', key: 'gmtWinter' },
];

export const TimezoneTable = ({ data, loading, pagination }: Props) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="id"
      pagination={pagination}
    />
  );
};
