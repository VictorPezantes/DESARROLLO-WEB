
import {Footer} from "./FooterComponent";
import MainBody from "./BodyComponent";
import ProductSection from "./SectionComponent";
import ContactForm from "./FormularioComponent"
import{ HeaderComponent } from "./HeaderComponent"
export const AppComponent=() =>{
    return(
        <>
        <HeaderComponent/>
        <MainBody/>
        <ProductSection/>
        <ContactForm/>
        <Footer/>
        
        </>
    );
  
  }