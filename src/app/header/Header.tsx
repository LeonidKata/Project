import type { FC } from 'react';
import logo from '../../../public/logo.svg';
import styles from './Header.module.css';

export const Header: FC = () => {

  return (
    <header className={styles.header}>
      <a href='/' className={styles.logoWrapper}>
				<img src={logo} alt="Logo" className={styles.logo}/>
        <p className={styles.title}>Air Alien</p>
			</a>
      <div className={styles.btnWrapper}>
        <a href='#0' className={styles.signin}>Вход</a>
        <a href='#0' className={styles.signup}>Регистрация</a>
      </div>
    </header>
  );
};