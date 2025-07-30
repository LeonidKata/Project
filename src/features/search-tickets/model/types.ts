export interface SearchTicketsForm {
  from: string;
  to: string;
  passengers: number;
  date: string;
  roundTrip: boolean;
  transfer: boolean;
}