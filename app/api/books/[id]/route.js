import { getBookById } from "../../../../lib/books";
// GET BOOK BY ID END POINT

export async function GET(request, { params }) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    return Response.json({ message: "Book not found" }, { status: 404 });
  }

  return Response.json(book);
}
