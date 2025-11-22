import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export const InvestmentPacks = () => {
  const packs = [
    {
      amount: "400 000 MAD",
      postes: "10 postes",
      features: [
        "Centre clé en main",
        "Infrastructure complète",
        "Recrutement & formation",
        "ROI : 8-10 mois",
      ],
      highlight: false,
    },
    {
      amount: "800 000 MAD",
      postes: "25 postes",
      features: [
        "Centre clé en main",
        "Infrastructure premium",
        "Recrutement & formation avancée",
        "Supervision incluse",
        "ROI : 6-8 mois",
      ],
      highlight: true,
    },
    {
      amount: "1 200 000 MAD",
      postes: "40 postes",
      features: [
        "Centre clé en main",
        "Infrastructure premium",
        "Recrutement & formation expert",
        "Management complet",
        "Support 24/7",
        "ROI : 6-7 mois",
      ],
      highlight: false,
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Packs d'<span className="text-primary">investissement</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choisissez le pack adapté à votre ambition
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packs.map((pack, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                pack.highlight 
                  ? "border-2 border-primary shadow-[var(--shadow-elegant)] scale-105" 
                  : "hover:shadow-lg"
              } transition-all duration-300`}
            >
              {pack.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-1 rounded-full text-sm font-semibold">
                  Populaire
                </div>
              )}
              <div className="text-center mb-6">
                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {pack.amount}
                </div>
                <div className="text-2xl font-semibold text-foreground">{pack.postes}</div>
              </div>
              <ul className="space-y-3 mb-8">
                {pack.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full"
                variant={pack.highlight ? "default" : "outline"}
                onClick={scrollToContact}
              >
                Commencer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
