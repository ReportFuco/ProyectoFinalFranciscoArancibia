import React from 'react';
import Item from './Item';

function ItemList({ productos }) {
  return (
    <ul>
      {productos.map((prod) => (
        <Item key={prod.id} id={prod.id} nombre={prod.nombre} />
      ))}
    </ul>
  );
}

export default ItemList;
