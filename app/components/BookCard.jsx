import Link from "next/link";
import AddToCartButton from "./AddToCartButton";
import Image from "next/image";

export default function BookCard({ book }) {
  return (
    <div className="book-item">
      <Image src={book.image} alt={book.title} width={200} height={200} />
      <h2>{book.title}</h2>
      <p>{book.description}</p>
      <p>Price: ${book.price}</p>
      <p>Category: {book.category}</p>
      <Link href={`/books/${book.id}`}>View Details</Link>
      <br />
      <AddToCartButton book={book} />
    </div>
  );
}
