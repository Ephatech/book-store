"use client";

import { useCart } from "./CartProvider";

export default function AddToCartButton({ book }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const isAdded = cart.some((cartBook) => cartBook.id === book.id);

  function handleAddToCart() {
    if (!isAdded) {
      addToCart(book);
    } else {
      removeFromCart(book.id);
    }
  }

  return (
    <button onClick={handleAddToCart}>
      {isAdded ? "Remove from Cart" : "Add to Cart"}
    </button>
  );
}
