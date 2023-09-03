import React from "react";


function BooksCounter(props){

    //Change amount of books in results on one page
    const sendChange = (amount) => {
        props.setAmount(amount)
    }

    return (
        <div className="switch">
            <h4 className="tit"> Liczba elmentow na stronie:</h4>
            <button className="btn-change" onClick={sendChange.bind(null, 10)}>10</button>
            <button className="btn-change" onClick={sendChange.bind(null, 25)}>25</button>
            <button className="btn-change" onClick={sendChange.bind(null, 50)}>50</button>
        </div>
    );

}

export default BooksCounter;