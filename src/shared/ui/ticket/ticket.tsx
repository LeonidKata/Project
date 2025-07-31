
import type { FC } from 'react';
import { TariffCard } from '../TariffCard/TariffCard';
import Image from './icons/XT 1.svg';
import arrow from './icons/CaretDown.png';
import airplaneTakeOf from './icons/AirplaneTakeoff.svg';
import airplaneLanding from './icons/AirplaneLanding.svg'
import defis from './icons/---------------------------------.png'

import styles from './Ticket.module.css'

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

        <div className={styles.ticket}>
            <div className={styles.flightInformation}>
                <header className={styles.ticketHeader}>
                    <h4 className={styles.nameCompany}><img src={logoCompany} />{companyName}</h4>
                    <button className={styles.textLearnMore}>Прямой рейс<img className='arrow' src={arrow} alt='arrow'></img></button>
                </header>
                <div className={styles.travelTime} ><img alt='airplane Take Of' src={airplaneTakeOf} />в пути {travelTime}<img alt='airplane Landing' src={airplaneLanding} /></div>
                <div className={styles.information}>
                    <div className={styles.departureInformation}>
                        <h2 className={styles.time}>{timeDeparture} <span className='airport'>{airportDeparture}</span></h2>
                        <h4 className={styles.cite}>{departureCity}</h4>
                        <h4 className={styles.date}>{dateDeparture}</h4>
                    </div>
                    <img className={styles.defis} src={defis} alt='defis' />
                    <div className={styles.arrivalInformation}>
                        <h2 className={styles.time} ><span className='airport'>{airportArrival}</span>{timeArrival}</h2>
                        <h4 className={styles.cite}>{cityOfArrival}</h4>
                        <h4 className={styles.date}>{dateArrival}</h4>
                    </div>
                </div>
            </div>
            <div className={styles.pricingPlans}>
                <TariffCard priceName='Эконом Базовый' price={3787} numberTickets={2} />
                <TariffCard priceName='Эконом Стандарт' price={5887} numberTickets={15} />
                <TariffCard priceName='Эконом Плюс' price={12437} numberTickets={11} />
            </div>
        </div>
    )
}