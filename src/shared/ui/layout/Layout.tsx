import type { FC } from 'react';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Main } from './main/Main';

export const Layout: FC = () => {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};

