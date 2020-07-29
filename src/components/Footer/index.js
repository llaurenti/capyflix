import React from 'react';
import { FooterBase } from './styles';
import Llaurenti from '../../assets/img/github-profile.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/llaurenti/">
        <img height="20px" src={ Llaurenti } alt="My Github" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
