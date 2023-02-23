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
            <nav className={Styles.navbar}>
               
                    <img src={Logo} width="100" height="100" alt='Myntra-logo' className={Styles.myntra_logo}/>

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
                    {/* <div>
                    <FontAwesomeIcon icon="far fa-shopping-bag" />
                    </div> */}
            </nav>
        </div >
    )
}

export default Navbar
