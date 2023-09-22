// SteamGamesList.js

import React, { useState, useEffect } from 'react';

function SteamGamesList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:8080/top-ten-games'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch games from server');
                }
                const data = await response.json();
                console.log(data)
                setGames(data.meals);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div>
            <h1>Meals List</h1>
            {games.map(meal => (
                <h2 key={meal.idMeal}>{meal.idMeal}</h2>
            ))}
        </div>
    );
}

export default SteamGamesList;


