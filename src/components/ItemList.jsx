
import React, { useEffect, useState } from 'react';
import { getProducts } from '../config/firebaseConfig';
import { Item } from './Item';

export const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return (
    <div className="items-list-container">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};
