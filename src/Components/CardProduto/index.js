import './cardproduto.css'

function CardProduto({titulo, imagem, paragrafo}) {
    return(
      <div className='cardProduto'>
        <img src={imagem}/>
        <div className='cardTitulo'>
            <h2>{titulo}</h2>
        </div>
        <br />
        <div className='cardParagrafo'>
          <p>{paragrafo}</p>
            {/* <p>Suspendisse potenti. Sed egestas, ante et vulputate volutpat</p> */}
        </div>
      </div>
    )
  }
  
  export default CardProduto;