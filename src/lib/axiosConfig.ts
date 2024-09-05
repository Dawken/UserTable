import axios from 'axios'

const authGateway = process.env.REACT_APP_AUTH_GATEWAY

const axiosJsonPlaceholder = axios.create({
    baseURL: authGateway,
})

export default axiosJsonPlaceholder
