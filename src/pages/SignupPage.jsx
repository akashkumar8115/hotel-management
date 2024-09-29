import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import { signup } from '../services/api'
import { AuthContext } from '../context/AuthContext'

const SignupPage = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { login } = useContext(AuthContext)

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (userData.password !== userData.confirmPassword) {
            setError('Passwords do not match')
            return
        }
        try {
            const response = await signup(userData)
            login(response.user, response.token)
            navigate('/')
        } catch (error) {
            setError('Error during signup')
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Sign Up</h1>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block mb-2">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={userData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border rounded px-3 py-2"
                        required
                    />
                </div>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <Button type="submit" className="w-full">Sign Up</Button>
            </form>
            <p className="text-center mt-4">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
        </div>
    )
}

export default SignupPage