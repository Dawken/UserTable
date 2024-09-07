import axiosJsonPlaceholder from '../../../lib/axiosConfig'
import { useQuery } from 'react-query'
import { setUsers } from '../../../context/redux/users'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../context/redux/store'

const useHome = () => {
    const dispatch = useDispatch()
    const users = useSelector((state: RootState) => state.users.users)
    const filters = useSelector((state: RootState) => state.users.filters)

    useQuery('users', () =>
        axiosJsonPlaceholder.get('/users').then((users) => {
            dispatch(setUsers(users.data))
        })
    )

    const {
        name: filterName,
        username: filterUserName,
        email: filterEmail,
        phone: filterPhone,
    } = filters

    const filteredUsers = users.filter((user) => {
        const { name, username, email, phone } = user
        return (
            name.toLowerCase().includes(filterName.toLowerCase()) &&
            username.toLowerCase().includes(filterUserName.toLowerCase()) &&
            email.toLowerCase().includes(filterEmail.toLowerCase()) &&
            phone.toLowerCase().includes(filterPhone.toLowerCase())
        )
    })

    return {
        filters,
        filteredUsers,
    }
}

export default useHome
