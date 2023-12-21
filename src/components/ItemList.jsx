
import React from 'react';
import storeItems from '../data/products.json'; 
import { Item } from './Item';

export const ItemList = () => {
  return (
    <div className="items-list-container">
      {storeItems.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};