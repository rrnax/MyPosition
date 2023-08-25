import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import FilterSearchBar from "../result_components/FilterSearchBar";
import BookObject from "../data_classes/BookObject";
import ShortcutBook from "../result_components/ShortcutBook";

function Result() {
    const { page } = useParams();

    const context = useContext(AppContext);

    const [booksOnPage, setBooksOnPage] = useState([]);
    const [booksAmount, setBooksAmount] = useState(25);
    const [firstRender, setFirstRender] = useState(true);

    //Correct deal with array of books
    useEffect(() => {
        preperForRender();
        let startBookIndex = (page - 1) * booksAmount;
        let endBookIndex =  page * booksAmount;
        let tempList = context.currentSearched.list.slice(startBookIndex, endBookIndex);
        setBooksOnPage(tempList);
    }, [page, booksAmount]);

    //Preper for case of render, we need to recreate objects for correct interprete
    function preperForRender() {
        if(firstRender){
            let storeList = JSON.parse(localStorage.getItem('list'));
            storeList = storeList.map(volume => {
                return new BookObject(volume._title,
                    volume._subtitle,
                    volume._publisher,
                    volume._authors,
                    volume._categories,
                    volume._description,
                    volume._imagesLinks,
                    volume._language,
                    volume._pageAmount,
                    volume._printType,
                    volume._publishDate,
                    volume._ratingCount);
            });
            context.currentSearched.copyList(storeList);
            setFirstRender(false);
        }
    }

    const setAmountOfBooksOnPage = (amount) => {
        setBooksAmount(amount);
    };

    return (
        <div>
            <FilterSearchBar setAmount={setAmountOfBooksOnPage} pageNo={page} booksCount={booksAmount}/>
            <h1>Results:</h1>
            <ul>
                {booksOnPage.map((book, index) => (
                    <ShortcutBook key={index} volume={book} />
                ))}
            </ul>
        </div>
    );
}


export default Result;