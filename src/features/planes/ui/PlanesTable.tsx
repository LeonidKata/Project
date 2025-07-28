import type {FC} from 'react';
import {Table, Button} from 'antd';
import type {TableProps} from 'antd/lib/table';
import type {Planes} from '../model/types.ts';
import styles from "./PlanesTable.module.css"
interface Props extends TableProps {
  data:Planes[],
}
const columns: TableProps<Planes>['columns'] =[
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: 'Номер борта', dataIndex: 'aircraftNumber', key: 'aircraftNumber' },
  { title: 'Модель', dataIndex: 'model', key: 'model' },
  { title: 'Год выпуска', dataIndex: 'modelYear', key: 'modelYear' },
  { title: 'Дальность полёта (км)', dataIndex: 'flightRange', key: 'flightRange' },
  {title:"", key:"action", render: (text:Planes) => (
    <Button onClick={()=>console.log(text)}>
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.513 20.0451C11.5021 20.87 12.1681 21.5538 12.993 21.5647C13.818 21.5756 14.5018 20.9096 14.5127 20.0846C14.5236 19.2597 13.8576 18.5759 13.0326 18.565C12.2077 18.5541 11.5239 19.2201 11.513 20.0451ZM11.7109 5.04636C11.7001 5.87129 12.3661 6.55514 13.191 6.56603C14.0159 6.57692 14.6998 5.91088 14.7107 5.08596C14.7216 4.26103 14.0555 3.57718 13.2306 3.56629C12.4057 3.5554 11.7218 4.22143 11.7109 5.04636ZM11.612 12.5457C11.6011 13.3706 12.2671 14.0545 13.092 14.0654C13.917 14.0763 14.6008 13.4102 14.6117 12.5853C14.6226 11.7604 13.9566 11.0765 13.1316 11.0656C12.3067 11.0547 11.6228 11.7208 11.612 12.5457Z" fill="#04396D"/>
      </svg>
    </Button>
    )}
]
export const PlanesTable:FC<Props> = ({data}) => {
  return (

    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Самолеты</h1>
        <Button>
          <span>Добавить самолет</span>
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.6955 5.08727C11.7001 4.74212 11.4239 4.45863 11.0788 4.45408C10.7337 4.44952 10.4502 4.72562 10.4456 5.07077L10.3796 10.0703L5.38005 10.0043C5.0349 9.99979 4.75141 10.2759 4.74685 10.621C4.7423 10.9662 5.0184 11.2497 5.36355 11.2542L10.3631 11.3202L10.2971 16.3198C10.2926 16.6649 10.5687 16.9484 10.9138 16.953C11.259 16.9575 11.5425 16.6814 11.547 16.3363L11.613 11.3367L16.6126 11.4027C16.9577 11.4073 17.2412 11.1312 17.2458 10.786C17.2503 10.4409 16.9742 10.1574 16.6291 10.1528L11.6295 10.0868L11.6955 5.08727Z" fill="black"/>
            </svg>
        </Button>
      </div>
      <Table columns={columns} dataSource={data}/>
    </div>
  );
};

