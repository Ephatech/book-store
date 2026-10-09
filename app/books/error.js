"use client";
export default function Error({ error, reset }) {
  <div>
    <h1>Something went wrong!</h1>
    <p>{error.message}</p>
    <button onClick={() => reset()}>Try Again</button>
  </div>;
}
