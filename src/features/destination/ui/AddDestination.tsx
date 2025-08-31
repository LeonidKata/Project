import { AddIcon } from '../../../assets/icons/AddIcon.tsx';
import { Button } from '../../../shared/ui/button';
import styles from './AddDestination.module.scss';

export const AddDestination = () => {
  return (
    <Button className={styles.addButton}>
      <span>Добавить пункт назначения</span>
      <AddIcon />
    </Button>
  );
};
