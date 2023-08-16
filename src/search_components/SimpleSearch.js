import React from "react";
import BookObject from "../data_classes/BookObject";
import AppContext from "../AppContext";

class SimpleSearch extends React.Component {
    static contextType = AppContext;

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
            console.log(data);
            this.context.amount = data.totalItems;
            this.collectAllTopicVolumes();
            // data.items.forEach(volume =>{
            //     let newVolume = this.scrapVolume(volume);
            //     this.context.addVolume(newVolume);
            // })
            // console.log(this.context);
        })
    }

    async collectAllTopicVolumes(){
        let laps = Math.floor(this.context.amount/40);
        let rest = this.context.amount % 40;
        for(let i = 0, j = 0; i < laps; i++, j+=10){
            await fetch(this.props.searchUrl 
                + this.state.dataFromInput 
                + "&startIndex=" 
                + j 
                + "&maxResults=40" 
                + "&key=" 
                + this.props.apiKey)
            .then(response => {
                if(!response.ok){
                    throw new Error("Incorrect response, bad response code.");
                } else {
                    return response.json();
                }
            })
        }
        console.log(rest);
        //&startIndex=${startIndex}&maxResults=${maxResults}
    }

    scrapVolume(volume){
        return new BookObject(volume.volumeInfo.title,
            volume.volumeInfo.subtitle,
            volume.volumeInfo.publisher,
            volume.volumeInfo.authors,
            volume.volumeInfo.categories,
            volume.volumeInfo.description,
            volume.volumeInfo.imageLinks,
            volume.volumeInfo.language,
            volume.volumeInfo.pageCount,
            volume.volumeInfo.printType,
            volume.volumeInfo.publishedDate,
            volume.volumeInfo.ratingsCount);
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