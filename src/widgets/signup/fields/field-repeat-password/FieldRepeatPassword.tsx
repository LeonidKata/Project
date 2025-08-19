import clsx from 'clsx';

import { forwardRef, useState } from 'react';

import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

import type { IField } from '../fields.interface';
import styles from './FieldRepeatPassword.module.css';

export const FieldRepeatPassword = forwardRef<HTMLInputElement, IField>(
  (
    { errors, required, placeholder, title, validRepeatPassword, type = 'password', ...rest },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const [typeFiled, setTypeField] = useState(type);

    const showPasswordField = () => {
      setShowPassword((prev) => !prev);

      if (!showPassword) {
        setTypeField('text');
      } else {
        setTypeField('password');
      }
    };

    return (
      <div className={clsx(styles['wrapper-input'])}>
        <label className={clsx(styles['label-input'])}>
          <p className={clsx(styles['label-input-title'])}>{title}</p>
          <input
            className={clsx(
              styles['input-field'],
              styles[errors?.repeatPassword && 'input-field-error'],
              styles[validRepeatPassword && 'input-field-valid'],
            )}
            placeholder={placeholder}
            ref={ref}
            required={required}
            type={typeFiled}
            {...rest}
            autoComplete="on"
          />
          {showPassword ? (
            <FaRegEye
              className={clsx(styles['show-button-password'])}
              onClick={() => showPasswordField()}
            />
          ) : (
            <FaRegEyeSlash
              className={clsx(styles['show-button-password'])}
              onClick={() => showPasswordField()}
            />
          )}
        </label>
        {errors?.repeatPassword && (
          <div className={clsx(styles['wrapper-error'])}>
            <svg
              className={clsx(styles['icon'])}
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_21702_100)">
                <path
                  d="M8.00004 1.33337C4.31337 1.33337 1.33337 4.31337 1.33337 8.00004C1.33337 11.6867 4.31337 14.6667 8.00004 14.6667C11.6867 14.6667 14.6667 11.6867 14.6667 8.00004C14.6667 4.31337 11.6867 1.33337 8.00004 1.33337ZM10.8667 10.8667C10.6067 11.1267 10.1867 11.1267 9.92671 10.8667L8.00004 8.94004L6.07337 10.8667C5.81337 11.1267 5.39337 11.1267 5.13337 10.8667C4.87337 10.6067 4.87337 10.1867 5.13337 9.92671L7.06004 8.00004L5.13337 6.07337C4.87337 5.81337 4.87337 5.39337 5.13337 5.13337C5.39337 4.87337 5.81337 4.87337 6.07337 5.13337L8.00004 7.06004L9.92671 5.13337C10.1867 4.87337 10.6067 4.87337 10.8667 5.13337C11.1267 5.39337 11.1267 5.81337 10.8667 6.07337L8.94004 8.00004L10.8667 9.92671C11.12 10.18 11.12 10.6067 10.8667 10.8667Z"
                  fill="#F11C0E"
                />
              </g>
              <defs>
                <clipPath id="clip0_21702_100">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className={styles.error}>{errors?.repeatPassword?.message}</p>
          </div>
        )}
      </div>
    );
  },
);
