import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProducto({ id: docSnap.id, ...docSnap.data() });
          setAddedToCart(false);
        } else {
          setError("Producto no encontrado");
        }
      })
      .catch((err) => setError(err.message));
  }, [id]);

  const handleAdd = (count) => {
    addToCart(producto, count);
    setAddedToCart(true);
  };

  if (error) return <div>{error}</div>;
  if (!producto) return <div>Cargando...</div>;

  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>

      {!addedToCart ? (
        <ItemCount stock={producto.stock} initial={1} onAdd={handleAdd} />
      ) : (
        <p>✅ Producto agregado al carrito</p>
      )}
    </div>
  );
}

export default ItemDetailContainer;
