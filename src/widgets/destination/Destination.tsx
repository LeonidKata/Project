import { dataDestination } from '../../entities/DestinationTable';
import { DestinationTable } from '../../entities/DestinationTable';
import { AddDestination } from '../../features/destination';
import styles from './Destination.module.scss';

export const Destination = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Место назначения</h1>
        <AddDestination />
      </div>
      <DestinationTable data={dataDestination} />
    </div>
  );
};
