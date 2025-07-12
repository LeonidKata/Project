import clsx from 'clsx';

import { forwardRef } from 'react';

import Select from 'react-select';

import type { IField } from '../fields.interface';
import styles from './FieldQuestion.module.css';

export const FieldQuestion = forwardRef<HTMLInputElement, IField>(
  ({ field, title, placeholder, errors }, _ref) => {
    const options = [
      { value: 'pet', label: 'Как звали Вашего перврого петомца ?' },
      { value: 'book', label: 'Ваша любимая книга ?' },
      { value: 'year', label: 'Ваш год рождения ?' },
    ];

    const customStyles = {
      container: (provided: any) => ({
        ...provided,
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
      }),
      control: (provided: any, state: any) => ({
        ...provided,
        outline: 'none',
        fontSize: '13px',
        boxShadow: state.isFocused ? 'none' : provided.boxShadow,
        borderColor: state.isFocused ? '#C2C2C2' : provided.borderColor,
      }),
      input: (provided: any) => ({
        ...provided,
        outline: 'none',
      }),
    };

    return (
      <div className={clsx(styles['wrapper-input'])}>
        <p className={clsx(styles['label-input-title'])}>{title}</p>
        <Select
          {...field}
          styles={customStyles}
          options={options}
          placeholder={placeholder}
          isSearchable
        />
        {errors?.question && (
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
            <p className={styles.error}>{errors?.question?.message}</p>
          </div>
        )}
      </div>
    );
  },
);
