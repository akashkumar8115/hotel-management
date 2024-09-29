import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../components/Button'

const BookingPage = () => {
    const { id } = useParams()
    const [bookingDetails, setBookingDetails] = useState({
        checkIn: '',
        checkOut: '',
        guests: 1,
    })

    const handleChange = (e) => {
        setBookingDetails({ ...bookingDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Implement booking logic
        console.log('Booking submitted:', { hotelId: id, ...bookingDetails })
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="checkIn" className="block mb-2">Check-in Date</label>
                    <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={bookingDetails.checkIn}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="checkOut" className="block mb-2">Check-out Date</label>
                    <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={bookingDetails.checkOut}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="guests" className="block mb-2">Number of Guests</label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        value={bookingDetails.guests}
                        onChange={handleChange}
                        min="1"
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <Button type="submit" className="w-full">Confirm Booking</Button>
            </form>
        </div>
    )
}

export default BookingPage
