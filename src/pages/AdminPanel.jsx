import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import { getHotels, addHotel, deleteHotel } from '../services/api'

const AdminPanel = () => {
    const [hotels, setHotels] = useState([])
    const [newHotel, setNewHotel] = useState({ name: '', description: '', price: '', image: '' })

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

    const handleChange = (e) => {
        setNewHotel({ ...newHotel, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await addHotel(newHotel)
            setNewHotel({ name: '', description: '', price: '', image: '' })
            fetchHotels()
        } catch (error) {
            console.error('Error adding hotel:', error)
        }
    }

    const handleDelete = async (id) => {
        try {
            await deleteHotel(id)
            fetchHotels()
        } catch (error) {
            console.error('Error deleting hotel:', error)
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">Admin Panel</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={newHotel.name}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block mb-2">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={newHotel.description}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block mb-2">Price</label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={newHotel.price}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="image" className="block mb-2">Image URL</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={newHotel.image}
                                onChange={handleChange}
                                className="w-full border rounded px-3 py-2"
                                required
                            />
                        </div>
                        <Button type="submit">Add Hotel</Button>
                    </form>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Existing Hotels</h2>
                    <ul>
                        {hotels.map((hotel) => (
                            <li key={hotel._id} className="mb-2 flex justify-between items-center">
                                <span>{hotel.name}</span>
                                <Button onClick={() => handleDelete(hotel._id)} className="bg-red-600 hover:bg-red-700">
                                    Delete
                                </Button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel
