export interface TimeZoneTable {
  id: string;
  countryName: string;
  cityName: string;
  gmt: string;
  gmtWinter: string;
}

export interface Sort {
  direction: string;
  nullHandling: string;
  ascending: boolean;
  property: string;
  ignoreCase: boolean;
}

export interface Pageable {
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
  offset: number;
  sort: Sort[];
}

export interface ResponseTableData {
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  numberOfElements: number;
  content: TimeZoneTable[];
  sort: Sort[];
  first: boolean;
  last: boolean;
  pageable: Pageable;
  empty: boolean;
}
