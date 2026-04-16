import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Music, Mail } from "lucide-react";
import memorialImage from "@/assets/viksta-lasse-memorial.jpg";
import cdImage from "@/assets/cd-rullstrak-tungbas.jpg";
const OmVikstaLasse = () => {
  return <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Om Viksta-Lasse</h1>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Biografi</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Viksta-Lasse, egentligen Johan Leonard Larsson (1897-1983), var en legendarisk fiolspelman 
                från Eklunda i Viksta församling, Uppsala län. Född den 4 november 1897, började han vid 
                tio års ålder spela på en fiol byggd av en cigarrlåda.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Han var elev till Hjort Anders Olsson som lärde honom låtar från Bingsjö. Viksta-Lasses 
                repertoar bestod dock till största delen av uppländska låtar, bland annat via spelmännen 
                Gås-Anders (Anders Ljungqvist) och August Bohlin. Han komponerade också egna låtar, 
                däribland tre Eklundapolskor.
              </p>
              <p className="text-muted-foreground leading-relaxed">Viksta-Lasse och Hjort Anders spelade och turnerade under många år tillsammans. Han hedrades med flera utmärkelser, bland annat Zornmärket i guld 1967, Uplands spelmansförbunds guldmärke 1975 och Uplands fornminnesförenings förtjänstmedalj 1969. En minnessten över honom finns vid Viksta kyrka.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Betydelse för svensk folkmusik</h2>
              <p className="text-muted-foreground leading-relaxed">
                Viksta-Lasses bidrag till den svenska folkmusiktraditionen, särskilt den uppländska 
                spelmanstraditionen, kan inte överskattas. Hans låtar och spelstil har inspirerat 
                generationer av spelmän och fortsätter att spelas vid dansbaneläger och spelmansstämmor 
                runt om i Sverige.
              </p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={memorialImage} 
                alt="Minnesstenen över Viksta-Lasse vid Viksta kyrka" 
                className="w-full h-auto object-cover"
              />
            </div>

            <Button className="w-full" size="lg" asChild>
              <a href="https://webbfiol.se/" target="_blank" rel="noopener noreferrer">
                <Music className="mr-2 h-5 w-5" />
                Lyssna på webfiolinspelningar
              </a>
            </Button>
          </div>
        </div>

        <section className="mb-16 bg-card border border-border rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6">Köp CD-skiva</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src={cdImage} 
                alt="Rullstråk & tungbas - CD-omslag med Viksta-Lasse och Sven Larsson" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Rullstråk & tungbas</h3>
                <p className="text-muted-foreground mb-2">Viksta Lasse & Sven Larsson</p>
                <p className="text-sm text-muted-foreground">Kråktjärn records</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Bröderna Sven och Leonard Larsson (Viksta Lasse) från Viksta i norra Uppland kom med 
                en LP 1977. Nu återutges den på CD och den flödar som en vårflod. Sven Larsson spelar 
                munspel med stoppteknik kallad tungbas och trollar fram melodier som man inte trodde 
                var möjligt.
              </p>
              <Button className="w-full" size="lg" asChild>
                <a href="mailto:vikstalassefonden@gmail.com?subject=Beställning av CD - Rullstråk & tungbas">
                  <Mail className="mr-2 h-5 w-5" />
                  Beställ via e-post
                </a>
              </Button>
            </div>
          </div>
        </section>

      </div>
    </Layout>;
};
export default OmVikstaLasse;