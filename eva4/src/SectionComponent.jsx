import React, { useState } from 'react';

const ProductSection = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleTitleClick = () => {
    setModalOpen(true);
  };

  return (
    <section>
      <div className="product-grid">
        <div className="product">
          <img src="img/img1.jpg" alt="Producto 1" />
          <h3 onClick={handleTitleClick}>Moto 1</h3>
          <p>Descripción del Producto </p>
        </div>
        <div className="product">
          <img src="img/img2.jpg" alt="Producto 2" />
          <h3 onClick={handleTitleClick}>Moto 2</h3>
          <p>Descripción del Producto </p>
        </div>
      </div>

      {modalOpen && (
        <div className="modal">
          <h2>Detalles del Producto</h2>
        </div>
      )}

     
        
     
    </section>
  );
};

export default ProductSection;