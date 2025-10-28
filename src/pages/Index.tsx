import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Music, Award, Calendar, Users } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4 tracking-tight">
                Viksta-Lasse
              </h1>
              <div className="text-sm md:text-base tracking-widest text-muted-foreground uppercase font-sans">
                Stiftelsen Fonden till Viksta-Lasses minne
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Bevarar och främjar arvet efter den legendariske spelmannen
              och svensk folkmusiktradition
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/om-viksta-lasse">
                  <Music className="mr-2 h-5 w-5" />
                  Om Viksta-Lasse
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/stipendier">
                  <Award className="mr-2 h-5 w-5" />
                  Ansök om stipendium
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vikstadagen Feature */}
      <section className="bg-viksta-dark py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-impact text-4xl md:text-6xl text-viksta-gold mb-6 tracking-wide">
              VIKSTADAGEN 2024
            </h2>
            <p className="text-viksta-gold/90 text-lg md:text-xl mb-8 leading-relaxed">
              15 juni 2024 • Viksta bygdegård, Hälsingland
            </p>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Den stora folkmusikfesten till Viksta-Lasses minne. En dag fylld av musik, dans,
              gemenskap och traditioner.
            </p>
            <Button size="lg" variant="outline" className="border-viksta-gold text-viksta-gold hover:bg-viksta-gold hover:text-viksta-dark" asChild>
              <a href="/kalender">
                <Calendar className="mr-2 h-5 w-5" />
                Se hela programmet
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg">
              <Music className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Om Viksta-Lasse</h3>
              <p className="text-muted-foreground mb-4">
                Lär känna den legendariske spelmannen Lars Larsson (1823-1907) och hans betydelse
                för svensk folkmusik.
              </p>
              <a href="/om-viksta-lasse" className="text-primary hover:underline font-medium">
                Läs mer →
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg">
              <Award className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-3">Stipendier</h3>
              <p className="text-muted-foreground mb-4">
                Vi delar årligen ut stipendier till unga musiker och spelmän som arbetar med
                svensk folkmusik.
              </p>
              <a href="/stipendier" className="text-primary hover:underline font-medium">
                Ansök nu →
              </a>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-lg">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Om Stiftelsen</h3>
              <p className="text-muted-foreground mb-4">
                Läs om stiftelsens syfte, verksamhet och hur vi arbetar för att bevara det
                hälsingska kulturarvet.
              </p>
              <a href="/om-stiftelsen" className="text-primary hover:underline font-medium">
                Mer information →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl italic text-foreground mb-6 leading-relaxed">
              "Musiken är själens språk och folkmusiken är vårt gemensamma arv"
            </blockquote>
            <p className="text-muted-foreground">
              — Ur Viksta-Lasses tradition
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
