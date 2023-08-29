import React from "react";
import { Link } from "react-router-dom";

const Section = ({ name, pathTo }) => {
    return ( 
        <li>
            <Link to={ pathTo }>{ name }</Link>
        </li>
    );
};

export default Section;