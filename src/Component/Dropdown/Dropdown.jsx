import React,{ useState } from "react";
import "./Dropdown.css"

const Dropdown = (props) => {
  const [state, setstate] = useState(false);
  const clickHandler = () => {
    if(state){
      setstate(false);
    }else{
      setstate(true);
    }
  }

  return (
    <div>
      <div className="dropdown">
        <button className="dropbtn" onClick = {clickHandler}>
          {props.data}
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content" id="myDropdown" style={{ display:state?"block" : "none"}}>
          <a href="#" className="dropdown-link">Link 1</a>
          <a href="#" className="dropdown-link">Link 2</a>
          <a href="#" className="dropdown-link">Link 3</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
