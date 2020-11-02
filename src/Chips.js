import React from 'react'
import { Link } from 'react-router-dom'
import './Chips.css'

const Chips = () => {
    return (
        <div className="Chips">
            <p>Welcome to the chips vortex!</p>
            <Link to='/' >Go back!</Link>
        </div>
    )
}

export default Chips