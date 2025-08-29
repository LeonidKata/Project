import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

import type { ResponseTableData } from '../../Entities/timezone/model/types';
import { API_URL } from '../../shared/api/rootApi.config';

export const rootApi = createApi({
  reducerPath: 'rootApi',
  baseQuery: retry(fetchBaseQuery({ baseUrl: API_URL }), {
    maxRetries: 1,
  }),
  tagTypes: ['Timezone'],
  endpoints: (builder) => ({
    // Тестовый эндпоинт получения всех бронирований
    getBookings: builder.query<string, void>({
      query: () => '/bookings',
      transformResponse: (response: { content }) => response.content,
    }),
    // Другие эндпоинты
    getTimeZones: builder.query<ResponseTableData, void>({
      query: () => `timezones`,
      providesTags: ['Timezone'],
    }),
  }),
});

export const { useGetBookingsQuery, useGetTimeZonesQuery } = rootApi;
export default rootApi;
