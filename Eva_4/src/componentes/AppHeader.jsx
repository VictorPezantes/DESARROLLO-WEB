import React, { useState } from "react";

const AppHeader = () => {
    const [titleStyle, setTitleStyle] = useState({
        color: 'black' // Estilo inicial del título
    });

    const handleMouseOver = () => {
        setTitleStyle({
            color: 'red' // Nuevo estilo del título al pasar el mouse por encima
        });
    };
    return (
        <>
            <header>
                <h1
                    style={titleStyle}
                    onMouseOver={handleMouseOver}>Hola que tal</h1>
                <nav>
                    <ol>
                        <li>Inicio</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ol>
                </nav>
            </header>
        </>
    )

}

export default AppHeader;