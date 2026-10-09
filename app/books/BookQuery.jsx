"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function BookQuery() {
  const [page, setPage] = useState(1);

  const { data, error, isPending } = useQuery({
    queryKey: ["books", page],
    queryFn: () =>
      fetch(`/api/books?page=${page}`).then((response) => response.json()),
    placeholderData: keepPreviousData,
    staleTime: 30_000,
  });

  if (isPending) {
    return <p>Loading books...</p>;
  }

  if (error) {
    return <p>Could not load books.</p>;
  }

  return (
    <section>
      <ul>
        {data.books?.map((book) => (
          <li key={book.id}>{book.title}</li>
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
