import axios from 'axios'

const API_URL = 'http://localhost:5000/api'

const api = axios.create({
    baseURL: API_URL,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export const login = async (email, password) => {
    const response = await api.post('/auth/login', { email, password })
    return response.data
}

export const signup = async (userData) => {
    const response = await api.post('/auth/signup', userData)
    return response.data
}

export const getHotels = async () => {
    const response = await api.get('/hotels')
    return response.data
}

export const getHotel = async (id) => {
    const response = await api.get(`/hotels/${id}`)
    return response.data
}

export const addHotel = async (hotelData) => {
    const response = await api.post('/hotels', hotelData)
    return response.data
}

export const deleteHotel = async (id) => {
    const response = await api.delete(`/hotels/${id}`)
    return response.data
}

export const bookHotel = async (hotelId, bookingDetails) => {
    const response = await api.post('/bookings', { hotelId, ...bookingDetails })
    return response.data
}

export default api