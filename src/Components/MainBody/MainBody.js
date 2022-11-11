import React, { useEffect, useState } from 'react';
import Cart from '../Card/Cart';
import Games from '../Games/Games';

import "./MainBody.css"
const MainBody = () => {
    const [games, setGames]=useState([]);
    const [ time, setTime] = useState([]);

   useEffect( ()=>{
    fetch('games.json')
    .then(res=>res.json())
    .then(data=>setGames(data))
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