import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-[#132257] text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Tottenham Kenya</div>
      <ul className="flex space-x-6">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/news">News</Link></li>
        <li><Link href="/fixtures">Fixtures</Link></li>
        <li><Link href="/players">Players</Link></li>
        <li><Link href="/community">Community</Link></li>
        <li><Link href="/events">Events</Link></li>
        <li><Link href="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}
