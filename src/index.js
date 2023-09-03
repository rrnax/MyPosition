import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './pages/NavMenu';
import Search from './pages/Search';
import Result from './pages/Result';
import Book from './pages/Book';
import About from './pages/About';
import History from './pages/History';
import { AppProvider } from './AppContext';
import BooksList from './data_classes/BooksList';


export default function App() {
  const listOfVolumes = new BooksList();
  const [appState] = useState({
    currentSearched: listOfVolumes,
    apiKey: "AIzaSyCATX2IZDWb8Gk2m0bu8DbSCOVk3SVGTuQ",
    searchUrl: "https://www.googleapis.com/books/v1/volumes?q=",
    });
  
  

  

  //Define routes for subpages.
  return (
    <AppProvider value={{ appState }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavMenu />}>
            <Route index element={<Search />}/>
            <Route path='result'>
              <Route path=':page' element={<Result />}/>
            </Route>
            <Route path='book'>
              <Route path=':no' element={<Book />}/>
            </Route>
            <Route path='about' element={<About />}/>
            <Route path='history' element={<History />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

