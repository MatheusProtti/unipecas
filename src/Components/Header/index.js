import './header.css'
import Link from "next/link";
import { BiEnvelope, BiPhone, BiTimeFive } from "react-icons/bi";

function Header() {
  return(
    <div className="conteudoHeader">
      <div className="infoHeader">
        {/* dps fazer isso em componentes */}
        <span className='iconePhone'>
          <BiPhone/>
          <p>(51) 3059 3805</p>
        </span>
        <span className='iconePhone'>
          <BiEnvelope/>
          <p>vendas@unipecas.ind.br</p>
        </span>
        <span className='iconePhone'>
          <BiTimeFive/>
          <p>Segunda - Sexta : 8:00 - 17:30</p>
        </span>
      </div>  
      <div className="navHeader">
        <img src={"./logoUnipecas.png"} alt="logo"></img>
        {/* <img src={"logo2Unipecas.jpg"} alt="logo"></img> */}
        <div className="navItems">
          <ul>
            <li><Link href='/'>Início</Link></li>
            <li><Link href='/sobre-nos'>Sobre Nós</Link></li>
            <li><Link href='/produtos'>Produtos</Link></li>
            <li><Link href='/contato'>Contato</Link></li>
          </ul>
        </div>
      </div>      
    </div>
  )
}

export default Header;