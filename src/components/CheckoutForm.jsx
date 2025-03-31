import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function CheckoutForm() {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [orderId, setOrderId] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      cliente: formData,
      productos: cart,
      total: cart.reduce(
        (acc, item) => acc + item.quantity * (item.precio || 1000),
        0
      ),
      fecha: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
    } catch (error) {
      console.error("Error al guardar la orden:", error);
    }
  };

  if (orderId) {
    return (
      <div>
        <h2>✅ ¡Gracias por tu compra!</h2>
        <p>
          Tu ID de orden es: <strong>{orderId}</strong>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>📝 Finalizar Compra</h2>
      <label>
        Nombre:
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <label>
        Teléfono:
        <input
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
      </label>
      <br />
      <br />
      <button type="submit">Confirmar Compra</button>
    </form>
  );
}

export default CheckoutForm;
