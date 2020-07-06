import React, { useState, useEffect } from 'react';
import './News.css';
import axios from 'axios';

const News = () => {

    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=3d60ea7e82d544ba8f4d1fbe4fa50001"
            );
            setNews(response.data.articles);
            setIsLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className="">
            {isLoading && (<h2 className="loading">Loading...</h2>)}
            {!isLoading && (
                <div>
                    <div className="headlines"> Top 20 Headlines </div>
                    <div className="list">{news.map(item =>
                        <ul key={item.title}>
                            <a href={item.url} target="_blank" rel="noopener noreferrer" className="link">
                                <li className="article">{item.title.substring(0, item.title.lastIndexOf(" - "))}</li>
                            </a>
                        </ul>
                    )} </div>
                </div>)}
        </div>)
};

export default News;