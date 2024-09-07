import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserProps } from '../types/userProps'

const authGateway = process.env.REACT_APP_AUTH_GATEWAY

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: authGateway,
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<UserProps[], void>({
            query: () => '/users',
        }),
    }),
})

export const { useGetUsersQuery } = usersApi
