import React from "react";
import { Outlet } from "react-router-dom";
import Section from "../nav_components/Section";

import "../style/navigation.css";

class NavMenu extends React.Component {
    render() {
        return <>
            <nav className="sticky-navigation">
                <ul>
                    <Section name="search" pathTo="/"/>
                    <Section name="about" pathTo="about"/>
                    <Section name="history" pathTo="history"/>
                </ul>
            </nav>
            <Outlet />
        </>
    }
}

export default NavMenu;