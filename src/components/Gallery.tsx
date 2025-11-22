import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Users, Monitor } from "lucide-react";
import team1 from "@/assets/gallery/team-1.jpg";
import team2 from "@/assets/gallery/team-2.jpg";
import modernOffice from "@/assets/gallery/modern-office.jpg";
import meetingRoom from "@/assets/gallery/meeting-room.jpg";
import workspace from "@/assets/gallery/workspace.jpg";
import officeBasic from "@/assets/gallery/office-basic.jpg";

export const Gallery = () => {
  return (
    <section id="realisations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-primary">réalisations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos centres d'appels modernes et performants
          </p>
        </div>

        <Tabs defaultValue="avant-apres" className="w-full">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="avant-apres" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              <span className="hidden sm:inline">Avant / Après</span>
              <span className="sm:hidden">Centre</span>
            </TabsTrigger>
            <TabsTrigger value="equipes" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>Équipes</span>
            </TabsTrigger>
            <TabsTrigger value="installations" className="flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              <span className="hidden sm:inline">Installations</span>
              <span className="sm:hidden">Tech</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="avant-apres" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={officeBasic} 
                    alt="Bureau avant transformation" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-muted/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-sm">Avant</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Espace standard</h3>
                  <p className="text-muted-foreground text-sm">
                    Configuration de base avec équipements essentiels
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={modernOffice} 
                    alt="Bureau après transformation" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="font-semibold text-sm text-primary-foreground">Après</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Espace moderne</h3>
                  <p className="text-muted-foreground text-sm">
                    Design contemporain avec éclairage optimal et équipements haut de gamme
                  </p>
                </div>
              </Card>
            </div>

            <Card className="overflow-hidden">
              <div className="relative aspect-[21/9]">
                <img 
                  src={meetingRoom} 
                  alt="Salle de réunion premium" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Salle de réunion premium</h3>
                <p className="text-muted-foreground text-sm">
                  Espace privé avec branding personnalisé pour vos réunions stratégiques
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="equipes" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={team1} 
                    alt="Équipe au travail 1" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Équipe dynamique</h3>
                  <p className="text-muted-foreground text-sm">
                    Nos agents qualifiés travaillent dans un environnement professionnel
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden group">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={team2} 
                    alt="Équipe au travail 2" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Collaboration efficace</h3>
                  <p className="text-muted-foreground text-sm">
                    Espaces de travail optimisés pour la productivité et le bien-être
                  </p>
                </div>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Agents formés</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground">Disponibilité</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">98%</div>
                  <p className="text-muted-foreground">Satisfaction client</p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="installations" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={workspace} 
                    alt="Postes de travail modernes" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Postes de travail ergonomiques</h3>
                  <p className="text-muted-foreground text-sm">
                    Équipements informatiques dernière génération et mobilier ergonomique
                  </p>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <img 
                    src={modernOffice} 
                    alt="Infrastructure moderne" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Infrastructure moderne</h3>
                  <p className="text-muted-foreground text-sm">
                    Éclairage LED, climatisation, insonorisation et connectivité fibre optique
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-bold mb-6 text-center">Équipements inclus</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "PC dernière génération",
                  "Casques professionnels",
                  "Double écran par poste",
                  "Mobilier ergonomique",
                  "Système téléphonique VoIP",
                  "Fibre optique dédiée",
                  "Serveurs sécurisés",
                  "Système de surveillance",
                  "Climatisation centralisée"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
