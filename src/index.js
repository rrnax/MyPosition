import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavMenu from './pages/NavMenu';
import Search from './pages/Search';
import Result from './pages/Result';
import Book from './pages/Book';
import About from './pages/About';
import Tops from './pages/Tops';

export default function App() {
  return (
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
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

