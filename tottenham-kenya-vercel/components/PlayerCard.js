export default function PlayerCard({ name, position, image, goals, assists }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg bg-white">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded mb-3"/>
      <h3 className="font-bold text-xl">{name}</h3>
      <p className="text-gray-700">{position}</p>
      <p className="mt-2 text-gray-800">Goals: {goals} | Assists: {assists}</p>
    </div>
  );
}
