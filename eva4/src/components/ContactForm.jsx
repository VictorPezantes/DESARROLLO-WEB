import React, { useState } from 'react';
import '../styles/contactForm.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      setIsError(true);
      setIsFormSubmitted(false);
      return;
    }
  
    
    setIsFormSubmitted(true);
    setIsError(false);
    setTimeout(() => {
      setIsFormSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="email">Correo electrónico:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

      {isFormSubmitted && <p className="success-message">Formulario enviado con éxito.</p>}
      {isError && <p className="error-message">Por favor, completa todos los campos.</p>}

      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;