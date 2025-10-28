import Layout from "@/components/Layout";
import { User } from "lucide-react";

const Styrelse = () => {
  const styrelsemedlemmar = [
    {
      namn: "Robert Larsson",
      roll: "Ordförande",
      beskrivning: "Ansvarar för stiftelsens övergripande verksamhet och representation.",
    },
    {
      namn: "Erika Lindgren Liljenstolpe",
      roll: "Sekreterare",
      beskrivning: "Ansvarar för protokoll och dokumentation av styrelsens arbete.",
    },
    {
      namn: "Örjan Englund",
      roll: "Kassör",
      beskrivning: "Hanterar stiftelsens ekonomi och finansiella rapportering.",
    },
    {
      namn: "Lennart Pettersson",
      roll: "Ledamot",
      beskrivning: "Representant för Viksta-Lasses efterlevande.",
    },
    {
      namn: "Örjan Berglund",
      roll: "Ledamot",
      beskrivning: "Representant för Upplands spelmansförbund.",
    },
    {
      namn: "Jacob Höglund",
      roll: "Ledamot",
      beskrivning: "Representant för Upplands nation.",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Styrelse</h1>

        <p className="text-muted-foreground max-w-3xl mb-12 text-lg leading-relaxed">
          Stiftelsens styrelse består av engagerade personer med stark koppling till svensk folkmusik
          och Viksta-Lasses arv. Tillsammans arbetar vi för att förverkliga stiftelsens mål och vision.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {styrelsemedlemmar.map((medlem, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{medlem.namn}</h3>
                <p className="text-sm text-accent font-medium">{medlem.roll}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {medlem.beskrivning}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Kontakta styrelsen</h2>
          <p className="text-muted-foreground mb-4">
            För frågor till styrelsen, använd vårt kontaktformulär eller skicka e-post till ordföranden.
          </p>
          <a
            href="/kontakt"
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            Gå till kontaktsidan →
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default Styrelse;
