export interface Aircraft {
  id: number;
  fullName: string;
  ticketNumber: string;
  flightCode: string;
  departureDateTime: string;
  arrivalDateTime: string;
  boardingNumber: number;
}
export interface AircraftResponse {
  content: Aircraft[];
  totalElements: number;
}
