import React from 'react';
import './Games.css';


const Games = (props) => {
    const {title ,description , image , age, time}= props.gamesItem
    return (
        <div className="container gy-5 mb-4 ">
      
          <div className="card border-success ful-card ">
 
  <img className="img-fluid" src={image} alt="" />
  <div className="card-header btn btn-info">{title}</div>
  <div className="card-body text-success">
    <h5 className="card-title">{description.slice(0,100)} ...</h5>
    <h6>For Age: {age}</h6>
    <h6>Time Requarid: {time}</h6>
  </div>
  <button onClick={()=>props.handeladdToCart(props.gamesItem)} type="button" className="btn btn-success">Add to cart</button>
</div>
        </div>
    );
};

export default Games;