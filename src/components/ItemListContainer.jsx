import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    const q = categoryId
      ? query(productosRef, where("categoria", "==", categoryId))
      : productosRef;

    getDocs(q)
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProductos(docs);
      })
      .catch((error) => {
        console.error("Error al traer los productos:", error);
      });
  }, [categoryId]);

  return (
    <div>
      <h1>Catálogo de Productos {categoryId && `- Categoría ${categoryId}`}</h1>
      <ItemList productos={productos} />
    </div>
  );
}

export default ItemListContainer;
