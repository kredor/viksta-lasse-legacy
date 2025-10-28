import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Award, Calendar, FileText } from "lucide-react";

const Stipendier = () => {
  const tidigareStipendiater = [
    { år: "2023", namn: "Anna Andersson", beskrivning: "För framstående insatser inom hälsingemusik" },
    { år: "2023", namn: "Erik Eriksson", beskrivning: "För bevarande av traditionella spelstilar" },
    { år: "2022", namn: "Maria Johansson", beskrivning: "För pedagogiskt arbete med unga spelmän" },
    { år: "2022", namn: "Lars Larsson", beskrivning: "För forskning om Viksta-Lasses musik" },
    { år: "2021", namn: "Sofia Svensson", beskrivning: "För innovativt arbete med folkmusik" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Stipendier</h1>

        <div className="max-w-3xl space-y-8 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Om våra stipendier</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stiftelsen delar årligen ut stipendier till unga musiker och spelmän som arbetar med
              att bevara och utveckla svensk folkmusik. Stipendierna ges i första hand till de som
              ägnar sig åt hälsingemusiken och Viksta-Lasses traditioner.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Stipendierna kan användas för studier, instrumentinköp, forskning, eller andra
              aktiviteter som främjar den svenska folkmusiken.
            </p>
          </section>

          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
            <div className="flex items-start">
              <Calendar className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Ansökningstid 2024</h3>
                <p className="text-muted-foreground">
                  Ansökningar tas emot fram till den 31 mars 2024. Beslut om stipendier meddelas
                  i samband med Vikstadagen i juni.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Ansökningsinformation</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vem kan söka?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Unga musiker och spelmän (upp till 30 år)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Aktiva inom svensk folkmusik</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Särskild förtur för hälsingemusik</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Vad ska ansökan innehålla?</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personuppgifter och CV</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Beskrivning av musikalisk bakgrund</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Motivering och plan för stipendiet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Rekommendationsbrev (frivilligt)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="gap-2">
              <FileText className="w-5 h-5" />
              Skicka in ansökan via kontaktformuläret
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="w-7 h-7 text-accent mr-3" />
            Tidigare stipendiater
          </h2>
          
          <div className="space-y-4">
            {tidigareStipendiater.map((stipendiat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{stipendiat.namn}</h3>
                    <p className="text-sm text-muted-foreground">{stipendiat.beskrivning}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {stipendiat.år}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Stipendier;
