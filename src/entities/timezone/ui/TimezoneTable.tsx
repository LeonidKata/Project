import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import type { TimezoneTable } from '../model/types';

interface Props {
  data: TimezoneTable;
}

const columns: ColumnsType<TimezoneTable> = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Страна', dataIndex: 'country', key: 'country' },
  { title: 'Город', dataIndex: 'city', key: 'city' },
  { title: 'Среднее время по Гринвичу (GMT)', dataIndex: 'gmt', key: 'gmt' },
  { title: 'Зимнее среднее время по Гринвичу (GMT)', dataIndex: 'winterGmt', key: 'winterGmt' },
];

export const TimezoneTable = ({ data }: Props) => {
  return <Table rowKey="id" dataSource={data} columns={columns} pagination={{ pageSize: 10 }} />;
};
