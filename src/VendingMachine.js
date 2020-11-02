import React from 'react'
import './VendingMachine.css'
import { Link } from 'react-router-dom'

const VendingMachine = () => {
    return(
        <div className="VendingMachine">
            <div className="VendingMachine-greet">Hello! I am a vending machine. What would you like today?</div>
            <div className="VendingMachine-routes">
                <Link to="/soda">Soda</Link>
                <Link to="/chips">Chips</Link>
                <Link to="/cookies">Cookies</Link>
            </div>
        </div>
    )
    
}

export default VendingMachine