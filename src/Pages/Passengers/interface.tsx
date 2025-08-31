interface Passenger {
  ID: number;
  fullName: string;
  gender: string;
  phoneNumber: string;
  birthDate: string;
  serialNumberPassport: string;
  passportIssuingCountry: string;
  passportIssuingDate: string;
}

export interface PropsPassenger {
  data?: Passenger[];
}
