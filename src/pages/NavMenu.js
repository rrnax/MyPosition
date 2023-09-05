import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../style/navigation.css";
import "../style/appBack.css";
import loupe from "../assets/search_white.png";
import info from "../assets/info_white.png";
import clock from "../assets/loop_white.png";

class NavMenu extends React.Component {
    render() {
        return <>
            <nav className="sticky-navigation">
                <ul>
                    <li>
                        <Link to="/MyPosition">
                            <img className="nav-icon" src={loupe} alt="Search"/>
                        </Link> 
                    </li>
                    <li>
                        <Link to="about">
                            <img className='nav-icon' src={info} alt="Info"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="history">
                            <img className='nav-icon' src={clock} alt="loop"/>
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