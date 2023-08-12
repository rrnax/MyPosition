import React from "react";
import BookObject from "../data_classes/BookObject";

class SimpleSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFromInput: '',
            apiResponse: '',            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleChange(event) {
        await this.setState({ dataFromInput: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
//        console.log(this.props.searchUrl + this.state.dataFromInput + "&key=" + this.props.apiKey);
        try{
            this.downloadDataFromApi(this.props.searchUrl + this.state.dataFromInput + "&key=" + this.props.apiKey);
        } catch (error) {
            console.log(error);
        }
    }

    downloadDataFromApi(apiUrl){
        fetch(apiUrl)
        .then(response => {
            if(!response.ok){
                throw new Error("Incorrect response, bad response code.");
            } else {
               //this.setState({ apiResponse: response.json() });
                return response.json();
            }
        })
        .then(data => {
            data.items.forEach(item =>{
                let b = new BookObject(item.volumeInfo.title,
                    item.volumeInfo.subtitle,
                    item.volumeInfo.publisher,
                    item.volumeInfo.authors,
                    item.volumeInfo.categories,
                    item.volumeInfo.description,
                    item.volumeInfo.imageLinks,
                    item.volumeInfo.language,
                    item.volumeInfo.pageCount,
                    item.volumeInfo.printType,
                    item.volumeInfo.publishedDate,
                    item.volumeInfo.ratingsCount);
                console.log(b);
            })
        })
    }

    render(){
       return (
            <form onSubmit={ this.handleSubmit }>
                <input type="text" value={ this.state.dataFromInput } placeholder="Wyszukaj" onChange={ this.handleChange } />
                <input type="submit" value="Szukaj" />
                <p></p>
            </form>
       )    
    }
}

export default SimpleSearch;