import { getBooks } from "../../../lib/books";

// GET BOOKS END POINT
export async function GET(request) {
  const books = await getBooks();

  const category = new URL(request.url).searchParams.get("category");

  const query = new URL(request.url).searchParams.get("q");

  const page = Number(new URL(request.url).searchParams.get("page")) || 1;

  let result = books;

  if (category) {
    result = result.filter((book) => book.category === category);
  }

  if (query) {
    result = result.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  const pageSize = 2;
  const start = (page - 1) * pageSize;

  const paginatedBooks = result.slice(start, start + pageSize);

  return Response.json({
    books: paginatedBooks,
    total: result.length,
    page,
    totalPages: Math.ceil(result.length / pageSize),
  });
}
