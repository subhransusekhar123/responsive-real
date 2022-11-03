import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import "./Liked.css";


const Liked = () => {
  let liked_data = useSelector((data)=>data.liked_data);
  console.log(liked_data)
  return (
    <div className='liked_main'>
      {
        liked_data.map((ele)=>{
          return <Card data={ele}/>
        })
      }
    </div>
  )
}

export default Liked;