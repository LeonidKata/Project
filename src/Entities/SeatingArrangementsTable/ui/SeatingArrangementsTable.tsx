import type { TableProps } from 'antd/lib/table';

import { ActionTableIcon } from '../../../assets/icons/ActionTableIcon';
import { Table } from '../../../shared/ui/Table/Table';
import { Button } from '../../../shared/ui/button';
import type { SeatingArrangements } from '../model/type';

interface Props extends TableProps {
  data: SeatingArrangements[];
}

const isTrueFalse = {
  true: 'Да',
  false: 'Нет',
};

const columns: TableProps<SeatingArrangements>['columns'] = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },

  {
    title: 'ID рейса',
    dataIndex: 'flightId',
    key: 'flightId',
  },
  {
    title: 'ID места',
    dataIndex: ['seat', 'id'],
    key: 'seatId',
    render: (seatId) => (
      <span
        style={{
          color: '#52D5FF',
        }}
      >
        {seatId}
      </span>
    ),
  },

  {
    title: 'Цена',
    dataIndex: 'fare',
    key: 'fare',
  },

  {
    title: 'Класс',
    dataIndex: ['seat', 'category'],

    key: 'category',
    render: (category) => {
      const categories = {
        FIRST: 'Первый',
        BUSINESS: 'Бизнес',
        ECONOMY: 'Эконом',
        PREMIUM_ECONOMY: 'Премиум',
      };
      return categories[category] || category;
    },
  },

  {
    title: 'Продано',
    dataIndex: 'isSold',
    key: 'isSold',
    render: (isSold) => {
      return isTrueFalse[isSold] || isSold;
    },
  },
  {
    title: 'Зарегистрировано',
    dataIndex: 'isRegistered',
    key: 'isRegistered',
    render: (isRegistered) => {
      return isTrueFalse[isRegistered] || isRegistered;
    },
  },
  {
    title: 'Забронировано',
    dataIndex: 'isBooked',
    key: 'isBooked',
    render: (isBooked) => {
      return isTrueFalse[isBooked] || isBooked;
    },
  },
  {
    title: '',
    key: 'action',
    width: '5%',
    render: (text: SeatingArrangements) => (
      <Button type="text" onClick={() => console.log(text)}>
        <ActionTableIcon />
      </Button>
    ),
  },
];

export const SeatingArrangementsTable = ({ data }: Props) => {
  return (
    <Table
      dataSource={data}
      columns={columns}
      pagination={{ pageSize: 10, hideOnSinglePage: false, position: ['bottomLeft'] }}
      bordered
    />
  );
};
