

## Plan: Lägg till kurs-event på Kalendersidan

### Vad som ska göras

Lägga till en ny sektion på Kalendersidan för kursen "Kurs i Viksta-Lasse-låtar" på ESI i Tobo, 30-31 maj. Eftersom anmälningstiden redan passerat visas bara informationen om eventet (inga anmälningslänkar eller betalningsinfo).

### Innehåll som publiceras

- **Rubrik**: Kurs i Viksta-Lasse-låtar
- **Plats**: Eric Sahlström Institutet, Tobo
- **Datum**: 30-31 maj (2025)
- **Tider**: Start lördag kl 12:30, avslut söndag ca kl 13
- **Info**: Helpension och övernattning ingår. Egna sängkläder medtages.
- **Lärare**: Örjan Englund, Eva Tjörnebo, Robert Larsson, Erika Lindgren Liljenstolpe, Gunnel Viking
- **Kontakt**: Robert Larsson (0706-105990), Erika Lindgren Liljenstolpe (0706-730660)

Anmälningslänk, betalningsinfo och deadlines utelämnas eftersom de redan passerat.

### Teknisk ändring

**Fil: `src/pages/Kalender.tsx`**
- Lägg till en ny `<section>` efter Vikstadagen-sektionen, med samma visuella stil (mörk bakgrund, guld-accenter)
- Tre info-kort: datum, tid, plats (samma mönster som Vikstadagen)
- Textblock med kursinformation och lärare
- Kontaktuppgifter längst ner
- Importera `Users`-ikon från lucide-react för lärarsektionen

