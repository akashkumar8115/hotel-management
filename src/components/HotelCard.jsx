import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({ hotel }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <p className="text-gray-600 mb-4">{hotel.description}</p>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${hotel.price}/night</span>
                    <Link to={`/property/${hotel._id}`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
