import Layout from "@/components/Layout";
import { Award, FileText } from "lucide-react";

const Stipendier = () => {
  const tidigareStipendiater = [
    { år: "2023", namn: "Anna Andersson", beskrivning: "För framstående insatser inom hälsingemusik" },
    { år: "2023", namn: "Erik Eriksson", beskrivning: "För bevarande av traditionella spelstilar" },
    { år: "2022", namn: "Maria Johansson", beskrivning: "För pedagogiskt arbete med unga spelmän" },
    { år: "2022", namn: "Lars Larsson", beskrivning: "För forskning om Viksta-Lasses musik" },
    { år: "2021", namn: "Sofia Svensson", beskrivning: "För innovativt arbete med folkmusik" },
  ];

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Stipendier</h1>

        <div className="max-w-3xl space-y-8 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Om stipendiet</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fonden till Viksta-Lasses minne delar årligen ut ekonomiska bidrag till personer som 
              aktivt för de folkmusikaliska traditionerna efter Viksta-Lasse vidare. Stipendiaten 
              utses av styrelsen enligt nedanstående statuter.
            </p>
          </section>

          <div className="bg-primary/5 border-l-4 border-primary rounded-r-lg p-6">
            <div className="flex items-start">
              <FileText className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-3">Statuterna för stipendiet</h3>
                <div className="text-muted-foreground space-y-3">
                  <p>
                    Fonden till Viksta-Lasses minne har till uppgift, att utdela ekonomiska bidrag 
                    till personer som aktivt för de folkmusikaliska traditionerna efter Viksta-Lasse vidare.
                  </p>
                  <p>
                    Bidrag, eller stipendier, må lämnas till stöd för utbildning, studier och undervisning 
                    inom ovan nämnda tradition, eller forskning kring densamma.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
