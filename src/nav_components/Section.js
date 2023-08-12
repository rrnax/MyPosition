import React from "react";
import { Link } from "react-router-dom";

const Section = ({ name }) => {
    return ( 
        <li>
            <Link to={ name }>{ name }</Link>
        </li>
    );
};

export default Section;