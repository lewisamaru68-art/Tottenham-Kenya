export default function NewsCard({ title, summary, image }) {
  return (
    <div className="border rounded shadow hover:shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700">{summary}</p>
      </div>
    </div>
  );
}
