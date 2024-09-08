import { useSelector } from 'react-redux'
import { RootState } from '../../../context/redux/store'
import { useGetUsersQuery } from '../../../services/usersApi'
import { FiltersState } from '../../../types/filterProps'

const useHome = () => {
    const filters = useSelector((state: RootState) => state.users.filters)

    const {
        name: filterName,
        username: filterUserName,
        email: filterEmail,
        phone: filterPhone,
    } = filters

    const { data: usersData, isLoading, isError } = useGetUsersQuery()

    const filteredUsers = usersData?.filter((user) => {
        const { name, username, email, phone } = user
        return (
            name.toLowerCase().includes(filterName.toLowerCase()) &&
            username.toLowerCase().includes(filterUserName.toLowerCase()) &&
            email.toLowerCase().includes(filterEmail.toLowerCase()) &&
            phone.toLowerCase().includes(filterPhone.toLowerCase())
        )
    })
    const isKeyOfFiltersState = (key: string): key is keyof FiltersState => {
        return key in filters
    }

    return {
        filters,
        filteredUsers,
        isLoading,
        isError,
        isKeyOfFiltersState,
    }
}

export default useHome
