import type { FC } from 'react';
import type { InputProps } from 'antd';
import { Input as AntInput } from 'antd';
import styles from './input.module.css';

interface Props extends InputProps {
  label: string;
  error?: string;
}

export const Input: FC<Props> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className={styles.inputLabel}>
        <span>{label}</span>
        <AntInput{...props} status={error ? 'error' : ''} />
        {error && (
          <span className={styles.inputError}>{error}</span>
        )}
      </label>
    </div>
  );
};

