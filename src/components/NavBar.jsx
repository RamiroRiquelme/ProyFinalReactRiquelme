import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/ShoppingCartContext";

export const Navbar = () => {
  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const navStyles = {
    color: "#000", 
  fontFamily: "Arial, Helvetica, sans-serif", 
  fontSize: "13px",
  letterSpacing: "0.5px", 
  margin: "0 18px", 
  listStyle: "none",
  textDecoration: "none",
};

  return (
    <nav>
      <Link to={"/"} style={navStyles}>
        <h2>RELOJES SHAPIRO</h2>
      </Link>
      <Link to={"/"} style={navStyles}>
        <h2>RELOJES DE VESTIR</h2>
      </Link>
      <Link to={"/"} style={navStyles}>
        <h2>RELOJES DEPORTIVOS</h2>
      </Link>
      <Link to={"/"} style={navStyles}>
        <h2>RELOJES SUMERGIBLES</h2>
      </Link>
      
      <ul className="nav-list">
        <Link to={"/cart"} style={navStyles}>
          <li>
            Carrito total: <span className="cart-count">{quantity}</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};
