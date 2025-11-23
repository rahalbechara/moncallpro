import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Laurent Ménard",
      role: "Directeur Service Client — Lille, France",
      content: "Après dix ans de gestion d'un centre d'appels en France, les charges étaient devenues impossibles à supporter. MonCallPro s'est occupé de tout : le local, les équipes, le matériel, la formation… en même pas un mois, j'avais un centre opérationnel. Aujourd'hui, je réalise plus de bénéfices avec 20 positions au Maroc qu'avec 8 en France. Franchement, je recommande les yeux fermés.",
      rating: 5,
    },
    {
      name: "Sabrina El Othmani",
      role: "Consultante & investisseuse — Paris",
      content: "À la base, je voulais investir dans un petit appartement pour le mettre en location. Puis j'ai découvert l'offre de MonCallPro. Avec moins de budget qu'un studio, j'ai pu lancer mon propre centre d'appels. Honnêtement, c'est la meilleure décision que j'ai prise : j'ai un business qui me rapporte tous les mois sans gérer quoi que ce soit.",
      rating: 5,
    },
    {
      name: "Camille Parot",
      role: "Entrepreneur e-commerce — Montréal",
      content: "Je cherchais un moyen de diversifier mes revenus. MonCallPro m'a convaincu avec sa transparence : on m'a expliqué les étapes, les coûts, les délais. En un mois et demi, mon centre était opérationnel. Aujourd'hui, mon centre tourne tout seul et j'ai déjà récupéré une grande partie de mon investissement. Je prépare même un deuxième centre avec eux.",
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
