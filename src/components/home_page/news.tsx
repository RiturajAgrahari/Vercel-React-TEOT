import React from "react";
import { useEffect, useState } from "react";
import "./news.css"
import header_image from "../../static/mirage.png"
import { Link } from "react-router-dom";


interface ItemProps {
    id: number
    title: string;
    date: string;
    category: string;
    image_url: string;
}

const NewsPage = () => {

    const [allNews, setAllNews] = useState([])


useEffect(()=>{
    const fetchAllNews = async () => {
        try {
            const allNewsResponse = await fetch("http://127.0.0.1:8000/api/get_all_news/")
            if (!allNewsResponse.ok) {
                throw new Error('failed to fetch data')
            } 
            const allNewsJson = await allNewsResponse.json();
            console.log(allNewsJson)
            setAllNews(allNewsJson);
        } catch (error) {
            console.error('Error, fetching data', error)
        }
    };
    fetchAllNews();
    }, [])

    return (
        <div className="all_newsa">
        <div className="news_header_image">
            <img src={header_image}></img>
        </div>
            <div className="news_container">
                {allNews.map((item: ItemProps, index: number) => (
                    <Link className="go_on_news" style={{color: "white"}} to={`/News/${item.id}`}>
                        <div className="news_image">
                            <img src={item.image_url}></img>
                        </div>
                        <div className="news_content">
                            <div className="news_date">{item.date.substring(0, 10)}</div>
                            <div className="news_title">{item.title}</div>
                            <div className="news_category">{item.category}</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NewsPage;