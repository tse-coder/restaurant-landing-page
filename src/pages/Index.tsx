import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar, { NavOption } from "@/components/Navbar";
import { useState } from "react";

const Index = () => {
  const [active, setActive] = useState<NavOption>(null)
  return (
    <main className="min-h-screen">
      <Navbar active={active} setActive={setActive} />
      <Hero setActive={setActive} />
      <About setActive={setActive}  />
      <Menu />
      <Features setActive={setActive} />
      <Testimonials setActive={setActive} />
      <Contact setActive={setActive} />
      <Footer />
    </main>
  );
};

export default Index;
