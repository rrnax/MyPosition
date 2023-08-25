import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

//Component to navigate via pages of result
function PageSwitcher(props){
    const context = useContext(AppContext);

    const [pagesEndIndex, setPagesEndIndex] = useState(0);

    const navigate = useNavigate();

    //Calculate end page
    useEffect(() => {
        setPagesEndIndex(Math.floor(+context.currentSearched.list.length/+props.booksCount) + 1);
        if(pagesEndIndex < props.pageNo){
            console.log(pagesEndIndex);
            if(pagesEndIndex === "0"){
                setPagesEndIndex(1);
            }
            navigate(`/result/${pagesEndIndex}`);
        }
    }, [pagesEndIndex]);

    const handleChangePage = (page) => {
        navigate(`/result/${page}`);
    }

    //Dynamic content in dependency
    return (
        <div>
            {props.pageNo - 1 > 0 ? <button onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> &lt; </button> : null}
            {props.pageNo > 2 ? <button onClick={handleChangePage.bind(null, 1)}> 1 </button> : null}
            {props.pageNo > 3 ? <p> ... </p> : null}
            {props.pageNo > 1 ? <button onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> {+props.pageNo - 1} </button> : null}
            <button onClick={handleChangePage.bind(null, +props.pageNo)}> {+props.pageNo} </button>
            {pagesEndIndex - 1 > props.pageNo ? <button onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> {(+props.pageNo + 1)} </button> : null}
            {pagesEndIndex - 3 > props.pageNo ? <p>...</p> : null}
            {pagesEndIndex - 2 > props.pageNo ? <button onClick={handleChangePage.bind(null, pagesEndIndex)}> {pagesEndIndex} </button> : null}
            {props.pageNo < pagesEndIndex ? <button onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> &gt; </button> : null} 
        </div>
    );

}

export default PageSwitcher;