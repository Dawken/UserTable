import React from 'react'
import axiosJsonPlaceholder from '../../lib/axiosConfig'
import { useQuery } from 'react-query'

const Home = () => {
    const { data: users } = useQuery('tags', () =>
        axiosJsonPlaceholder.get('/users')
    )

    return (
        <div className='w-full h-full flex justify-center items-center text-sm font-medium text-white'>
            TEST
        </div>
    )
}
export default Home
