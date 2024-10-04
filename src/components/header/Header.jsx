import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <NavLink to="/">Elodie Bénard.</NavLink>
            </div>
            <div className='header__nav'>
                <ul className='header__nav-list'>
                    <li><a className='nav-link' href="#section-about-id">À propos</a></li>
                    <li><a className='nav-link' href="#section-services-id">Services</a></li>
                    <li><a className='nav-link' href="#section-realise-id">Réalisations</a></li>
                    <li><a className='rounded-btn' href="#section-contact-id">Contact</a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default Header;