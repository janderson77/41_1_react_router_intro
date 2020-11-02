import React from 'react'
import { Link } from 'react-router-dom'
import './Soda.css'

const Soda = () => {
    return (
        <div className="Soda">
            <p>Soda! Yay!</p>
            <Link to='/' >Go back!</Link>
        </div>
    )
}

export default Soda