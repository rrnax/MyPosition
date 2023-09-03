import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import BookObject from "../data_classes/BookObject";

function Book(){
    const { no } = useParams();

    const { appState } = useContext(AppContext);

    const [volume, setVolume] = useState({});

    useEffect(() => {
        preperForRender();
        setVolume(appState.currentSearched.list[no]);
    }, []);

    //Preper for case of render, we need to recreate objects for correct interprete
    function preperForRender() {
        let storeList = JSON.parse(localStorage.getItem('list'));
        storeList = storeList.map(volume => {
            return new BookObject(volume._title,
                volume._subtitle,
                volume._publisher,
                volume._authors,
                volume._categories,
                volume._description,
                volume._imagesLinks,
                volume._language,
                volume._pageAmount,
                volume._printType,
                volume._publishDate,
                volume._ratingCount);
        });
        appState.currentSearched.copyList(storeList);
    }

    return (
        <div>
            <div className="bk">
                <div>
                    <p className="p-book"> Tytul: {volume.title}</p>
                    <p className="p-book"> Autorzy: {volume.authors}</p>
                    { (volume.subtitle !== undefined && volume.subtitle !== null) ? <p className="p-book">Pod-tytul: {volume.subtitle}</p> : null }
                    { (volume.publisher !== undefined && volume.publisher !== null) ? <p className="p-book">Wydawca: {volume.publisher}</p> : null }
                    { (volume.categories !== undefined && volume.categories !== null) ? <p className="p-book">Kategoria: {volume.categories}</p> : null }
                    <p className="p-book">Jezyk: {volume.language}</p>
                    { (volume.pageAmount !== undefined && volume.pageAmount !== null) ? <p className="p-book">Ilosc stron: {volume.pageAmount}</p> : null }
                    { (volume.printType !== undefined && volume.printType !== null) ? <p className="p-book">Rodzaj druku: {volume.printType}</p> : null }
                    { (volume.categories !== undefined && volume.categories !== null) ? <p className="p-book">Data publikacji: {volume.publishDate}</p> : null }
                </div>
                <div>
                    { (volume.imagesLinks !== undefined && volume.imagesLinks !== null) ? <img src={volume.imagesLinks.thumbnail} className="ibk" alt="book"/> : <p>brak</p>}
                </div>
                {/* <p>{volume.ratingCount}</p> */}
            </div>
            { (volume.description !== undefined && volume.description !== null) ? <p className="p-book">Opis: {volume.description}</p> : null }
        </div>
    )

}

export default Book;