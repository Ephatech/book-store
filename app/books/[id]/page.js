import { getBookById, getReviewsByBookId } from "../../../lib/books";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    return {
      title: "Book Not Found",
      description: "The requested book could not be found.",
    };
  }

  return {
    title: book.title,
    description: book.description,
  };
}

export default async function SingleBookPage({ params }) {
  const { id } = await params;

  // STREAMING DATA FETCHING
  // const book = await getBookById(id);
  // const reviews = await getReviewsByBookId(id);

  // PROMISE ALL
  const [book, reviews] = await Promise.all([
    getBookById(id),
    getReviewsByBookId(id),
  ]);

  if (!book) {
    notFound();
  }
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.description}</p>
      <p>Price: ${book.price}</p>
      <p>Category: {book.category}</p>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.reviewer}</strong>: {review.comment}
              <p>Rating: {review.rating}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}

// WHAT IF WE WANT A META DATA FOR SOCIAL MEDIAS?
// ADDING IMAGES ON THE META DATA.
// USE OPEN GRAPH CONCEPT
