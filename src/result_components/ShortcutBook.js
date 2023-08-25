import React, { useEffect, useState } from "react";
//Cumulate bar for results
function ShortcutBook(props){
    const [volume, setVolume] = useState({});

    useEffect(() => {
        console.log(props.volume);
        setVolume(props.volume)
    });

    return (
        <div>
            <div>
                <p>{volume.title}</p>
                <p>{volume.authors}</p>
                <p>{volume.language}</p>
                <p>{volume.categories}</p>
            </div>
            <div>

            </div>
        </div>
    );

}

export default ShortcutBook;
