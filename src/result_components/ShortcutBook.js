import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../style/result.css'

//Miniature to show book on result list
function ShortcutBook(props){
    const navigate = useNavigate();

    const [volume, setVolume] = useState({});

    useEffect(() => {
        setVolume(props.volume);
    });

    const showBook = () => {
        console.log(props.position);
        navigate(`/MyPosition/book/${props.position}`);
    };

    return (
        <div onClick={showBook} className="min-book">
            <div>
                <p className="p-book">Tytul: {volume.title}</p>
                <p className="p-book">Autorzy: {volume.authors}</p>
                <p className="p-book">Jezyk: {volume.language}</p>
                { (volume.categories !== undefined && volume.categories !== null) ? <p className="p-book">Kategoria: {volume.categories}</p> : null }
            </div>
            <div>
                { (volume.imagesLinks !== undefined && volume.imagesLinks !== null) ? <img src={volume.imagesLinks.thumbnail} className="img-book" alt="book"/> : <p className="emp">brak okladki</p>}
            </div>
            {/* <div>
                <p>{volume.description}</p>
            </div> */}
        </div>
    );

}

export default ShortcutBook;
