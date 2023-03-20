import './card.css'
import foto1 from '../../../public/trabalhador.jpg'

function Card(img) {
    return(
      <div className='cardBox'>
        <div className="card">
            <img src={img}/>
        </div>
        <div className='titulo'>
            <h3>Acoplamento-de-correntes</h3>
        </div>
      </div>
    )
  }
  
  export default Card;