import { Clock, Truck, Wine, Gift, Users2, Sparkles } from "lucide-react";
import { SetStateAction, useEffect, useRef } from "react";
import { NavOption } from "./Navbar";
import { useInView } from "framer-motion";

const Features = ({
  setActive,
}: {
  setActive: React.Dispatch<SetStateAction<NavOption>>;
}) => {
   const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) setActive("SERVICES");
  }, [inView]);
  const features = [
    {
      icon: Clock,
      title: "Open Daily",
      description: "Lunch & Dinner Service",
      details: "11:30 AM - 10:00 PM",
    },
    {
      icon: Truck,
      title: "Delivery Available",
      description: "Order Online",
      details: "Free delivery over $50",
    },
    {
      icon: Wine,
      title: "Wine Selection",
      description: "400+ Premium Wines",
      details: "Curated by our sommelier",
    },
    {
      icon: Gift,
      title: "Gift Cards",
      description: "Perfect Gift Idea",
      details: "Available online & in-store",
    },
    {
      icon: Users2,
      title: "Private Events",
      description: "Host Your Celebration",
      details: "Up to 120 guests",
    },
    {
      icon: Sparkles,
      title: "Chef's Table",
      description: "Exclusive Experience",
      details: "Limited availability",
    },
  ];

  return (
    <section className="py-24 bg-background" id="services" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Exceptional Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We go beyond exceptional food to provide a complete dining experience with services tailored to your needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-lg bg-gradient-to-br from-card to-card/50 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-base font-medium text-primary mb-1">
                  {feature.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {feature.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
