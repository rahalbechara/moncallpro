import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Users, Clock, ArrowRight } from "lucide-react";

export const InteractivePacksTable = () => {
  const [selectedPack, setSelectedPack] = useState(1);

  const packs = [
    {
      id: 0,
      amount: "400 000 MAD",
      postes: 10,
      roi: "8-10 mois",
      features: ["Centre clé en main", "Infrastructure complète", "Recrutement & formation"],
    },
    {
      id: 1,
      amount: "800 000 MAD",
      postes: 25,
      roi: "6-8 mois",
      features: ["Centre clé en main", "Infrastructure premium", "Recrutement & formation avancée", "Supervision incluse"],
    },
    {
      id: 2,
      amount: "1 200 000 MAD",
      postes: 40,
      roi: "6-7 mois",
      features: ["Centre clé en main", "Infrastructure premium", "Recrutement & formation expert", "Management complet", "Support 24/7"],
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comparatif des <span className="text-primary">packs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plus vous investissez, plus votre ROI est rapide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Interactive selector */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {packs.map((pack) => (
              <Button
                key={pack.id}
                variant={selectedPack === pack.id ? "default" : "outline"}
                onClick={() => setSelectedPack(pack.id)}
                className="text-lg px-6 py-6"
              >
                {pack.postes} postes
              </Button>
            ))}
          </div>

          {/* Comparison table */}
          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {packs[selectedPack].postes} postes
                </div>
                <p className="text-muted-foreground">Capacité opérationnelle</p>
              </div>

              <div className="text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-secondary" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {packs[selectedPack].roi}
                </div>
                <p className="text-muted-foreground">Retour sur investissement</p>
              </div>

              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {packs[selectedPack].amount}
                </div>
                <p className="text-muted-foreground">Investissement total</p>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-2xl font-bold mb-6">Inclus dans ce pack :</h3>
              <ul className="space-y-4 mb-8">
                {packs[selectedPack].features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="bg-secondary/20 p-2 rounded-full">
                      <Check className="h-5 w-5 text-secondary" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full md:w-auto text-lg px-8 py-6"
                onClick={scrollToContact}
              >
                Je veux ce pack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>

          {/* ROI visualization */}
          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Rentabilité annuelle estimée</p>
                <p className="text-2xl font-bold">
                  {selectedPack === 0 && "~50 000 MAD/mois"}
                  {selectedPack === 1 && "~120 000 MAD/mois"}
                  {selectedPack === 2 && "~200 000 MAD/mois"}
                </p>
              </div>
              <TrendingUp className="h-16 w-16 text-primary opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
