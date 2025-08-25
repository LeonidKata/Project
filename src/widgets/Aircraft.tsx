import { aircraft } from '../entities/aircraft/';
import { AircraftTable } from '../entities/aircraft/';
import { AddAircraft } from '../features/aircraft';
import styles from './Aircraft.module.css';

export const Aircraft = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Бронирование</h1>
        <AddAircraft />
      </div>
      <AircraftTable data={aircraft} />
    </div>
  );
};
