import { Card } from "@/components/ui/card";
import { DollarSign, Building2, Users, GraduationCap, Rocket, BarChart } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: DollarSign,
      number: "01",
      title: "Investissement",
      description: "Vous choisissez votre pack et nous validons ensemble votre projet",
    },
    {
      icon: Building2,
      number: "02",
      title: "Construction",
      description: "Nous créons l'infrastructure complète de votre centre d'appels",
    },
    {
      icon: Users,
      number: "03",
      title: "Recrutement",
      description: "Sélection rigoureuse des meilleurs talents francophones",
    },
    {
      icon: GraduationCap,
      number: "04",
      title: "Formation",
      description: "Formation complète de vos équipes aux standards internationaux",
    },
    {
      icon: Rocket,
      number: "05",
      title: "Livraison",
      description: "Votre centre est opérationnel et prêt à générer des revenus",
    },
    {
      icon: BarChart,
      number: "06",
      title: "Suivi",
      description: "Accompagnement continu et optimisation des performances",
    },
  ];

  return (
    <section id="comment" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comment ça <span className="text-primary">marche</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un processus simple et éprouvé en 6 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-xl">
                    <step.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-muted-foreground/20 mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
