import { Checkbox as AntdCheckbox } from 'antd';
import type { CheckboxProps } from 'antd';

import type { FC } from 'react';

import styles from './Checkbox.module.css';

interface Props extends CheckboxProps {
  label?: string;
}

export const Checkbox: FC<Props> = ({ label, ...props }) => {
  return (
    <div>
      <label className={styles.checkboxLabel}>
        <AntdCheckbox {...props} />
        {label && <span>{label}</span>}
      </label>
    </div>
  );
};
