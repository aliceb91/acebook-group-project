// SteamGamesList.js

import React, { useState, useEffect } from 'react';



function SteamNewsList() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/steam-news'); 
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
            <h2>News List</h2>
            {news.map(article => (
                <>
                <h3 key={article.title}>{article.title}</h3>
                <p key={article.contents}>{article.contents}</p>
                </>
            ))}
        </div>
    );
}

export default SteamNewsList;


