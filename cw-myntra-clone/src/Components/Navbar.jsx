import React from 'react'
import { Link } from 'react-router-dom'
import AllRoutes from '../Pages/AllRoutes'
import Logo from '../Images/Myntra-Logo.png'
import Styles from '../Components/Navbar.module.css'
import { FaUser } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'
import { FaWeightHanging } from 'react-icons/fa'



function Navbar() {
    return (
        <div>
            <div>
                <AllRoutes />
            </div>

            <nav className={Styles.navbar}>

                <img src={Logo} width="100" height="100" alt='Myntra-logo' className={Styles.myntra_logo} />

                <ul className={Styles.navbar__list}>
                    <li className="navbar__item">
                        <Link to="/" className={Styles.navbar__link}>HOME</Link>
                    </li>

                    <li className={Styles.navbar__item}>
                        <Link to="/shop/men" className={Styles.navbar__link}>MEN</Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/shop/women" className={Styles.navbar__link}>WOMEN</Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/shop/kids" className={Styles.navbar__link}>KIDS</Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/shop/home-living" className={Styles.navbar__link}>HOME & LIVING</Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/shop/beauty" className={Styles.navbar__link}>BEAUTY</Link>
                    </li>

                    <li className="navbar__item">
                        <Link to="/shop/studio" className={Styles.navbar__link}>STUDIO</Link>
                    </li>

                </ul>
                <form class={Styles.nosubmit}>
                    <input class={Styles.nosubmit} type="search" placeholder="Search for products,brands & more"/>
                </form>
                <div className="right" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                    <div>
                        <Link to="/profile"><h1> <FaUser />Profile</h1> </Link>
                    </div>
                    <div>
                        <Link to="/wishlist"><h1> <FaRegHeart />WishList</h1> </Link>
                    </div>
                    <div>
                        <Link to="bag"> <h1> <FaWeightHanging />Bag</h1></Link>
                    </div>

                </div>
            </nav>
        </div >
    )
}

export default Navbar

//GrUser
//FaWeightHanging
//FaRegHeart