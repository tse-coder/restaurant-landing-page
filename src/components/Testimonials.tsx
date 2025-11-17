import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import avatarEmily from "@/assets/avatar-emily.jpg";
import avatarJames from "@/assets/avatar-james.jpg";
import avatarSofia from "@/assets/avatar-sofia.jpg";
import avatarDavid from "@/assets/avatar-david.jpg";
import avatarLisa from "@/assets/avatar-lisa.jpg";
import avatarRobert from "@/assets/avatar-robert.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Richardson",
      role: "Food Critic",
      content: "Savoria delivers an extraordinary culinary experience. Every dish is a masterpiece, combining innovative flavors with impeccable presentation. The attention to detail is remarkable, from the amuse-bouche to the final dessert course.",
      rating: 5,
      avatar: avatarEmily,
    },
    {
      name: "James Mitchell",
      role: "Regular Guest",
      content: "I've been dining at Savoria for over five years, and it never disappoints. The consistency in quality, the warm hospitality, and the ever-evolving menu keep me coming back. It's my go-to place for special celebrations.",
      rating: 5,
      avatar: avatarJames,
    },
    {
      name: "Sofia Martinez",
      role: "Wine Enthusiast",
      content: "The wine pairing at Savoria is exceptional. Their sommelier perfectly complements each dish with carefully selected wines. The Chef's Table experience was unforgettable - watching the culinary magic unfold was absolutely mesmerizing.",
      rating: 5,
      avatar: avatarSofia,
    },
    {
      name: "David Chen",
      role: "Business Professional",
      content: "Perfect venue for client dinners. The ambiance strikes the right balance between sophisticated and comfortable. The service is impeccable, and the food consistently exceeds expectations. Highly recommended for business entertainment.",
      rating: 5,
      avatar: avatarDavid,
    },
    {
      name: "Lisa Thompson",
      role: "Local Food Blogger",
      content: "Every visit to Savoria is a journey of flavors. The seasonal menu keeps things exciting, and the presentation is Instagram-worthy. But beyond the aesthetics, the taste is what keeps me returning. A true gem in our city.",
      rating: 5,
      avatar: avatarLisa,
    },
    {
      name: "Robert Anderson",
      role: "Executive Chef",
      content: "As a fellow chef, I'm impressed by the technical skill and creativity on display at Savoria. The kitchen's execution is flawless, and you can taste the quality of every ingredient. This is fine dining at its absolute best.",
      rating: 5,
      avatar: avatarRobert,
    },
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            What Our Guests Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from those who have experienced the magic of Savoria
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-scroll">
          {duplicatedTestimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="flex-shrink-0 w-[400px] hover:shadow-elegant transition-all duration-300 bg-card"
            >
              <CardContent className="p-8">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex gap-1 mb-4 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 italic min-h-[160px]">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4 flex items-center gap-4">
                  <img 
                    src={testimonial.avatar}
                    alt={`${testimonial.name} - ${testimonial.role}`}
                    className="w-14 h-14 rounded-full object-cover shadow-soft"
                  />
                  <div>
                    <p className="font-semibold text-card-foreground text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <div className="text-center p-8 rounded-lg bg-primary/5 max-w-3xl mx-auto">
          <div className="flex justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-2xl font-semibold text-foreground mb-2">
            Rated 4.9 out of 5 stars
          </p>
          <p className="text-muted-foreground">
            Based on 1,200+ reviews across Google, Yelp, and TripAdvisor
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
