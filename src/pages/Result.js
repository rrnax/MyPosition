import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import FilterSearchBar from "../result_components/FilterSearchBar";

function Result() {
    const { page } = useParams();

    const context = useContext(AppContext);

    const [booksOnPage, setBooksOnPage] = useState([]);
    const [booksAmount, setBooksAmount] = useState(25);

    useEffect(() => {
        console.log(JSON.parse(localStorage.getItem('list')));
    })
    // useEffect(() => {
    //     // let tempList = localStorage.getItem('sessionList');
    //     // context.currentSearched.list = JSON.parse(tempList);
    //     console.log(context.currentSearched.list);
    //     console.log(JSON.parse(localStorage.getItem('list')));
    //     context.currentSearched.list = JSON.parse(localStorage.getItem('list'));
    //     console.log(context.currentSearched.list);
    // });

    //Correct deal with array of books
    useEffect(() => {
        let startBookIndex = (page - 1) * booksAmount;
        let endBookIndex =  page * booksAmount;
        let tempList = context.currentSearched.list.slice(startBookIndex, endBookIndex);
        setBooksOnPage(tempList);
    }, [page, booksAmount]);

    const setAmountOfBooksOnPage = (amount) => {
        setBooksAmount(amount);
        console.log(amount);
    };

    return (
        <div>
            <FilterSearchBar setAmount={setAmountOfBooksOnPage} pageNo={page} booksCount={booksAmount}/>
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