import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

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
    // Другие эндпоинты
  }),
});

export const { useGetBookingsQuery } = rootApi;
export default rootApi;
