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
                console.log(data)
                const strippedNews = data.appnews.newsitems.map(item => {
                    return {
                        title: stripHtml(item.title),
                        contents: stripHtml(item.contents)
                    };
                });
                setNews(strippedNews);
            } catch (error) {
                console.error('Error fetching games:', error);
            }
        };

        fetchGames();
    }, []);
    

    function stripHtml(html) {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    }

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


