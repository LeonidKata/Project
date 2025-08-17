import { AddIcon } from '../../../assets/icons/AddIcon.tsx';
import { Button } from '../../../shared/ui/button/index.ts';
import styles from './AddTickets.module.scss';

export const AddTickets = () => {
  return (
    <Button className={styles.addButton}>
      <span>Добавить билет</span>
      <AddIcon />
    </Button>
  );
};
