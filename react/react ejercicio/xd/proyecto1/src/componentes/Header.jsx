import { useState } from "react";
const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const manejarMouseOver = () => {
    setIsHover(!isHover)
  }
  const estiloTitulo= {
    color: isHover ? 'red' : 'black'
  }

  return (
    <>
      <header>
        <h1 onMouseOver={manejarMouseOver} style={estiloTitulo} >WEB SPA</h1>
        <nav>
          <ol>
            <li><a href="">INICIO</a></li>
            <li><a href="">NOSOTROS</a></li>
            <li><a href="">CONTACTANOS</a></li>
            <li><a href="">SERVICIOS</a></li>
          </ol>
        </nav>
      </header>

    </>
  )
}

export default Header;