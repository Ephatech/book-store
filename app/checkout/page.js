import CheckoutForm from "../components/CheckoutForm";

export const metadata = {
  title: "Checkout",
  description: "Complete your purchase and provide payment details.",
};
export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout</h1>

      <CheckoutForm />

      <p>Complete your order.</p>
    </main>
  );
}
