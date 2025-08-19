import Header from './components/Header';
import Hero from './components/Hero';
import WelcomeSection from './components/WelcomeSection';
import IslandwideReach from './components/IslandwideReach';
import StatsBar from './components/StatsBar';
import OurClients from './components/OurClients';
import ServicesSection from './components/ServicesSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeSection />
      <IslandwideReach />
      <StatsBar />
      <ServicesSection />
      <OurClients />
    </main>
  );
}
