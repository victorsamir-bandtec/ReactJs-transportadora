import React, { useState } from 'react';

import { Container, Mobile } from './styles';

import svgClose from '../../assets/close.svg';
import imgLogo from '../../assets/logo.png';
import svgMenu from '../../assets/menu.svg';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <img src={imgLogo} alt="logo" />

      <img
        className="icon-menu"
        src={svgMenu}
        alt="menu"
        onClick={() => setIsOpen(true)}
      />

      {isOpen && (
        <Mobile>
          <img
            className="icon-menu"
            src={svgClose}
            alt="close"
            onClick={() => setIsOpen(false)}
          />

          <ul>
            <li>Inicio</li>
            <li>Sobre nós</li>
            <li>Serviços</li>
          </ul>
        </Mobile>
      )}
    </Container>
  );
};

export default Header;
