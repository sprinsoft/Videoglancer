import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const NavBarLinks = [
    { key: 'home', path: '/', label: 'Home' },
    { key: 'about', path: '/about', label: 'About Us' },
    { key: 'privacy-policy', path: '/privacy-policy', label: 'Privacy Policy' },
    { key: 'contact', path: '/contact', label: 'Contact Us' },
];

const NavbarLink = ({ item }) => (
    <Link to={item.path} className="navbar-link">
        {item.label}
    </Link>
);

const Header = () => {
    return (
        <header className="header">
            <div className="header-brand">
                <h1>Video Glancer</h1>
            </div>
            <div className="navbar">
                {NavBarLinks.map((item) => (
                    <NavbarLink key={item.key} item={item} />
                ))}
            </div>
        </header>
    );
};

export default Header;
