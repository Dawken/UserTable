import React from 'react'
import TdCell from '../../../features/home/components/tdCell'
import { UserProps } from '../../../types/userProps'
import useHome from './useHome'
import TableInput from '../../../features/home/components/tableInput'
import NameIcon from '../../../components/ui/icons/nameIcon'
import UserIcon from '../../../components/ui/icons/userIcon'
import EmailIcon from '../../../components/ui/icons/emailIcon'
import PhoneIcon from '../../../components/ui/icons/phoneIcon'
import Loader from '../../../components/ui/animations/loader/loader'
import TableElement from '../../../features/home/components/tableElement'

const Home = () => {
    const { filters, filteredUsers, isLoading, isError } = useHome()

    const { name, username, email, phone } = filters

    return (
        <div className='size-full flex items-center justify-center relative overflow-y-auto'>
            <div className='overflow-x-auto m-2 max-h-[500px] h-full'>
                <table className='table size-full max-w-[1000px] text-xs text-left text-gray-400 rounded-2xl overflow-hidden bg-gray-800 '>
                    <thead className='table bg-gray-700 break-word uppercase'>
                        <tr>
                            <TableInput
                                value={name}
                                keyName={'name'}
                                icon={<NameIcon />}
                            />
                            <TableInput
                                value={username}
                                keyName={'username'}
                                icon={<UserIcon />}
                            />
                            <TableInput
                                value={email}
                                keyName={'email'}
                                icon={<EmailIcon />}
                            />
                            <TableInput
                                value={phone}
                                keyName={'phone'}
                                icon={<PhoneIcon />}
                            />
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
                            <TableElement>
                                <span>Results not found :(</span>
                            </TableElement>
                        )}
                        {isError && (
                            <TableElement>
                                <span>
                                    Error occured while fetching data. Try again
                                    later
                                </span>
                            </TableElement>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home
