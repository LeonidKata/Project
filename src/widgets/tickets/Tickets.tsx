import { dataTickets } from '../../entities/TicketsTable';
import { TicketsTable } from '../../entities/TicketsTable';
import { AddTickets } from '../../features/tickets';
import styles from './Tickets.module.scss';

export const Tickets = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Билеты</h1>
        <AddTickets />
      </div>
      <TicketsTable data={dataTickets} />
    </div>
  );
};
