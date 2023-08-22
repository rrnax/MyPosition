import React from "react";
import BookObject from "../data_classes/BookObject";
import AppContext from "../AppContext";
import { Link } from "react-router-dom";

class SimpleSearch extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            dataFromInput: '',
            list: [ {
                title: "Light",
            }, {
                title: "Dark",
            }],
        };

        //Binding input functions
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Signs changing in search input
    async handleChange(event) {
        await this.setState({ dataFromInput: event.target.value });
    }

    //Submission for search specific volume
    handleSubmit(event) {
        event.preventDefault();
        try{
            this.downloadDataFromApi();
        } catch (error) {
            console.log(error);
        }
    }

    //We need loop for collect all volumes from google API
    async downloadDataFromApi(){
        let searchEnded = false;
        let j = 0;
        while(!searchEnded){
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
            .then(data => {
                if(data.items.length < 40){
                    console.log(data);
                    searchEnded = true;
                } else {
                    console.log(data);
                }
                j += 40;
                this.copyVolumes(data.items);
            })
        } 
        this.setState({ list: this.context.currentSearched.list });
    }

    //Copy from api to current search
    copyVolumes(volumeList){
        volumeList.forEach(volume => {
            let tempVolume = this.scrapVolume(volume);
            this.context.currentSearched.addVolume(tempVolume);
        })
    }

    //Only intrested information about volume for app
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
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" value={ this.state.dataFromInput } placeholder="Wyszukaj" onChange={ this.handleChange } />
                    <input type="submit" value="Szukaj" />
                    <p></p>
                </form>
                {   this.state.list.map((book, index) => (
                    <Mcomp key={index} id={index} title={book.title} />
                    ))
                }   
            </div>
       )    
    }
}


function Mcomp(props){
    return <div>
            <Link to={`/result/${props.id}`}> { props.title } </Link>
        </div>
}

export default SimpleSearch;