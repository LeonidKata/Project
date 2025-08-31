export interface Tickets {
  id: number;
  fullName: string;
  ticketNumber: string;
  flightCode: string;
  departureDateTime: string;
  arrivalDateTime: string;
  boardingNumber: number;
}

export interface PropsTickets {
  data?: Tickets[];
}
