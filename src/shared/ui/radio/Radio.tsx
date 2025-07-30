import type { FC } from 'react';
import type { RadioProps } from 'antd';
import { Radio as AntdRadio } from 'antd';
import styles from './Radio.module.css';

interface Props extends RadioProps {
  label: string;
}

export const Radio: FC<Props> = ({ label, ...props }) => {
  return (
    <>
      <label className={styles.radioLabel}>
        <AntdRadio {...props} />
        <span>{label}</span>
      </label>
    </>
  );
};

