import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Gourmet Avenue", "Downtown District", "New York, NY 10001"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["Reservations: (555) 123-4567", "General Inquiries: (555) 123-4568"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["reservations@savoria.com", "info@savoria.com"],
    },
    {
      icon: Clock,
      title: "Hours",
      details: [
        "Monday - Thursday: 11:30 AM - 10:00 PM",
        "Friday - Saturday: 11:30 AM - 11:00 PM",
        "Sunday: 10:00 AM - 9:00 PM",
      ],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Visit Savoria
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're located in the heart of the city. Reserve your table today or stop by to experience fine dining at its finest
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="flex gap-6 p-6 rounded-lg bg-card shadow-soft hover:shadow-elegant transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {info.title}
                  </h3>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              <Button size="lg" className="flex-1 gap-2">
                <Navigation className="w-5 h-5" />
                Get Directions
              </Button>
              <Button size="lg" variant="outline" className="flex-1 gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-elegant h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9476519598093!2d-73.99185368459395!3d40.74117797932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635959142842!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Savoria Restaurant Location"
            />
          </div>
        </div>

        <div className="mt-16 text-center p-8 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 max-w-4xl mx-auto border border-primary/20">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Reserve Your Table Today
          </h3>
          <p className="text-muted-foreground mb-6">
            Experience culinary excellence in an elegant atmosphere. Book your reservation now and let us make your dining experience unforgettable.
          </p>
          <Button size="lg" className="shadow-elegant">
            Make a Reservation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
