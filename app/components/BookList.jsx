import BookCard from "./BookCard";

export default async function BookList({ books }) {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a 2-second delay

  return (
    <div className="books-container">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
