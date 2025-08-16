// import { Table } from 'antd';
// import type { FC } from 'react';
// import { useMemo } from 'react';
// import { ActionTableIcon } from '../../../assets/icons/ActionTabIcon';
// import { AddIcon } from '../../../assets/icons/AddIcon';
// import { dataDestination } from '../../../entities/DestinationTable/model/moc-data';
// import type { PropsDestination } from '../../../entities/DestinationTable/model/type';
// import { Button } from '../../../shared/ui/button';
// import styles from './Destination.module.scss';
// export const DestinationPage: FC<PropsDestination> = ({ data = dataDestination }) => {
//   const columns = useMemo(
//     () => [
//       {
//         title: 'id',
//         dataIndex: 'id',
//         key: 'id',
//       },
//       {
//         title: 'Cтрана',
//         dataIndex: 'countryName',
//         key: 'countryName',
//       },
//       {
//         title: 'Город',
//         dataIndex: 'cityName',
//         key: 'cityName',
//       },
//       {
//         title: 'Имя аэропорта',
//         dataIndex: 'airportName',
//         key: 'airportName',
//       },
//       {
//         title: 'Код аэропорта',
//         dataIndex: 'airportCode',
//         key: 'airportCode',
//       },
//       {
//         title: 'Часовой пояс',
//         dataIndex: 'timezone',
//         key: 'timezone',
//       },
//       {
//         title: '',
//         key: 'action',
//         width: '5%',
//         render: (text: PropsDestination) => (
//           <Button type="text" onClick={() => console.log(text)}>
//             <ActionTableIcon />
//           </Button>
//         ),
//       },
//     ],
//     [],
//   );
//   return (
//     <div className={styles.container}>
//       <div className={styles.header}>
//         <h2 className={styles.titleTab}>Место назначения</h2>
//         <Button>
//           Добавить пункт назначения <AddIcon />{' '}
//         </Button>
//       </div>
//       <Table
//         dataSource={data}
//         columns={columns}
//         loading={false}
//         pagination={{ pageSize: 10 }}
//         rowKey="id"
//       />
//     </div>
//   );
// };
import { Destination } from '../../../widgets/destination';

export const DestinationPage = () => {
  return (
    <>
      <Destination />
    </>
  );
};
