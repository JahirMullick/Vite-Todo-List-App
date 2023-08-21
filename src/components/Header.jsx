import React from 'react'
import "./../App.css"
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <>
            <nav>Get Ready To Complete Your Daily Goals</nav>

            <div className='header'>
                <Link to="/" className='linktag'> Home</Link>
                <Link to="/about" className='linktag'> About</Link>
                <Link to="/contact" className='linktag'> Contact</Link>
                {/* <Link to="/user/temp" className='linktag'> User</Link> */}
            </div>

        </>
    )
}

export default Header
