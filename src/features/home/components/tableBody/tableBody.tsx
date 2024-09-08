import React from 'react'
import TableElement from '../tableElement'
import Loader from '../../../../components/ui/animations/loader/loader'
import TdCell from '../tdCell'
import useTableBody from './useTableBody'
import { UserTypes } from '../../../../types/userTypes'

const TableBody = () => {
    const { filteredUsers, isLoading, isError } = useTableBody()
    return (
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
                filteredUsers.map((user: UserTypes) => {
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
                !isError && <TableElement>Results not found :(</TableElement>
            )}
            {isError && (
                <TableElement>
                    Error occured while fetching data. Try again later
                </TableElement>
            )}
        </tbody>
    )
}

export default TableBody
