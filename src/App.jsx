import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Todos los productos</Link></li>
          <li><Link to="/category/A">Categoría A</Link></li>
          <li><Link to="/category/B">Categoría B</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
