import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="MonCallPro" className="h-10 w-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              Votre partenaire pour la création de centres d'appels au Maroc
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#pourquoi" className="hover:text-primary transition-colors">Pourquoi MonCallPro</a></li>
              <li><a href="#maroc" className="hover:text-primary transition-colors">Pourquoi le Maroc</a></li>
              <li><a href="#packs" className="hover:text-primary transition-colors">Nos packs</a></li>
              <li><a href="#comment" className="hover:text-primary transition-colors">Comment ça marche</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>+212 5XX XXX XXX</li>
              <li>contact@moncallpro.ma</li>
              <li>Casablanca, Maroc</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lundi - Vendredi</li>
              <li>9h00 - 18h00</li>
              <li>Samedi sur rendez-vous</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MonCallPro. Tous droits réservés.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
            <span>•</span>
            <a href="#" className="hover:text-primary transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
