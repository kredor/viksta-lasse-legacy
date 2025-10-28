import Layout from "@/components/Layout";
import { Award } from "lucide-react";

const Stipendier = () => {
  const tidigareStipendiater = [
    { år: "2025", namn: "Petrus Dillner", beskrivning: "" },
    { år: "2024", namn: "Pontus Estling", beskrivning: "" },
    { år: "2023", namn: "Sven Ahlbäck", beskrivning: "För hans djupa kunskaper om den uppländska folkmusiken och sitt starka personliga fiolspel som inspirerats av tidiga möten med Viksta-Lasse" },
    { år: "2022", namn: "Kristin Sahlström", beskrivning: "För hennes medryckande spel och stadiga förankring i den uppländska folkmusiken" },
    { år: "2021", namn: "-- inställt", beskrivning: "--" },
    { år: "2020", namn: "-- inställt", beskrivning: "--" },
    { år: "2019", namn: "Magnus Holmström & Thomas Lindberg", beskrivning: "Har under 10 års tid varit förebilder för ungdomarna i Upplands låtverkstad (ULV) där de med spelglädje och entusiasm förmedlat bland annat låtar efter Viksta-Lasse" },
    { år: "2018", namn: "Pär Näsbom", beskrivning: "För att han är en mästerlig spelman som sprider Viksta-Lasses låtar i Sverige och världen" },
    { år: "2017", namn: "Johan Nylander", beskrivning: "Som enligt juryns motivering har en genuin ton i sitt spel och visar ett brinnande engagemang för folkmusiken, i Viksta-Lasses anda" },
    { år: "2016", namn: "Micke Marin", beskrivning: "Som enligt juryns motivering är en mästerlig låt- och stämspelsspecialist i Viksta-Lasses anda" },
    { år: "2015", namn: "Emma Reid", beskrivning: "Som enligt juryns motivering har ett improvisationsfyllt och lekfullt fiolspel i Viksta-Lasses anda och generöst delar med sig av sin spelglädje" },
    { år: "2014", namn: "Jeanette Evansson", beskrivning: "Som med sitt skickliga och inspirerande spel på fiol delar med sig av den uppländska folkmusiktraditionen" },
    { år: "2013", namn: "Joel Bremer", beskrivning: "Som enligt juryns motivering hängivet och skickligt för traditionen efter Viksta-Lasse vidare" },
    { år: "2012", namn: "Anna Nylén", beskrivning: "För sitt fina och välklingande spel på fiol" },
    { år: "2011", namn: "Anna Andersson", beskrivning: "För sitt traditionsmedvetna och välklingande spel på fiol" },
    { år: "2010", namn: "Hasse Gille", beskrivning: "Som är en stor inspiratör med sitt livfulla och lyhörda spel" },
    { år: "2009", namn: "Håkan Larsson", beskrivning: "Som hängivet för den uppländska traditionen vidare med sitt unika och rytmiska spel på munspel samt nyckelharpa och fiol" },
    { år: "2008", namn: "Ann-Christine Granfors", beskrivning: "Som hängivet och traditionsmedvetet för arvet vidare i fråga om spel och tradition i Nisse Nordströms anda" },
    { år: "2007", namn: "Sture Sahlström", beskrivning: "" },
    { år: "2006", namn: "Torbjörn Näsbom", beskrivning: "" },
    { år: "2005", namn: "Henrik Eriksson", beskrivning: "Som med sitt skickliga och välklingande nyckelharpsspel för vidare uppländsk spelmanstradition" },
    { år: "2004", namn: "Anders Liljefors", beskrivning: "" },
    { år: "2003", namn: "Örjan Englund", beskrivning: "" },
    { år: "2002", namn: "Kristofer Pettersson", beskrivning: "Som har ett traditionsmedvetet och rytmiskt spel på nyckelharpa" },
    { år: "2001", namn: "Gunnel Viking", beskrivning: "För ett genuint och välklingande spel på fiol av Viksta-Lasses låtar" },
    { år: "2000", namn: "Åkerbypojkarna (Sven och Sture)", beskrivning: "Som med sitt skickliga och inspirerande spel generöst delar med sig av sin äkta spelmansglädje" },
    { år: "1999", namn: "Erika Lindgren", beskrivning: "Som med ett vitalt och traditionsmedvetet fiolspel för Viksta-Lasses låtar vidare" },
    { år: "1998", namn: "Robert Larsson", beskrivning: "Som med sitt talangfulla spel för vikstatraditionen vidare" },
    { år: "1997", namn: "Anders Mattsson", beskrivning: "Som med sitt lätta och drivna nyckelharpsspel för den uppländska spelmanstraditionen vidare" },
    { år: "1996", namn: "Eva Tjörnebo", beskrivning: "Som med sin varma och levande sång för vår vistradition vidare" },
    { år: "1995", namn: "Peter Hedlund", beskrivning: "Med sitt skickliga nyckelharpspel för vidare uppländsk spelmanstradition framför allt efter Eric Sahlström" },
    { år: "1994", namn: "Mats Andersson", beskrivning: "För högstående och traditionsrikt spel på klarinett av framför allt upplandslåtar" },
    { år: "1993", namn: "Vendelkråkorna (Annika, Cajsa & Bibbi)", beskrivning: "" },
    { år: "1992", namn: "Ragnar Berglund", beskrivning: "" },
    { år: "1991", namn: "Leif Alpsjö", beskrivning: "" },
    { år: "1990", namn: "Ditte Andersson", beskrivning: "" },
    { år: "1989", namn: "Olov Johansson", beskrivning: "" },
    { år: "1988", namn: "Sonia Sahlström", beskrivning: "Som med sitt levande spel för uppländsk folkmusiktradition vidare" },
    { år: "1987", namn: "Bosse Larsson", beskrivning: "" },
  ];

  return (
    <Layout showFooter={false}>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Stipendier</h1>

        <div className="max-w-3xl space-y-8 mb-16">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Om stipendiet</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Fonden till Viksta-Lasses minne delar årligen ut ekonomiska bidrag till personer som 
              aktivt för de folkmusikaliska traditionerna efter Viksta-Lasse vidare. Stipendiaten 
              utses av styrelsen enligt nedanstående statuter.
            </p>
          </section>

          <section>
            <h3 className="font-semibold text-lg mb-3">Statuterna för stipendiet lyder som följer:</h3>
            <div className="text-muted-foreground space-y-3">
              <p>
                Fonden till Viksta-Lasses minne har till uppgift, att utdela ekonomiska bidrag 
                till personer som aktivt för de folkmusikaliska traditionerna efter Viksta-Lasse vidare.
              </p>
              <p>
                Bidrag, eller stipendier, må lämnas till stöd för utbildning, studier och undervisning 
                inom ovan nämnda tradition, eller forskning kring densamma.
              </p>
              <p>
                Sittande styrelse anser att stipendiet fortsättningsvis bör tillfalla en person 
                som för den musikaliska traditionen efter Viksta-Lasse vidare. Styrelsen ser också att 
                stipendiet företrädesvis tillfaller en yngre spelman samt att denne nödvändigtvis inte 
                måste vara från Uppland. Stipendiaten anmodas att i samband med Vikstadagen framträda 
                solo med ett ca 20 min långt program.
              </p>
            </div>
          </section>
        </div>

        <section>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="w-7 h-7 text-accent mr-3" />
            Tidigare stipendiater
          </h2>
          
          <div className="space-y-4">
            {tidigareStipendiater.map((stipendiat, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:border-accent transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{stipendiat.namn}</h3>
                    <p className="text-sm text-muted-foreground">{stipendiat.beskrivning}</p>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
                      {stipendiat.år}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Stipendier;
