import React, { useState, useContext } from "react";
import BookObject from "../data_classes/BookObject";
import AppContext from "../AppContext";
import { useNavigate } from "react-router-dom";

function SimpleSearch() {
  const context = useContext(AppContext);

  const [dataFromInput, setDataFromInput] = useState('');

  const navigate = useNavigate();

  //Input functions
  const handleChange = (event) => {
    setDataFromInput(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      downloadDataFromApi();
    } catch (error) {
      console.log(error);
    }
  }

  //Loop for fetch all volumes
  async function downloadDataFromApi() {
    context.currentSearched.clearList();
    let searchEnded = false;
    let j = 0;
    /* eslint-disable no-loop-func */
    while (!searchEnded) {
      await fetch(context.searchUrl
        + dataFromInput
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
      <input type="text" value={dataFromInput} placeholder="Wyszukaj" onChange={handleChange} />
      <input type="submit" value="Szukaj" />
      <p></p>
    </form>
  )
}

export default SimpleSearch;
