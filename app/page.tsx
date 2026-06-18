// import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhoIsFor from "./components/WhoIsFor";
import Sponsors from "./components/Sponsors";
import CampSection from "./components/CampSection";
import YogaSection from "./components/YogaSection";
import WhyUs from "./components/WhyUs";

import ContactInfo from "./components/ContactInfo";
import Camp from "./components/Camp";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <WhoIsFor />
      <Sponsors />
      <Camp />
      <CampSection />
      <YogaSection />
      <WhyUs />

      <ContactInfo />
    </main>
  );
}
