import { orderSchema } from "@/lib/schema";
import { getBookById } from "@/lib/books";

// POST => /api/orders

// var x = {
//     "name" : "John Doe",
//     "phone": "123-456-7890",
//     "bookId": "1",
//     "quantity": 2
// }

// Server
// - Receive JSON
// - Validate JSON - zod schema
// - Find the book
// - Calculate total price
// - Create an order object (Save to database)
// - Return confirmation/ result

export async function POST(request) {
  const body = await request.json(); // Receive JSON

  // Validate JSON - zod schema
  const result = orderSchema.safeParse(body);

  if (!result.success) {
    return Response.json(
      { errors: "Validation failed", details: result.error.issues },
      { status: 422 },
    );
  }

  const book = await getBookById(body.bookId); // Find the book

  if (!book) {
    return Response.json({ errors: "Book not found" }, { status: 404 });
  }

  const totalPrice = book.price * body.quantity; // Calculate total price

  // Create an order object (Save to database)

  // SIMULATE DATABASE SAVE

  const order = {
    id: `Order-${Date.now()}`, // Generate a unique ID based on timestamp
    name: body.name,
    phone: body.phone,
    bookId: body.bookId,
    quantity: body.quantity,
    totalPrice: totalPrice,
    currency: "ETB",
    createdAt: new Date().toISOString(),
  };

  return Response.json(
    { message: "Order created successfully", order },
    { status: 201 },
  );
}

// STATUS CODES

// 200 - success
// 201 - created

// 400 - bad request
// 401 - unauthenticated
// 403 - authenticated but not authorized
// 404 - not found
// 422 - validation error

// 500 - server error
