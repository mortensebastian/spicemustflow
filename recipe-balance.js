/* ===== Smaksbalanse-motor (gjenbrukbar) =====
   Rett-uavhengige hjelpefunksjoner for å holde en oppskrift i balanse når
   ingredienser byttes eller fjernes. Tenkt brukt av ALLE oppskrifter senere –
   ikke bare paella. Selve mengde-/gram-utregningen gjøres av kalleren (som
   kjenner dataene); her ligger bare den generelle balanselogikken.

   To slags akser:
     1) Kvantitativ akse med en «lever»-ingrediens (typisk SALT, regulert av
        tilsatt salt). Vi løser hvor mye av leveren som trengs for å treffe
        rettens mål-nivå igjen.
     2) Kvalitative akser (søtt/surt/bittert/umami) har ingen enkel lever og
        autokorrigeres ikke. Tips for disse genereres av kalleren
        (recipe-adapter.js) ut fra ingrediensens egen smaksprofil. */

window.RecipeBalance = {

  /* Hvor mye (i gram) av lever-ingrediensen som trengs for å nå mål-nivået.
     - targetUnits:        rettens mål for aksen (f.eks. mg natrium i standardretten)
     - actualNonLeverUnits: aksebidraget fra alt ANNET enn leveren akkurat nå
     - leverIntensityPer100g: leverens bidrag per 100 g (f.eks. natrium i salt)
     Returnerer gram av leveren (aldri negativt). */
  leverGrams: function (targetUnits, actualNonLeverUnits, leverIntensityPer100g) {
    if (!leverIntensityPer100g) return 0;
    var need = targetUnits - actualNonLeverUnits;
    if (need < 0) need = 0;
    return need / (leverIntensityPer100g / 100);
  },

  /* Rolle-vakt (gjenbrukbar): hvilke påkrevde roller mangler i retten nå?
     - present:  liste med roller som finnes i retten akkurat nå
     - required: liste med roller retten må ha for å være i balanse (f.eks. 'acid')
     Returnerer de påkrevde rollene som mangler. Kalleren bestemmer om det skal
     gi en advarsel, et tips, eller blokkere. */
  missingRoles: function (present, required) {
    return required.filter(function (r) { return present.indexOf(r) === -1; });
  }
};
