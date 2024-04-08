import React, {useRef, useState} from 'react'
import logo from '../../../static/teotlogo.png';
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

    {/* old navbar */}
    // const [icon, setIcon] = useState("lines")

    const [icon, setIcon] = useState("lines")
    const [visible, setVisible] = useState(false)
    const [isActive, setIsActive] = useState(false);


    // old navbar
    function changeIcon() {
        if (icon == "lines") {
            setIcon(prevClass => prevClass + ' target')
        } else {
            setIcon(prevClass => prevClass.replace(' target', ''))
        }

        setVisible(!visible)
        setIsActive(!isActive)

    };

    function closenavbar() {
        if (icon == "lines") {

        } else {
            setIcon(prevClass => prevClass.replace(' target', ''))
        }
        if (visible === false) {

        } else {
            setVisible(false)
        }

    }





    const handleScroll = (id:string, event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        const element = document.getElementById(id);
        element?.scrollIntoView({behavior: 'smooth'});
    };


    return (
        <div className='navbar'>

            <div className='logo'><img src={logo} alt='Logo'></img></div>

            <div className='links'>
                <ul>
                    <li><a className='link' href='#home' onClick={(e) => handleScroll('home', e)}>Home</a></li>
                    <li><a className='link' href='#slider' onClick={(e) => handleScroll('features', e)}>Features</a></li>
                    <li><a className='link' href='#news' onClick={(e) => handleScroll('news', e)}>News</a></li>
                    {/* <li><Link className='link' to='/Support'>Support</Link></li> */}
                </ul>
            </div>

            <div className="flt"></div>

            <div className='language' onClick={closenavbar} onMouseMove={closenavbar}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18   " fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
                </svg>
                <span>Language</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>  
                <div className='showLanguage'>
                    <ul>
                        <li><a className='link' href='#'>English</a></li>
                        <li><a className='link' href='#'>Russian</a></li>
                        <li><a className='link' href='#'>Hindi</a></li>
                        <li><a className='link' href='#'>French</a></li>
                    </ul>
                </div>
            </div>

            {/* <div className='navbar_logo' onClick={changeIcon}> */}
            <div className='navbar_logo' onClick={changeIcon}>
                <div className='btn'>
                    <div className={icon}></div>
                </div>
                {/* NEW NAVBAR like language one */}
                <div className='sidebar_links' style={{visibility: visible ? 'visible' : 'hidden', top: visible ? '50px' : '0px', backgroundColor: visible ? 'rgba(0, 0, 0, 0.5' : 'background-color: rgba(255, 255, 255, 0)'}}>
                    <ul>
                        <li><a className='link' href='#home' onClick={(e) => {handleScroll('home', e); changeIcon();}}>Home</a></li>
                        <li><a className='link' href='#news' onClick={(e) => {handleScroll('news', e); changeIcon();}}>News</a></li>
                        <li><a className='link' href='#slider' onClick={(e) => {handleScroll('slider', e); changeIcon();}}>Features</a></li>
                        <li><a className='link' href='#support' onClick={(e) => {handleScroll('support', e); changeIcon();}}>Support</a></li>
                    </ul>
                </div>
            </div>

            {/* For half space navigation bar that comes out from side on click*/}


            {/* <div className='sidebar_links' style={{right: isActive ? '0%' : "-100%"}}>
                <ul>
                    <li><a className='link' href='#home' onClick={(e) => {handleScroll('home', e); changeIcon();}}>Home</a></li>
                    <li><a className='link' href='#news' onClick={(e) => {handleScroll('news', e); changeIcon();}}>News</a></li>
                    <li><a className='link' href='#slider' onClick={(e) => {handleScroll('slider', e); changeIcon();}}>Features</a></li>
                    <li><a className='link' href='#support' onClick={(e) => {handleScroll('support', e); changeIcon();}}>Support</a></li>
                </ul>
            </div> */}

        </div>
    )
}

export default Navbar