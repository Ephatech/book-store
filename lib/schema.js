import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().regex(/^(09\d{8})$/, "Use 09XXXXXXXX format"),
  bookId: z.string().min(1, "Book ID is required"),
  quantity: z.number().positive("Quantity must be a positive number").int(),
});
