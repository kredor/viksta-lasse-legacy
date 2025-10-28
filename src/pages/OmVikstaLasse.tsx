import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Music } from "lucide-react";
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
              <p className="text-muted-foreground leading-relaxed">Viksta-Lasse och Hjort Anders spelade och turnerade under många år tillsammans. Han hedrades med flera utmärkelser, bland annat Zornmärket i guld 1967, Uplands spelmansförbunds guldmärke 1975 och Upplands fornminnesförenings förtjänstmedalj 1969. En minnessten över honom finns vid Viksta kyrka.</p>
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
            <div className="bg-muted rounded-lg p-8 text-center">
              <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Music className="w-16 h-16 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground italic">
                Här kommer bild på Viksta-Lasse att visas
              </p>
            </div>

            <Button className="w-full" size="lg" asChild>
              <a href="https://webbfiol.se/" target="_blank" rel="noopener noreferrer">
                <Music className="mr-2 h-5 w-5" />
                Lyssna på webfiolinspelningar
              </a>
            </Button>
          </div>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Låtar av Viksta-Lasse</h2>
          <p className="text-muted-foreground mb-6">
            Nedan följer låtar komponerade av eller förknippade med Viksta-Lasse. 
            Noterna och mer information finns på{" "}
            <a href="http://www.folkwiki.se/Personer/Viksta-Lasse" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">
              FolkWiki
            </a>.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[{
            name: "40-årslåten Polka",
            url: "http://www.folkwiki.se/Musik/6041"
          }, {
            name: "Eklundapolska nr 1",
            url: "http://www.folkwiki.se/Musik/95"
          }, {
            name: "Eklundapolska nr 2",
            url: "http://www.folkwiki.se/Musik/14"
          }, {
            name: "Eklundapolska nr 3",
            url: "http://www.folkwiki.se/Musik/96"
          }, {
            name: "Fröken chick Polkett efter Viksta-Lasse",
            url: "http://www.folkwiki.se/Musik/4580"
          }, {
            name: "Glavalsen efter Viksta-Lasse",
            url: "http://www.folkwiki.se/Musik/6043"
          }, {
            name: "Leipzigs krigsmarch \"Skänk en slant åt spelman\"",
            url: "http://www.folkwiki.se/Musik/2695"
          }, {
            name: "Polkett efter Viksta-Lasse",
            url: "http://www.folkwiki.se/Musik/4581"
          }, {
            name: "Polonäs efter Gustaf Weslien",
            url: "http://www.folkwiki.se/Musik/2401"
          }, {
            name: "Polska efter Viksta-Lasse",
            url: "http://www.folkwiki.se/Musik/4589"
          }, {
            name: "Polska i G-moll efter Pekkos Per",
            url: "http://www.folkwiki.se/Musik/6104"
          }, {
            name: "Polska mot Trötthet",
            url: "http://www.folkwiki.se/Musik/346"
          }, {
            name: "Polska till Wik",
            url: "http://www.folkwiki.se/Musik/1746"
          }, {
            name: "Vendelpolskan",
            url: "http://www.folkwiki.se/Musik/937"
          }].map(lat => <a key={lat.name} href={lat.url} target="_blank" rel="noopener noreferrer" className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-colors block">
                <div className="flex items-center space-x-3">
                  <Music className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{lat.name}</span>
                </div>
              </a>)}
          </div>
        </section>
      </div>
    </Layout>;
};
export default OmVikstaLasse;