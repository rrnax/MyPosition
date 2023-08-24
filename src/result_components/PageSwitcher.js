import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

//Component to navigate via pages of result
function PageSwitcher(props){
    const context = useContext(AppContext);

    const [pagesEndIndex, setPagesEndIndex] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        setPagesEndIndex(Math.floor(+context.currentSearched.list.length/+props.booksCount) + 1);
    }, [])

    const handleChangePage = (page) => {
        navigate(`/result/${page}`);
    }

    //Dynamic content in dependency
    return (
        <div>
            <button onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> &lt; </button>
            {props.pageNo > 2 ? <button onClick={handleChangePage.bind(null, 1)}> 1 </button> : null}
            {props.pageNo > 3 ? <p> ... </p> : null}
            {props.pageNo > 1 ? <button onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> {+props.pageNo - 1} </button> : null}
            <button onClick={handleChangePage.bind(null, +props.pageNo)}> {+props.pageNo} </button>
            {pagesEndIndex - 1 > props.pageNo ? <button onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> {(+props.pageNo + 1)} </button> : null}
            {pagesEndIndex - 3 > props.pageNo ? <p>...</p> : null}
            {pagesEndIndex - 2 > props.pageNo ? <button onClick={handleChangePage.bind(null, pagesEndIndex)}> {pagesEndIndex} </button> : null}
            <button onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> &gt; </button>
        </div>
    );

}

export default PageSwitcher;