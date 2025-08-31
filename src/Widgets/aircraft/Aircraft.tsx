import { useState } from 'react';

import { useGetAircraftQuery } from '../../App/store/rootApi.ts';
import { AircraftTable } from '../../Entities/aircraft';
import { AddAircraft } from '../../features/aircraft';
import styles from './Aircraft.module.css';

export const Aircraft = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetAircraftQuery({ page: page - 1, size: 10 });
  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Самолеты</h1>
        <AddAircraft />
      </div>

      <AircraftTable
        data={data?.content}
        rowKey="id"
        pagination={{
          current: page,
          pageSize: 10,
          total: data?.totalElements,
          onChange: (newPage) => setPage(newPage),
        }}
      />
    </div>
  );
};
