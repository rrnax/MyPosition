import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../style/navigation.css";
import "../style/appBack.css"

class NavMenu extends React.Component {
    render() {
        return <>
            <nav className="sticky-navigation">
                <ul>
                    <li>
                        <Link to="/">
                            <img className="nav-icon" src="./assets/search_white.png" alt="Search"/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="about">
                            <img className='nav-icon' src="./assets/info_white.png" alt="Info"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="history">
                            <img className='nav-icon' src="./assets/loop_white.png" alt="loop"/>
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='mid-container'>
                <Outlet />
            </div>
        </>
    }
}

export default NavMenu;