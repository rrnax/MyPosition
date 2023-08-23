import React, { useContext } from "react";
import AppContext from "../AppContext";
import PageSwitcher from "./PageSwitcher";


function FilterSearchBar(props){
    const context = useContext(AppContext);

    return (
        <div>
            <PageSwitcher pageNo={props.pageNo} booksCount={props.booksCount}/>
        </div>
    );

}

export default FilterSearchBar;
