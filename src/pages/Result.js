import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import FilterSearchBar from "../nav_components/FilterSearchBar";

function Result() {
    const { page } = useParams();

    const context = useContext(AppContext);

    const [booksOnPage, setBooksOnPage] = useState([]);
    const [booksAmount, setBooksAmount] = useState(25);

    useEffect(() => {
        let startBookIndex = (page - 1) * booksAmount;
        let endBookIndex =  page * booksAmount;
        let tempList = context.currentSearched.list.slice(startBookIndex, endBookIndex);
        setBooksOnPage(tempList);
    }, [page]);

    return (
        <div>
            <FilterSearchBar pageNo={page} booksCount={booksAmount}/>
            <h1>Results:</h1>
            <ul>
                {booksOnPage.map((book, index) => (
                    <li key={index}>
                        <p> {book.title} </p>
                        <p> {book.authors}</p>
                        <p> {book.publishDate} </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default Result;