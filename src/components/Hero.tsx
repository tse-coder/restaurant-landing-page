import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero/avatar1.png";
import { SetStateAction, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import { NavOption } from "./Navbar";

const Hero = ({
  setActive,
}: {
  setActive: React.Dispatch<SetStateAction<NavOption>>;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) setActive("HOME");
  }, [inView]);
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="home"
      ref={ref}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <h1 className="text-7xl md:text-9xl lg:text-[200px] mb-6 animate-fade-in font-fancy italic text-[#d99e7c] ">
          Savoria
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light tracking-wide">
          Where Every Meal is a Masterpiece
        </p>
        <p className="text-base md:text-lg mb-12 max-w-2xl mx-auto opacity-90">
          Experience the art of fine dining with our carefully crafted dishes,
          using only the finest locally-sourced ingredients prepared by
          award-winning chefs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            variant="secondary"
            className="gap-2 text-base  hover:scale-105 transition-transform"
          >
            <Calendar className="w-5 h-5" />
            Reserve a Table
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="gap-2 text-base border-2 border bg-transparet"
          >
            <Phone className="w-5 h-5" />
            Call Us Now
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
