import type { FC } from 'react';
import styles from './PriceCard.module.css';
import warning from './WarningCircle.svg'
import group372 from './Group 372.png';
import group373 from './Group 373.png';
import group374 from './Group 373@2x.png';

type PriceCategory = 'Эконом Базовый' | 'Эконом Стандарт' | 'Эконом Плюс';

interface PriceCardProps {
    priceName: PriceCategory | string
    price: number
    numberTickets: number
}

export const PriceCard: FC<PriceCardProps> = ({ priceName = '-', price = 5887, numberTickets = 0 }) => {

    const getGroupImage = (): string => {
        switch (priceName) {
            case 'Эконом Базовый':
                return group372;
            case 'Эконом Стандарт':
                return group373;
            case 'Эконом Плюс':
                return group374;
            default:
                return group373;
        }
    };

    const formatPrice = (value: number): string => {
        return new Intl.NumberFormat('ru-RU').format(value);
    };

    return (
        <div className={`${styles.priceCard} ${styles.flex}`} style={priceName === 'Эконом Плюс' ? { background: '#C2DCFF' } : { background: '#EBF3FF' }}>
            <div className={`${styles.priceblock} ${styles.flex}`}>
                <h4 className={`${styles.titlePriceCard} ${styles.flex}`}>{priceName}<img className={styles.group3__} alt={`Иконка ${priceName}`} src={getGroupImage()} /></h4>
                <h2 className={styles.price}>{formatPrice(price)} ₽</h2>
            </div>
            {(numberTickets <= 10) ? <div className={`${styles.numberOfTickets}  ${styles.flex}`}><img src={warning} />Осталось {numberTickets}</div> : null}
        </div >
    )
}