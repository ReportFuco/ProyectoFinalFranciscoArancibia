import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartWidget() {
  const { totalQuantity } = useCart();

  return (
    <div>
      <Link to="/cart">🛒 Carrito ({totalQuantity})</Link>
    </div>
  );
}

export default CartWidget;
