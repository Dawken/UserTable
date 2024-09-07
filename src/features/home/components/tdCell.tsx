import React from 'react'

const TdCell = ({ name }: { name: string }) => {
    return (
        <td scope='col' className='px-6 py-3 w-1/4'>
            <span className='break-word line-clamp-3'>{name}</span>
        </td>
    )
}

export default TdCell
