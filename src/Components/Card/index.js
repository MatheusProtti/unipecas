function Card({img, titulo}) {
    return(
      <div className='cardBox'>
        <div className="card">
            <img src={img}/>
        </div>
        <div className='titulo'>
            <h3>{titulo}</h3>
        </div>
      </div>
    )
  }
  
  export default Card;