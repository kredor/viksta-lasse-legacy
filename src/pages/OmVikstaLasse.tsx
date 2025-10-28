import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";

const OmVikstaLasse = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Om Viksta-Lasse</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Biografi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Lars Larsson, känd som Viksta-Lasse (1823-1907), var en av Sveriges mest betydelsefulla
                spelmän under 1800-talet. Född i Viksta, Hälsingland, blev han en legendarisk figur inom
                svensk folkmusik.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Hans spelstil och kompositioner har präglat hälsingemusiken och svensk folkmusik i stort.
                Viksta-Lasse var känd för sin tekniska skicklighet och sitt uttrycksfulla spel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Betydelse för svensk folkmusik</h2>
              <p className="text-muted-foreground leading-relaxed">
                Viksta-Lasses bidrag till den svenska folkmusiktraditionen kan inte överskattas. Hans
                låtar och spelstil har inspirerit generationer av spelmän och fortsätter att spelas
                vid dansbaneläger och spelmansstämmor runt om i Sverige.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Music className="w-16 h-16 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground italic">
                Här kommer bild på Viksta-Lasse att visas
              </p>
            </div>

            <Button className="w-full" size="lg">
              <Music className="mr-2 h-5 w-5" />
              Lyssna på webfiolinspelningar
            </Button>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Låtar av Viksta-Lasse</h2>
          <p className="text-muted-foreground mb-6">
            Nedan följer låtar komponerade av eller förknippade med Viksta-Lasse. 
            Noterna och mer information finns på{" "}
            <a 
              href="http://www.folkwiki.se/Personer/Viksta-Lasse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              FolkWiki
            </a>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { name: "40-årslåten Polka", url: "http://www.folkwiki.se/Musik/6041" },
              { name: "Eklundapolska nr 1", url: "http://www.folkwiki.se/Musik/95" },
              { name: "Eklundapolska nr 2", url: "http://www.folkwiki.se/Musik/14" },
              { name: "Eklundapolska nr 3", url: "http://www.folkwiki.se/Musik/96" },
              { name: "Fröken chick Polkett efter Viksta-Lasse", url: "http://www.folkwiki.se/Musik/4580" },
              { name: "Glavalsen efter Viksta-Lasse", url: "http://www.folkwiki.se/Musik/6043" },
              { name: "Leipzigs krigsmarch \"Skänk en slant åt spelman\"", url: "http://www.folkwiki.se/Musik/2695" },
              { name: "Polkett efter Viksta-Lasse", url: "http://www.folkwiki.se/Musik/4581" },
              { name: "Polonäs efter Gustaf Weslien", url: "http://www.folkwiki.se/Musik/2401" },
              { name: "Polska efter Viksta-Lasse", url: "http://www.folkwiki.se/Musik/4589" },
              { name: "Polska i G-moll efter Pekkos Per", url: "http://www.folkwiki.se/Musik/6104" },
              { name: "Polska mot Trötthet", url: "http://www.folkwiki.se/Musik/346" },
              { name: "Polska till Wik", url: "http://www.folkwiki.se/Musik/1746" },
              { name: "Vendelpolskan", url: "http://www.folkwiki.se/Musik/937" },
            ].map((lat) => (
              <a
                key={lat.name}
                href={lat.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors block"
              >
                <div className="flex items-center space-x-3">
                  <Music className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{lat.name}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Bildgalleri</h2>
          <p className="text-muted-foreground mb-6">
            Historiska fotografier och bilder från arkivet kommer att visas här.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-background rounded-lg border border-border"></div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OmVikstaLasse;
