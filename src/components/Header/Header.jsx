import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <nav className='container'>
           
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/register-rbs">RegisterRBS</Link>
            <Link to="/register-rb">Register RB</Link>
            
        </nav>
    );
};

export default Header;