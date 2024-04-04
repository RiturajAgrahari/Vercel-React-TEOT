import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import header_image from '../../static/mirage.png'
import "./newsdetail.css"

interface ItemProps {
    id: number
    title: string;
    date: string;
    category: string;
    image_url: string;
    news_content: string;
}

const NewsDetail: React.FC = () => {
  // Access the pk parameter from the route object
  const [markdownContent, setMarkdownContent] = useState<ItemProps>({
    id: 0,
    title: '',
    date: '',
    category: '',
    image_url: '',
    news_content: ''
  });  let { id } = useParams<{ id: string }>();
  

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/get_news_content/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Markdown');
        }
        const data = await response.json();
        setMarkdownContent(data);
      } catch (error) {
        console.error('Error fetching Markdown:', error);
      }
    };
    fetchMarkdown();
}, [id]);

  return (
    <div>
        <div className="news_header_image">
            <img src={header_image}></img>
        </div>
      <div className="news_content">
        <div className="new_header">
            <h1 className="news_header_title">{markdownContent.title}</h1>
            <p className="news_header_date">{markdownContent.date.substring(0, 10)}</p>
        </div>
      <ReactMarkdown>{markdownContent.news_content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default NewsDetail;