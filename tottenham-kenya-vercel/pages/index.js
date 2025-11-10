import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import NewsCard from '../components/NewsCard';
import FixtureCard from '../components/FixtureCard';
import PlayerCard from '../components/PlayerCard';
import CommunityEvents from '../components/CommunityEvents';
import Footer from '../components/Footer';

export default function Home() {
  const news = [
    { title: "Spurs Beat Arsenal!", summary: "Amazing derby win!", image: "/news1.jpg" },
    { title: "Kenyan Fan Spotlight", summary: "Meet our fan of the week!", image: "/news2.jpg" },
    { title: "Upcoming Fixture", summary: "Next match against Chelsea.", image: "/news3.jpg" },
  ];
  const fixtures = [
    { date:"12 Nov 2025", time:"19:00", opponent:"Chelsea", competition:"Premier League", result:null },
    { date:"19 Nov 2025", time:"16:00", opponent:"Liverpool", competition:"Premier League", result:null },
    { date:"26 Nov 2025", time:"18:30", opponent:"Arsenal", competition:"Premier League", result:null },
  ];
  const players = [
    { name:"Harry Kane", position:"Forward", image:"/players/kane.jpg", goals:12, assists:5 },
    { name:"Son Heung-min", position:"Forward", image:"/players/son.jpg", goals:10, assists:8 },
    { name:"Dejan Kulusevski", position:"Midfielder", image:"/players/kulu.jpg", goals:5, assists:7 },
  ];
  return (
    <div>
      <Navbar />
      <HeroBanner />

      <section className="p-8 bg-[#f8f8f8]">
        <h2 className="text-3xl font-bold mb-6">Latest News</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {news.map((n,i)=><NewsCard key={i} {...n} />)}
        </div>
      </section>

      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Upcoming Fixtures</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {fixtures.map((f,i)=><FixtureCard key={i} {...f} />)}
        </div>
      </section>

      <section className="p-8 bg-[#f8f8f8]">
        <h2 className="text-3xl font-bold mb-6">Player Spotlight</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {players.map((p,i)=><PlayerCard key={i} {...p} />)}
        </div>
      </section>

      <CommunityEvents />
      <Footer />
    </div>
  );
}
