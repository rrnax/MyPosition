import React from "react";
import SimpleSearch from "../search_components/SimpleSearch";

class Search extends React.Component {
    static searchUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    static apiKey = "AIzaSyCATX2IZDWb8Gk2m0bu8DbSCOVk3SVGTuQ";


    render() {
        return (
            <SimpleSearch searchUrl={ Search.searchUrl } apiKey={ Search.apiKey }/>
        )
    }
}

export default Search;