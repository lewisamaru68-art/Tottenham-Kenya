import PlayerSelector from "./PlayerSelector";

export default function CommunityEvents() {
  const events = [
    { title: "Nairobi Watch Party", date: "15 Nov 2025", location: "City Square Pub, Nairobi", link: "#" },
    { title: "Mombasa Fan Meetup", date: "22 Nov 2025", location: "Oceanview Cafe, Mombasa", link: "#" },
    { title: "Kisumu Screening", date: "28 Nov 2025", location: "Riverside Lounge, Kisumu", link: "#" },
  ];
  const communityPosts = [
    { user: "Kevin K.", content: "Excited for the Chelsea match! Go Spurs!", time: "2 hours ago" },
    { user: "Aisha M.", content: "Anyone meeting up in Nairobi for the game?", time: "5 hours ago" },
    { user: "Brian O.", content: "Love the new site design!", time: "1 day ago" },
  ];
  return (
    <section className="p-8 bg-[#f8f8f8] rounded-lg mt-8">
      <PlayerSelector />
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Upcoming Fan Events</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e,i)=>(
            <div key={i} className="border p-4 rounded shadow hover:shadow-lg bg-white">
              <h3 className="font-bold text-xl mb-2">{e.title}</h3>
              <p className="text-gray-700">{e.date} | {e.location}</p>
              <a href={e.link} className="text-blue-600 hover:underline mt-2 inline-block">RSVP / Details</a>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">Fan Community</h2>
        <div className="space-y-4">
          {communityPosts.map((p,i)=>(
            <div key={i} className="border p-4 rounded shadow bg-white">
              <p className="text-gray-800"><span className="font-bold">{p.user}</span>: {p.content}</p>
              <p className="text-gray-500 text-sm mt-1">{p.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
