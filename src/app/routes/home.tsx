import React, { useEffect } from 'react'
import axiosJsonPlaceholder from '../../lib/axiosConfig'
import { useQuery } from 'react-query'
import ThCell from '../../features/home/components/thCell'
import TdCell from '../../features/home/components/tdCell'
import { UserProps } from '../../types/userProps'
import { setUsers } from '../../context/redux/users'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../context/redux/store'

const Home = () => {
    const dispatch = useDispatch()

    const users = useSelector((state: RootState) => state.users.users)

    useQuery('users', () =>
        axiosJsonPlaceholder.get('/users').then((users) => {
            dispatch(setUsers(users.data))
        })
    )

    return (
        <div className='size-full flex items-center justify-center relative overflow-y-auto'>
            <div className='overflow-x-auto m-2'>
                <table className='w-fit h-fit max-w-[1000px] text-xs text-left text-gray-400 rounded-2xl overflow-hidden'>
                    <thead className=' bg-gray-700 break-word uppercase'>
                        <tr>
                            <ThCell name={'Name'} />
                            <ThCell name={'User name'} />
                            <ThCell name={'Email'} />
                            <ThCell name={'Phone'} />
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user: UserProps) => (
                            <tr
                                key={user.id}
                                className='border-b bg-gray-800 border-gray-700 font-medium'
                            >
                                <ThCell name={user.name} />
                                <TdCell name={user.username} />
                                <TdCell name={user.email} />
                                <TdCell name={user.phone} />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Home
