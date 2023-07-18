import React from 'react';
import Header from './components/Header';
import MainBody from './components/MainBody';
import ProductSection from './components/ProductSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';



const App = () => {
  return (
    <>
      <Header />
      <MainBody />
      <ProductSection />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;