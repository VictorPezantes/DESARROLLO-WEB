import '../styles/contactform.css';
import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        contrasena: '',
        msg: '',
    });

    const [errors, setErrors] = useState({
        nombre: '',
        email: '',
        contrasena: '',
        msg: '',
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (formData.nombre.trim() === '') {
            newErrors.nombre = 'El nombre es obligatorio';
        }

        if (formData.email.trim() === '') {
            newErrors.email = 'El correo electrónico es obligatorio';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'El correo electrónico no es válido';
        }

        if (formData.contrasena.trim() === '') {
            newErrors.contrasena = 'La contraseña es obligatoria';
        }

        if (formData.msg.trim() === '') {
            newErrors.msg = 'El mensaje es obligatorio';
        }

        if (Object.keys(newErrors).length === 0) {

            alert('Formulario enviado correctamente');
            setFormData({
                nombre: '',
                email: '',
                contrasena: '',
                msg: '',
            });
            setErrors({
                nombre: '',
                email: '',
                contrasena: '',
                msg: '',
            });
        } else {

            setErrors(newErrors);
        }
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    return (
        <div className="validarFormContainer">
            <form className="validarForm" onSubmit={handleSubmit}>
                <label>Nombre:</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                />
                {errors.nombre && <p className="error-message">{errors.nombre}</p>}
                <br />
                <label>Email:</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Ingrese correo"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="error-message">{errors.email}</p>}
                <br />
                <label>Contraseña:</label>
                <input
                    id="contrasena"
                    type="password"
                    placeholder="Ingrese contraseña"
                    value={formData.contrasena}
                    onChange={handleChange}
                />
                {errors.contrasena && (
                    <p className="error-message">{errors.contrasena}</p>
                )}
                <br />
                <label>Mensaje:</label>
                <textarea
                    id="msg"
                    name="user_message"
                    value={formData.msg}
                    onChange={handleChange}
                ></textarea>
                {errors.msg && <p className="error-message">{errors.msg}</p>}
                <br />
                <button id="buttonForm" type="submit">
                    Enviar
                </button>
            </form>
        </div>
    );
};

export default ContactForm;