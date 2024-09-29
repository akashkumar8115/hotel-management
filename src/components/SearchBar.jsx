import React, { useState } from 'react'

const SearchBar = ({ onSearch }) => {
    const [destination, setDestination] = useState('')
    const [dates, setDates] = useState('')
    const [guests, setGuests] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSearch({ destination, dates, guests })
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <input
                    type="text"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="border rounded px-3 py-2"
                />
                <input
                    type="text"
                    placeholder="Check-in - Check-out"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    className="border rounded px-3 py-2"
                />
                <input
                    type="number"
                    placeholder="Guests"
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    min="1"
                    className="border rounded px-3 py-2"
                />
                <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700">
                    Search
                </button>
            </div>
        </form>
    )
}

export default SearchBar
