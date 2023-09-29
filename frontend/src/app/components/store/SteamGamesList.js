import React, { useEffect, useState } from "react";


function SteamGamesList(){
    const [games, setGames] = useState([]);
    const gamelist = []


    useEffect(()=>{
        const fetchGames = async()=>{
            try{
                const response = await fetch('http://localhost:8080/api/steam-games');
                if(!response.ok){
                    throw new Error('Failed to fetch games from server');
                }
                const data = await response.json();
                console.log(data)
                for (let count = 0; count < 50; count ++){
                    const stripGame = data.applist.apps[count]
                    gamelist.push(stripGame)
                    setGames(gamelist)
                }
 
                
            }
            catch(error){
                console.error('Error fetching games:', error);
            }
        
        }
        fetchGames();
    
    
    })
    return(
        <div className="steam-api">
            <h2>Games List</h2>
            {games.map(game => (
                <>
                <h3 key={game.name}>{game.name}</h3>
                </>
            ))}
        </div>
    );

}

export default SteamGamesList