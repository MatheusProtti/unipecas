import Link from "next/link";
import './page.css'

function Home() {
    return(
        <div className="conteudoHome">

            <section className="secaoSlidePaginaInicio">
                <div className="infoSlide">
                  <h1>Atualmente a Equipe Técnica da UNIPEÇAS é referência nacional no desenvolvimento de soluções em correntes de transmissão e de engenharia.</h1>
                  <p>UNIPEÇAS é capaz de oferecer produtos e serviços que superam as expectativas quanto à agilidade, qualidade e custos</p>
                </div>
                <div className="botoesDoSlide">
                  <button className="botaoSaibaMais"><Link href='/sobre-nos'>Saiba Mais</Link></button>
                  {/* <button className="botaoCatalogo">DOWNLOAD DE NOSSO CATÁLOGO</button> */}
                </div>
            </section>

            {/* <section className="secaoBaixarCatalogo">
              <div className="infoCatalogo">
                <h3>Baixe nosso catálogo</h3>
                <p>Aproveite para baixar nosso catálogo e veja todos os nossos produtos!</p>
              </div>
              <button className="botaoCatalogo">DOWNLOAD DE NOSSO CATÁLOGO</button>
            </section> */}

            <section className="infoSectionProdutos">
              <h2>Nossos produtos</h2>
              <p>
                Fornecendo produtos diferenciados na linha de correntes e rodas dentadas normatizados ou desenvolvidos sob projeto,
                a UNIPEÇAS não trabalha com "produtos de segunda linha".
              </p>
              <div className="SectionProdutosPaginaHome">
                <div className="gridProdutos">
                  <div className="ItemImagem1">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                  <div className="ItemImagem2">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                  <div className="ItemImagem3">
                    <div className="tituloDaImagem"><span>corrente-de-transmissao</span></div>
                  </div>
                  <div className="ItemImagem4">
                    <div className="tituloDaImagem"><span>acoplamento-de-correntes</span></div>
                  </div>
                </div>
                <div className="botaoParaPaginaProdutos">
                  <button className="botaoVerMaisProdutos"><Link href='/produtos'>Ver Mais Produtos</Link></button>
                </div>
              </div>
            </section>

            <section className="secaoBaixarCatalogo">
              <div className="infoCatalogo">
                <h3>Baixe nosso catálogo</h3>
                <p>Aproveite para baixar nosso catálogo e veja todos os nossos produtos!</p>
              </div>
              <button className="botaoCatalogo">DOWNLOAD DE NOSSO CATÁLOGO</button>
            </section>

            <section className="secaoTeste">
              {/* <div className="infoCatalogo">
                <h3>Baixe nosso catálogo</h3>
                <p>Aproveite para baixar nosso catálogo e veja todos os nossos produtos!</p>
              </div>
              <button className="botaoCatalogo">DOWNLOAD DE NOSSO CATÁLOGO</button> */}
            </section>

        </div>
    )
}

export default Home;