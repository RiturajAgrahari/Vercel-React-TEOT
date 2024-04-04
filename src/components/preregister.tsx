import React from "react";
import "./preregister.css"
import bg from "../static/TheEndofTime.logo.png"

const PreRegister = () => {
    return (
        <div className="register_main" style={{backgroundImage: `url(${bg})`}}>
            <div className="overlap">
                
            </div>
            <div className="overlay">
                <div className="registered">
                        <p className="numbers">189,781</p>
                        <p className="text">have already registered</p>
                </div>
                <h1 id="preRegister">Pre-Register Now</h1>
                <div className="form">
                    <input type="email" placeholder="Enter your email"/>
                    <button type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default PreRegister