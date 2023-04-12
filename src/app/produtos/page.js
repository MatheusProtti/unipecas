import './produtos.css'
import CardProduto from '@/Components/CardProduto';


function Produtos() {
    return(
        <div className="contentProdutos">
            <h1>Produtos</h1>
            <div className='cards'>
                <CardProduto 
                    titulo="Correntes de transmissão"
                    imagem="corrente-de-transmissao.png"
                    paragrafo="Correntes de Transmissão são usadas para transmitir potência entre duas ou mais engrenagens. Existem diversos modelos de correntes de transmissãotenti. Sed egestas, ante et vulputate volutpat"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="acoplamento-de-correntes.png"
                    paragrafo="Acoplamento de corrente consiste em duas engrenagens e uma extensão de corrente de rolo dupla. É muito simples e flexível"
                />
                <CardProduto 
                    titulo="Rodas dentadas"
                    imagem="Engrenagens-variadas.png"
                    paragrafo=" Serve para transferir rotação e torque controlados em sistemas rotativos."
                />
                <CardProduto 
                    titulo="Correntes para transmissão pesada tipo offset"
                    imagem="corrente-de-elos-manivelados.png"
                    paragrafo="São produtos de elevada resistência à fadiga e indicados para situações onde o acionamento está sujeito a cargas de impacto ou pulsantes"
                />
                <CardProduto 
                    titulo="Correntes para indústria de madeira, papel e celulose"
                    imagem="corrente-WDH-480.png"
                    paragrafo="Temos diversos 'cases' onde as alterações sugeridas possibilitaram um aumento de 300% na vida útil."
                />
                <CardProduto 
                    titulo="Correntes para a indústria de processamento de grãos"
                    imagem="corrente-forjada-102.png"
                    paragrafo="As melhorias implementadas nas correntes deste segmento têm possibilitado a fabricação de equipamentos cada vez maiores, otimizando o uso da energia e reduzindo os itens de manutenção graças à padronização, além de reduzir os riscos de paradas pela confiabilidade dos produtos."
                />
                <CardProduto 
                    titulo="Correntes para indústria de asfalto, mineração e siderurgia"
                    imagem="corrente-102B-para-elevador-de-asfalto.png"
                    paragrafo="UNIPEÇAS sempre tem se preocupado em buscar soluções que permitam atender às demandas, considerando principalmente a diversidade de origem dos equipamentos e a consequente variedade de correntes."
                />
                <CardProduto 
                    titulo="Correntes para indústria de fertilizantes e outros produtos corrosivos"
                    imagem="corrente-para-distribuidor -de-calcareo.png"
                    paragrafo="Preocupada com a natureza dos produtos manipulados neste setor, a UNIPEÇAS através de seu corpo técnico e suas parcerias tem desenvolvido soluções que permitem aliar desempenho e vida útil com a melhor relação custo/benefício."
                />
                <CardProduto 
                    titulo="Correntes forjadas e suas rodas"
                    imagem="roda-para-corrente-forjada.png"
                    paragrafo="Correntes forjadas são mais densas e resistentes devido ao forjamento a quente, enquanto as rodas das correntes possuem dentes que se encaixam precisamente na corrente para uma transmissão de energia eficiente."
                />
                <CardProduto 
                    titulo="Correntes especiais sob desenho"
                    imagem="corrente-especial1.png"
                    paragrafo="O desenho das rodas dentadas especiais é realizado de forma personalizada, levando em conta os parâmetros técnicos e as especificações do projeto em que serão utilizadas."
                />
                <CardProduto 
                    titulo="Rodas dentadas especiais sob desenho"
                    imagem="Roda-flangeada.png"
                    paragrafo="O desenho das rodas dentadas especiais é realizado de forma personalizada, levando em conta os parâmetros técnicos e as especificações do projeto em que serão utilizadas."
                />
            </div>
        </div>
    )
}

export default Produtos;