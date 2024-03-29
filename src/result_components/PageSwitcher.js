import React, { useContext, useEffect, useState } from "react";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

//Component to navigate via pages of result
function PageSwitcher(props){
    const { appState } = useContext(AppContext);

    const [pagesEndIndex, setPagesEndIndex] = useState(Math.floor((appState.currentSearched.list.length/props.booksCount) + 1));

    const navigate = useNavigate();

    //Calculate end page
    useEffect(() => {
        //Timeout to wait for take data from local storage
        setTimeout(() => {
            setPagesEndIndex(Math.floor((appState.currentSearched.list.length/props.booksCount) + 1));   
        }, 10);
    }, [props.booksCount]);

    const handleChangePage = (page) => {
        let temp = "/MyPosition/result/" + page;
        navigate(temp);
    }

    //Dynamic content in dependency
    return (
        <div className="switch">
            <h4 className="cap"> Strona: </h4>
            {props.pageNo - 1 > 0 ? <button className="btn-change" onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> &lt; </button> : null}
            {props.pageNo > 2 ? <button className="btn-change" onClick={handleChangePage.bind(null, 1)}> 1 </button> : null}
            {props.pageNo > 3 ? <p className="cap"></p> : null}
            {props.pageNo > 1 ? <button className="btn-change" onClick={handleChangePage.bind(null, (+props.pageNo - 1))}> {+props.pageNo - 1} </button> : null}
            <button className="btn-change" onClick={handleChangePage.bind(null, +props.pageNo)}> {+props.pageNo} </button>
            {pagesEndIndex - 1 > props.pageNo ? <button className="btn-change" onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> {(+props.pageNo + 1)} </button> : null}
            {pagesEndIndex - 3 > props.pageNo ? <p className="cap"></p> : null}
            {pagesEndIndex - 2 > props.pageNo ? <button className="btn-change" onClick={handleChangePage.bind(null, pagesEndIndex)}> {pagesEndIndex} </button> : null}
            {props.pageNo < pagesEndIndex ? <button className="btn-change" onClick={handleChangePage.bind(null, (+props.pageNo + 1))}> &gt; </button> : null} 
        </div>
    );

}

export default PageSwitcher;