import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const productosMock = [
  { id: '1', nombre: 'Producto 1', categoria: 'A' },
  { id: '2', nombre: 'Producto 2', categoria: 'B' },
  { id: '3', nombre: 'Producto 3', categoria: 'A' },
  { id: '4', nombre: 'producto 4', categoria: 'A' },
];

const fetchProducts = (categoria) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (categoria) {
        resolve(productosMock.filter(prod => prod.categoria === categoria));
      } else {
        resolve(productosMock);
      }
    }, 1000);
  });
};

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    fetchProducts(categoryId).then(data => {
      setProductos(data);
    });
  }, [categoryId]);

  return (
    <div>
      <h1>
        Catálogo de Productos {categoryId && `- Categoría ${categoryId}`}
      </h1>
      <ul>
        {productos.map(prod => (
          <li key={prod.id}>
            <Link to={`/item/${prod.id}`}>{prod.nombre}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListContainer;
