import React, { useState } from 'react';
import '../styles/header.css';

const Header = () => {
  const [isTitleHovered, setIsTitleHovered] = useState(false);

  const changeTitleStyle = () => {
    setIsTitleHovered(true);
  };

  const resetTitleStyle = () => {
    setIsTitleHovered(false);
  };

  return (
    <header>
      <h1
        onMouseOver={changeTitleStyle}
        onMouseOut={resetTitleStyle}
        style={{
          color: isTitleHovered ? 'red' : '#333',
          cursor: 'pointer'
        }}
      >
        Peanuts Company
      </h1>
      <ol>
        <li>Quines son somos</li>
        <br></br>

        <li>Comics</li>
        <br></br>
        
        <li>Sally and Charles</li>
      </ol>
    </header>
  );
};

export default Header;

