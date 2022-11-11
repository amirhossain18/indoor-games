import React from 'react';
import TimeCalculatin from '../TimeCalculatin/TimeCalculatin';
import './Cart.css'
import '../MainBody/MainBody.css'
const getStoreTime=(time)=>{
    const storeTime= localStorage.getItem('Extra-Time')
    const settime= document.getElementById('settime')
   settime.innerHTML =` 
   <h4> extra time ${storeTime}</h4>
   `
    console.log(storeTime) 
    }
const Cart = (props) => {

    
   const {cart}= props
  let total = 0;
  for (const game of cart){
    const oldTime = parseInt(game.time);
    total = total + oldTime 
  }
 const extratime=(time)=>{
   const result = time 
   const settime= document.getElementById('settime')

   settime.innerHTML =` 
   <h4> extra time ${result}</h4>
   `
  localStorage.setItem('Extra-Time', result)
 
 }


    return (
        <div className="cart">
           <TimeCalculatin></TimeCalculatin>
    
         
         <h6>  Selected Games:{cart.length}</h6>
          <h2> time: {total} Hours </h2>
          <div className="button-group">
       <button className='btn-sec' onClick={()=>extratime(15)}>15s </button>
         <button  className='btn-sec'  onClick={()=>extratime(30)}>30s </button>
         <button  className='btn-sec'  onClick={()=>extratime(45)}>45s </button>
         <button  className='btn-sec'  onClick={()=>extratime(1)}>1M </button>
       </div>
       <h6 id="settime">
    
         </h6>
         
        </div>
    );
};

export { Cart , getStoreTime};