import { BookingTable } from '../../entities/booking-table/';
import { bookings } from '../../entities/booking-table/';
import { Book } from '../../features/book/';
import styles from './Booking.module.css';

export const Booking = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Бронирование</h1>
        <Book />
      </div>
      <BookingTable data={bookings} />
    </div>
  );
};
