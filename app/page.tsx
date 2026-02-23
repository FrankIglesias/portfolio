import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-row">
      <Navbar />
      <div className="flex-1 h-screen overflow-y-scroll snap-y snap-mandatory">
        <section className="min-h-screen snap-start [&>*:first-child]:p-[40px_70px_40px_140px] [&>*:first-child]:relative [&>*:first-child]:min-h-screen max-[900px]:[&>*:first-child]:p-[40px_10px_40px_70px]" id="main">
          <MainSection />
        </section>
        <section className="min-h-screen snap-start [&>*:first-child]:p-[40px_70px_40px_140px] [&>*:first-child]:relative [&>*:first-child]:min-h-screen max-[900px]:[&>*:first-child]:p-[40px_10px_40px_70px]" id="experience">
          <ExperienceSection />
        </section>
        <section className="min-h-screen snap-start [&>*:first-child]:p-[40px_70px_40px_140px] [&>*:first-child]:relative [&>*:first-child]:min-h-screen max-[900px]:[&>*:first-child]:p-[40px_10px_40px_70px]" id="portfolio">
          <PortfolioSection />
        </section>
        <section className="min-h-screen snap-start [&>*:first-child]:p-[40px_70px_40px_140px] [&>*:first-child]:relative [&>*:first-child]:min-h-screen max-[900px]:[&>*:first-child]:p-[40px_10px_40px_70px]" id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
