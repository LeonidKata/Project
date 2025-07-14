
import type { FC } from 'react';
import { PriceCard } from '../PriceCard/PriceCard';
import Image from './XT 1.svg';
import arrow from './CaretDown.png';
import airplaneTakeOf from './AirplaneTakeoff.svg';
import airplaneLanding from './AirplaneLanding.svg'
import defis from './---------------------------------.png'
import styles from './Ticket.module.css';

interface TicketProps {
    companyName?: string;
    travelTime?: string;
    departureCity?: string;
    cityOfArrival?: string;
    dateDeparture?: string;
    dateArrival?: string;
    timeDeparture?: string;
    timeArrival?: string;
    airportDeparture?: string;
    airportArrival?: string;
    logoCompany?: string
}

export const Ticket: FC<TicketProps> = ({
    companyName = 'Globus LLC',
    travelTime = '1ч 40мин',
    departureCity = 'Санкт-Петербург',
    cityOfArrival = 'Москва',
    dateDeparture = '30 июн, Пт',
    dateArrival = '30 июн, Пт',
    timeDeparture = '05:00',
    timeArrival = '06:40',
    airportDeparture = 'LED',
    airportArrival = 'DME',
    logoCompany = Image
}) => {

    return (
        <div className={`${styles.ticket} ${styles.flex} ${styles.fontBase}`}>
            <div className={`${styles.flightInformation} ${styles.flex}`}>
                <header className={`${styles.ticketHeader} ${styles.flex}`}>
                    <h4 className={`${styles.nameCompany} ${styles.flex}`}><img src={logoCompany} />{companyName}</h4>
                    <h4 className={`${styles.textLearnMore} ${styles.flex}`}>Прямой рейс<img className={styles.arrow} src={arrow} alt='arrow'></img></h4>
                </header>
                <div className={`${styles.travelTime} ${styles.flex}`} ><img alt='airplane Take Of' src={airplaneTakeOf} />в пути {travelTime}<img alt='airplane Landing' src={airplaneLanding} /></div>
                <div className={`${styles.information} ${styles.flex}`}>
                    <div className={`${styles.departureInformation} ${styles.flex}`}>
                        <h2 className={`${styles.time} ${styles.flex}`}>{timeDeparture} <span className={styles.airport}>{airportDeparture}</span></h2>
                        <h4 className={styles.cite}>{departureCity}</h4>
                        <h4 className={styles.date}>{dateDeparture}</h4>
                    </div>
                    <img className={styles.defis} src={defis} alt='defis' />
                    <div className={`${styles.arrivalInformation} ${styles.flex}`}>
                        <h2 className={`${styles.time} ${styles.flex}`}><span className={styles.airport}>{airportArrival}</span>{timeArrival}</h2>
                        <h4 className={styles.cite}>{cityOfArrival}</h4>
                        <h4 className={styles.date}>{dateArrival}</h4>
                    </div>
                </div>
            </div>
            <div className={`${styles.pricingPlans} ${styles.flex}`}>
                <PriceCard priceName='Эконом Базовый' price={3787} numberTickets={2} />
                <PriceCard priceName='Эконом Стандарт' price={5887} numberTickets={15} />
                <PriceCard priceName='Эконом Плюс' price={12437} numberTickets={11} />
            </div>
        </div>
    )
}