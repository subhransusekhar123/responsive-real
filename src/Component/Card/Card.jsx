import React,{ useState } from 'react';
import "./card.css";
import { useSelector, useDispatch } from 'react-redux';
import { first_data,sendToLikedData } from '../slice/estateSlice';

const Card = ({data}) => {
  console.log(data)
  const [like,setLike] = useState(false);
  let liked_data = useSelector((data)=> data.liked_data);
  let dispatch = useDispatch();



  const clickHandler = (params) => {
    if(like){
      setLike(false)
    }else{
      setLike(true)
    }
    dispatch(sendToLikedData(params))
  }
  return (
    <div className='card'>
      <img className='resoponsive' src="https://www.eroshotels.co.in/wp-content/uploads/2018/04/606x368.jpg" alt="Italian Trulli"/>
      <div className="card-price">
        <div className='card-dollar'>
        <span>${data?.price}</span>/month
        </div>

        <div className="card-like" onClick={()=>clickHandler(data)} style={{color:like?"red":"blue"}}>
        <i class="fa fa-sharp fa-solid fa-heart"></i>
        </div>
      </div>
      <div className="card-body">
        <h2>{data?.location}</h2>
        <p>2699 Green Valley,Highland Lake,FL</p>
      </div>

      <div className="card-features">
        <div className="card-features-item">
        <i class="fa fa-bed"></i>
          {data?.propertyType}
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