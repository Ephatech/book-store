import Link from "next/link";
export default function Navbar() {
  return (
    <div>
      <nav>
        <Link href="/dashboard">Dashboard</Link>
        {" | "}
        <Link href="/">Home</Link>
        {" | "}
        <Link href="/books">Books</Link>
        {" | "}
        <Link href="/cart">Cart</Link>
        {" | "}
        <Link href="/checkout">Checkout</Link>
        {" | "}
        <Link href="/order">Orders</Link>
        {" | "}
        <Link href="/kitchen">Kitchen</Link>
      </nav>
    </div>
  );
}
