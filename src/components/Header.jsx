import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="bg-blue-600 text-white">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">HotelBooking</Link>
                <div>
                    <Link to="/login" className="px-4 py-2 rounded hover:bg-blue-700">Login</Link>
                    <Link to="/signup" className="px-4 py-2 bg-white text-blue-600 rounded ml-4 hover:bg-blue-100">Sign Up</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header
