import React from 'react';
import TimeCalculatin from '../TimeCalculatin/TimeCalculatin';
import './Cart.css'
const Cart = (props) => {
   const {cart}= props
  let total = 0;
  for (const game of cart){
    const oldTime = parseInt(game.time);
    total = total + oldTime 
  }



    return (
        <div className="cart">
           <TimeCalculatin></TimeCalculatin>
         <h6>  Selected Games:{cart.length}</h6>
          <h2> time: {total} Hours</h2>
        </div>
    );
};

export default Cart;