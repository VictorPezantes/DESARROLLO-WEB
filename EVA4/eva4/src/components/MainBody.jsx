import React, { useState } from 'react';
import '../styles/mainbody.css';

const MainBody = () => {
    const [selectedName, setSelectedName] = useState(null);

    const handleNameClick = (name) => {
        setSelectedName(name);
    };

    const handleCloseDialog = () => {
        setSelectedName(null);
    };

    return (
        <main className="body-container">
            <h2>Nuestro equipo de trabajo</h2>
            <p>
                Nuestro equipo es pequeño pero esforzado, cada uno aporta un componente importante a nuestro entorno.
                Si quieres conocer más sobre nosotros haz clic en los nombres!
            </p>
            <div className="list-container">
                <ul>
                    <li>
                        <a href="#" onClick={() => handleNameClick('Alvaro Cortés')}>
                            Alvaro Cortés
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => handleNameClick('Alexandra Álamos')}>
                            Alexandra Álamos
                        </a>
                    </li>
                </ul>
            </div>
            {selectedName && (
                <div className="dialog-overlay">
                    <div className="dialog">
                        <h3>{selectedName}</h3>
                        {selectedName === 'Alvaro Cortés' && (
                            <p>Hola mi nombre es Alvaro, tengo 37 años y soy el Desarrollador Web</p>
                        )}
                        {selectedName === 'Alexandra Álamos' && (
                            <p>Hola, mi nombre es Ale tengo 30 y yo soy la encargada del Marketing</p>
                        )}
                        <button onClick={handleCloseDialog}>Cerrar</button>
                    </div>
                </div>
            )}
        </main>
    );
};

export default MainBody;