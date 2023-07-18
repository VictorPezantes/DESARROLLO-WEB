import { useState } from "react";
import imagen from '../img/baconator3.webp';
import imagen2 from '../img/davis.webp';
const ProductSection = () => {

    const [modalOpen, setModalOpen] = useState(false);

    const handleTitleClick = () => {
        setModalOpen(!modalOpen);
    };
    return (
        <section>
            <div className="product-grid">
                <div className="product">
                    <img src={imagen} alt="Producto 1" />
                    <h3 onClick={handleTitleClick}>Baconator</h3>
                    <p>Descripción del Producto </p>
                </div>
                <div className="product">
                    <img src={imagen2} alt="Producto 2" />
                    <h3 onClick={handleTitleClick}>davi's</h3>
                    <p>Descripción del Producto </p>
                </div>
            </div>

            {modalOpen && (
                <div className="modal">
                    <h2>Detalles del Producto</h2>
                </div>
            )}




        </section>
    )
}

export default ProductSection;