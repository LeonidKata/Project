export interface Destination {
  id: number;
  airportCode: string;
  timezone: string;
  countryName: string;
  cityName: string;
  airportName: string;
}

export interface PropsDestination {
  data?: Destination[];
}
