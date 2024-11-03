import React, { useState } from "react";
import PropTypes from "prop-types";

function Item({ name, category, onAddToCart }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
    if (onAddToCart) {
      onAddToCart(name, !isInCart); // Notify parent if needed
    }
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
        aria-pressed={isInCart}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onAddToCart: PropTypes.func, 
};

export default Item;