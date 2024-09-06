import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserProps } from '../../types/userProps'

interface UsersState {
    users: UserProps[]
}

const initialState: UsersState = {
    users: [],
}

export const users = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserProps[]>) => {
            state.users = action.payload
        },
    },
})

export const { setUsers } = users.actions
export default users
