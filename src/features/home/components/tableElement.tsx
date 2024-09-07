import React, { ReactNode } from 'react'

const TableElement = ({ children }: { children: ReactNode }) => {
    return (
        <tr>
            <td className='size-full flex justify-center items-center'>
                {children}
            </td>
        </tr>
    )
}

export default TableElement
