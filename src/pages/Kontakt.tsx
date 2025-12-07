import Layout from "@/components/Layout";
import { Mail, MapPin, Phone, Building2 } from "lucide-react";
const Kontakt = () => {
  return <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Kontakt</h1>

        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold mb-6">Kontaktuppgifter</h2>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">E-post</h3>
                  <a href="mailto:info@vikstalasse.org" className="text-muted-foreground hover:text-primary transition-colors">info@vikstalasse.org
                </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Telefon</h3>
                  <a href="tel:+46706105990" className="text-muted-foreground hover:text-primary transition-colors">
                    070-610 59 90
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Postadress</h3>
                  <p className="text-muted-foreground">
                    Stiftelsen Fonden till Viksta-Lasses minne
                    <br />
                    Nynäs 45
                    <br />
                    743 74 Björklinge
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start">
                <Building2 className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Organisationsnummer</h3>
                  <p className="text-muted-foreground">802481-3373</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default Kontakt;