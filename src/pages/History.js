import React, { useEffect, useState } from "react";
import moment from 'moment';

import '../style/history.css';

function History(){
    
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const storedHistory = JSON.parse(localStorage.getItem("history")) || [];
        console.log(storedHistory);
        setHistory(storedHistory);
    }, []);
    
    return (
        <div>
            <h1 className="h-header">Historia wyszukiwania</h1>
            <table className="all">
                <thead className="hed">
                    <tr className="row">
                        <th className="col1">Data</th>
                        <th className="col2">Nazwa</th>
                        <th className="col3">Status</th>
                        <th className="col4"></th>
                    </tr>
                </thead>
                <tbody className="all">
                { history.map((searching, index) => (
                    <tr key={index} className={ index%2 ===0 ? "row twice" : "row" }>
                        <td className="col1">{moment(searching.date).format('HH:mm:ss DD-MM-YYYY')}</td>
                        <td className="col2">{searching.keywords}</td>
                        <td className="col3">{searching.status ? "Udane" : "Nieudane"}</td>
                        <td className="col4"><button className="again">Ponow</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}


export default History;