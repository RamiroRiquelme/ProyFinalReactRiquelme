import React, { useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );

  const handleCompra = () => {
    setCart([]);
  };

  return (<div className="container mt-5">
  <div className="row">
    <div className="col-lg-6">
      <div className="cart-container">
        <div className="cart-card">
          <h5 className="cart-title">Carrito de Compras</h5>
          <div className="cart-text">
            <p>Items en el carrito: {quantity}</p>
            <p>Total a pagar: ${totalPrice}</p>
          </div>
          <button className="cart-button" onClick={handleCompra}>
            Comprar
          </button>
        </div>
      </div>
    </div>
    <div className="col-lg-6">
      <div className="image-container">
        <img
          src="https://s.yimg.com/ny/api/res/1.2/vwh1itkLeVvNYjKkRQhZKg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQxOA--/https://s.yimg.com/os/creatr-uploaded-images/2022-01/b31467c0-7499-11ec-b5ab-2d8523c6547e"
          alt="Imagen debajo de la tarjeta de compra"
          className="footer-image"
        />
      </div>
    </div>
  </div>
</div>
  );
};
