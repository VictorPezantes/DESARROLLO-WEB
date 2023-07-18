import React from 'react';
import '../styles/productSection.css';
import snoopy1 from '../images/s1.jpeg';
import snoopy2 from '../images/s2.png';



const ProductSection = () => {
  const handleTitleClick = (productName) => {
    // Aquí puedes agregar la lógica para abrir un modal con detalles del producto
    console.log(`Haz hecho clic en el título del producto: ${productName}`);
  };

  return (
    <section>
      <div>
        <img src={snoopy1} alt="Snoopy1" />
        <h3 onClick={() => handleTitleClick('Producto 1')}>Una noche Snoopiana</h3>
        <p>Charlie van Brown</p>
      </div>
      <div>
        <img src={snoopy2} alt="Snoopy2" />
        <h3 onClick={() => handleTitleClick('Producto 2')}>Snoopy clasico</h3>
        <p>Unico e inseparable de Charlie</p>
      </div>
    </section>
  );
};

export default ProductSection;