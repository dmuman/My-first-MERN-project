import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState('')

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/auth/forgotPassword', { email })
            .then(response => {
                if (response.data.status) {
                    alert("check your email")
                    navigate('/login')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='sign-up-container'>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <h2>Forgot Password</h2>

                <label htmlFor='email'>Email:</label>
                <input type='email' autoComplete='off' placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)} />

                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default ForgotPassword