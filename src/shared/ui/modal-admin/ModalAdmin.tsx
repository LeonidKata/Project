import { type FC, useEffect } from 'react';

import ReactDOM from 'react-dom';

import styles from './ModalAdmin.module.css';
import type { IModalAdmin } from './modal-admin.interface';

export const ModalAdmin: FC<IModalAdmin> = ({ isOpen, children, title, onClose, onSubmit }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className={styles.modalContainer}>
          <div className={styles.modalOverlay} onClick={onClose} />
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.titleWrapper}>
              <h1 className={styles.title}>{title}</h1>
              <svg
                onClick={onClose}
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1613 13.5141L21.012 7.81582L22.6397 9.48712L16.789 15.1854L22.4873 21.0361L20.816 22.6639L15.1177 16.8131L9.267 22.5114L7.63925 20.8401L13.49 15.1418L7.7917 9.29112L9.463 7.66338L15.1613 13.5141Z"
                  fill="black"
                />
              </svg>
            </div>
            {children}
            <button onSubmit={onSubmit} className={styles.buttonSubmit}>
              Сохранить
            </button>
          </div>
        </div>,
        document.body,
      )
    : null;
};
