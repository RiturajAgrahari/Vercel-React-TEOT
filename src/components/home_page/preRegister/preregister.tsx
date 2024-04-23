import React, { useState, useEffect } from "react";
import "./preregister.css"
import bg from "../../../static/TheEndofTime.logo.png"
import { wait } from "@testing-library/user-event/dist/utils";

const PreRegister = () => {
    const [preRegisterEmail, setPreRegisterEmail] = useState('')
    const [errorMessage, setErrorMessage] = useState("")
    const [registeredUser, setRegisteredUser] = useState(0)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const hiddenElements = document.querySelectorAll(".hidden");
        hiddenElements.forEach((el) => observer.observe(el));

        // Clean up observer
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []); 

    useEffect(() => {
        const fetchPreRegisteredUserData = async () => {
          try {
            const PreRegisteredUserResponse = await fetch('http://148.251.175.121:8000/api/get_total_registered/');
            if (!PreRegisteredUserResponse.ok) {
              throw new Error('failed to fetch data');
            }
            const jsonPreRegisteredUserData = await PreRegisteredUserResponse.json();
            setRegisteredUser(jsonPreRegisteredUserData.total_registrations)
          } catch (error) {
            console.error('Error fetching data', error);
          }
        };

        fetchPreRegisteredUserData();
      }, [])


    const handlePreRegisterEmail = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const response = await fetch('http://148.251.175.121:8000/api/addpreregisteruser/', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email: preRegisterEmail})
            });
            if (response.status == 409) {
                const responseData = await response.json();
                setErrorMessage(responseData.error)
                const show_error_message = document.querySelector(".error_message")
                show_error_message?.classList.add("show_error")
                await wait(5000)
                show_error_message?.classList.remove("show_error")
            }
            else if (response.status == 200) {
                const responseData = await response.json();
                setErrorMessage(responseData.message)
                const show_error_message = document.querySelector(".error_message")
                show_error_message?.classList.add("show_success")
                setRegisteredUser(prevRegisteredUser => prevRegisteredUser + 1)
                await wait(5000)
                show_error_message?.classList.remove("show_success")
            }
            else if (!response.ok) {
                throw new Error("failed to send data!");
            } else {
                const responseData = await response.json();
            }

        } catch (error) {
            console.error('Error sending data:', error);
        }
    }

    
    return (
        <div className="register_main" style={{backgroundImage: `url(${bg})`}}>
            <div className="error_message">{errorMessage}</div>
            <div className="overlap">
                
            </div>
            <div className="overlay">
                <div className="registered">
                        <p className="numbers hidden">{registeredUser}</p>
                        <p className="text hidden">have already registered</p>
                </div>
                <h1 id="preRegister">Pre-Register Now</h1>
                <form className="form" onSubmit={handlePreRegisterEmail}>
                    <input type="email" value={preRegisterEmail} onChange={(event) => setPreRegisterEmail(event.target.value)} placeholder="Enter your email"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default PreRegister