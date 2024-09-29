import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import HotelCard from '../components/HotelCard'
import { getHotels } from '../services/api'

const LandingPage = () => {
    const [hotels, setHotels] = useState([])

    useEffect(() => {
        fetchHotels()
    }, [])

    const fetchHotels = async () => {
        try {
            const data = await getHotels()
            setHotels(data)
        } catch (error) {
            console.error('Error fetching hotels:', error)
        }
    }

    const handleSearch = (searchParams) => {
        // Implement search functionality
        console.log('Search params:', searchParams)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Find Your Perfect Stay</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                {hotels.map((hotel) => (
                    <HotelCard key={hotel._id} hotel={hotel} />
                ))}
            </div>
        </div>
    )
}

export default LandingPage