import About from "@/components/home/about";
import Banner from "@/components/home/banner";
import Contact from "@/components/home/contact";
import Hero from "@/components/home/hero";
import Offer from "@/components/home/offer";
import Services from "@/components/home/services";
import Team from "@/components/home/team";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <Banner />
      <Team />
      <Offer />
      <Banner />
      <About />
      <Contact />
    </div>
  );
}
