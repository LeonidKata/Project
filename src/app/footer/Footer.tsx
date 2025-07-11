import type { FC } from 'react';
import logo from '../../../public/logo.svg';
import styles from './Footer.module.css';

export const Footer: FC  = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.linkWrapper}>
        <a href='#0' className={styles.link}>О нас</a>
        <a href='#0' className={styles.link}>Политика конфиденциальности</a>
        <a href='#0' className={styles.link}>Связаться с нами</a>
      </div>
      <a href='/' className={styles.logoWrapper}>
				<img src={logo} alt="Logo" className={styles.logo}/>
        <p className={styles.title}>Air Alien</p>
			</a>
    </footer>
  );
};