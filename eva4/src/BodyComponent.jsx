import React, { useState } from 'react';

const MainBody = () => {
    const [showDialog, setShowDialog] = useState(false);
  
    const handleClick = () => {
      setShowDialog(true);
    };
  
    const handleCloseDialog = () => {
      setShowDialog(false);
    };
  
    return (
      <main className="main-body">
        <h2 onClick={handleClick}>Título de la sección principal</h2>
        <p>Descripción de la sección principal.</p>
        <ul>
          <li>Característica 1</li>
          <li>Característica 2</li>
          <li>Característica 3</li>
        </ul>
  
        {showDialog && (
          <div className="dialog">
            <p>¡Haz clic en el titular!</p>
            <button onClick={handleCloseDialog}>Cerrar</button>
          </div>
        )}
      </main>
    );
  };
  
  export default MainBody;