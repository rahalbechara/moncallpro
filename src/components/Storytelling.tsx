import businessMeeting from "@/assets/business-handshake.jpg";
import { Button } from "@/components/ui/button";

export const Storytelling = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Votre business{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                commence ici
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Depuis plus de 10 ans, nous accompagnons des entrepreneurs comme vous dans la création 
                de centres d'appels performants au Maroc.
              </p>
              <p>
                Notre expertise couvre l'intégralité du processus : de la construction des infrastructures 
                au recrutement et à la formation de vos équipes, jusqu'à la livraison d'un centre 100% opérationnel.
              </p>
              <p className="font-semibold text-foreground">
                Avec MonCallPro, vous investissez dans une solution clé en main qui génère des résultats mesurables dès les premiers mois.
              </p>
            </div>
            <div className="mt-8">
              <Button 
                size="lg" 
                onClick={scrollToContact}
                className="text-lg px-8 py-6"
              >
                Je suis intéressé(e) par l'offre
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-[var(--shadow-elegant)]">
              <img 
                src={businessMeeting} 
                alt="Business Meeting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
