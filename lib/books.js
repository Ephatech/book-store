import { books } from "../app/data/books";
import { reviews } from "../app/data/reviews";

export async function getBooks() {
  // const response = await fetch("https://api.example.com/books");
  // const data = await response.json();
  // return data;

  // Simulate a delay to mimic fetching data from an API
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return books;
}

export async function getBookById(id) {
  // const response = await fetch(`https://api.example.com/books/${id}`);
  // const data = await response.json();
  // return data;

  // Simulate a delay to mimic fetching data from an API
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return books.find((book) => book.id === id);
}

export async function getReviewsByBookId(bookId) {
  // const response = await fetch(`https://api.example.com/reviews?bookId=${bookId}`);
  // const data = await response.json();
  // return data;

  // Simulate a delay to mimic fetching data from an API
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return reviews.filter((review) => review.bookId === bookId);
}
