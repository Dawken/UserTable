import { configureStore } from '@reduxjs/toolkit'
import users from './users'

export const store = configureStore({
    reducer: {
        users: users.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
