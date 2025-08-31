import { AddIcon } from '../../../assets/icons/AddIcon.tsx';
import { Button } from '../../../shared/ui/button/index.ts';
import styles from './AddSeatingArrangements.module.scss';

export const AddSeatingArrangements = () => {
  return (
    <Button className={styles.addButton}>
      <span>Добавить посадочное место</span>
      <AddIcon />
    </Button>
  );
};
