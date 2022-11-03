import React from 'react';
import "./card.css"

const Card = () => {
  return (
    <div className='card'>
      <img src="https://www.eroshotels.co.in/wp-content/uploads/2018/04/606x368.jpg" alt="Italian Trulli"/>
      <div className="card-price">
        <div className='card-dollar'>
        <span>$2095</span>/month
        </div>

        <div className="card-like">
        <i class="fa fa-sharp fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="card-body">
        <h2>Palm Harbor</h2>
        <p>2699 Green Valley,Highland Lake,FL</p>
      </div>

      <div className="card-features">
        <div className="card-features-item">
        <i class="fa fa-bed"></i>
          3beds
        </div>
        <div className="card-features-item">
        <i class="fa fa-sharp fa-solid fa-toilet"></i>
          2Bathrooms
        </div>
        <div className="card-features-item">
        <i class="fa fa-solid fa-house"></i>5*7m2
        </div>
      </div>
    </div>
  )
}

export default Card;