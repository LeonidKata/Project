
import type { FC } from 'react';
import styles from './ticket.module.css';
import Image from './XT 1.svg';
import arrow from './CaretDown.png';
import airplaneTakeOf from './AirplaneTakeoff.svg';
import airplaneLanding from './AirplaneLanding.svg'
import defis from './---------------------------------.png'
import group372 from './Group 372.png';
import warning from './WarningCircle.svg'


export const Ticket: FC = () => {
    let time;
    return (
        <div className={styles.ticket}>
            <div className={styles.flightInformation}>
                <header className={styles.ticketHeader}>
                    <h4 className={styles.nameCompany}><img src={Image}></img>Globus LLC</h4>
                    <h4 className={styles.textLearnMore}>Прямой рейс<img className={styles.arrow} src={arrow} alt='arrow'></img></h4>
                </header>
                <div className={styles.travelTime}><img alt='airplane Take Of' src={airplaneTakeOf} />в пути {time = '1ч 40мин'}<img alt='airplane Landing' src={airplaneLanding} /></div>
                <div className={styles.information}>
                    <div className={styles.departureInformation}>
                        <h2 className={styles.time}>05:00 <span className={styles.airport}>LED</span></h2>
                        <h4 className={styles.cite}>Санк-Петербург</h4>
                        <h4 className={styles.date}>30 июн, Пт</h4>
                    </div>
                    <img className={styles.defis} src={defis} alt='defis' />
                    <div className={styles.arrivalInformation}>
                        <h2 className={styles.time}><span className={styles.airport}>DME</span>06:40</h2>
                        <h4 className={styles.cite}>Москва</h4>
                        <h4 className={styles.date}>30 июн, Пт</h4>
                    </div>
                </div>
            </div>
            <div className={styles.pricingPlans}>
                <div className={styles.priceCard}>
                    <div className={styles.priceblock}>
                        <h4 className={styles.titlePriceCard}>Эконом базовый <img alt='' src={group372} /></h4>
                        <h2 className={styles.price}>3 787 ₽</h2>
                    </div>
                    <div className={styles.numberOfTickets}><img src={warning} />Осталось 2</div>
                </div>
                <div className={styles.priceCard}>
                    <div className={styles.priceblock}>
                        <h4 className={styles.titlePriceCard}>Эконом базовый <img alt='' src={group372} /></h4>
                        <h2 className={styles.price}>3 787 ₽</h2>
                    </div>
                    <div className={styles.numberOfTickets}><img src={warning} />Осталось 2</div>
                </div>
                <div className={styles.priceCard}>
                    <div className={styles.priceblock}>
                        <h4 className={styles.titlePriceCard}>Эконом базовый <img alt='' src={group372} /></h4>
                        <h2 className={styles.price}>3 787 ₽</h2>
                    </div>
                    <div className={styles.numberOfTickets}><img src={warning} />Осталось 2</div>
                </div>
            </div>
        </div>
    )
}