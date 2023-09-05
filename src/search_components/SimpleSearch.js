import React, { useState, useContext } from "react";
import BookObject from "../data_classes/BookObject";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

import loupe from "../assets/search_white.png";


function SimpleSearch() {
  const { appState } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const [dataFromInput, setDataFromInput] = useState('');

  const navigate = useNavigate();

  //Input functions
  const handleChange = (event) => {
    setDataFromInput(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await downloadDataFromApi();
      udpateHistory(true);
      setWarning("");
      setIsLoading(false);
    } catch (error) {
      udpateHistory(false);
      console.log(error);
      setIsLoading(false);
      setWarning("Nie mozna sie polaczyc z wyszukiwarka. Sproboj pozniej lub odswiez.");
    }
  }

  function udpateHistory(status){
    let historyObject = {
        date: new Date(),
        searchingUrl: appState.searchUrl + dataFromInput,
        status: status,
        keywords: dataFromInput,
    }
    let history = localStorage.getItem('history');
    if(history === null){
      let temp = [];
      temp.push(historyObject);
      localStorage.setItem('history', JSON.stringify(temp));
    } else {
      let historyJson = JSON.parse(history);
      let temp = [...historyJson, historyObject];
      localStorage.setItem('history', JSON.stringify(temp));
    }
  }

  //Loop for fetch all volumes
  async function downloadDataFromApi() {
    appState.currentSearched.clearList();
    let searchEnded = false;
    let j = 0;
    /* eslint-disable no-loop-func */
    while (!searchEnded) {
      await fetch(appState.searchUrl
        + dataFromInput
        + "&startIndex="
        + j
        + "&maxResults=40"
        + "&key="
        + appState.apiKey)
        .then(response => {
          if (!response.ok) {
            throw new Error("Incorrect response, bad response code.");
          } else {
            return response.json();
          }
        })
        .then(data => {
          if (data.items.length < 40) {
            searchEnded = true;
          }
          j += 40;
          copyVolumes(data.items);
        })
    }
    localStorage.setItem('list', JSON.stringify(appState.currentSearched.list));
    navigate('/result/1');
  }

  //Copy list of volumes to global context
  function copyVolumes(volumeList) {
    volumeList.forEach(volume => {
      let tempVolume = scrapVolume(volume);
      appState.currentSearched.addVolume(tempVolume);
    });
  }

  //Only intrested information
  function scrapVolume(volume) {
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

  return (
    <form onSubmit={handleSubmit} className='simple'>
      <input type="text" className='volumen' value={dataFromInput} placeholder="Wyszukaj ksiazke" onChange={handleChange} />
      <input type="image" src={loupe} className='icon-search' alt="search" />
      <p>{ warning }</p>
      { isLoading ? <div className="lds-hourglass"></div> : null }
    </form>
  )
}

export default SimpleSearch;
