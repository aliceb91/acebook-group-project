// SteamGamesList.js

import React, { useState, useEffect } from 'react';

function SteamGamesList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:8080/top-ten-games'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch games from server');
                }
                const data = await response.json();
                console.log(data.appnews.newsitems)
                setNews(data.appnews.newsitems);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);

    return (
        <div className="steam-api">
            <h1>News List</h1>
            {news.map(article => (
                <>
                <h2 key={article.title}>{article.title}</h2>
                <h2 key={article.contents}>{article.contents}</h2>
                </>
            ))}
        </div>
    );
}

export default SteamGamesList;


