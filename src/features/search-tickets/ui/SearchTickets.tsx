import type { FC } from 'react';
import { type SubmitHandler, useForm, Controller } from 'react-hook-form';
import type { SearchTicketsForm } from '../model/types';
import { Radio } from '../../../shared/ui/radio';
import { DatePicker } from '../../../shared/ui/date';
import { Checkbox } from '../../../shared/ui/checkbox';
import { Input } from '../../../shared/ui/input';
import styles from './SearchTickets.module.css';
import { Button } from '../../../shared/ui/button';

export const SearchTickets: FC = () => {
  const { handleSubmit, control, setValue, getValues, formState: { errors } } = useForm<SearchTicketsForm>({
    mode: 'onChange',
  });

  const handleSwap = () => {
    const from = getValues('from');
    const to = getValues('to');
    setValue('from', to);
    setValue('to', from);
  };

  const onSubmit: SubmitHandler<SearchTicketsForm> = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.titleForm}>Найти билеты</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.formFrom}>
            <Controller
              name="from"
              control={control}
              defaultValue={''}
              rules={{
                required: 'Обязательное поле',
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё\s-]+$/,
                  message: 'Введите город',
                },
              }}
              render={({ field }) => <Input
                className={styles.input} label={'Откуда'}
                placeholder={'Город откуда'}
                error={errors?.from?.message}
                {...field}
              />}
            />
          </div>
          <div className={styles.swapButton}>
            <Button type={'text'} onClick={handleSwap}>
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.9075 12.8078C11.7792 12.925 11.7068 13.0842 11.7068 13.25C11.7068 13.26 11.7071 13.27 11.7076 13.28C11.7158 13.4352 11.787 13.5821 11.9073 13.6919C12.0356 13.8092 12.2097 13.875 12.3912 13.875C12.5727 13.875 12.7468 13.8092 12.8751 13.6919L15.6126 11.1919C15.741 11.0747 15.8131 10.9158 15.8131 10.75C15.8131 10.5842 15.741 10.4253 15.6126 10.3081L12.8751 7.80806C12.7468 7.69085 12.5727 7.625 12.3912 7.625C12.2097 7.625 12.0356 7.69085 11.9073 7.80806C11.7789 7.92527 11.7068 8.08424 11.7068 8.25C11.7068 8.41576 11.7789 8.57473 11.9073 8.69194L14.1609 10.75L11.9075 12.8078Z"
                  fill="#A3A3A3" />
                <path
                  d="M1.44121 11.375H15.1287C15.5067 11.375 15.8131 11.0952 15.8131 10.75C15.8131 10.4048 15.5067 10.125 15.1287 10.125H1.44121C1.06324 10.125 0.756836 10.4048 0.756836 10.75C0.756836 11.0952 1.06324 11.375 1.44121 11.375Z"
                  fill="#A3A3A3" />
                <path
                  d="M4.66238 1.19218C4.79073 1.07497 4.86309 0.91576 4.86309 0.75C4.86309 0.58424 4.79098 0.425268 4.66264 0.308058L4.65673 0.302728C4.52893 0.189 4.35715 0.125 4.17871 0.125L4.17493 0.12501C3.99473 0.12592 3.8222 0.191695 3.69478 0.308058L0.957285 2.80806C0.828939 2.92527 0.756836 3.08424 0.756836 3.25C0.756836 3.41576 0.82894 3.57473 0.957285 3.69194L3.69478 6.19194C3.82313 6.30915 3.9972 6.375 4.17871 6.375C4.19052 6.375 4.20233 6.37472 4.21412 6.37416C4.38316 6.36616 4.54295 6.30124 4.66264 6.19194C4.79098 6.07473 4.86309 5.91576 4.86309 5.75C4.86309 5.58424 4.79098 5.42527 4.66264 5.30806L2.40906 3.25L4.66238 1.19218Z"
                  fill="#A3A3A3" />
                <path
                  d="M15.1287 2.625H1.44121C1.06324 2.625 0.756836 2.90482 0.756836 3.25C0.756836 3.59518 1.06324 3.875 1.44121 3.875H15.1287C15.5067 3.875 15.8131 3.59518 15.8131 3.25C15.8131 2.90482 15.5067 2.625 15.1287 2.625Z"
                  fill="#A3A3A3" />
              </svg>
            </Button>
          </div>
          <div className={styles.formTo}>
            <Controller
              name="to"
              control={control}
              defaultValue={''}
              rules={{
                required: 'Обязательное поле',
                pattern: {
                  value: /^[A-Za-zА-Яа-яЁё\s-]+$/,
                  message: 'Введите город',
                },
              }}
              render={({ field }) => <Input
                className={styles.input}
                label={'Куда'}
                placeholder={'Город куда'} {...field} error={errors?.to?.message} />}
            />
          </div>
          <div className={styles.formPassengers}>
            <Controller
              name="passengers"
              control={control}
              rules={{
                required: 'Обязательное поле',
                pattern: {
                  value: /^[1-9]\d*$/,
                  message: 'Введите число',
                },
              }}
              render={({ field }) => <Input
                className={styles.input}
                label={'Количество пассажиров'}
                placeholder={'Количество пассажиров'} {...field}
                error={errors?.passengers?.message} />}
            />
          </div>
          <div className={styles.formDate}>
            <Controller
              name="date"
              control={control}
              rules={{ required: 'Обязательное поле' }}
              render={({ field }) => (
                <DatePicker
                  label="Дата"
                  error={errors?.date?.message}
                  placeholder={'Дата поездки'}
                  className={styles.input}
                  onChange={(_, dateString) => field.onChange(dateString)}
                />
              )}
            />
          </div>
          <div className={styles.formRoundTrip}>
            <Controller
              name="roundTrip"
              control={control}
              defaultValue={true}
              render={({ field }) => (
                <div className={styles.roundTrip}>
                  <Radio label="Туда и обратно" checked={field.value === true} onChange={() => field.onChange(true)} />
                  <Radio label="В одну сторону" checked={field.value === false} onChange={() => field.onChange(false)} />
                </div>
              )}
            />
          </div>
          <div className={styles.formTransfer}>
            <Controller
              name="transfer"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkbox
                  label="Искать билеты без пересадок"
                  checked={field.value}
                  onChange={(event) => field.onChange(event.target.checked)}
                />
              )}
            />
          </div>
          <div className={styles.formButton}>
            <Button type={'primary'} htmlType={'submit'} className={styles.formSubmit}>
              <span>Найти</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};