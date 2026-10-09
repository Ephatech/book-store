import Navbar from "./Navbar";
import SignOutButton from "./SignOutButton";

export default function Header() {
  return (
    <header>
      <SignOutButton />
      <h1>Book Store Header</h1>
      <Navbar />
    </header>
  );
}
