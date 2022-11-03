import React,{useState,useEffect} from 'react';
import Card from '../Card/Card';
import "./cardcontainer.css";
import { useSelector, useDispatch } from 'react-redux';
import { first_data } from '../slice/estateSlice';

const CardContainer = () => {
  const [state,setState] = useState([]);
  
  let filtered_data = useSelector((data)=>data.filtered_data);
  let data =  useSelector((data)=>data.estate_data);

  return (
    <div className="card-main">
      <div className='card-container'>
        {
          filtered_data.length === 0 ? 
          data.map((data)=>{
            return (
              <Card data={data}/>
            )
          }):
          filtered_data.map((data)=>{
            return (
              <Card data={data}/>
            )
          })
        }
      </div>

    </div>
  )
}

export default CardContainer