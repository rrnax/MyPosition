import React, { useEffect, useState } from "react";

function History(){
    
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
        setHistory(storedHistory);
    }, []);
    
    return (
        <div>
            <h1>History</h1>
            { history.map((searching, index) => (
                <li key={index}>{searching.searchingUrl}</li>
            ))}
        </div>
    );
}


export default History;