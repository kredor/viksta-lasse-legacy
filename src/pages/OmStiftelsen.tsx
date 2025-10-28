import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const OmStiftelsen = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Om Stiftelsen</h1>

        <div className="max-w-3xl space-y-8 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Fondens syfte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stiftelsen Fonden till Viksta-Lasses minne grundades för att bevara och främja arvet efter
              den legendariske spelmannen Lars Larsson, känd som Viksta-Lasse.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fondens huvudsakliga syfte är att stödja unga musiker och spelmän som arbetar med svensk
              folkmusik, särskilt den hälsingska traditionen. Genom stipendier och evenemang bidrar vi
              till att hålla den svenska folkmusiktraditionen levande för kommande generationer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verksamhetsmål</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Dela ut stipendier till unga musiker och spelmän</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Arrangera Vikstadagen, ett årligt evenemang för folkmusik</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Organisera ungdomsläger för utbildning i folkmusik</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bevara och tillgängliggöra Viksta-Lasses musikaliska arv</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Främja forskning och dokumentation av svensk folkmusik</span>
              </li>
            </ul>
          </section>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Verksamhetsplan</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Läs vår detaljerade verksamhetsplan för innevarande år.
            </p>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Ladda ner verksamhetsplan (PDF)
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Stadgar</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Stiftelsens stadgar och regelverk.
            </p>
            <Button variant="outline" className="w-full">
              <Download className="mr-2 h-4 w-4" />
              Ladda ner stadgar (PDF)
            </Button>
          </div>
        </div>

        <section className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Kontaktinformation</h2>
          <div className="space-y-2 text-muted-foreground">
            <p className="font-medium">Stiftelsen Fonden till Viksta-Lasses minne</p>
            <p>c/o Ordförande</p>
            <p>Organisationsnummer: XXX XXX-XXXX</p>
            <p className="mt-4">
              För frågor, kontakta oss via vårt{" "}
              <a href="/kontakt" className="text-primary hover:underline">
                kontaktformulär
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default OmStiftelsen;
