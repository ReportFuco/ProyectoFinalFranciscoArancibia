import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import { CartProvider } from "./context/CartContext";
import CartWidget from "./components/CartWidget";
import Cart from "./components/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              <li>
                <Link to="/">Todos los productos</Link>
              </li>
              <li>
                <Link to="/category/A">Categoría A</Link>
              </li>
              <li>
                <Link to="/category/B">Categoría B</Link>
              </li>
            </div>
            <li>
              <CartWidget />
            </li>{" "}
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
