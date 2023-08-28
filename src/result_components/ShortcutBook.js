import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Miniature to show book on result list
function ShortcutBook(props){
    const navigate = useNavigate();

    const [volume, setVolume] = useState({});

    useEffect(() => {
        setVolume(props.volume);
    });

    const showBook = () => {
        console.log(props.position);
        navigate(`/book/${props.position}`);
    };

    return (
        <div onClick={showBook}>
            <div>
                <p>{volume.title}</p>
                <p>{volume.authors}</p>
                <p>{volume.language}</p>
                <p>{volume.categories}</p>
            </div>
            <div>
                { (volume.imagesLinks !== undefined && volume.imagesLinks !== null) ? <img src={volume.imagesLinks.thumbnail} alt="book"/> : <p>brak</p>}
            </div>
            <div>
                <p>{volume.description}</p>
            </div>
        </div>
    );

}

export default ShortcutBook;
