import clsx from 'clsx';

import { type FC, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import styles from './SignUp.module.css';
import { FieldAnswer } from './fields/field-answer/FieldAnswer';
import { CheckboxConfirm } from './fields/field-checkbox/FieldCheckbox';
import { FieldEmail } from './fields/field-email/FieldEmail';
import { FieldPassword } from './fields/field-password/FieldPassword';
import { FieldRepeatPassword } from './fields/field-repeat-password/FieldRepeatPassword';
import { FieldQuestion } from './fields/fieldQuestion/FieldQuestion';
import type { IFieldErrors } from './fields/fields.interface';
import { validateAnswerRegex, validateEmailRegex, validatePasswordRegex } from './regex';

export const SignUp: FC = () => {
  const [validEmail, setValidEmail] = useState<boolean>(false);
  const [validAnswer, setValidAnswer] = useState<boolean>(false);
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [validRepeatPassword, setValidRepeatPassword] = useState<boolean>(false);

  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data: any) => {
    //post data to server
    console.log('Данные формы:', data);
  };

  const validateEmail = (value: string) => {
    if (validateEmailRegex.test(value)) {
      setValidEmail(true);
      return true;
    } else {
      setValidEmail(false);
      return 'Не корректный email адрес';
    }
  };

  const validateAnswer = (value: string) => {
    if (validateAnswerRegex.test(value)) {
      setValidAnswer(true);
      return true;
    } else {
      setValidAnswer(false);
      return 'Строка не должна быть пустой';
    }
  };

  const validatePassword = (value: string) => {
    if (validatePasswordRegex.test(value)) {
      setValidPassword(true);
      return true;
    } else {
      setValidPassword(false);
      return 'Минимальная длина пароля 6 символов';
    }
  };

  const validateRepeatPassword = (value: string) => {
    const passwordValue = getValues('password');

    if (value === passwordValue) {
      setValidRepeatPassword(true);
      return true;
    } else {
      setValidRepeatPassword(false);
      return 'Пароли не совпадают';
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <h1 className={styles.title}>Регистрация</h1>

      <FieldEmail
        {...register('email', {
          required: 'Ввеедите корректный Email',
          validate: (value) => validateEmail(value),
        })}
        validEmail={validEmail}
        placeholder="Введите email"
        type="email"
        title="Email"
        errors={errors as IFieldErrors}
      />

      <Controller
        control={control}
        name="question"
        rules={{
          required: 'Выберите секретный вопрос из списка',
        }}
        render={({ field }) => (
          <FieldQuestion
            field={field}
            title="Секретный вопрос"
            placeholder="Выберите секретный вопрос"
            errors={errors as IFieldErrors}
          />
        )}
      />

      <FieldAnswer
        {...register('answer', {
          required: 'Введите ответ на секретный вопрос',
          validate: (value) => validateAnswer(value),
        })}
        validAnswer={validAnswer}
        placeholder="Ответ на секретный вопрос"
        type="text"
        title="Ответ на секретный вопрос"
        errors={errors as IFieldErrors}
      />

      <FieldPassword
        {...register('password', {
          required: 'Введите пароль',
          validate: (value) => value.length && validatePassword(value),
        })}
        validPassword={validPassword}
        placeholder="Пароль"
        type="password"
        title="Пароль"
        errors={errors as IFieldErrors}
      />

      <FieldRepeatPassword
        {...register('repeatPassword', {
          required: 'Повторите пароль',
          validate: (value) => validateRepeatPassword(value),
        })}
        validRepeatPassword={validRepeatPassword}
        placeholder="Повторите пароль"
        type="password"
        title="Повторите пароль"
        errors={errors as IFieldErrors}
      />

      <Controller
        control={control}
        name="isAgree"
        rules={{
          required: 'Требуется согласие с условиями',
        }}
        render={({ field }) => (
          <CheckboxConfirm
            type="checkbox"
            defaultChecked={false}
            {...field}
            errors={errors as IFieldErrors}
          />
        )}
      />

      <div className={clsx(styles['wrapper-button'])}>
        <button className={clsx(styles['signup-button'])}>Зарегистрироваться</button>
      </div>
    </form>
  );
};
