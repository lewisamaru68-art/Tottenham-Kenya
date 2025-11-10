export default function HeroBanner() {
  return (
    <div className="relative h-[400px] bg-[url('/banner.jpg')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="bg-black bg-opacity-50 p-6 rounded">
        <h1 className="text-4xl font-bold mb-2">Welcome Kenyan Spurs Fans!</h1>
        <p className="mb-4">Latest match updates, events, and fan stories from Kenya.</p>
        <button className="bg-[#D21034] px-4 py-2 rounded hover:bg-[#006233]">Join the Community</button>
      </div>
    </div>
  );
}
