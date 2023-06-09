import React from "react";
import { Outlet } from "react-router-dom";
import Section from "../nav_components/Section";

class NavMenu extends React.Component {
    render() {
        return <>
            <nav>
                <ul>
                    <Section name="/"/>
                    <Section name="result"/>
                    <Section name="about"/>
                    <Section name="tops"/>
                </ul>
            </nav>
            <Outlet />
        </>
    }
}

export default NavMenu;