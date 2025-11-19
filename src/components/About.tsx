import { Award, Heart, Users, Utensils } from "lucide-react";
import restaurantInterior from "@/assets/restaurant-interior.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import { motion, useAnimation, useInView } from "framer-motion";
import { SetStateAction, useEffect, useRef } from "react";
import { NavOption } from "./Navbar";

const About = ({
  setActive,
}: {
  setActive: React.Dispatch<SetStateAction<NavOption>>;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (inView) setActive("ABOUT");
  }, [inView]);

  const textRef = useRef(null);
  const imageRef = useRef(null);
  const textControls = useAnimation();
  const imageControls = useAnimation();
  const isTextInView = useInView(textRef, { once: true });
  const isImageInView = useInView(imageRef, { once: true });

  if (isTextInView) textControls.start({ opacity: 1, y: 0 });
  if (isImageInView) imageControls.start({ opacity: 1, scale: 1 });
  const features = [
    {
      icon: Award,
      title: "Award-Winning",
      description: "Recognized by Michelin Guide for culinary excellence",
    },
    {
      icon: Heart,
      title: "Made with Love",
      description: "Every dish crafted with passion and attention to detail",
    },
    {
      icon: Users,
      title: "Family Friendly",
      description: "A warm atmosphere perfect for all occasions",
    },
    {
      icon: Utensils,
      title: "Premium Quality",
      description: "Only the finest locally-sourced ingredients",
    },
  ];

  return (
    <section className="py-24 bg-background" id="about" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 60 }}
            animate={textControls}
            transition={{ duration: 3, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground line-clamp-3 lg:line-clamp-none">
              A Culinary Journey Since 1985
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none">
              At Savoria, we believe that dining is an experience that engages
              all the senses. Our story began over three decades ago with a
              simple vision: to create a space where food becomes art and every
              meal becomes a cherished memory.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed line-clamp-3 lg:line-clamp-none">
              Led by our Executive Chef Marco Bernardini, our talented culinary
              team combines traditional techniques with innovative flavors to
              create dishes that surprise and delight. We source our ingredients
              from local farmers and artisans who share our commitment to
              quality and sustainability.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed line-clamp-3 lg:line-clamp-none">
              Whether you're celebrating a special occasion or simply seeking an
              exceptional meal, Savoria offers an elegant yet welcoming
              atmosphere where you can relax, savor, and enjoy the moment.
            </p>
          </motion.div>

          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={imageControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 relative"
          >
            <img
              src={restaurantInterior}
              alt="Savoria restaurant elegant interior"
              className="rounded-lg shadow-elegant w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-lg overflow-hidden shadow-elegant"
        >
          <img
            src={chefCooking}
            alt="Chef preparing gourmet dishes in professional kitchen"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex items-end">
            <div className="p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-2">
                Meet Chef Marco Bernardini
              </h3>
              <p className="text-lg opacity-90">
                With over 25 years of culinary expertise and training in the
                finest kitchens of Italy and France, Chef Marco brings passion
                and innovation to every plate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
