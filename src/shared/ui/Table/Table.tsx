import type { FC } from 'react';
import { Table as AntTable } from 'antd';
import type { TableProps } from 'antd';
import styles from './Table.module.css';

export const Table: FC<TableProps> = ({ ...props }) => {

  return (
    <div className={styles.container}>
      <AntTable {...props} bordered className="table"
                pagination={{ className: 'tablePagination', position: ['bottomLeft'], showSizeChanger: false }} />
    </div>
  );
};
