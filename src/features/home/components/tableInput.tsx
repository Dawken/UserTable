import React, { ReactElement } from 'react'
import { useDispatch } from 'react-redux'
import { FiltersState, setFilter } from '../../../context/redux/users'

const TableInput = ({
    value,
    keyName,
    icon,
}: {
    value: string
    keyName: keyof FiltersState
    icon: ReactElement
}) => {
    const dispatch = useDispatch()
    const handleFilterChange = (key: keyof FiltersState, value: string) => {
        dispatch(setFilter({ key, value }))
    }
    return (
        <th className='p-3 relative group focus-within:text-blue-500'>
            <div className='absolute p-2 group-focus-within:text-blue-500 transition-all duration-300'>
                {icon}
            </div>
            <input
                className='font-semibold py-1.5 ps-8 text-sm text-white border-2 border-gray-500 rounded-lg bg-gray-700 outline-none transition-all duration-300 group-focus-within:border-blue-500'
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
