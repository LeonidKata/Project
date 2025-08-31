import { Table as AntTable } from 'antd';
import type { TableProps } from 'antd';

import styles from './Table.module.css';

interface Props<T> extends TableProps<T> {
  columns: TableProps<T>['columns'];
}

export const Table = <T extends object>({ ...props }: Props<T>) => {
  return (
    <div className={styles.container}>
      <AntTable
        {...props}
        bordered
        className="table"
        pagination={{
          ...props.pagination,
          className: 'tablePagination',
          position: ['bottomLeft'],
          showSizeChanger: false,
        }}
      />
    </div>
  );
};
