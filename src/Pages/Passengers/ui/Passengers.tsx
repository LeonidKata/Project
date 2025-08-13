import { Table } from 'antd';

import type { FC } from 'react';
import { useMemo } from 'react';

import { Button } from '../../../shared/ui/button';
import type { PropsPassenger } from '../interface';
import { dataPassengers } from '../testData';
import styles from './Passengers.module.scss';

export const Passengers: FC<PropsPassenger> = ({ data = dataPassengers }) => {
  const columns = useMemo(
    () => [
      {
        title: 'ID',
        dataIndex: 'ID',
        key: 'ID',
      },

      {
        title: 'Имя, Фамилия, Отчество',
        dataIndex: 'fullName',
        key: 'fullName',
      },
      {
        title: 'Пол',
        dataIndex: 'gender',
        key: 'gender',
      },

      {
        title: 'Телефон',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
      },

      {
        title: 'Дата рождения',
        dataIndex: 'birthDate',
        key: 'birthDate',
      },

      {
        title: 'Серийный номер',
        dataIndex: 'serialNumberPassport',
        key: 'serialNumberPassport',
      },

      {
        title: 'Гражданство',
        dataIndex: 'passportIssuingCountry',
        key: 'passportIssuingCountry',
      },
      {
        title: 'Дата выдачи паспорта',
        dataIndex: 'passportIssuingDate',
        key: 'passportIssuingDate',
      },
    ],
    [],
  );

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.titleTab}>Пассажиры</h2>
        <Button>Добавить пассажира + </Button>
      </div>
      <Table
        dataSource={data}
        columns={columns}
        loading={false}
        pagination={{ pageSize: 10 }}
        rowKey="ID"
      />
    </div>
  );
};
