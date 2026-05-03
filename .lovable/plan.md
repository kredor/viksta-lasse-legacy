## Plan: Visa Vikstadagen 2026-affischen på Kalendersidan

### Vad som ska göras

Lägga till den uppladdade affischen för Vikstadagen 26 juli 2026 på Kalendersidan, snyggt presenterad i Vikstadagen-sektionen.

### Placering & visuell utformning

På `/kalender`, i den befintliga "Vikstadagen"-sektionen:

- Konvertera PDF:en till en webbvänlig bildversion (JPG) så den renderas direkt i webbläsaren utan PDF-viewer.
- Visa affischen som ett centrerat, framträdande element direkt under Vikstadagen-logotypen, ovanför programlistan.
- Affischen får en guldfärgad ram (matchar `viksta-gold`) med mjuk skugga, rundade hörn, och responsiv max-bredd (~max 600px på desktop, full bredd på mobil).
- Affischen är klickbar och öppnar PDF-originalet i ny flik så besökare kan ladda ner / skriva ut den i högupplöst kvalitet.
- Liten textlänk under bilden: "Ladda ner affisch (PDF)".

### Teknisk ändring

**Filer:**
- Spara PDF i `public/vikstadagen-2026-affisch.pdf` (för nedladdning).
- Spara JPG-version i `src/assets/vikstadagen-2026-affisch.jpg` (för visning i sidan, importeras som modul).
- Redigera `src/pages/Kalender.tsx`:
  - Importera den nya bilden.
  - Lägg in en ny `<a>` runt en `<img>` mellan Vikstadagen-logotypen och beskrivningstexten.
  - Använd Tailwind-klasser för ram, skugga, rundade hörn och responsiv layout.

Ingen ändring görs på andra sidor — affischen visas endast på Kalendersidan i Vikstadagen-sektionen, vilket är där all event-info redan ligger.
