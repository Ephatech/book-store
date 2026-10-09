"use client";
import BookCard from "../components/BookCard";
import { useCart } from "../components/CartProvider";

export default function Cart() {
  const { cart } = useCart();

  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <p>
        Review the items you've added to your cart before proceeding to
        checkout.
      </p>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {console.log(cart)}
          <p>{cart.length} items in your cart</p>
          <ul>
            {cart.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
