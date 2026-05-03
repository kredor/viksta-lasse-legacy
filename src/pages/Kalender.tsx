import Layout from "@/components/Layout";
import { Calendar as CalendarIcon, MapPin, Clock, Users, Phone } from "lucide-react";
import vikstadagenLogo from "@/assets/vikstadagen-logo.png";
import vikstadagenAffisch from "@/assets/vikstadagen-2026-affisch.jpg";
const Kalender = () => {
  return <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-16">
        {/* Vikstadagen Logo */}
        <div className="mb-12 flex justify-center">
          <img src={vikstadagenLogo} alt="Vikstadagen" className="max-w-2xl w-full h-auto" />
        </div>

        {/* Vikstadagen Section */}
        <section className="mb-16 bg-viksta-dark rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Affisch 2026 */}
            <div className="mb-10 flex flex-col items-center">
              <a
                href="/vikstadagen-2026-affisch.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group block max-w-xl w-full transition-transform duration-300 hover:scale-[1.02]"
                aria-label="Öppna affisch för Vikstadagen 2026 (PDF)"
              >
                <img
                  src={vikstadagenAffisch}
                  alt="Affisch för Vikstadagen 26 juli 2026 i Viksta, Björklinge"
                  className="w-full h-auto rounded-lg border-2 border-viksta-gold/60 shadow-2xl shadow-black/50 group-hover:border-viksta-gold transition-colors"
                  loading="lazy"
                />
              </a>
              <a
                href="/vikstadagen-2026-affisch.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 text-sm text-viksta-gold hover:underline"
              >
                Ladda ner affisch (PDF)
              </a>
            </div>

            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-viksta-gold/90 text-lg leading-relaxed mb-6">Den stora folkmusikfesten till Viksta-Lasses minne. En dag fylld av musik, gemenskap och traditioner. Här möts spelmän från när och fjärran i både scenspel och buskspel.</p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <CalendarIcon className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">26 juli 2026</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <Clock className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">11:00 - 17:00</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <MapPin className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Viksta-Lasses minnessten</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-viksta-gold/30">
              <h3 className="text-2xl font-bold text-viksta-gold mb-4">Program</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">11:00</span>
                  <span>Gudstjänst</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">12:00</span>
                  <span>Allspelet vid Viksta-Lasses minnessten</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">17:00</span>
                  <span>Slut</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Kurs i Viksta-Lasse-låtar */}
        <section className="mb-16 bg-viksta-dark rounded-lg overflow-hidden">
          <div className="p-8 md:p-12">
            <h2 className="text-3xl font-bold text-viksta-gold mb-6 text-center font-heading">Kurs i Viksta-Lasse-låtar</h2>
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-viksta-gold/90 text-lg leading-relaxed mb-6">
                Kurs i Viksta-Lasse-låtar på Eric Sahlström Institutet i Tobo. Kursen inkluderar helpension och övernattning i dubbelrum. OBS: tag med egna sängkläder!
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <CalendarIcon className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">30–31 maj 2025</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <Clock className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Lördag 12:30 – Söndag ca 13:00</p>
                </div>
                <div className="bg-white/5 rounded-lg p-4 border border-viksta-gold/20">
                  <MapPin className="w-8 h-8 text-viksta-gold mx-auto mb-2" />
                  <p className="text-white font-semibold">Eric Sahlström Institutet, Tobo</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-viksta-gold/30 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-viksta-gold" />
                <h3 className="text-2xl font-bold text-viksta-gold">Lärare</h3>
              </div>
              <p className="text-white/90 leading-relaxed">
                Örjan Englund, Eva Tjörnebo, Robert Larsson, Erika Lindgren Liljenstolpe, Gunnel Viking
              </p>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-viksta-gold/30">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-6 h-6 text-viksta-gold" />
                <h3 className="text-2xl font-bold text-viksta-gold">Kontakt</h3>
              </div>
              <ul className="space-y-2 text-white/90">
                <li>Robert Larsson (ordförande): <a href="tel:0706105990" className="text-viksta-gold hover:underline">0706-105990</a></li>
                <li>Erika Lindgren Liljenstolpe (sekreterare): <a href="tel:0706730660" className="text-viksta-gold hover:underline">0706-730660</a></li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Kalender;