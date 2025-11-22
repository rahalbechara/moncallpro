import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Jean-Pierre Dubois",
      role: "PDG, TeleServices France",
      content: "MonCallPro a transformé notre vision en réalité. En moins de 2 mois, notre centre était opérationnel avec une équipe parfaitement formée. Le ROI a été atteint en 7 mois.",
      rating: 5,
    },
    {
      name: "Sophie Martin",
      role: "Directrice Commerciale, CallEurope",
      content: "L'accompagnement de MonCallPro a été exceptionnel. Ils ont géré tous les aspects techniques et RH, nous permettant de nous concentrer sur notre cœur de métier.",
      rating: 5,
    },
    {
      name: "Ahmed Benali",
      role: "Entrepreneur, ContactPro",
      content: "Investir avec MonCallPro était la meilleure décision. Le professionnalisme de l'équipe et la qualité des infrastructures ont dépassé nos attentes.",
      rating: 5,
    },
  ];

  return (
    <section id="temoignages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Témoignages
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ce que nos clients disent de nous
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
