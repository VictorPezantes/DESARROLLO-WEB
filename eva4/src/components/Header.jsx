import React from 'react';
import '../styles/header.css';
import logo from '../images/logo.png';

function Header() {
    const handleMouseOver = () => {
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo">
                    <img src={logo} alt="Logo de la empresa" />
                </div>
                <h1 className="title" onMouseOver={handleMouseOver}>
                    Hygzy Store
                </h1>
                <nav className="links">
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

