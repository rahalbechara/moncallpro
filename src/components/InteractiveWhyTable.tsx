import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Shield, CheckCircle } from "lucide-react";

export const InteractiveWhyTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: Clock,
      title: "Création rapide",
      value: "45-60 jours",
      description: "Votre centre d'appels opérationnel en moins de 2 mois",
      details: [
        "Sélection du local",
        "Recrutement des équipes",
        "Installation complète",
        "Formation opérationnelle",
      ],
      color: "from-primary to-primary/70",
    },
    {
      icon: TrendingUp,
      title: "ROI rapide",
      value: "6-10 mois",
      description: "Retour sur investissement garanti dans les meilleurs délais",
      details: [
        "Rentabilité optimisée",
        "Coûts maîtrisés",
        "Performance mesurable",
        "Croissance garantie",
      ],
      color: "from-secondary to-secondary/70",
    },
    {
      icon: Shield,
      title: "Gestion flexible",
      value: "100% autonome",
      description: "Choisissez le niveau d'autonomie qui vous convient",
      details: [
        "Gestion totale par MonCallPro",
        "Gestion partagée",
        "Gestion autonome",
        "Support continu",
      ],
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <section id="pourquoi" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="text-primary">MonCallPro</span> ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des résultats concrets et mesurables
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-8 transition-all duration-500 cursor-pointer border-2 ${
                hoveredIndex === index
                  ? "scale-105 shadow-[var(--shadow-elegant)] border-primary/50 bg-gradient-to-br from-primary/5 to-transparent"
                  : "hover:scale-102 border-border"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-gradient-to-br ${feature.color} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 transition-transform duration-500 ${
                  hoveredIndex === index ? "rotate-12 scale-110" : ""
                }`}
              >
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>

              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              
              <div className="text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {feature.value}
              </div>

              <p className="text-muted-foreground mb-6">{feature.description}</p>

              <div
                className={`space-y-3 overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t pt-4">
                  {feature.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 mb-2 animate-fade-in"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Summary stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-transparent">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <p className="text-muted-foreground">Centres créés</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-transparent">
            <div className="text-3xl font-bold text-secondary mb-2">98%</div>
            <p className="text-muted-foreground">Taux de satisfaction</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-transparent">
            <div className="text-3xl font-bold text-accent mb-2">24/7</div>
            <p className="text-muted-foreground">Support disponible</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
