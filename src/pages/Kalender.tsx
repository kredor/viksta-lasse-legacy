import Layout from "@/components/Layout";
import { Calendar as CalendarIcon, MapPin, Clock, Users } from "lucide-react";

const Kalender = () => {
  const evenemang = [
    {
      titel: "Vikstadagen 2024",
      datum: "15 juni 2024",
      tid: "10:00 - 22:00",
      plats: "Viksta bygdegård, Hälsingland",
      beskrivning: "Vår stora årliga högtid med konserter, spelmansstämma, dans och gemenskap.",
      typ: "viksta",
    },
    {
      titel: "Sommarläger för unga spelmän",
      datum: "5-12 juli 2024",
      tid: "Veckoläger",
      plats: "Hälsingland",
      beskrivning: "Intensiv vecka med undervisning, spelstämmor och gemenskap för unga folkmusiker.",
      typ: "lager",
    },
    {
      titel: "Höstkonserter",
      datum: "September-oktober 2024",
      tid: "Olika tidpunkter",
      plats: "Olika platser",
      beskrivning: "Serie av konserter med stipendiater och gästspelmän.",
      typ: "konsert",
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Kalender & Evenemang</h1>

        {/* Vikstadagen Section - Special dark theme */}
        <section className="mb-16 bg-viksta-dark rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <h2 className="font-impact text-5xl md:text-7xl text-viksta-gold text-center tracking-wide">
                  VIKSTADAGEN
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-viksta-gold"></div>
              </div>
            </div>
            
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-viksta-gold/90 text-lg leading-relaxed mb-6">
                Den stora folkmusikfesten till Viksta-Lasses minne. En dag fylld av musik, dans,
                gemenskap och traditioner. Här möts spelmän från när och fjärran för att fira
                det hälsingska kulturarvet.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <CalendarIcon className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">15 juni 2024</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <Clock className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">10:00 - 22:00</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <MapPin className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Viksta bygdegård</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-viksta-gold/30">
              <h3 className="text-2xl font-bold text-viksta-gold mb-4">Program</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">10:00</span>
                  <span>Öppning och välkomsttal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">11:00</span>
                  <span>Spelmansstämma - öppen för alla</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">13:00</span>
                  <span>Lunch och mingel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">14:00</span>
                  <span>Stipendieutdelning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">15:00</span>
                  <span>Konserter med inbjudna artister</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">18:00</span>
                  <span>Gemensam middag</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">20:00</span>
                  <span>Dans till levande musik</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Andra evenemang */}
        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <CalendarIcon className="w-7 h-7 text-primary mr-3" />
            Kommande evenemang
          </h2>

          <div className="space-y-6">
            {evenemang.filter(e => e.typ !== 'viksta').map((event, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-all hover:shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{event.titel}</h3>
                    <p className="text-muted-foreground">{event.beskrivning}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                      {event.typ === 'lager' ? 'Ungdomsläger' : 'Konsert'}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarIcon className="w-4 h-4 mr-2 text-primary" />
                    {event.datum}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {event.tid}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    {event.plats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-muted rounded-lg p-8">
          <div className="flex items-start">
            <Users className="w-8 h-8 text-primary mr-4 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold mb-2">Vill du delta eller uppträda?</h3>
              <p className="text-muted-foreground mb-4">
                Kontakta oss om du är intresserad av att delta i våra evenemang eller uppträda
                vid Vikstadagen. Vi välkomnar spelmän och folkmusiker att vara en del av våra
                traditioner.
              </p>
              <a href="/kontakt" className="text-primary hover:underline font-medium">
                Gå till kontaktsidan →
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kalender;
