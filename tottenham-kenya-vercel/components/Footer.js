export default function Footer() {
  return (
    <footer className="bg-[#132257] text-white p-8 mt-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold text-xl mb-2">About Tottenham Kenya</h3>
          <p className="text-gray-300">The home for Kenyan Spurs fans! Stay updated with news, fixtures, events, and community discussions.</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/news" className="hover:underline">News</a></li>
            <li><a href="/fixtures" className="hover:underline">Fixtures</a></li>
            <li><a href="/players" className="hover:underline">Players</a></li>
            <li><a href="/community" className="hover:underline">Community</a></li>
            <li><a href="/events" className="hover:underline">Events</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-2">Connect with Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-[#D21034]">Facebook</a>
            <a href="#" className="hover:text-[#D21034]">Twitter</a>
            <a href="#" className="hover:text-[#D21034]">Instagram</a>
            <a href="#" className="hover:text-[#D21034]">TikTok</a>
          </div>
          <form className="flex flex-col">
            <input type="email" placeholder="Subscribe to newsletter" className="p-2 rounded mb-2 text-black" />
            <button type="submit" className="bg-[#D21034] p-2 rounded hover:bg-[#006233]">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-400 mt-8">&copy; 2025 Tottenham Kenya. All rights reserved.</div>
    </footer>
  );
}
