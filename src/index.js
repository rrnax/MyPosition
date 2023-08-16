import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './pages/NavMenu';
import Search from './pages/Search';
import Result from './pages/Result';
import Book from './pages/Book';
import About from './pages/About';
import Tops from './pages/Tops';
import { AppProvider } from './AppContext';
import BooksList from './data_classes/BooksList';

//Define routes for subpages.
export default function App() {
  const listOfVolumes = new BooksList();

  return (
    <AppProvider value={listOfVolumes}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavMenu />}>
            <Route index element={<Search />}/>
            <Route path='result' element={<Result />}/>
            <Route path='book' element={<Book />}/>
            <Route path='about' element={<About />}/>
            <Route path='tops' element={<Tops />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

