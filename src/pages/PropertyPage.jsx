import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getHotel } from '../services/api'
import Button from '../components/Button'

const PropertyPage = () => {
    const { id } = useParams()
    const [hotel, setHotel] = useState(null)

    useEffect(() => {
        fetchHotel()
    }, [id])

    const fetchHotel = async () => {
        try {
            const data = await getHotel(id)
            setHotel(data)
        } catch (error) {
            console.error('Error fetching hotel:', error)
        }
    }

    if (!hotel) return <div>Loading...</div>

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{hotel.name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <img src={hotel.image} alt={hotel.name} className="w-full h-96 object-cover rounded-lg" />
                </div>
                <div>
                    <p className="text-xl mb-4">{hotel.description}</p>
                    <p className="text-2xl font-bold mb-4">${hotel.price}/night</p>
                    <Button onClick={() => console.log('Reserve clicked')}>Reserve Now</Button>
                </div>
            </div>
        </div>
    )
}

export default PropertyPage
