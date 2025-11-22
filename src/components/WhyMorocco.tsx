import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Clock, FileText, BarChart3 } from "lucide-react";

export const WhyMorocco = () => {
  const advantages = [
    {
      icon: DollarSign,
      title: "Coût salarial attractif",
      description: "Jusqu'à 60% moins cher qu'en Europe",
    },
    {
      icon: Users,
      title: "Jeunes talents francophones",
      description: "Une population jeune, qualifiée et francophone",
    },
    {
      icon: TrendingUp,
      title: "Stabilité politique",
      description: "Un environnement économique stable et sécurisé",
    },
    {
      icon: Clock,
      title: "Fuseaux horaires compatibles",
      description: "Parfaitement aligné avec l'Europe",
    },
    {
      icon: FileText,
      title: "Fiscalité avantageuse",
      description: "Des incitations fiscales pour les investisseurs",
    },
    {
      icon: BarChart3,
      title: "Croissance BPO",
      description: "Un secteur en pleine expansion au Maroc",
    },
  ];

  return (
    <section id="maroc" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi le <span className="text-secondary">Maroc</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un hub stratégique pour votre centre d'appels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:border-secondary"
            >
              <advantage.icon className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              <p className="text-muted-foreground text-sm">{advantage.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
