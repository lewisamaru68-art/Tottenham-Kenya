import { useState, useEffect } from "react";
import PlayerCard from "./PlayerCard";

export default function PlayerSelector() {
  const players = [
    { name: "Harry Kane", position: "Forward", image: "/players/kane.jpg", goals: 12, assists: 5 },
    { name: "Son Heung-min", position: "Forward", image: "/players/son.jpg", goals: 10, assists: 8 },
    { name: "Dejan Kulusevski", position: "Midfielder", image: "/players/kulu.jpg", goals: 5, assists: 7 },
    { name: "Pierre-Emile Højbjerg", position: "Midfielder", image: "/players/hojbjerg.jpg", goals: 2, assists: 3 },
    { name: "Hugo Lloris", position: "Goalkeeper", image: "/players/lloris.jpg", goals: 0, assists: 0 },
  ];

  const kickoff = new Date("2025-11-12T19:00:00+03:00");
  const [timeLeft, setTimeLeft] = useState(kickoff - new Date());
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = kickoff - new Date();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pickRandomPlayer = () => {
    if(timeLeft <=0) return;
    const idx = Math.floor(Math.random()*players.length);
    setSelectedPlayer(players[idx]);
  }

  const formatTime = (ms) => {
    if(ms<=0) return "00:00:00";
    const totalSec = Math.floor(ms/1000);
    const h = String(Math.floor(totalSec/3600)).padStart(2,"0");
    const m = String(Math.floor((totalSec%3600)/60)).padStart(2,"0");
    const s = String(totalSec%60).padStart(2,"0");
    return `${h}:${m}:${s}`;
  }

  return (
    <div className="p-8 bg-[#e5e5e5] rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-2">Pick Your Player!</h2>
      <p className="mb-4">Time left before kickoff: <span className="font-bold">{formatTime(timeLeft)}</span></p>
      <button onClick={pickRandomPlayer} disabled={timeLeft<=0} className={`px-6 py-2 rounded mb-6 ${timeLeft<=0?'bg-gray-400 cursor-not-allowed':'bg-[#132257] text-white hover:bg-[#D21034]'}`}>
        Pick a Player
      </button>
      {selectedPlayer && <div className="max-w-sm mx-auto"><PlayerCard {...selectedPlayer} /></div>}
      {timeLeft<=0 && <p className="text-red-600 font-bold mt-4">Kickoff has started! Picks are now closed.</p>}
    </div>
  );
}
