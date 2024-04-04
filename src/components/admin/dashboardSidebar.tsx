import React from "react"; 
import "./dashboardSidebar.css"
import { MouseEvent } from "react";
import { Link } from 'react-router-dom'


function DashboardSidebar() {

    function active_dashboard_link(event: MouseEvent<HTMLAnchorElement>) {
        const deactive = document.querySelector('.activate_dashboard_link')
        deactive?.classList.remove('activate_dashboard_link')

        const element = event.currentTarget;
        element.classList.add('activate_dashboard_link');
    }

    return (
        <div className="dashboard">
            <div className="dashboard_title">TEOT</div>
            <div className="dashboard_category">
                <div className="dashboard_subcategory">DASHBOARD</div>
                <Link to='/admin/dashboard' className="dashboard_link" onClick={active_dashboard_link}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80Zm160 0h80v-80h-80v80ZM200-680h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm160-320h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>
                    <p>Dashboard</p>
                </Link>
            </div>
            <div className="dashboard_category">
                <div className="dashboard_subcategory">USERS</div>
                <Link to='/admin/dashboard' className="dashboard_link" onClick={active_dashboard_link}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>
                    <p>Pre-registrations</p> 
                </Link>
                <Link to='/admin/dashboard' className="dashboard_link" onClick={active_dashboard_link}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m105-233-65-47 200-320 120 140 160-260 109 163q-23 1-43.5 5.5T545-539l-22-33-152 247-121-141-145 233ZM863-40 738-165q-20 14-44.5 21t-50.5 7q-75 0-127.5-52.5T463-317q0-75 52.5-127.5T643-497q75 0 127.5 52.5T823-317q0 26-7 50.5T795-221L920-97l-57 57ZM643-217q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm89-320q-19-8-39.5-13t-42.5-6l205-324 65 47-188 296Z"/></svg>
                    <p>Chart</p>
                </Link>
            </div>
            <div className="dashboard_category">
                <div className="dashboard_subcategory">DASHBOARD</div>
                <Link to='/admin/slider' className="dashboard_link" onClick={active_dashboard_link}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/></svg>
                    <p>Slider Image</p>   
                </Link>
                <Link to='/admin/devblog' className="dashboard_link" onClick={active_dashboard_link}>                    
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M160-120q-33 0-56.5-23.5T80-200v-560q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v560q0 33-23.5 56.5T800-120H160Zm0-80h640v-560H160v560Zm80-80h480v-80H240v80Zm0-160h160v-240H240v240Zm240 0h240v-80H480v80Zm0-160h240v-80H480v80ZM160-200v-560 560Z"/></svg>
                    <p>Devblog</p>   
                </Link>
            </div>ś
        </div>
    )
}

export default DashboardSidebar;
