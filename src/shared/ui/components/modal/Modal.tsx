import type { FC } from 'react';

import styles from './Modal.module.css';
import type { IModal } from './modal.interface';

export const Modal: FC<IModal> = ({}) => {
  return (
    <div className={styles.wrapper}>
      <div className="modal-content">
        <p>Modal content goes here.</p>
      </div>
    </div>
  );
};
