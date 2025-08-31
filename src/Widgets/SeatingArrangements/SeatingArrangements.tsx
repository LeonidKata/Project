import { dataSeatingArrangements } from '../../Entities/SeatingArrangementsTable/model/moc-data';
import { SeatingArrangementsTable } from '../../Entities/SeatingArrangementsTable/ui/SeatingArrangementsTable';
import { AddSeatingArrangements } from '../../features/SeatingArrangements';
import styles from './SeatingArrangements.module.scss';

export const SeatingArrangements = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Посадочные места</h1>
        <AddSeatingArrangements />
      </div>
      <SeatingArrangementsTable data={dataSeatingArrangements} />
    </div>
  );
};
