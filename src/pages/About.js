import React from "react";

import '../style/about.css'

function About () {
    return (
        <div>
            <div className="imgs-header">
                <img src='./assets/mylogo_2.png' className='logo-a' alt='logo' />
                <img src='./assets/google_books.png' className="google" alt='google logo' />
            </div>
            <hr/>
            <p className="desc">My position jest proejktem zakladajacym wytworzenie prostej wyszukiwarki ksiazek, korzystajac z zasobow Google, a dokladnie Google Books API. Na razie jest to wtepna wersja ktora bedzie poszerzana o filtrowanie wyszukiwania, integracje z kontami googla poprzez co bedzie mozna tworzyc wlasne polki z ksiazkami i sie nimi dzielic. Takze interesujaca jest mozliwosc implementacji odczytu niektorych calych ksiazek w wersji pdf z wlasnie tego API jako doatkowa funkcjonalnosc. Nie wspominajac juz o tym ze bedzie modernizowana graficznie.</p>
            <p className="desc">Rafal Rogala</p>
            <p className="desc">Kontakt: r.rogala.1999@gmail.com</p>
        </div>
    )
}

export default About;