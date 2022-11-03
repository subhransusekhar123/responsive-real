import React, { useState } from "react";
import "./Search.css";
import { useSelector, useDispatch } from 'react-redux';
import { location_search } from "../slice/estateSlice";


const Search = () => {
  const [time , setTime] = useState("");
  const [location, setLocation] = useState("");
  const [price,setPrice] = useState("");
  const [propertyType,setPropertyType] = useState("");

  
 
  

  const changeHandler = (e) => {
    setLocation(e.target.value)
    console.log(location)
  }


  const data = useSelector((state) => state.estate_data);
  const dispatch = useDispatch();


  const clickHandler = (pr) => {
    console.log(pr);
    dispatch(location_search(pr));
  }


  console.log(data);
  return (
    <div className="search-box">
      <div className="search-location" >
        <p className="search-name">location</p>
        <input type="text" className="search-input" name="location" onChange={changeHandler}/>
      </div>

      <div className="search-location">
        <p className="search-name">when</p>
        <input type="date" className="search-input" name="time"/>
      </div>

      <div className="search-location">
        <p className="search-name">price</p>
        <select name="price" id="cars" className="search-select" >
          <option value="2000-5000">2000-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000-50000">20000-50000</option>
        </select>
      </div>

      <div className="search-location">
        <p className="search-name">property type</p>
        <select name="price" id="cars" className="search-select">
          <option value="2000-5000">2000-5000</option>
          <option value="5000-10000">5000-10000</option>
          <option value="10000-20000">10000-20000</option>
          <option value="20000-50000">20000-50000</option>
        </select>
      </div>

      <div className="search-location-button">
        <button className="search-btn" onClick={()=>clickHandler(location)}>Search</button>
      </div>
    </div>
  );
};

export default Search;
