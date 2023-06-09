import React from "react";
import { Link } from "react-router-dom";

const Section = (props) => {
    return <li>
        <Link to={ props.name }>{ props.name }</Link>
    </li>;
};

export default Section;