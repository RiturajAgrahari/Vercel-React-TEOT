import "./cookies.css"
import logo from "../../static/teotlogo.png"
import { useEffect, useState } from "react"

const Cookies = () => {
    const [ cookieSetting, setCookieSetting ] = useState(false)
    const [ hideCookie, setHideCookie] = useState("-100%")

    useEffect(() => {
        const handleResize = () => {
            const newWidth = window.innerWidth;
            const devblogElements = document.querySelectorAll('.devblog');
    
            if (newWidth > 1100) {
                setHideCookie("-35%")

              } else if (newWidth < 1100 && newWidth > 850){
                setHideCookie("-50%")

              } else if (newWidth < 850 && newWidth > 600) {
                setHideCookie("-75%")

              } else if (newWidth < 600) {
                setHideCookie("-100%")
              }
    };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
        <div className="cookie">
            <div className="cookie_icon" onClick={() => {setCookieSetting(!cookieSetting)}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-75 29-147t81-128.5q52-56.5 125-91T475-881q21 0 43 2t45 7q-9 45 6 85t45 66.5q30 26.5 71.5 36.5t85.5-5q-26 59 7.5 113t99.5 56q1 11 1.5 20.5t.5 20.5q0 82-31.5 154.5t-85.5 127q-54 54.5-127 86T480-80Zm-60-480q25 0 42.5-17.5T480-620q0-25-17.5-42.5T420-680q-25 0-42.5 17.5T360-620q0 25 17.5 42.5T420-560Zm-80 200q25 0 42.5-17.5T400-420q0-25-17.5-42.5T340-480q-25 0-42.5 17.5T280-420q0 25 17.5 42.5T340-360Zm260 40q17 0 28.5-11.5T640-360q0-17-11.5-28.5T600-400q-17 0-28.5 11.5T560-360q0 17 11.5 28.5T600-320ZM480-160q122 0 216.5-84T800-458q-50-22-78.5-60T683-603q-77-11-132-66t-68-132q-80-2-140.5 29t-101 79.5Q201-644 180.5-587T160-480q0 133 93.5 226.5T480-160Zm0-324Z"/></svg>
            </div>
            <div className="cookie_settings" style={{left: cookieSetting ? "0" : hideCookie}}>
                <div className="upper_bar">
                    <div className='logo'><img src={logo} alt='Logo'></img></div>
                    <div className="close_cookie" onClick={() => {setCookieSetting(!cookieSetting)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                </div>
                <div className="cookie_info">
                    <h2>What is a cookie?</h2>
                    <p>
                        A cookie is a small text file that is stored in a dedicated location on your computer, tablet, smartphone or other device when you use your browser to visit an online service. A cookie allows its sender to identify the device on which it is stored during the period of validity of consent. You may accept or reject the cookies listed below using the check box provided.
                    </p>
                    <a href="cookiePolicy" style={{color:"white", textDecoration:"underline"}}>Cookies Policies</a>
                </div>
                <div className="cookie_preferences">
                    <h2>Manage Consent Preferences</h2>
                    <div className="cookie_categories">
                        <div className="cookie_category">
                            <div className="cookie_category_left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                                <p>
                                    Strictly Necessary Cookies
                                </p>
                            </div>
                            <div className="cookie_category_right">
                                <p>Always Active</p>
                            </div>
                        </div>
                        <div className="cookie_category">
                            <div className="cookie_category_left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                                <p>
                                    Performance Cookies
                                </p>
                            </div>
                            <div className="cookie_category_right">
                                <label className="switch">
                                    <input type="checkbox"></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="cookie_category">
                            <div className="cookie_category_left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                                <p>
                                    Advertising and Targeting Cookies
                                </p>
                            </div>
                            <div className="cookie_category_right">
                                <label className="switch">
                                    <input type="checkbox"></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="cookie_category">
                            <div className="cookie_category_left">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                                <p>
                                    Funcitonal Cookies
                                </p>
                            </div>
                            <div className="cookie_category_right">
                                <label className="switch">
                                    <input type="checkbox"></input>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lower_bar">
                    <button>Confirm My Choices</button>
                    <button>Enable All</button>
                </div>
            </div>
        </div>
    )
}

export default Cookies;