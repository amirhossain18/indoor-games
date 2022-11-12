import React, { useEffect, useState } from 'react';
import TimeCalculatin from '../TimeCalculatin/TimeCalculatin';
import './Cart.css'
import '../MainBody/MainBody.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoreTime=(time)=>{
 


  }
const Cart = (props) => {
 const [ breakTime ,  setBreakTime ] = useState(0)
  useEffect(()=>{
    const storeTime= localStorage.getItem('Extra-Time')
    setBreakTime(storeTime)
  
  },[])

  const notify = () => toast("Wow so easy!");
 
   const {cart}= props
  let total = 0;
  for (const game of cart){
    const oldTime = parseInt(game.time);
    total = total + oldTime 
  }
 const extratime=(breakTime)=>{ 
  setBreakTime(breakTime)
  localStorage.setItem('Extra-Time', breakTime)
 
 }


    return (
        <div className="cart bg-warning rounded">
           <TimeCalculatin></TimeCalculatin>
    
         
         <h6>  Selected Games:{cart.length}</h6>
          <h2> time: {total} Hours  </h2>
     
          <div className="button-group">
       <button className='btn-sec' onClick={()=>extratime(15)}>15s </button>
         <button  className='btn-sec'  onClick={()=>extratime(30)}>30s </button>
         <button  className='btn-sec'  onClick={()=>extratime(45)}>45s </button>
         <button  className='btn-sec'  onClick={()=>extratime(1)}>1M </button>
       </div>
       <h6 id="settime">
           Extra Time : {breakTime}
         </h6>
         <div>
        
        <div className='btn '>
        <button onClick={notify} type="button"  className="btn btn-success m-2 ">Success</button>
        <button type="button" className="btn btn-danger">Cancel</button>
        </div>
        <ToastContainer />
      </div>
        </div>
    );
};

export { Cart , getStoreTime};