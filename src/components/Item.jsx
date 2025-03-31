import React from 'react';
import { Link } from 'react-router-dom';

function Item({ id, nombre }) {
  return (
    <li>
      <Link to={`/item/${id}`}>{nombre}</Link>
    </li>
  );
}

export default Item;
