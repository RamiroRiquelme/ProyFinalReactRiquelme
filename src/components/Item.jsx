
import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Item = ({ name, price, id, img, description }) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((prevCart) => {
      const isItemFound = prevCart.find((item) => item.id === id);

      if (isItemFound) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { id, quantity: 1, price }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === id);

      if (item && item.quantity === 1) {
        return prevCart.filter((item) => item.id !== id);
      } else {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);

  return (
    <div className="item">
      <div className="name">{name}</div>
      <img src={img} width="80%" height="auto" alt={`Imagen de ${name}`} />
      <p>{description}</p>
      <div className="item-price">${price}</div>
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}

      {quantityPerItem === 0 ? (
        <button className="item-add-button" onClick={() => addToCart()}>
          Agregar al carrito +
        </button>
      ) : (
        <button className="item-plus-button" onClick={() => addToCart()}>
          Agregar
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className="item-minus-button" onClick={() => removeItem(id)}>
          Eliminar del carrito
        </button>
      )}
    </div>
  );
};
