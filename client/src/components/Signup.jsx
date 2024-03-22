import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Signup = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/auth/signup', { username, email, password })
        .then(response => {
            if (response.data.status) {
                navigate('/login')
            }            
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Sign up</h2>
                <label htmlFor='username'>Username:</label>
                <input type='text' placeholder='Username'
                    onChange={(e) => setUsername(e.target.value)} />

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor='password'>Password:</label>
                <input type='password' placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit'>Sign Up</button>
                <p>Already have an account</p>
                <Link to="/login">Login</Link>
            </form>
        </div>
    )
}

export default Signup