import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppContext from "../AppContext";
import BookObject from "../data_classes/BookObject";

function Book(){
    const { no } = useParams();

    const context = useContext(AppContext);

    const [volume, setVolume] = useState({});

    useEffect(() => {
        preperForRender();
        setVolume(context.currentSearched.list[no]);
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
        context.currentSearched.copyList(storeList);
    }

    return (
        <div>
            <div>
                <p>{volume.title}</p>
                <p>{volume.subtitle}</p>
                <p>{volume.publisher}</p>
                <p>{volume.authors}</p>
                <p>{volume.categories}</p>
                <p>{volume.language}</p>
                <p>{volume.categories}</p>
                <p>{volume.pageAmount}</p>
                <p>{volume.printType}</p>
                <p>{volume.publishDate}</p>
                <p>{volume.ratingCount}</p>
                { (volume.imagesLinks !== undefined && volume.imagesLinks !== null) ? <img src={volume.imagesLinks.thumbnail} alt="book"/> : <p>brak</p>}
                <p>{volume.description}</p>
            </div>
        </div>
    )

}

export default Book;