import { Card } from "@/components/ui/card";
import { Clock, TrendingUp, Shield } from "lucide-react";
import callcenterTeam from "@/assets/callcenter-team.jpg";

export const WhyMonCallPro = () => {
  const features = [
    {
      icon: Clock,
      title: "Création en 45-60 jours",
      description: "Votre centre d'appels opérationnel en moins de 2 mois",
    },
    {
      icon: TrendingUp,
      title: "ROI rapide : 6 à 10 mois",
      description: "Retour sur investissement garanti dans les meilleurs délais",
    },
    {
      icon: Shield,
      title: "Gestion totale ou indépendante",
      description: "Choisissez le niveau d'autonomie qui vous convient",
    },
  ];

  return (
    <section 
      id="pourquoi" 
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: `url(${callcenterTeam})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi <span className="text-primary">MonCallPro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour votre réussite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
