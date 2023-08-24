import React from "react";
import PageSwitcher from "./PageSwitcher";
import BooksCounter from "./BooksCounter";

//Cumulate bar for results
function FilterSearchBar(props){

    return (
        <div>
            <PageSwitcher pageNo={props.pageNo} booksCount={props.booksCount}/>
            <BooksCounter setAmount={props.setAmount}/>
        </div>
    );

}

export default FilterSearchBar;
