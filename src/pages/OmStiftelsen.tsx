import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";
const OmStiftelsen = () => {
  return <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Om Stiftelsen</h1>

        <div className="max-w-3xl space-y-8 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Om stiftelsen</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Stiftelsen "Fonden till Viksta-Lasses minne" grundades av Vikstas Hembygdsförening den 14 april 1985. 
              Fondens ändamål är att bevara och hedra minnet av riksspelmannen Leonard Larsson från Viksta, 
              alias Viksta-Lasse, död 1983.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Enligt stiftelseurkunden skall detta ske genom att ett minnesmärke reses invid Viksta kyrka, 
              samt att avkastningen av fondens medel används som stipendier till personer som på ett förtjänstfullt 
              sätt för Viksta-Lasses spelmanstraditioner vidare.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Fondens syfte</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fonden till Viksta-Lasses minne har till uppgift att utdela ekonomiska bidrag till personer 
              som aktivt för de folkmusikaliska traditionerna efter Viksta-Lasse vidare.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Bidrag, eller stipendier, må lämnas till stöd för utbildning, studier och undervisning inom 
              ovan nämnda tradition, eller forskning kring densamma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Verksamhet</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Årlig stipendieutdelning på Viksta-dagen, den sista söndagen i juli</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Spelmansstämma vid Viksta kyrka tillsammans med Hembygdsföreningen</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Bevara och tillgängliggöra Viksta-Lasses musikaliska arv</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Förvalta minnesmärket vid Viksta kyrka (granitblock med bronsrelief, invigt 1987)</span>
              </li>
            </ul>
          </section>

        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl">
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Verksamhetsberättelse 2024</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Läs vår verksamhetsberättelse från 2024 med information om årets aktiviteter.
            </p>
            <a href="/documents/Verksamhetsberattelse_2024.docx" download>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Ladda ner (DOCX)
              </Button>
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center mb-4">
              <FileText className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Stadgar</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Stiftelsens stadgar och statuter för Viksta-Lasse stipendiet.
            </p>
            <a href="/documents/Stadgar.pdf" download>
              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Ladda ner stadgar (PDF)
              </Button>
            </a>
          </div>
        </div>

        <section className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Kontaktinformation</h2>
          <div className="space-y-2 text-muted-foreground">
            <p className="font-medium">Stiftelsen Fonden till Viksta-Lasses minne</p>
            <p>Grundad: 14 april 1985</p>
            <p>c/o Vikstas Hembygdsförening</p>
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
    </Layout>;
};
export default OmStiftelsen;