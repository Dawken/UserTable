import { configureStore } from '@reduxjs/toolkit'
import users from './users'
import { usersApi } from '../../services/usersApi'

export const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer,
        users: users.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
