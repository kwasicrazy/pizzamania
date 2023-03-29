import React from 'react'

const Card = ({mg, info , title}) => {
  return (
    
             <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={mg} height="200px" alt="pizza" />
  <div className="card-body">
    <h4>{title}</h4>
   <p>{info}</p>
  </div>
</div>
    
  )
}

export default Card