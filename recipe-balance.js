/* ===== Smaksbalanse-motor (gjenbrukbar) =====
   Rett-uavhengige hjelpefunksjoner for å holde en oppskrift i balanse når
   ingredienser byttes eller fjernes. Tenkt brukt av ALLE oppskrifter senere –
   ikke bare paella. Selve mengde-/gram-utregningen gjøres av kalleren (som
   kjenner dataene); her ligger bare den generelle balanselogikken.

   To slags akser:
     1) Kvantitativ akse med en «lever»-ingrediens (typisk SALT, regulert av
        tilsatt salt). Vi løser hvor mye av leveren som trengs for å treffe
        rettens mål-nivå igjen.
     2) Kvalitative akser (søtt/surt/bittert/umami) uten enkel lever. Vi
        sammenligner profilen mot målet og gir et tips når en akse faller mye. */

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
  },

  /* Tips for kvalitative akser som har falt merkbart under målet.
     - current/target: { sweet, sour, bitter, umami } (sum av intensitet × gram)
     - messages:       { <akse>: "tekst" } – kun akser med en melding vurderes
     - threshold:      andel av målet under hvilken vi varsler (standard 0,6)
     Returnerer en liste med tekster. */
  tasteTips: function (current, target, messages, threshold) {
    var t = (typeof threshold === 'number') ? threshold : 0.6;
    var tips = [];
    ['sweet', 'sour', 'bitter', 'umami'].forEach(function (axis) {
      if (!messages[axis]) return;
      var goal = target[axis] || 0;
      var now = current[axis] || 0;
      if (goal > 0 && now < goal * t) tips.push(messages[axis]);
    });
    return tips;
  }
};
