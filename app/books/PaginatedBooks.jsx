"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";

export default function PaginatedBooks() {
  const [page, setPage] = useState(1);

  const { data, error, isLoading } = useSWR(
    `/api/books?page=${page}`,
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  if (error) {
    return <p>Could not load books.</p>;
  }

  if (isLoading && !data) {
    return <p>Loading books...</p>;
  }

  return (
    <section>
      <h2>Books</h2>

      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            {book.title}
            {" - "}
            {book.price} ETB
          </li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          disabled={page === 1}
        >
          Previous
        </button>{" "}
        <span>
          Page {data.page} of {data.totalPages}
        </span>{" "}
        <button
          onClick={() =>
            setPage((current) => Math.min(data.totalPages, current + 1))
          }
          disabled={page === data.totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
}
