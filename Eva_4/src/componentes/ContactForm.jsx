import React, { useState } from 'react';

function ContactForm() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleClickTitle = () => {
    alert('Has hecho clic en el titular');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNombre('');
    setCorreo('');
    setMensaje('');
    alert('¡Mensaje enviado con éxito!');
  };

  return (
    <div className='formulario'>
      <h2 onClick={handleClickTitle}>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <label htmlFor="correo">Correo electrónico:</label>
        <input
          type="text"
          id="correo"
          name="correo"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />

        <label htmlFor="mensaje">Mensaje:</label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows="5"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;