import { useState } from 'react';

import adminEmails from '../model/adminsEmail';
import styles from './SignInForm.module.css';

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const isValid = emailRegex.test(email);
    const isAdmin = isValid && adminEmails.includes(email.toLowerCase());
    return { isValid, isAdmin, error: isValid ? '' : 'Invalid email format' };
  };

  const validatePassword = (password: string) => {
    return password.length < 6 ? 'пароль должен состоять из 6 и более знаков' : '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const { error } = validateEmail(value); /* isValid*/
      setErrors({ ...errors, email: error });
    } else if (name === 'password') {
      setErrors({ ...errors, password: validatePassword(value) });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { isValid: emailValid, error: emailError, isAdmin } = validateEmail(formData.email);
    const passwordError = validatePassword(formData.password);
    setErrors({ email: emailError, password: passwordError });

    if (emailValid && !passwordError) {
      console.log(`Form submitted (${isAdmin ? 'Admin' : 'User'}):`, formData);
    } else {
      console.log('Validation failed:', errors);
    }
  };

  const isAdmin = validateEmail(formData.email).isAdmin;
  const hasEmailError = !!errors.email;
  const hasPasswordError = !!errors.password;

  return (
    <div className={styles.signInForm}>
      <h2 className={styles.title}>{isAdmin ? 'Вход' : 'Вход'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="input text"
            className={`${styles.input} ${hasEmailError ? styles.error : ''}`}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.inputGroup}>
          <div className="flex items-center">
            <label className={styles.label}>Пароль</label>
          </div>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="input text"
              className={`${styles.input} ${hasPasswordError ? styles.error : ''}`}
            />
            <button onClick={() => setShowPassword(!showPassword)}>{/*svg icon*/}</button>
          </div>
          {errors.password && (
            <p className={styles.error}>
              {errors.password}
              <span
                className={styles.clearButton}
                onClick={() => setFormData({ ...formData, password: '' })}
              >
                ✕
              </span>
            </p>
          )}
          {errors.password && <p className={styles.error}>Ошибка ввода! Зарегистрируйтесь</p>}
        </div>
        <div className={styles.inputGroup}>
          <a href="/register" className={styles.link}>
            Еще нет аккаунта? <span className="reg">Зарегистрируйтесь </span>
          </a>
        </div>
        <div className={styles.inputGroup}>
          <button type="submit" className={styles.submitButton}>
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
