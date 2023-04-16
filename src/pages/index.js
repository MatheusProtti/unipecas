import Link from "next/link";
import Card from "@/Components/Card";

function Home() {
    return(
        <div className="conteudoHome">

            <section className="secaoSlidePaginaInicio">
                <div className="infoSlide">
                  <h1>Atualmente a equipe técnica da UNIPEÇAS é referência nacional no desenvolvimento de soluções em correntes de transmissão e de engenharia.</h1>
                </div>
                <div className="container ">
	                <p className="animated-word "><Link href='/sobre-nos'>Saiba Mais</Link></p>
                </div>
            </section>

            <section className="infoSectionProdutos">
              <div className="circuloUm"></div>
              <div className="circuloDois"></div>
              <div className="tituloProdutos">
                <h2>Nossos produtos</h2>
                <p>Fornecendo produtos diferenciados na linha de correntes e rodas dentadas normatizados ou desenvolvidos sob projeto,
                  a UNIPEÇAS não trabalha com "produtos de segunda linha".</p>
              </div>
              <div className="SectionProdutosPaginaHome">
                <div className="produtos">
                  <Card 
                    img={"picture/Engrenagem-bipatida.png"}
                    titulo={"Roda dentada bibartida"}
                  />
                  <Card 
                    img={"picture/acoplamento-de-correntes.png"}
                    titulo={"Acoplamento de corrente"}
                  />
                  <Card 
                    img={"picture/correntes-pares.png"}
                    titulo={"corrente especial UNP"}
                  />
                  <Card 
                    img={"picture/Roda-flangeada.png"}
                    titulo={"Roda flangeada UNP"}
                  />
                </div>
                <div className="botaoParaPaginaProdutos">
                  <button className="botaoVerMaisProdutos btn"><Link href='/produtos'>Ver Mais Produtos</Link></button>
                </div>
              </div>
            </section>

            <section className="secaoBaixarCatalogo">
              <div className="circuloTres"></div>
              <div className="circuloQuatro"></div>
              <div className="infoCatalogo">
                <h3>Baixe nosso catálogo</h3>
                <p>Aproveite para baixar nosso catálogo e veja todos os nossos produtos!</p>
              </div>
              <div className="botaoParaPaginaProdutos">
                <a className="botaoVerMaisProdutos btn" href="artigos/CatalogoUnipecas.pdf" target="_blank">DOWNLOAD DE NOSSO CATÁLOGO</a>
              </div>
            </section>
        </div>
    )
}

export default Home;