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
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="acoplamento-de-correntes.png"
                />
                <CardProduto 
                    titulo="Rodas dentadas"
                    imagem="Engrenagens-variadas.png"
                />
                <CardProduto 
                    titulo="Correntes para transmissão pesada, tipo offset ou de elos manivelados"
                    imagem="corrente-de-elos-manivelados.png"
                />
                <CardProduto 
                    titulo="Correntes para indústria de madeira, papel e celulose"
                    imagem="corrente-WDH-480.png"
                />
                <CardProduto 
                    titulo="Correntes para a indústria de processamento de grãos"
                    imagem="corrente-forjada-102.png"
                />
                <CardProduto 
                    titulo="Correntes para indústria de asfalto, mineração e siderurgia"
                    imagem="corrente-102B-para-elevador-de-asfalto.png"
                />
                <CardProduto 
                    titulo="Correntes para indústria de fertilizantes e outros produtos corrosivos"
                    imagem="corrente-para-distribuidor -de-calcareo.png"
                />
                <CardProduto 
                    titulo="Correntes forjadas e suas rodas"
                    imagem="roda-para-corrente-forjada.png"
                />
                <CardProduto 
                    titulo="Correntes especiais sob desenho"
                    imagem="corrente-especial1.png"
                />
                <CardProduto 
                    titulo="Rodas dentadas especiais sob desenho"
                    imagem="Roda-flangeada.png"
                />
            </div>
        </div>
    )
}

export default Produtos;