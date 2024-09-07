import React from 'react'
import { useDispatch } from 'react-redux'
import { FiltersState, setFilter } from '../../../context/redux/users'

const TableInput = ({
    value,
    keyName,
}: {
    value: string
    keyName: keyof FiltersState
}) => {
    const dispatch = useDispatch()
    const handleFilterChange = (key: keyof FiltersState, value: string) => {
        dispatch(setFilter({ key, value }))
    }
    return (
        <th className='p-3'>
            <input
                className='font-semibold py-1.5 ps-10 text-sm text-white border-2 focus:border-blue-500 outline-none border-gray-500 rounded-lg bg-gray-700 transition-all duration-300'
                type='text'
                placeholder={keyName}
                value={value}
                onChange={(event) => {
                    handleFilterChange(keyName, event.target.value)
                }}
            />
        </th>
    )
}

export default TableInput
