import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProps } from '../../types/userProps'

export type FiltersState = {
    name: string
    username: string
    email: string
    phone: string
}

type UsersState = {
    users: UserProps[]
    filters: FiltersState
}

const initialState: UsersState = {
    users: [],
    filters: {
        name: '',
        username: '',
        email: '',
        phone: '',
    },
}

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserProps[]>) => {
            state.users = action.payload
        },
        setFilter: (
            state,
            action: PayloadAction<{ key: keyof FiltersState; value: string }>
        ) => {
            const { key, value } = action.payload
            state.filters[key] = value
        },
    },
})

export const { setUsers, setFilter } = users.actions
export default users
