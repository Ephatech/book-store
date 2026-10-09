"use client";

import { useState } from "react";

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    bookId: "",
    quantity: 0,
  });

  const [serverErrors, setServerErrors] = useState({});
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    setServerErrors({});
    setMessage("");

    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        phone: form.phone,
        bookId: form.bookId,
        quantity: form.quantity,
      }),
    });

    if (response.status === 422) {
      const data = await response.json();

      setServerErrors(data.fieldErrors);

      return;
    }

    if (!response.ok) {
      setMessage("Something went wrong.");

      return;
    }

    const data = await response.json();

    setMessage(
      `Hi ${data.order.name} Your order ${data.order.id} created successfully! ${data.order.totalPrice} ${data.order.currency}`,
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name : </label>

        <input
          value={form.name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        />

        {serverErrors.name && <p>{serverErrors.name[0]}</p>}
      </div>

      <div>
        <label>Phone : </label>

        <input
          value={form.phone}
          onChange={(event) =>
            setForm({
              ...form,
              phone: event.target.value,
            })
          }
        />

        {serverErrors.phone && <p>{serverErrors.phone[0]}</p>}
      </div>

      <div>
        <label>Book ID : </label>
        <input
          value={form.bookId}
          onChange={(event) =>
            setForm({
              ...form,
              bookId: event.target.value,
            })
          }
        />
        {serverErrors.bookId && <p>{serverErrors.bookId[0]}</p>}
      </div>

      <div>
        <label>Quantity : </label>
        <input
          type="number"
          value={form.quantity}
          onChange={(event) =>
            setForm({
              ...form,
              quantity: parseInt(event.target.value) || 0,
            })
          }
        />
        {serverErrors.quantity && <p>{serverErrors.quantity[0]}</p>}
      </div>

      <button type="submit">Place Order</button>

      {message && <p>{message}</p>}
    </form>
  );
}
