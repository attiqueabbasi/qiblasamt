import Header from '@/components/Header';
import JsonLd from '@/components/JsonLd';
import Hero from '@/components/Hero';
import Container from '@/components/Container';
import SectionHeading from '@/components/content/SectionHeading';
import QiblaTool from '@/components/QiblaTool';
import FeaturesGrid from '@/components/FeaturesGrid';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import CompassGuideSection from '@/components/sections/CompassGuideSection';
import CitiesSection from '@/components/sections/CitiesSection';
import MethodologySection from '@/components/sections/MethodologySection';
import OfflineMethodsSection from '@/components/sections/OfflineMethodsSection';
import FiqhSection from '@/components/sections/FiqhSection';
import { EditorialTrustBand, ReferencesSection } from '@/components/sections/EditorialTrustSection';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <Hero />

        <section id="qibla-tool" className="scroll-mt-16 bg-surface py-14 sm:pb-20 sm:pt-10">
          <Container width="standard">
            <SectionHeading title="استخدم أداة تحديد اتجاه القبلة" />
            <div className="mx-auto mt-8 max-w-2xl md:max-w-[550px]">
              <QiblaTool />
            </div>
          </Container>
        </section>

        <FeaturesGrid />
        <HowItWorksSection />
        <CompassGuideSection />
        <CitiesSection />
        <MethodologySection />
        <OfflineMethodsSection />
        <FiqhSection />
        <EditorialTrustBand />
        <ReferencesSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
