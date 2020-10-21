import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from './Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton = false
        } else{
            setButton = true
        }

    };

    window.addEventListener('resize', showButton);
    
    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <MdFingerprint className="nabar-icon" /> 
                        LAVISH 
                    </Link>
                    <div className="navbar-menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars /> }
                    </div>
                    <ul className={click ? 'navbar-menu active' : 'navbar-menu'}>
                        <li className="navbar-menu-item">
                            <Link to="/" className="navbar-menu-link">
                                Home
                            </Link>
                        </li>
                        <li className="navbar-menu-item">
                            <Link to="/services" className="navbar-menu-link">
                                Services
                            </Link>
                        </li>
                        <li className="navbar-menu-item">
                            <Link to="/products" className="navbar-menu-link">
                                Products
                            </Link>
                        </li>
                        <li className="navbar-menu-btn">
                            {button ? (

                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline">
                                        Sign Up
                                    </Button>
                                </Link>

                            ) : (
                                
                                <Link to="/sign-up" className="btn-link">
                                    <Button buttonStyle="btn--outline"
                                        buttonSiza="btn--mobile">
                                        Sign Out
                                    </Button>
                                </Link>

                            )}
                        </li>
                    </ul>
                </div>
            </div>    
        </>
    )
}

export default Navbar
