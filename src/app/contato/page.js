import { CiPhone, CiMail, CiLocationOn } from "react-icons/ci";
import './contato.css'

function Contato() {
    return(
        <div>
            {/* <div className="contato"> */}
              <div className="contentContato">
                <div className="blocoForm">
                  <form>
                    <h1>FALE CONOSCO</h1>
                    <span>
                      <input 
                        className="inputForm" 
                        type="text" 
                        placeholder="Nome"
                      />
                    </span>
                    <span>
                      <input 
                        className="inputForm" 
                        type="email" 
                        placeholder="Email"
                      />
                    </span>
                    <span>
                      <input 
                        className="inputForm" 
                        type="tel" 
                        placeholder="Telefone"
                      />
                    </span>
                    <span>
                      <textarea 
                        className="inputForm" 
                        name="your-message" 
                        cols="40" 
                        rows="10" 
                        aria-required="true" 
                        aria-invalid="false" 
                        placeholder="Mensagem"
                      />
                    </span>
                    <span>
                      <input 
                        className="botaoSubmit" 
                        type="submit"
                      />
                    </span>
                  </form>
                </div>
                
                <div className="blocoInfo">
                  <div className="boxContato">
                    <div className="boxInfo">
                      <div className="icone"><CiMail /></div>
                      <h2>E-mails</h2>
                    </div>
                    <h3>Vendas:</h3>
                    <p>Ildo Nunemacher - vendas@unipecas.ind.br</p>
                    <h3>Engenharia e projetos:</h3>
                    <p>Leonildo Piovesan - engenharia@unipecas.ind.br</p>
                    <h3>Financeiro:</h3>
                    <p>Giseli Borges - financeiro@unipecas.ind.br</p>
                  </div>

                  <div className="boxContato">
                    <div className="boxInfo">
                      <div className="icone"><CiPhone /></div>
                      <h2>Telefones</h2>
                    </div>
                    <div className="boxTelefone">
                      <div>
                        <p>Principal: (51) 3059 3805</p>
                        <p>(51) 3032.3806</p>
                        <p>(51) 3475.8543</p>
                        <p>(51) 3475.8553</p>
                      </div>
                      <div>
                        <p>(51) 3939.6121</p>
                        <p>(51) 3939.6119</p>
                        <p>(51) 3939.6615</p>
                        <p>(51) 3939.6638</p>
                      </div>
                    </div>
                  </div>

                  <div className="boxContato">
                    <div className="boxInfo">
                      <div className="icone"><CiLocationOn /></div>
                      <h2>Endereço</h2>
                    </div> 
                    <p>Rua Primavera, 198 - Bairro Rio Branco - Canoas - RS - CEP: 92200-030</p> 
                  </div>
                </div>      
              </div>
            {/* </div> */}
            <div className="mapa">
              <h3>Nossa Localização</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6379552057374!2d-51.178562299999996!3d-29.9610908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9519709e16f49bf1%3A0x3f54c8d238411e31!2sR.%20Primavera%2C%20198%20-%20Rio%20Branco%2C%20Canoas%20-%20RS%2C%2092200-300!5e0!3m2!1spt-BR!2sbr!4v1669224436454!5m2!1spt-BR!2sbr" title="myFrame" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default Contato;