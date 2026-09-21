import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TrustBar from '@/components/sections/TrustBar';
import Services from '@/components/sections/Services';
import SelectedWork from '@/components/sections/SelectedWork';
import AISection from '@/components/sections/AISection';
import Process from '@/components/sections/Process';
import WhyUs from '@/components/sections/WhyUs';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <SelectedWork />
        <AISection />
        <Process />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
