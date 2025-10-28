import Layout from "@/components/Layout";
import { Image as ImageIcon } from "lucide-react";
import vikstaLasseBingsjo1 from "@/assets/historiska-bilder/vikstalasse-bingsjo-1.jpeg";
import vikstaLasseBingsjo2 from "@/assets/historiska-bilder/vikstalasse-bingsjo-2.jpeg";
import pontusEstling from "@/assets/vikstadagen/pontus-estling.jpg";
import petrusDillner from "@/assets/vikstadagen/petrus-dillner.jpg";
import bondpolskaDans from "@/assets/kurser/bondpolska-dans.jpg";
import vikstadagen2017 from "@/assets/vikstadagen/vikstadagen-2017-allspel.jpg";

const Bildgalleri = () => {
  const historiskaBilder = [
    { src: vikstaLasseBingsjo2, alt: "Viksta-Lasse med RB, Pekka och Bosse i Bingsjö" },
    { src: vikstaLasseBingsjo1, alt: "Jöbs-Lars, RB, Viksta-Lasse och ytterligare en person i Bingsjö" },
  ];

  const stipendiaterBilder = [
    { src: pontusEstling, alt: "Pontus Estling får Viksta-Lasse-stipendiet 2024" },
    { src: petrusDillner, alt: "Petrus Dillner spelar nyckelharpa på Vikstadagen" },
  ];

  const vikstadagenBilder = [
    { src: vikstadagen2017, alt: "Allspel under Vikstadagen 2017" },
  ];

  const kurserBilder = [
    { src: bondpolskaDans, alt: "Dans under kurs i bondpolska" },
  ];

  const kategorier = [
    {
      titel: "Viksta-Lasse - Historiska bilder",
      antal: 2,
      beskrivning: "Arkivfoton och historiska bilder av Viksta-Lasse",
      bilder: historiskaBilder,
    },
    {
      titel: "Vikstadagen genom åren",
      antal: 1,
      beskrivning: "Bilder från våra årliga folkmusikfester",
      bilder: vikstadagenBilder,
    },
    {
      titel: "Stipendiater och spelmän",
      antal: 2,
      beskrivning: "Porträtt av stipendiater och besökande spelmän",
      bilder: stipendiaterBilder,
    },
    {
      titel: "Kurser och andra aktiviteter",
      antal: 1,
      beskrivning: "Glädje och lärande från våra kurser och aktiviteter",
      bilder: kurserBilder,
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
                {kategori.bilder ? (
                  kategori.bilder.map((bild, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-muted rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer group overflow-hidden"
                    >
                      <img
                        src={bild.src}
                        alt={bild.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))
                ) : (
                  Array.from({ length: 8 }).map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-muted rounded-lg border-2 border-border hover:border-primary transition-all cursor-pointer group overflow-hidden"
                    >
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-muted to-background group-hover:from-primary/5 group-hover:to-accent/5 transition-all">
                        <ImageIcon className="w-12 h-12 text-muted-foreground/30 group-hover:text-primary/50 transition-colors" />
                      </div>
                    </div>
                  ))
                )}
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
