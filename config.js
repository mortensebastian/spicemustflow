/* ===== Innstillinger =====
   Felles av/på-brytere for hele butikken. Denne filen lastes FØR de andre
   js-filene, slik at resten av koden kan lese verdiene herfra.

   orderingEnabled:
     false = butikken er "av". Produktene skjules, og besøkende ser i stedet
             en venteliste de kan melde seg på.
     true  = vanlig butikk: produkter og handlekurv vises som normalt.
             Sett denne til true ved lansering – ingenting annet må endres. */
const orderingEnabled = false;

/* Nøkkel til skjematjenesten Web3Forms, som samler ventelistepåmeldingene.
   Lim inn din egen "access key" fra web3forms.com mellom anførselstegnene.

   NB: Denne nøkkelen er trygg å ha synlig her. Den lar bare skjemaet sende
   påmeldinger til e-posten din – ingenting annet. (Helt motsatt av
   betalingsnøkler, som ALDRI skal ligge i nettleseren.) */
const waitlistAccessKey = "LIM-INN-NØKKELEN-DIN-HER";
