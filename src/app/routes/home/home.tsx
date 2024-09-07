import React from 'react'
import TdCell from '../../../features/home/components/tdCell'
import { UserProps } from '../../../types/userProps'
import useHome from './useHome'
import TableInput from '../../../features/home/components/tableInput'

const Home = () => {
    const { filters, filteredUsers } = useHome()

    const { name, username, email, phone } = filters

    return (
        <div className='size-full flex items-center justify-center relative overflow-y-auto'>
            <div className='overflow-x-auto m-2 max-h-[500px] h-full'>
                <table className='w-full min-h-full  max-w-[1000px] text-xs text-left text-gray-400 rounded-2xl overflow-hidden bg-gray-800 '>
                    <thead className='table bg-gray-700 break-word uppercase'>
                        <tr>
                            <TableInput value={name} keyName={'name'} />
                            <TableInput value={username} keyName={'username'} />
                            <TableInput value={email} keyName={'email'} />
                            <TableInput value={phone} keyName={'phone'} />
                        </tr>
                    </thead>
                    <tbody className='w-full table'>
                        {filteredUsers.map((user: UserProps) => {
                            const { name, username, email, phone } = user
                            return (
                                <tr
                                    key={user.id}
                                    className='border-b border-gray-700 font-medium'
                                >
                                    <TdCell name={name} />
                                    <TdCell name={username} />
                                    <TdCell name={email} />
                                    <TdCell name={phone} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home
