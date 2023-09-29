import React, { useEffect, useState } from "react";
import styles from "./steam.module.css";


function SteamGamesList(){
    const [games, setGames] = useState([]);
    const gamelist = []


    useEffect(()=> {
        const fetchGames = async()=>{
            try{
                const response = await fetch('http://localhost:8080/api/steam-games');
                if(!response.ok){
                    throw new Error('Failed to fetch games from server');
                }
                const data = await response.json();
                
                for (let count = 0; count < 46; count ++){
                    const stripGame = data.applist.apps[count]
                    if(count > 36) {
                        gamelist.push(stripGame)
                        setGames(gamelist)
                        console.log(stripGame)
                    }
                    
                }
 
                
            }
            catch(error){
                console.error('Error fetching games:', error);
            }
        
        }
        fetchGames();
    
    
    }, [] )
    return(
        <div className={styles.steamApi}>
            <h2>Games List</h2>
            <div className = {styles.gameArea}>
            {games.map(game => (
                <>
                <h3 className={styles.PerfectDice}>{game.name}</h3>
                </>
            ))}
            </div>
        </div>
    );

}

export default SteamGamesList