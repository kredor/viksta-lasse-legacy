import Layout from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";

const Bildgalleri = () => {
  const kategorier = [
    {
      titel: "Viksta-Lasse - Historiska bilder",
      antal: 12,
      beskrivning: "Arkivfoton och historiska bilder av Viksta-Lasse",
    },
    {
      titel: "Vikstadagen genom åren",
      antal: 48,
      beskrivning: "Bilder från våra årliga folkmusikfester",
    },
    {
      titel: "Stipendiater och spelmän",
      antal: 24,
      beskrivning: "Porträtt av stipendiater och besökande spelmän",
    },
    {
      titel: "Ungdomsläger",
      antal: 36,
      beskrivning: "Glädje och lärande från våra sommarläger",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Bildgalleri</h1>

        <p className="text-muted-foreground max-w-3xl mb-12 text-lg leading-relaxed">
          Utforska vårt bildgalleri med historiska fotografier av Viksta-Lasse, bilder från
          Vikstadagen, ungdomsläger och andra evenemang genom åren.
        </p>

        <div className="space-y-12">
          {kategorier.map((kategori, index) => (
            <section key={index}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{kategori.titel}</h2>
                <div className="flex items-center text-muted-foreground">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  <span className="text-sm">{kategori.antal} bilder</span>
                  <span className="mx-2">•</span>
                  <span className="text-sm">{kategori.beskrivning}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-muted rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer group overflow-hidden"
                  >
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background group-hover:from-primary/5 group-hover:to-accent/5 transition-all">
                      <ImageIcon className="w-12 h-12 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 bg-card border border-border rounded-lg p-8 text-center">
          <ImageIcon className="w-16 h-16 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Bilder kommer snart</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vi arbetar med att digitalisera vårt arkiv och kommer snart att publicera historiska
            fotografier och bilder från våra evenemang. Återkom gärna senare!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Bildgalleri;
