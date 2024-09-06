import React from 'react'

const TdCell = ({ name }: { name: string }) => {
    return (
        <td scope='col' className='px-6 py-3'>
            {name}
        </td>
    )
}

export default TdCell
