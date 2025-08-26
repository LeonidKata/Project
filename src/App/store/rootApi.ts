import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import type { AircraftResponse } from '@/Entities/aircraft/model/types.ts';

import { API_URL } from '../../shared/api/rootApi.config';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: API_URL }), {
    maxRetries: 1,
  }),
  endpoints: (builder) => ({
    // Тестовый эндпоинт получения всех бронирований
    getBookings: builder.query<string, void>({
      query: () => '/bookings',
      transformResponse: (response: { content }) => response.content,
    }),
    getAircraft: builder.query<AircraftResponse, { page: number; size: number }>({
      query: ({ page, size }) => `/aircrafts?page=${page}&size=${size}`,
    }),
  }),
});

export const { useGetBookingsQuery, useGetAircraftQuery } = rootApi;
export default rootApi;
