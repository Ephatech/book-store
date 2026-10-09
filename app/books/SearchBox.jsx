"use client";

import { useState } from "react";
import useSWR from "swr";
import fetcher from "../../lib/fetcher";

export default function SearchBox() {
  const [term, setTerm] = useState("");

  const { data, error, isLoading } = useSWR(
    term ? `/api/books?q=${encodeURIComponent(term)}` : null,
    fetcher,
  );

  return (
    <section>
      <h2>Search Books</h2>

      <input
        value={term}
        onChange={(event) => setTerm(event.target.value)}
        placeholder="Search books..."
      />

      {!term && <p>Start typing to search.</p>}

      {isLoading && <p>Searching...</p>}

      {error && <p>Could not search books.</p>}

      {data && (
        <ul>
          {data.map((book) => (
            <li key={book.id}>
              {book.title} - {book.price} ETB
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
