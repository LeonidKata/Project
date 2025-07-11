import type { FC } from 'react';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import styles from './Layout.module.css';
import type { ILayout } from './layout.interface';

export const Layout: FC<ILayout> = ({children}) => {

  return (
    <>
      <Header />
      <main className={styles.container}>
        {children}
      </main>
      <Footer />
    </>
  );
};

