import './produtos.css'
import CardProduto from '@/Components/CardProduto';


function Produtos() {
    return(
        <div className="contentProdutos">
            <h1>Produtos</h1>
            <div className='cards'>
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto1.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto2.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto3.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto4.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto5.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto1.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto2.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto3.jpeg"
                />
                <CardProduto 
                    titulo="Acoplamento-de-correntes"
                    imagem="foto4.jpeg"
                />
            </div>
        </div>
    )
}

export default Produtos;