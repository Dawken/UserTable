import React from 'react'
import NameIcon from '../../../components/ui/icons/nameIcon'
import UserIcon from '../../../components/ui/icons/userIcon'
import EmailIcon from '../../../components/ui/icons/emailIcon'
import PhoneIcon from '../../../components/ui/icons/phoneIcon'
import TableInput from '../../../features/home/components/tableInput/tableInput'
import TableBody from '../../../features/home/components/tableBody/tableBody'
import { useSelector } from 'react-redux'
import { RootState } from '../../../context/redux/store'

const Home = () => {
    const filters = useSelector((state: RootState) => state.users.filters)

    const { name, username, email, phone } = filters
    return (
        <div className='size-full flex items-center justify-center relative overflow-y-auto'>
            <div className='overflow-x-auto m-2 max-h-[500px] h-full'>
                <table className='table size-full max-w-[1000px] text-xs text-left text-gray-400 rounded-2xl overflow-hidden bg-gray-800 '>
                    <thead className='table bg-gray-700 break-word uppercase'>
                        <tr>
                            <TableInput
                                value={name}
                                keyName={'name'}
                                icon={<NameIcon />}
                            />
                            <TableInput
                                value={username}
                                keyName={'username'}
                                icon={<UserIcon />}
                            />
                            <TableInput
                                value={email}
                                keyName={'email'}
                                icon={<EmailIcon />}
                            />
                            <TableInput
                                value={phone}
                                keyName={'phone'}
                                icon={<PhoneIcon />}
                            />
                        </tr>
                    </thead>
                    <TableBody />
                </table>
            </div>
        </div>
    )
}
export default Home
