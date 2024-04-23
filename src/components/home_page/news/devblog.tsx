import React, { useEffect, useState } from "react";
import "./devblog.css"
import { Link } from "react-router-dom";


interface ItemProps {
    id: number
    title: string;
    date: string;
    category: string;
    image_url: string;
}

const Devblog: React.FC = () => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [loo, setLoo] = useState([])
    const [newsData, setNewsData] = useState([])



      useEffect(() => {
        const fetchNewsData = async () => {
          try {
            const newsResponse = await fetch('https://rituraj-agrahari.com/api/get_news/');
            if (!newsResponse.ok) {
              throw new Error('failed to fetch data');
            }
            const jsonNewsData = await newsResponse.json();
            setNewsData(jsonNewsData)
            setLoo(jsonNewsData)
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };

        fetchNewsData();
      }, [])





    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            setScreenSize({ width: window.innerWidth, height: window.innerHeight });
            const devblogElements = document.querySelectorAll('.devblog');
    
            if (newWidth > 1200 && devblogElements.length >= 2) {

                setNewsData(loo);

              } else if (newWidth < 1200 && newWidth > 850 && devblogElements.length <= 4){
                
                setNewsData(loo.slice(0, 3));

              } else if (newWidth < 850 && newWidth > 550 && devblogElements.length <= 4) {

                setNewsData(loo.slice(0, 2));

              } else if (newWidth < 550 && devblogElements.length >=  2) {

                setNewsData(loo);
              }
    };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [loo]);

    return (
      <div className="devblog_component">
          <div className="devblog_main" id="news">
                <h1 className="devblog_heading hidden">
                    News
                </h1>
                <div className="read_more"><Link className="anchor_tag" to={"news/"}>READ MORE+</Link></div>
                <div className="devblogs">
                    {newsData.map((item: ItemProps, index: number) => (
                        <Link style={{color:"white"}} className="devblog" to={`News/${item.id}`}>
                            <div className="devbloghover">
                                  <img src={item.image_url}></img>
                                <div className="devblog_title">{item.title}</div>
                            </div>
                            <div className="devblog_date">
                                <p>{item.date.substring(0, 10)}</p>
                                <a href="#">{item.category}</a>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
      </div>
    )
}

export default Devblog;