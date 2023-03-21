import './footer.css'
import { BiEnvelope, BiPhone, BiTimeFive } from "react-icons/bi";

function Footer() {
    return(
        <div className='contentFooter'>

            <a href='/'><img src={"./logo2Unipecas.jpg"} alt="logo"/></a>
            <div className='infoFooter'>
                <h4>Fale Conosco</h4>
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
                    <p>Seg - Sex : 8:00 - 17:30</p>
                </span>
            </div>
            <div className='footerText'>
                <p>UniPeças - Todos os direitos Reservados @ - 2023</p>
                <p>Rua Primavera, 198 - Bairro Rio Branco - Canoas - RS - CEP: 92200-030</p>
            </div>
        </div>
    )
}

export default Footer;