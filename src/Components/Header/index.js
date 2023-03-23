"use client"
import './header.css'
import Link from "next/link";
import { BiEnvelope, BiPhone, BiTimeFive } from "react-icons/bi";
import { useState } from 'react';


function Header() {
  const [isActive, setIsActive] = useState(false);
  
  const handleClick = (e) => {
    setIsActive(current => !current);
  };

  return(
    <div className="conteudoHeader">

      <div className="infoHeader">
        <span className='infoText'>
          <BiPhone/>
          <p>(51) 3059 3805</p>
        </span>
        <span className='infoText'>
          <BiEnvelope/>
          <p>vendas@unipecas.ind.br</p>
        </span>
        <span className='infoText'>
          <BiTimeFive/>
          <p>Segunda - Sexta : 8:00 - 17:30</p>
        </span>
      </div>  

      <div className="navHeader">
        <a href='/'><img src={"./logoUnipecas.png"} alt="logo"/></a>
          <ul id='navMenu' className={isActive ? 'ativo' : ''}>
            <li><Link href='/'>Início</Link></li>
            <li><Link href='/sobre-nos'>Sobre Nós</Link></li>
            <li><Link href='/produtos'>Produtos</Link></li>
            <li><Link href='/contato'>Contato</Link></li>
          </ul>
          <div id='menu' onClick={handleClick}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
      </div>      
    </div>
  )
}

export default Header;