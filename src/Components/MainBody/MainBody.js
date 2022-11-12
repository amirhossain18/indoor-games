import React, { useEffect, useState } from 'react';
import { Cart, getStoreTime } from '../Card/Cart';

import Games from '../Games/Games';

import "./MainBody.css"
const MainBody = () => {
    const [games, setGames]=useState([]);
    const [ time, setTime] = useState([]);
//   fackData load
   useEffect( ()=>{
    fetch('games.json')
    .then(res=>res.json())
    .then(data=>setGames(data))
   },[])


   useEffect(()=>{
   
const loadTime= getStoreTime();
 console.log(loadTime)
 const saveTime= [];
  saveTime.push= loadTime
  setTime(saveTime);
 
   },[])

   function handeladdToCart(game) {
    console.log(game)
    const newTime =[...time, game ];
    
    setTime(newTime)
    

   }


    return (
        <div className="games-page">
            
         <div className="games-items">
           
  
                {
                    games.map(game=><Games
                    key={game.id}
                    gamesItem={game}
                    handeladdToCart={handeladdToCart}   
                    ></Games>)
                }

         </div>
         <div className="time-calculation">
      
         <Cart cart={time}

          
         ></Cart>
         </div>
        </div>
    );
};

export default MainBody;