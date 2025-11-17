import { Leaf, Fish, Beef, Cake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import dishSteak from "@/assets/dish-steak.jpg";
import dishPasta from "@/assets/dish-pasta.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import dishSalad from "@/assets/dish-salad.jpg";

const Menu = () => {
  const dishes = [
    {
      icon: Beef,
      name: "Wagyu Beef Tenderloin",
      description: "Premium Japanese Wagyu with truffle butter, roasted vegetables, and red wine reduction",
      price: "$85",
      image: dishSteak,
      category: "Main Course",
    },
    {
      icon: Fish,
      name: "Mediterranean Seafood Linguine",
      description: "Fresh prawns, scallops, and calamari tossed in white wine garlic sauce",
      price: "$48",
      image: dishPasta,
      category: "Pasta",
    },
    {
      icon: Leaf,
      name: "Garden Fresh Artisan Salad",
      description: "Organic greens, heirloom tomatoes, candied pecans, and champagne vinaigrette",
      price: "$22",
      image: dishSalad,
      category: "Starters",
    },
    {
      icon: Cake,
      name: "Belgian Chocolate Symphony",
      description: "Dark chocolate mousse with raspberry coulis and gold leaf garnish",
      price: "$18",
      image: dishDessert,
      category: "Desserts",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Signature Dishes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of culinary masterpieces, each dish telling its own unique story of flavor and craftsmanship
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {dishes.map((dish, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 bg-card"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={`${dish.name} - ${dish.description}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  {dish.category}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <dish.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">{dish.name}</h3>
                      <span className="text-xl font-bold text-primary ml-4">{dish.price}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{dish.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Explore our complete menu featuring seasonal specialties and an extensive wine collection
          </p>
          <button className="text-primary font-semibold text-lg hover:underline transition-all hover:text-primary/80">
            View Full Menu →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
