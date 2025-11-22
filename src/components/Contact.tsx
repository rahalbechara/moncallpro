import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-<span className="text-primary">nous</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Parlons-en ensemble
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Nom complet"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Téléphone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Votre message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-secondary"
              >
                Envoyer le message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+212 5XX XXX XXX</p>
                  <p className="text-muted-foreground">+33 X XX XX XX XX</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-xl">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">contact@moncallpro.ma</p>
                  <p className="text-muted-foreground">info@moncallpro.ma</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Adresse</h3>
                  <p className="text-muted-foreground">
                    Casablanca, Maroc
                  </p>
                  <p className="text-muted-foreground">
                    Zone Industrielle Ain Sebaa
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
