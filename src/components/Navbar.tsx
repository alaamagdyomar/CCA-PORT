import Link from "next/link";
export default function Navbar() {
    return (
      <nav className="bg-gray-100 p-4 shadow">
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/team">Team</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }