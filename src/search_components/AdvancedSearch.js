import React, { useState, useContext } from "react";
import BookObject from "../data_classes/BookObject";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

function AdvancedSearch() {
  const { context } = useContext(AppContext);

  const [dataFromInputs, setDataFromInputs] = useState({
    intitle: "",
    inauthor: "",
    inpublisher: "",
    subject: "",
    isbn: "",
    searchDescription: ""
  });

  const navigate = useNavigate();

  //Input functions
  const handleInputsChange = (event) => {
    const { name, value } = event.target;
    setDataFromInputs(previousData => ({
        ...previousData,
        [name]: value
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let url = advancedUrlCreator();
    try {
        downloadDataFromApi(url);
        udpateHistory(url, true);
    } catch (error) {
        udpateHistory(url, false);
        console.log(error);
    }
    console.log(context.searchHistory);
  }

  //Create spcial advanced url for advanced Search
  function advancedUrlCreator() {
    let createdUrl = context.searchUrl;
    let searchDescription = "";
    if(dataFromInputs.intitle !== ""){
        createdUrl += 'intitle:' + dataFromInputs.intitle;
        searchDescription += dataFromInputs.intitle;
    }
    if(dataFromInputs.inauthor !== ""){
        createdUrl += '+inauthor:' + dataFromInputs.inauthor;
        searchDescription += "-" + dataFromInputs.inauthor;
    }
    if(dataFromInputs.inpublisher !== ""){
        createdUrl += '+inpublisher:' + dataFromInputs.inpublisher;
        searchDescription += "-" + dataFromInputs.publisher;
    }
    if(dataFromInputs.subject !== ""){
        createdUrl += '+subject:' + dataFromInputs.subject;
        searchDescription += "-" + dataFromInputs.subject;
    }
    if(dataFromInputs.isbn !== ""){
        createdUrl += '+isbn:' + dataFromInputs.isbn;
        searchDescription += "-" + dataFromInputs.isbn;
    }
    setDataFromInputs(previousData => ({
        ...previousData,
        searchDescription: searchDescription,
    }));
    return createdUrl;
  }

  function udpateHistory(url, status){
    let historyObject = {
        searchingUrl: url,
        status: status,
        keywords: dataFromInputs.searchDescription,
    }
    let allHistory = [...context.searchHistory, historyObject];
    // setContext(previousContent => ({
    //     ...previousContent,
    //     searchHistory: allHistory,
    // }))
  }

  //Loop for fetch all volumes
  async function downloadDataFromApi(url) {
    context.currentSearched.clearList();
    let searchEnded = false;
    let j = 0;
    /* eslint-disable no-loop-func */
    while (!searchEnded) {
      await fetch(url
        + "&startIndex="
        + j
        + "&maxResults=40"
        + "&key="
        + context.apiKey)
        .then(response => {
          if (!response.ok) {
            throw new Error("Incorrect response, bad response code.");
          } else {
            return response.json();
          }
        })
        .then(data => {
            console.log(data);
          if (data.items.length < 40) {
            searchEnded = true;
          }
          j += 40;
          copyVolumes(data.items);
        })
    }
    localStorage.setItem('list', JSON.stringify(context.currentSearched.list));
    navigate('/result/1');
  }

  //Copy list of volumes to global context
  function copyVolumes(volumeList) {
    volumeList.forEach(volume => {
      let tempVolume = scrapVolume(volume);
      context.currentSearched.addVolume(tempVolume);
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
    <form onSubmit={handleSubmit}>
      <input type="text" name="intitle" value={dataFromInputs.intitle} placeholder="Tytuł" onChange={handleInputsChange} />
      <input type="text" name="inauthor" value={dataFromInputs.inauthor} placeholder="Autor" onChange={handleInputsChange} />
      <input type="text" name="inpublisher" value={dataFromInputs.inpublisher} placeholder="Wydawca" onChange={handleInputsChange} />
      <input type="text" name="subject" value={dataFromInputs.subject} placeholder="Kategoria" onChange={handleInputsChange} />
      <input type="text" name="isbn" value={dataFromInputs.isbn} placeholder="ISBN" onChange={handleInputsChange} />
      <input type="submit" value="Szukaj" />
    </form>
  )
}

export default AdvancedSearch;