import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import header_image from '../../../static/banner.png'
import "./newsdetail.css"
import { Link } from "react-router-dom"

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
  

  const [nextPage, setNextPage] = useState(true)
  const [previousPage, setPreviousPage] = useState(true)


  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/get_news_content/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch Markdown');
        }
        const data = await response.json();
        setMarkdownContent(data.current);

        if (data.next === null) {
          setNextPage(false)
        } else {setNextPage(true)}
        if (data.previous === null) {
          setPreviousPage(false)
        } else {setPreviousPage(true)}

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
      <div className="navigation_links">
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
        <Link className="make_me_gray" to={"/"}>Home</Link>
        <p className="greater_than">&gt;</p>
        <Link className="make_me_gray" to={"/News"}>News</Link>
      </div>
      <div className="news_detail_content">
        <div className="new_header">
            <h1 className="news_header_title">{markdownContent.title}</h1>
            <p className="news_header_date">{markdownContent.date.substring(0, 10)}</p>
        </div>
      <ReactMarkdown>{markdownContent.news_content}</ReactMarkdown>
      </div>
      <div className="news_navigation">
        <Link to={previousPage ? `/News/${Number(id) - 1}` : "#"} className="previous_news" style={{display: previousPage ? "flex" : "none"}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
          PREVIOUS
        </Link>
        <Link to={nextPage ? `/News/${Number(id) + 1}` : "#"} className="next_news" style={{display: nextPage ? "flex" : "none"}}>
          NEXT
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;