import React from 'react'
import { Link } from 'react-router-dom'
import AllRoutes from '../Pages/AllRoutes'
import Logo from '../Images/Myntra-Logo.png'
import Styles from '../Components/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <div>
                <AllRoutes />
            </div>
            <nav className="navbar">
                <div className="navbar-container">
                    <img src={Logo} width="100" height="100" alt='Myntra-logo' />

                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/shop/men">MEN</Link>
                        </li>
                        <li>
                            <Link to="/shop/women">WOMEN</Link>
                        </li>
                        <li>
                            <Link to="/shop/kids">KIDS</Link>
                        </li>
                        <li>
                            <Link to="/shop/home-living">HOME & LIVING</Link>
                        </li>
                        <li>
                            <Link to="/shop/beauty">BEAUTY</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navbar
