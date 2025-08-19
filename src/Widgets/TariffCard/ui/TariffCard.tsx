/* eslint-disable prettier/prettier */
import type { FC } from 'react';

import easyTariff from '../icons/Group 372.png';
import middleTariff from '../icons/Group 373.png';
import fullTariff from '../icons/Group 373@2x.png';
import warning from '../icons/WarningCircle.svg';
import styles from './style.module.css';

type PriceCategory = 'Эконом Базовый' | 'Эконом Стандарт' | 'Эконом Плюс';

interface TariffCardProps {
  priceName: PriceCategory | string;
  price: number;
  numberTickets: number;
}

export const TariffCard: FC<TariffCardProps> = ({
  priceName = '-',
  price = 5887,
  numberTickets = 0,
}) => {
  const getGroupImage = (): string => {
    switch (priceName) {
      case 'Эконом Базовый':
        return easyTariff;
      case 'Эконом Стандарт':
        return middleTariff;
      case 'Эконом Плюс':
        return fullTariff;
      default:
        return easyTariff;
    }
  };

  const formatPrice = (value: number): string => {
    return new Intl.NumberFormat('ru-RU').format(value);
  };

  return (
    <div
      className={styles.priceCard}
      style={priceName === 'Эконом Плюс' ? { background: '#C2DCFF' } : { background: '#EBF3FF' }}
    >
      <div className={styles.priceblock}>
        <h4 className={styles.titlePriceCard}>
          {priceName}
          <img className={styles.group3__} alt={`Иконка ${priceName}`} src={getGroupImage()} />
        </h4>
        <h2 className={styles.price}>{formatPrice(price)} ₽</h2>
      </div>
      {numberTickets <= 10 ? (
        <div className={styles.numberOfTickets}>
          <img src={warning} />
          Осталось {numberTickets}
        </div>
      ) : null}
    </div>
  );
};
