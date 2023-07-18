import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/productsection.css';
import image1 from '../images/vela_1.jpg';
import image2 from '../images/vela_2.jpg';

Modal.setAppElement('#root');

const ProductSection = () => {
    const products = [
        {
            name: 'Vela en frasco',
            image: image1,
            description: 'Vela de cera de soya, hecha a mano 100% natural. Aroma a melón y sandía, 150 gr',
            price: '$10.000'
        },
        {
            name: 'Vela en envase de vidrio',
            image: image2,
            description: 'Vela de cera de coco, hecha a mano 100% natural. Aroma a jazmín, 100 gr',
            price: '$8.000'
        }
    ];


    const [selectedProduct, setSelectedProduct] = useState(null);

    const openModal = (product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const handleItemClick = (product) => {
        openModal(product);
    };

    return (
        <div className="product-list">
            <h2>Lista de Productos</h2>
            <div className="products-container">
                {products.map((product, index) => (
                    <div
                        className="product-card"
                        key={index}
                        onClick={() => handleItemClick(product)}
                    >
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p className="price">{product.price}</p>
                    </div>
                ))}
            </div>
            <Modal
                isOpen={!!selectedProduct}
                onRequestClose={closeModal}
                contentLabel="Imagen del Producto"
            >
                {selectedProduct && (
                    <div className="img-wrapper">
                        <img src={selectedProduct.image} alt={selectedProduct.name} />
                        <button onClick={closeModal}>Cerrar</button>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default ProductSection;

