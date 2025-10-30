import Layout from "@/components/Layout";
import { Calendar as CalendarIcon, MapPin, Clock } from "lucide-react";
import vikstadagenLogo from "@/assets/vikstadagen-logo.png";
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
            <div className="max-w-3xl mx-auto text-center mb-8">
              <p className="text-viksta-gold/90 text-lg leading-relaxed mb-6">Den stora folkmusikfesten till Viksta-Lasses minne. En dag fylld av musik, dans, gemenskap och traditioner. Här möts spelmän från när och fjärran i både scenspel och buskspel.</p>
              
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
                  <span className="text-viksta-gold mr-2">13:30</span>
                  <span>Utdelning av stipendium</span>
                </li>
                <li className="flex items-start">
                  <span className="text-viksta-gold mr-2">17:00</span>
                  <span>Slut</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>;
};
export default Kalender;