export default function FixtureCard({ date, time, opponent, competition, result }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg bg-white">
      <h3 className="font-bold text-lg mb-1">{opponent}</h3>
      <p className="text-gray-600">{competition}</p>
      <p className="text-gray-800">{date} | {time} (EAT)</p>
      {result && <p className="mt-2 font-semibold">Result: {result}</p>}
    </div>
  );
}
