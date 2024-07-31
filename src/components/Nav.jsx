import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../components/Nav.css';
import logo from '../assets/g3C.png'; // Update to your logo path

const Nav = ({ userName, setUserName }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
                setDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const handleNavLinkClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleLogOut = () => {
        localStorage.clear("user");
        setUserName(null);
        navigate("/login");
    };

    return (
        <nav ref={navRef}>
            <div className='title'>
                <Link to="/">
                    <img src={logo} alt="logo" width={90} height={60} />
                </Link>
                <h2>WelcomeAbroad</h2>
            </div>

            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
                <li>
                    <NavLink exact to="/" onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to={userName ? "/feedback" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Feedback</NavLink>
                </li>
                <li className="dropdown" onClick={toggleDropdown}>
                    <span>Resources</span>
                    <ul className={dropdownOpen ? 'dropdown-menu open' : 'dropdown-menu'}>
                        <li>
                            <NavLink exact to={userName ? "/resources/community" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Community</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={userName ? "/resources/legal-assistance" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Legal Assistance</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={userName ? "/resources/healthcare" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Healthcare</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={userName ? "/resources/education" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink>
                        </li>
                        <li>
                            <NavLink exact to={userName ? "/resources/employment" : "/login"} onClick={handleNavLinkClick} className={({ isActive }) => (isActive ? 'active' : '')}>Employment</NavLink>
                        </li>
                    </ul>
                </li>
                {userName ? (
                    <li>
                        <NavLink exact to="/login" onClick={handleLogOut}>Log Out</NavLink>
                    </li>
                ) : (
                    <>
                        <li>
                            <NavLink exact to="/signup" onClick={handleNavLinkClick}>Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/login" onClick={handleNavLinkClick}>Log In</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Nav;
