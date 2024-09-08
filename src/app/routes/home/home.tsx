import React from 'react'
import TdCell from '../../../features/home/components/tdCell'
import { UserProps } from '../../../types/userProps'
import useHome from './useHome'
import NameIcon from '../../../components/ui/icons/nameIcon'
import UserIcon from '../../../components/ui/icons/userIcon'
import EmailIcon from '../../../components/ui/icons/emailIcon'
import PhoneIcon from '../../../components/ui/icons/phoneIcon'
import Loader from '../../../components/ui/animations/loader/loader'
import TableElement from '../../../features/home/components/tableElement'
import TableInput from '../../../features/home/components/tableInput/tableInput'

const Home = () => {
    const { filters, filteredUsers, isLoading, isError, isKeyOfFiltersState } =
        useHome()

    const filtersIcons = {
        name: <NameIcon />,
        username: <UserIcon />,
        email: <EmailIcon />,
        phone: <PhoneIcon />,
    }
    return (
        <div className='size-full flex items-center justify-center relative overflow-y-auto'>
            <div className='overflow-x-auto m-2 max-h-[500px] h-full'>
                <table className='table size-full max-w-[1000px] text-xs text-left text-gray-400 rounded-2xl overflow-hidden bg-gray-800 '>
                    <thead className='table bg-gray-700 break-word uppercase'>
                        <tr>
                            {Object.keys(filters).map((key) => {
                                if (isKeyOfFiltersState(key)) {
                                    const value = filters[key]
                                    return (
                                        <TableInput
                                            key={key}
                                            value={value}
                                            keyName={key}
                                            icon={filtersIcons[key]}
                                        />
                                    )
                                }
                                return null
                            })}
                        </tr>
                    </thead>
                    <tbody
                        className={`w-full ${
                            isLoading || filteredUsers?.length === 0 || isError
                                ? 'h-[calc(100%-60px)]'
                                : 'h-fit'
                        } table`}
                    >
                        {isLoading ? (
                            <TableElement>
                                <Loader />
                            </TableElement>
                        ) : filteredUsers && filteredUsers.length > 0 ? (
                            filteredUsers.map((user: UserProps) => {
                                const { name, username, email, phone } = user
                                return (
                                    <tr
                                        key={user.id}
                                        className='border-b border-gray-700 font-medium hover:bg-gray-700 transition-all duration-300'
                                    >
                                        <TdCell name={name} />
                                        <TdCell name={username} />
                                        <TdCell name={email} />
                                        <TdCell name={phone} />
                                    </tr>
                                )
                            })
                        ) : (
                            !isError && (
                                <TableElement>
                                    Results not found :(
                                </TableElement>
                            )
                        )}
                        {isError && (
                            <TableElement>
                                Error occured while fetching data. Try again
                                later
                            </TableElement>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home
