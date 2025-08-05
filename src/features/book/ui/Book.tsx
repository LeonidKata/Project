import type { FC } from 'react';

import { AddIcon } from '../../../assets/icons/AddIcon.tsx';
import { Button } from '../../../shared/ui/button';
import styles from './Book.module.css';

export const Book: FC = () => {
  return (
    <Button className={styles.addButton}>
      <span className={styles.addButtonText}>Забронировать</span>
      <AddIcon />
    </Button>
  );
};
