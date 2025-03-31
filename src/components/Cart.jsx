import { useCart } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";
import { useState } from "react";

function Cart() {
  const [showForm, setShowForm] = useState(false);
  const { cart } = useCart();
  const total = cart.reduce(
    (acc, item) => acc + item.quantity * (item.precio || 1000),
    0
  );

  if (cart.length === 0) {
    return <h2>🛒 Tu carrito está vacío</h2>;
  }

  return (
    <div>
      <h2>🛍️ Carrito de Compras</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <strong>{item.nombre}</strong> — Cantidad: {item.quantity} —
            Subtotal: ${item.quantity * (item.precio || 1000)}
          </li>
        ))}
      </ul>
      <h3>Total: ${total}</h3>

      {!showForm ? (
        <button onClick={() => setShowForm(true)}>Finalizar Compra</button>
      ) : (
        <CheckoutForm />
      )}
    </div>
  );
}

export default Cart;
