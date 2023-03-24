import './cardproduto.css'

function CardProduto({titulo, imagem}) {
    return(
      <div className='cardProduto'>
        {/* <img src='trabalhador.jpg'/> */}
        <img src={imagem}/>
        <div className='cardTitulo'>
            <h2>{titulo}</h2>
        </div>
        <br />
        <div className='cardParagrafo'>
            <p>Suspendisse potenti. Sed egestas, ante et vulputate volutpat</p>
        </div>
      </div>
    )
  }
  
  export default CardProduto;