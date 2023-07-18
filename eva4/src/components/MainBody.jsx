import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/mainBody.css';

const MainBody = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main>
      <h2 onClick={handleOpenModal}>Las Historias de Snoopy</h2>
      <p>Hechos cronologicos</p>
      <ul>
        <li>Snoopy y sus hermanos</li>
        <li>Snoopy conoce a Charlie Brown</li>
        <li>Snoopy quiere a Lucy</li>
      </ul>

      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        {/* Contenido del cuadro de diálogo */}
        <h2>Que aventura nos deparara el malvado Baron Rojo</h2>
        <p>Esta Historia Continuara</p>
        <button onClick={handleCloseModal}>Cerrar</button>
      </Modal>
    </main>
  );
};

export default MainBody;
