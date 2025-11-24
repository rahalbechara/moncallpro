import { useState } from "react";
import { Card } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Clock, MapPin, BarChart3 } from "lucide-react";
import officeModern from "@/assets/office-modern.jpg";

export const InteractiveWhyMoroccoTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const advantages = [
    {
      icon: DollarSign,
      title: "Coût compétitif",
      value: "-60%",
      description: "Économies par rapport à l'Europe",
      details: [
        "Salaires attractifs",
        "Charges sociales réduites",
        "Coûts d'exploitation maîtrisés",
        "Fiscalité avantageuse"
      ],
      color: "from-primary to-primary/70",
    },
    {
      icon: Users,
      title: "Talents qualifiés",
      value: "70%",
      description: "Population francophone jeune",
      details: [
        "Formation supérieure accessible",
        "Maîtrise du français",
        "Culture du service client",
        "Motivation et engagement"
      ],
      color: "from-secondary to-secondary/70",
    },
    {
      icon: TrendingUp,
      title: "Stabilité garantie",
      value: "AAA",
      description: "Environnement économique stable",
      details: [
        "Stabilité politique reconnue",
        "Croissance économique soutenue",
        "Cadre juridique sécurisé",
        "Accords internationaux"
      ],
      color: "from-accent to-accent/70",
    },
    {
      icon: Clock,
      title: "Fuseau idéal",
      value: "GMT+0",
      description: "Alignement parfait avec l'Europe",
      details: [
        "Même heure que l'Europe en hiver",
        "1h de décalage en été",
        "Coordination simplifiée",
        "Disponibilité optimale"
      ],
      color: "from-primary to-primary/70",
    },
    {
      icon: MapPin,
      title: "Proximité",
      value: "3h",
      description: "De vol depuis l'Europe",
      details: [
        "Accès rapide et facile",
        "Nombreuses liaisons aériennes",
        "Infrastructure moderne",
        "Connexion internet fibre"
      ],
      color: "from-secondary to-secondary/70",
    },
    {
      icon: BarChart3,
      title: "Secteur en croissance",
      value: "+25%",
      description: "Croissance annuelle du BPO",
      details: [
        "Leader africain du BPO",
        "Investissements massifs",
        "Écosystème mature",
        "Expertise reconnue"
      ],
      color: "from-accent to-accent/70",
    },
  ];

  return (
    <section id="maroc" className="py-24 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={officeModern} 
          alt="Modern Office" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Pourquoi le <span className="text-secondary">Maroc</span> ?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Un hub stratégique pour votre centre d'appels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className={`p-6 transition-all duration-500 cursor-pointer border-2 bg-background/95 backdrop-blur ${
                hoveredIndex === index
                  ? "scale-105 shadow-[var(--shadow-elegant)] border-primary/50 bg-gradient-to-br from-primary/10 to-transparent"
                  : "hover:scale-102 border-border"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-gradient-to-br ${advantage.color} p-3 rounded-xl w-14 h-14 flex items-center justify-center mb-4 transition-transform duration-500 ${
                  hoveredIndex === index ? "rotate-12 scale-110" : ""
                }`}
              >
                <advantage.icon className="h-7 w-7 text-primary-foreground" />
              </div>

              <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
              
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {advantage.value}
              </div>

              <p className="text-muted-foreground text-sm mb-4">{advantage.description}</p>

              <div
                className={`space-y-2 overflow-hidden transition-all duration-500 ${
                  hoveredIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t pt-3">
                  {advantage.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 mb-2 animate-fade-in text-sm"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <Card className="p-4 text-center bg-background/95 backdrop-blur border-primary/20">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">60%</div>
            <p className="text-xs md:text-sm text-muted-foreground">Économies</p>
          </Card>
          <Card className="p-4 text-center bg-background/95 backdrop-blur border-secondary/20">
            <div className="text-2xl md:text-3xl font-bold text-secondary mb-1">500K+</div>
            <p className="text-xs md:text-sm text-muted-foreground">Employés BPO</p>
          </Card>
          <Card className="p-4 text-center bg-background/95 backdrop-blur border-accent/20">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">3h</div>
            <p className="text-xs md:text-sm text-muted-foreground">De Paris</p>
          </Card>
          <Card className="p-4 text-center bg-background/95 backdrop-blur border-primary/20">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">N°1</div>
            <p className="text-xs md:text-sm text-muted-foreground">Afrique BPO</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
