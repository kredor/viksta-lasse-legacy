import Layout from "@/components/Layout";
import robertLarsson from "@/assets/portraits/robert-larsson.jpg";
import erikaLindgren from "@/assets/portraits/erika-lindgren.jpg";
import orjanEnglund from "@/assets/portraits/orjan-englund.jpg";
import lennartPettersson from "@/assets/portraits/lennart-pettersson.jpg";
import orjanBerglund from "@/assets/portraits/orjan-berglund.jpg";
import jacobHoglund from "@/assets/portraits/jacob-hoglund.jpg";

const Styrelse = () => {
  const styrelsemedlemmar = [
    {
      namn: "Robert Larsson",
      roll: "Ordförande",
      beskrivning: "Ansvarar för stiftelsens övergripande verksamhet och representation.",
      bild: robertLarsson,
    },
    {
      namn: "Erika Lindgren Liljenstolpe",
      roll: "Sekreterare",
      beskrivning: "Ansvarar för protokoll och dokumentation av styrelsens arbete.",
      bild: erikaLindgren,
    },
    {
      namn: "Örjan Englund",
      roll: "Kassör",
      beskrivning: "Hanterar stiftelsens ekonomi och finansiella rapportering.",
      bild: orjanEnglund,
    },
    {
      namn: "Lennart Pettersson",
      roll: "Ledamot",
      beskrivning: "Representant för Viksta-Lasses efterlevande.",
      bild: lennartPettersson,
    },
    {
      namn: "Örjan Berglund",
      roll: "Ledamot",
      beskrivning: "Representant för Upplands spelmansförbund.",
      bild: orjanBerglund,
    },
    {
      namn: "Jacob Höglund",
      roll: "Ledamot",
      beskrivning: "Representant för Upplands nation.",
      bild: jacobHoglund,
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
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-primary">
                  <img 
                    src={medlem.bild} 
                    alt={medlem.namn}
                    className="w-full h-full object-cover"
                  />
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
