import Navigation        from '@/components/Navigation';
import Hero              from '@/components/Hero';
import About             from '@/components/About';
import Services          from '@/components/Services';
import Properties        from '@/components/Properties';
import WhyUs             from '@/components/WhyUs';
import Location          from '@/components/Location';
import Contact           from '@/components/Contact';
import Footer            from '@/components/Footer';
import FloatingWhatsApp  from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Properties />
      <WhyUs />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
