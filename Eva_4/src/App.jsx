import AppHeader from "./componentes/AppHeader";
import AppFooter from "./componentes/AppFooter";
import ContactForm from "./componentes/ContactForm";
import MainBody from "./componentes/MainBody";
import ProductSection from "./componentes/ProductSection";
import './estilos/styles.css'

function App() {
  return (
    <div>
      <AppHeader/>,<MainBody/>, <ProductSection/>,<ContactForm/>,<AppFooter/>
      {/* <AppHeader/>,<MainBody/>, <ProductSection/>,<ContactForm/>,<AppFooter/> */}
    </div>
  );
}

export default App;
