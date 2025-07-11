import type { FC } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker as AntDatePicker } from 'antd';
import styles from './DatePicker.module.css';

interface Props extends DatePickerProps {
  label?: string;
  error?: string;
}

export const DatePicker: FC<Props> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className={styles.datePickerLabel}>
        {label && (
          <span>{label}</span>
        )}
        <AntDatePicker suffixIcon={
          <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.853553 0.146447C0.759785 0.0526784 0.632608 0 0.5 0C0.367392 0 0.240215 0.0526784 0.146447 0.146447C0.0526784 0.240215 0 0.367392 0 0.5C0 0.632608 0.0526784 0.759785 0.146447 0.853553L5.14645 5.85355C5.34171 6.04882 5.65829 6.04882 5.85355 5.85355L10.8536 0.853553C10.9473 0.759785 11 0.632608 11 0.5C11 0.367392 10.9473 0.240215 10.8536 0.146447C10.7598 0.0526785 10.6326 0 10.5 0C10.3674 0 10.2402 0.0526785 10.1464 0.146447L5.5 4.79289L0.853553 0.146447Z"
              fill="#141414" />
          </svg>
        } {...props} status={error ? 'error' : ''} />
        {error && (
          <span className={styles.datePickerError}>{error}</span>
        )}
      </label>
    </div>
  );
};