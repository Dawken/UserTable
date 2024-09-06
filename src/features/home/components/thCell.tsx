import React from 'react'

const ThCell = ({ name }: { name: string }) => {
    return (
        <th scope='col' className='px-6 py-3 text-white'>
            {name}
        </th>
    )
}

export default ThCell
