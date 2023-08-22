import React from "react";
import { useParams } from "react-router-dom";

function Result() {
    const { page } = useParams();

    return <h1>Result { page }</h1>;
}


export default Result;