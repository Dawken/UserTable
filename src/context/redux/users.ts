import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FiltersTypes } from '../../types/filterTypes'

type UsersState = {
    filters: FiltersTypes
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
            action: PayloadAction<{ key: keyof FiltersTypes; value: string }>
        ) => {
            const { key, value } = action.payload
            state.filters[key] = value
        },
    },
})

export const { setFilter } = users.actions
export default users
