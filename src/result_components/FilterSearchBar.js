import React from "react";
import PageSwitcher from "./PageSwitcher";
import BooksCounter from "./BooksCounter";

import '../style/result.css';

//Cumulate bar for results
function FilterSearchBar(props){

    return (
        <div className="upbar">
            <PageSwitcher pageNo={props.pageNo} booksCount={props.booksCount}/>
            <BooksCounter setAmount={props.setAmount}/>
        </div>
    );
}

export default FilterSearchBar;
