import React from "react";


function BooksCounter(props){

    //Change amount of books in results on one page
    const sendChange = (amount) => {
        props.setAmount(amount)
    }

    return (
        <div>
            <button onClick={sendChange.bind(null, 10)}>10</button>
            <button onClick={sendChange.bind(null, 25)}>25</button>
            <button onClick={sendChange.bind(null, 50)}>50</button>
        </div>
    );

}

export default BooksCounter;