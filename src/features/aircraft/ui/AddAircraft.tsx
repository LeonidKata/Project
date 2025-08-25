import { AddIcon } from '../../../assets/icons/AddIcon.tsx';
import { Button } from '../../../shared/ui/button';
import styles from './AddAircraft.module.css';

export const AddAircraft = () => {
  return (
    <Button className={styles.addButton}>
      <span>Добавить самолет</span>
      <AddIcon />
    </Button>
  );
};
