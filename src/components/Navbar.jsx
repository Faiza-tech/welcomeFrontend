import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../components/Navbar.css';
import logo from '../assets/picImigrant.jpg'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleNavLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav ref={navRef}>
            {/** <Link to="/" className='title'>Website</Link> */}
            <Link to="/" className='title'>
                <img src={logo} alt="logo" width={90} height={60} />
            </Link>


            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink exact to="/" onClick={handleNavLinkClick}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={handleNavLinkClick}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={handleNavLinkClick}>Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to="/signup" onClick={handleNavLinkClick}>SignUp</NavLink>
                </li>
                <li>
                    <NavLink to="/login" onClick={handleNavLinkClick}>Log In</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
