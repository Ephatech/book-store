import { Suspense } from "react";
import BookSkeleton from "../components/BookSkeleton";
import CategoryFilter from "../components/CategoryFilter";
import FilterShell from "../components/FilterShell";
import { getBooks } from "../../lib/books";
import BookList from "../components/BookList";
import SearchBox from "./SearchBox";
import PaginatedBooks from "./PaginatedBooks";
import BookQuery from "./BookQuery";

export const metadata = {
  title: "Books",
  description: "Discover a wide range of books across various genres.",
};

export default async function Books() {
  const books = await getBooks();

  return (
    <div>
      <h1>Our Books</h1>
      <p>Discover a wide range of books across various genres.</p>

      <CategoryFilter
        categories={["all", ...new Set(books.map((book) => book.category))]}
      />

      <Suspense fallback={<BookSkeleton />}>
        <FilterShell>
          <BookList books={books} />
        </FilterShell>
      </Suspense>

      <h1>Search Books</h1>
      <SearchBox />

      <h1>Paginated Books</h1>
      <PaginatedBooks />

      <h1>Tan Stack Query</h1>
      <BookQuery />
    </div>
  );
}
