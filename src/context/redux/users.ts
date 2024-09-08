import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersState } from '../../types/filterProps'

type UsersState = {
    filters: FiltersState
}

const initialState: UsersState = {
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
        setFilter: (
            state,
            action: PayloadAction<{ key: keyof FiltersState; value: string }>
        ) => {
            const { key, value } = action.payload
            state.filters[key] = value
        },
    },
})

export const { setFilter } = users.actions
export default users
