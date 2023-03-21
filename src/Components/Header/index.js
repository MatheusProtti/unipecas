"use client"
import './header.css'
import Link from "next/link";
import { BiEnvelope, BiPhone, BiTimeFive } from "react-icons/bi";
// import { useState, useEffect } from 'react';


function Header() {
  // const [menu, setMenu] = useState(document.querySelector('.menu'));
  // const [navMenu, setNavMenu] = useState(document.querySelector('.navMenu'));
  

  // menu.addEventListener('click', () => {
  //   menu.classList.toggle('ativo');
  //   navMenu.classList.toggle('ativo');
  // })


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
          <ul className='navMenu'>
            <li><Link href='/'>Início</Link></li>
            <li><Link href='/sobre-nos'>Sobre Nós</Link></li>
            <li><Link href='/produtos'>Produtos</Link></li>
            <li><Link href='/contato'>Contato</Link></li>
          </ul>
          <div className='menu'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
      </div>      
    </div>
  )
}

export default Header;