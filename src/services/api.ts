import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Tipo } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getPrato: builder.query<Tipo[], void>({
      query: () => 'restaurantes'
    }),
    getRestPrato: builder.query<Tipo, string>({
      query: (id) => `restaurantes/${id}`
    })
  })
})

export const { useGetPratoQuery, useGetRestPratoQuery } = api
export default api
