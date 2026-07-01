/* ===== Velkomponert – oppskriftsmanifest (én kilde til sannhet) =====

   Dette er den sentrale lista over alle oppskrifter. Den driver:
   - oppskriftsrutenettet på forsiden (index.html)
   - kategorisidene (middag.html, suppe.html, …)
   - «Relaterte oppskrifter» på hver oppskriftsside
   - sitemap.xml (oppdateres av build-skillet når en rett legges til)
   - Recipe- og BreadcrumbList-schema (recipe-schema.js leser herfra + <rett>-data.js)

   ───────────────────────────────────────────────────────────────────────────
   SEO-KONTRAKT for skill-ene (jf. SEO-plan §3–§4 i plan.md):

   • Lag 1 – GENERELT (mal, ingen research): canonical, Open Graph, breadcrumb-
     struktur, tittelmønster « | Velkomponert». Skrives mekanisk av build-skillet.
   • Lag 2 – AVLEDET fra <rett>-data.js (ingen research): recipeIngredient,
     recipeInstructions, recipeYield. recipe-schema.js genererer dette.
   • Lag 3 – PER RETT, KREVER RESEARCH (research.recipe sin jobb → fylles inn her):
       slug, name, description, keywords, category, recipeCategory, cuisine,
       times, badge, search, (senere: faq, related, season).
   Med andre ord: research.recipe produserer ett objekt i lista under;
   build.recipesite + recipe-schema.js lager resten automatisk.
   ─────────────────────────────────────────────────────────────────────────── */

window.RECIPE_CATEGORIES = [
  { slug: "middag",  label: "Middag",
    title: "Middagsoppskrifter – enkle og gode middager",
    description: "Gode middagsoppskrifter i tre nivåer. Velg enkel, medium eller kompleks, juster porsjoner og tilpass ingrediensene – mengdene følger med." },
  { slug: "suppe",   label: "Suppe",
    title: "Suppeoppskrifter – kremede og klare supper",
    description: "Suppeoppskrifter i tre nivåer. Velg nivå, juster porsjoner og bytt ingredienser – mengdene regnes om automatisk." },
  { slug: "dessert", label: "Dessert",
    title: "Dessertoppskrifter – kaker, iskrem og søtt",
    description: "Dessertoppskrifter i tre nivåer. Velg hvor forseggjort du vil ha det, juster antall og tilpass ingrediensene." },
  { slug: "baking",  label: "Baking",
    title: "Bakeoppskrifter – kaker, boller og brød",
    description: "Bakeoppskrifter i tre nivåer. Skaler antallet du vil bake og tilpass ingrediensene – mengdene følger med automatisk." },
  { slug: "jul",     label: "Jul",
    title: "Juleoppskrifter – julebakst og julemat",
    description: "Norske juleoppskrifter – fra lussekatter til julemiddag. Skaler antallet og tilpass ingrediensene." }
];

window.RECIPES_INDEX = [
  {
    id: "fiskesuppe", slug: "fiskesuppe.html", status: "live",
    shortName: "Fiskesuppe", name: "Kremet fiskesuppe",
    tagline: "Kremet norsk favoritt med en mild søt-sur balanse.",
    description: "Kremet norsk fiskesuppe med torsk, laks og reker, med den klassiske søt-sure balansen.",
    image: "fiskesuppe.jpg", category: ["suppe"], badge: "3 nivåer",
    recipeCategory: "Suppe", cuisine: "Norsk",
    keywords: "fiskesuppe, kremet fiskesuppe, bergensk fiskesuppe",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT25M", total: "PT45M" },
    search: "fiskesuppe kremet norsk torsk laks"
  },
  {
    id: "paella", slug: "paella.html", status: "live",
    shortName: "Paella", name: "Paella",
    tagline: "Den spanske klassikeren med kylling, scampi og safran.",
    description: "Klassisk spansk paella med kylling, scampi og safran. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: "paella.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Spansk",
    keywords: "paella, spansk paella, paella med kylling og scampi",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT30M", total: "PT50M" },
    search: "paella spansk kylling scampi"
  },
  {
    id: "sjokoladekake", slug: "sjokoladekake.html", status: "live",
    shortName: "Sjokoladekake", name: "Saftig sjokoladekake",
    tagline: "Saftig rørekake – fra enkel til mørk sjokolade med kaffe.",
    description: "Saftig norsk sjokoladekake med smør og kaffe. Velg nivå, juster antall og tilpass ingrediensene.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "sjokoladekake, saftig sjokoladekake, kakaokake",
    recipeYield: "12 stykker", times: { prep: "PT15M", cook: "PT35M", total: "PT60M" },
    search: "sjokoladekake kake kakao"
  },
  {
    id: "pannekake", slug: "pannekake.html", status: "live",
    shortName: "Pannekaker", name: "Pannekaker",
    tagline: "Tynne norske pannekaker – fra hverdag til fest.",
    description: "Tynne norske pannekaker, fra enkel grunnrøre til mer forseggjorte varianter med brunet smør.",
    image: "pannekake.jpg", category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Norsk",
    keywords: "pannekaker, norske pannekaker, tynne pannekaker",
    recipeYield: "12 pannekaker", times: { prep: "PT10M", cook: "PT20M", total: "PT50M" },
    search: "pannekaker pannekake"
  },
  {
    id: "safraniskrem", slug: "safraniskrem.html", status: "live",
    shortName: "Safraniskrem", name: "Safraniskrem (bastani)",
    tagline: "Persisk bastani med safran, kardemomme og pistasj.",
    description: "Persisk safraniskrem (bastani) med kardemomme og pistasj. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: null, category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Persisk",
    keywords: "safraniskrem, bastani, persisk iskrem",
    recipeYield: "6 porsjoner", times: { prep: "PT30M", cook: "PT15M", total: "PT8H" },
    search: "safraniskrem bastani iskrem persisk"
  },
  {
    id: "lussekatter", slug: "lussekatter.html", status: "live", schema: "static",
    shortName: "Lussekatter", name: "Lussekatter med safran",
    tagline: "Myke, gylne safranboller til Lucia og julebaksten.",
    description: "Saftige lussekatter med safran til Lucia og julebaksten.",
    image: "lussekatter.jpg", category: ["baking", "jul"], badge: "Juleklassiker",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "lussekatter, safran, lucia, julebakst",
    recipeYield: "24 stykker", times: { prep: "PT30M", cook: "PT10M", total: "PT1H30M" },
    search: "lussekatter jul lucia safran boller", season: "des"
  },

  {
    id: "safranrisotto", slug: "safranrisotto.html", status: "live",
    shortName: "Safranrisotto", name: "Safranrisotto (Risotto alla Milanese)",
    tagline: "Kremet milanesisk risotto der ekte safran gir farge, duft og dybde.",
    description: "Kremet safranrisotto (Risotto alla Milanese) med arborio, hvitvin og parmesan. Velg nivå, juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "safranrisotto.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Italiensk",
    keywords: "safranrisotto, risotto alla milanese, risotto med safran",
    recipeYield: "4 porsjoner", times: { prep: "PT15M", cook: "PT30M", total: "PT45M" },
    search: "safranrisotto risotto milanese safran arborio parmesan",
    faq: [
      { q: "Hvilken ris bruker jeg til risotto?", a: "Rundkornet ris med høyt stivelsesinnhold – arborio eller carnaroli. Stivelsen er det som gir den kremede konsistensen, så ikke skyll risen." },
      { q: "Må jeg røre hele tiden?", a: "Rør jevnlig, men ikke helt konstant. Røringen frigjør stivelse og gjør risottoen kremet; spe med én øse varm kraft om gangen og la den suge til seg før neste." },
      { q: "Hvorfor blir risottoen klissete eller grøtete?", a: "Som regel for kald kraft eller for høy varme. Bruk varm kraft og la det småkoke – kald kraft bremser kokingen og kan gjøre risen klissete." },
      { q: "Kan jeg lage safranrisotto uten vin?", a: "Ja. Dropp vinen og spe med litt ekstra kraft, og ha i en skvett sitron til slutt for samme friskhet." },
      { q: "Kan jeg varme opp risotto dagen etter?", a: "Ja – varm den forsiktig og spe med litt kraft eller vann så den blir kremet igjen. Den blir aldri helt som nylaget, men fungerer fint." }
    ]
  },

  {
    id: "kjottkaker", slug: "kjottkaker.html", status: "live",
    shortName: "Kjøttkaker", name: "Kjøttkaker i brun saus",
    tagline: "Møre, norske kjøttkaker som ikke sprekker, i blank brun saus.",
    description: "Hjemmelagde kjøttkaker i brun saus. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "kjottkaker.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "kjøttkaker, kjøttkaker i brun saus, hjemmelagde kjøttkaker",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT30M", total: "PT50M" },
    search: "kjøttkaker brun saus norsk hjemmelaget muskat ingefær",
    faq: [
      { q: "Hvorfor sprekker kjøttkakene mine?", a: "Som regel for løs farse eller for varm panne. Arbeid saltet godt inn så farsen blir seig, bind med potetmel og spe væsken litt om gangen, la farsen hvile, og brun kakene på middels varme." },
      { q: "Hva er forskjellen på kjøttkaker og karbonader?", a: "De er nært i slekt, men karbonader stekes ferdig i panna og er flatere, mens kjøttkaker brunes først og trekker ferdig i saus. Karbonader lages oftest av karbonadedeig (magrere), kjøttkaker av kjøttdeig." },
      { q: "Skal jeg bruke melk eller vann i kjøttkaker?", a: "Begge fungerer som binding. Melk gir en litt mildere, rundere smak; vann gir nøytral farse. Spe væsken litt om gangen og arbeid den godt inn før du tilsetter mer." },
      { q: "Hvilke krydder skal i kjøttkaker?", a: "Salt og pepper er grunnlaget. De to krydderne som virkelig løfter norske kjøttkaker er muskat og malt ingefær – litt av hver gir den klassiske smaken." },
      { q: "Kan jeg fryse kjøttkaker?", a: "Ja. Frys dem ferdigstekte, gjerne med saus, i lufttett boks i opptil 3 måneder, og varm forsiktig opp igjen. Stekte kjøttkaker holder seg også et par dager i kjøleskapet." },
      { q: "Hvor lenge skal kjøttkaker steke?", a: "Brun dem 2–3 minutter på hver side til de får fin skorpe, og la dem deretter trekke ferdig i sausen i 10–15 minutter." },
      { q: "Kan jeg lage kjøttkaker uten egg?", a: "Ja – mange tradisjonelle oppskrifter er eggfrie. Bytt egget mot litt ekstra potetmel og spe med litt mer melk eller vann for binding." },
      { q: "Hva passer til kjøttkaker i brun saus?", a: "Klassisk tilbehør er kokte poteter, brun saus, ertestuing eller kålstuing, gjerne gulrøtter, og tyttebær eller tyttebærsyltetøy ved siden av." }
    ]
  },

  {
    id: "fiskekaker", slug: "fiskekaker.html", status: "live",
    shortName: "Fiskekaker", name: "Hjemmelagde fiskekaker",
    tagline: "Saftige norske fiskekaker av hvit fisk – sprø ute, myke inne.",
    description: "Hjemmelagde fiskekaker av hvit fisk som ikke sprekker. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "fiskekaker, hjemmelagde fiskekaker, fiskekaker oppskrift",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT15M", total: "PT35M" },
    search: "fiskekaker hjemmelaget norsk hvit fisk sei torsk muskat potetmel",
    faq: [
      { q: "Hvilken fisk er best til fiskekaker?", a: "Mager hvit fisk gir best resultat – sei, torsk, hyse (kolje) eller lyr. Hysa er en klassiker fordi den binder godt og har mild smak. Fersk fisk gir bedre binding enn frossen." },
      { q: "Hvorfor sprekker fiskekakene mine?", a: "Nesten alltid fordi farsen ble for varm. Hold fisk, melk og redskaper iskalde, kjør farsen så kort som mulig i kjøkkenmaskinen, og spe melken litt om gangen så hver omgang er innarbeidet før neste. Da blir farsen seig og holder formen." },
      { q: "Hvordan får jeg fiskefarsen til å binde seg?", a: "Salt er nøkkelen: kjør fisken med saltet først til den blir fast og seig før du sper med væske. Saltet trekker ut proteinene som binder farsen. Potetmel og egg hjelper også, men saltet gjør mesteparten av jobben." },
      { q: "Skal jeg bruke melk eller fløte i fiskekaker?", a: "Begge deler fungerer. Melk gir en lettere farse, mens en blanding av melk og fløte (gjerne halvt om halvt) gir saftigere og rundere kaker. Spe væsken litt om gangen til farsen er passe fast." },
      { q: "Hvilke krydder skal i fiskekaker?", a: "Salt og hvit pepper er grunnlaget. Det klassiske krydderet som løfter norske fiskekaker er revet muskat – en liten klype er nok. Finhakket gressløk gir friskhet hvis du vil ha mer smak." },
      { q: "Kan jeg fryse fiskekaker?", a: "Ja. Frys dem ferdigstekte i lufttett boks i opptil et halvt år, og varm dem forsiktig i panne – på samme måte som frosne kjøttboller. Du kan også fryse rå farse." },
      { q: "Hva passer til fiskekaker?", a: "Klassisk tilbehør er kokte poteter, smeltet smør eller hvit saus (gjerne med gressløk), og kokte grønnsaker som gulrot og erter. Mange spiser dem også som pålegg på brød med remulade." },
      { q: "Hvor lenge skal fiskekaker stekes?", a: "Stek dem 3–4 minutter på hver side på middels varme til de er gylne og gjennomstekte. For svak varme gir bleke kaker, for sterk gir brent overflate og rå kjerne." }
    ]
  },

  {
    id: "risgrot", slug: "risgrot.html", status: "live",
    shortName: "Risgrøt", name: "Risgrøt (risengrynsgrøt)",
    tagline: "Kremet, tradisjonell risgrøt med smørøye, sukker og kanel.",
    description: "Kremet, tradisjonell risgrøt (risengrynsgrøt) med smørøye, sukker og kanel. Velg nivå, juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "risgrot.jpg", category: ["middag", "jul"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "risgrøt, risengrynsgrøt, risgrøt oppskrift",
    recipeYield: "4 porsjoner", times: { prep: "PT5M", cook: "PT50M", total: "PT55M" },
    search: "risgrøt risengrynsgrøt grøt grøtris melk kanel smørøye jul", season: "des",
    faq: [
      { q: "Hvilken ris bruker jeg til risgrøt?", a: "Rundkornet grøtris (risengryn) gir den kremede konsistensen, fordi det runde kornet slipper ut mye stivelse. Jasminris fungerer også, men gir en litt løsere grøt. Ikke skyll risen – stivelsen er det som binder grøten." },
      { q: "Hva er forholdet mellom ris, melk og vann i risgrøt?", a: "En god tommelfingerregel for fire porsjoner er ca. 2,5 dl grøtris, 5 dl vann og 1 liter melk. Risen kokes først mør i vannet, så sper du med melken. Vil du ha tykkere grøt, bruker du litt mindre ris enn pakken foreslår." },
      { q: "Hvorfor blir ikke risgrøten min tykk?", a: "Som regel trenger den bare mer tid. Grøten tykner først mot slutten, og den tykner ytterligere når den hviler. La den småkoke på svak varme til risen er helt mør, og rør jevnlig så den koker jevnt." },
      { q: "Hvordan unngår jeg klumper og at grøten svir seg?", a: "Bruk en tykkbunnet gryte, hold svak varme, og rør ofte – særlig mot slutten når grøten tykner. Sper du melken litt etter at risen har kokt i vann, blir grøten jevn og fin." },
      { q: "Kan jeg lage risgrøt i ovnen?", a: "Ja. Kok opp ris, vann og melk på platen, sett så gryta med lokk i ovnen på ca. 100–120 °C i 1,5–2 timer. Da slipper du å stå og røre, og grøten kan nesten ikke svi seg. Rør gjerne en gang underveis." },
      { q: "Kan jeg lage risgrøt uten melk eller laktosefritt?", a: "Ja. Bytt melken med havredrikk eller annen plantedrikk – velg gjerne en barista-variant for kremethet. Bruk melkefritt smør/margarin som smørøye, så blir hele grøten melkefri." },
      { q: "Hva er forskjellen på risgrøt og riskrem?", a: "Riskrem er avkjølt risgrøt vendt sammen med pisket krem (og ofte vanilje), servert kald med rød saus – den klassiske juledesserten. Risgrøt spises varm med smørøye, sukker og kanel." },
      { q: "Hva serverer man til risgrøt?", a: "Klassisk er en klatt smør som smelter i midten (smørøye), sukker og kanel på toppen. Mange har også saft eller rød saft-saus ved siden av, og i julen gjemmer man en mandel i grøten." }
    ]
  },

  {
    id: "thai-fiskesuppe", slug: "thai-fiskesuppe.html", status: "live",
    shortName: "Thai fiskesuppe", name: "Thailandsk fiskesuppe",
    tagline: "Kremet kokos- og currysuppe med fisk, lime og frisk koriander.",
    description: "Kremet thailandsk fiskesuppe med kokosmelk, rød curry og lime – naturlig melkefri. Velg nivå, juster porsjoner og tilpass ingrediensene; mengdene følger med.",
    image: "thai-fiskesuppe.jpg", category: ["suppe", "middag"], badge: "3 nivåer",
    recipeCategory: "Suppe", cuisine: "Thai",
    keywords: "thai fiskesuppe, thailandsk fiskesuppe, fiskesuppe med kokosmelk, thaisuppe med fisk",
    recipeYield: "4 porsjoner", times: { prep: "PT15M", cook: "PT20M", total: "PT35M" },
    search: "thai fiskesuppe thailandsk kokosmelk rød curry laks torsk reker lime koriander galangal",
    faq: [
      { q: "Hvilken fisk passer best i thai fiskesuppe?", a: "Både fet og mager fisk fungerer. Laks gir farge og fylde, torsk og sei er magrere og flaketere, mens fast fisk som breiflabb holder formen best. Legg fisken i mot slutten og la den så vidt trekke – kok den aldri hardt, da blir den tørr og faller fra hverandre." },
      { q: "Hva er forskjellen på rød og grønn currypaste?", a: "Rød paste er laget av tørket rød chili og gir en dyp, rund og litt søtlig varme. Grønn paste bruker fersk grønn chili og er som regel skarpere og friskere. Begge passer i fiskesuppe – velg etter hvor sterk du vil ha den. Mange pastaer inneholder rekepasta, så sjekk innholdet om du skal lage den skalldyrfri." },
      { q: "Er thai fiskesuppe melkefri?", a: "Ja. Kremetheten kommer fra kokosmelk, ikke fløte, så suppa er naturlig melkefri og laktosefri. Bruk fiskesaus eller soyasaus til salt i stedet for noe meieri, så er hele retten fri for melk." },
      { q: "Kan jeg lage thai fiskesuppe uten fiskesaus?", a: "Ja. Fiskesaus gir salt og umami, men du kan bytte den mot lys soyasaus eller bare smake til med salt. Soyasaus gir litt mindre dybde, så tilsett gjerne en ekstra skvett lime og litt sukker for å holde balansen mellom salt, surt og søtt." },
      { q: "Hvorfor skiller kokosmelken seg i suppa?", a: "Som regel fordi den har kokt for hardt. Tilsett kokosmelken etter at kraften er smakssatt, og la suppa bare så vidt småkoke – aldri fosskoke. Rør forsiktig, og ta gryta av varmen før du smaker til med lime, så holder kokosmelken seg jevn og kremet." },
      { q: "Hva er galangal, og kan jeg bruke ingefær i stedet?", a: "Galangal er en thailandsk rot i ingefærfamilien, men med en skarpere, mer sitrus- og furuaktig smak. Den er ikke det samme som ingefær, men har du den ikke, gir frisk ingefær en mildere, men god erstatning. Bruk litt mindre ingefær enn galangal, for ingefæren er søtere." },
      { q: "Kan jeg fryse thai fiskesuppe?", a: "Kokosbasen tåler frysing greit, men fisk og sjømat blir lett tørr og melen etter en runde i fryseren. Frys derfor heller suppebasen uten fisken, og kok inn fersk fisk og reker når du varmer den opp igjen. Varm forsiktig opp uten å koke." },
      { q: "Hva serverer man til thai fiskesuppe?", a: "Klassisk tilbehør er dampet jasminris eller risnudler i bunnen av skåla, så suppa øses over. Topp med frisk koriander, vårløk og en limebåt, og ha gjerne ekstra chili eller fiskesaus på bordet så hver gjest kan justere styrke og salt selv." }
    ]
  },

  {
    id: "kalruletter", slug: "kalruletter.html", status: "live",
    shortName: "Kålruletter", name: "Kålruletter i brun saus",
    tagline: "Tradisjonsmat: kjøttfylte kålruletter i blank brun saus med tyttebær.",
    description: "Tradisjonelle kålruletter med saftig kjøttfyll i brun saus. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "kalruletter.jpg", category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Norsk",
    keywords: "kålruletter, kålruletter oppskrift, tradisjonelle kålruletter, kålruletter i brun saus",
    recipeYield: "4 porsjoner", times: { prep: "PT30M", cook: "PT30M", total: "PT60M" },
    search: "kålruletter brun saus tradisjonell norsk kjøttdeig kål tyttebær allehånde muskat",
    faq: [
      { q: "Hvilken kål passer best til kålruletter?", a: "Vanlig hodekål er det tradisjonelle valget – store, faste blader som tåler å rulles. Spisskål og savoykål er litt mørere og lette å brette, mens kinakål er aller enklest å rulle og holder grønnfargen, men gir tynnere ruletter. Velg store, hele blader uansett kåltype." },
      { q: "Skal det være ris i kålruletter?", a: "Det er valgfritt. De mest tradisjonelle norske kålrulettene er rent kjøttfyll uten ris, mens en del oppskrifter (og de svenske kåldolmarene) har kokt ris i farsen for å gjøre den saftigere og drøyere. Her er risen med fra medium-nivået og kan fjernes om du vil ha den helt tradisjonelle versjonen." },
      { q: "Hvordan får jeg kålbladene myke uten at de revner?", a: "Forvell hele bladene i lettsaltet, kokende vann i 1–2 minutter til de er bøyelige, og avkjøl dem i kaldt vann. Skjær bort den tykkeste delen av stilken så bladet blir lett å rulle. Et triks er å fryse hele kålhodet og tine det – da blir bladene myke uten koking." },
      { q: "Hvilke krydder skal i kålruletter?", a: "Salt og pepper er grunnlaget. De klassiske krydderne som gir kålruletter den tradisjonelle smaken er revet muskat og malt allehånde, og mange har også litt malt ingefær. Bruk litt av hver – krydderet skal løfte kjøttet, ikke ta over." },
      { q: "Hvordan unngår jeg at kålrulettene løsner under koking?", a: "Brett inn sidene før du ruller, pakk dem stramt, og legg dem med skjøten ned i gryta eller formen så vekten holder dem igjen. Ligger de tett inntil hverandre, holder de formen. Er du usikker, kan du feste hver rulett med en tannpirker eller litt kjøkkenhyssing." },
      { q: "Kan jeg lage kålruletter på forhånd og fryse dem?", a: "Ja. Kålruletter egner seg godt til å lages i forveien. Frys dem gjerne ferdigstekte, med eller uten saus, i lufttett boks i opptil 3 måneder, og varm dem forsiktig opp igjen. De holder seg også et par dager i kjøleskapet." },
      { q: "Hva serverer man til kålruletter?", a: "Klassisk tilbehør er kokte poteter, en blank brun saus av kraften, og tyttebær eller rørte tyttebær ved siden av. Noen serverer dem også med en lysere fløtesaus. Litt kokte gulrøtter eller annet grønt passer fint til." },
      { q: "Hva er forskjellen på kålruletter og kåldolmar?", a: "De er nære slektninger. Kåldolmar er den svenske varianten og har nesten alltid kokt ris i kjøttfyllet, og serveres tradisjonelt med fløtesaus og tyttebær. Norske kålruletter er ofte rent kjøttfyll og serveres gjerne med brun saus, men forskjellene er små og oppskriftene flyter over i hverandre." }
    ]
  },

  {
    id: "marry-me-chicken", slug: "marry-me-chicken.html", status: "live",
    shortName: "Marry me chicken", name: "Marry me chicken",
    tagline: "Den virale TikTok-favoritten: kremet kylling med soltørkede tomater og parmesan.",
    description: "Marry me chicken – saftig kylling i kremet fløtesaus med soltørkede tomater og parmesan. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Amerikansk-italiensk",
    keywords: "marry me chicken, marry me chicken oppskrift, kremet kylling, marry me chicken pasta",
    recipeYield: "4 porsjoner", times: { prep: "PT15M", cook: "PT25M", total: "PT40M" },
    search: "marry me chicken kremet kylling fløtesaus soltørkede tomater parmesan tiktok",
    faq: [
      { q: "Hvorfor heter det marry me chicken?", a: "Navnet stammer fra USA, der retten ble så hyllet at noen angivelig utbrøt «I'd marry you for that chicken». Tanken er at den kremede kyllingen er så god at den kan få noen til å fri – derav «marry me chicken». Den ble en viral favoritt på TikTok og er nå en av de mest delte kyllingrettene." },
      { q: "Hvilken kylling bruker man i marry me chicken?", a: "Klassisk brukes hele kyllingbrystfileter som bankes lett flate så de blir jevntykke og møre og steker likt. Du kan også bruke kyllingens indrefilet. Vil du ha saftigere og mer smaksrikt kjøtt, fungerer kyllinglårfilet utmerket – det tåler litt lengre steketid i sausen." },
      { q: "Hva server man til marry me chicken?", a: "Du trenger noe som fanger opp den fyldige sausen. Det vanligste er pasta (gjerne tagliatelle eller penne), kokte eller most poteter, eller ris. Et stykke godt brød til å tørke opp sausen er også klassisk, og en enkel grønn salat eller litt dampet brokkoli friskner opp tallerkenen." },
      { q: "Hvordan får jeg sausen tykk og kremet?", a: "La fløten få et lite oppkok og småkoke noen minutter så den reduserer og tykner, og rør deretter inn nyrevet parmesan utenfor sterkeste varmen – osten både smaker til og binder sausen. Bruk ekte parmesan du river selv; ferdigrevet ost med antiklumpemiddel blir lett grynete. Vil du ha den enda tykkere, la den koke litt lenger." },
      { q: "Kan jeg lage marry me chicken uten fløte / melkefri?", a: "Ja. Bytt fløten til plantefløte (soya- eller havrebasert), smør til margarin eller olje, og parmesan til en vegansk hardost. Da blir retten helt melkefri uten å miste den kremede karakteren. I oppskriften vår ligger disse byttene klare, og mengdene justeres automatisk." },
      { q: "Hva er soltørkede tomater, og kan jeg erstatte dem?", a: "Soltørkede tomater er tomater som er tørket til de blir søte og intense i smaken, ofte lagt i olje. De gir marry me chicken sin karakteristiske syrlig-søte dybde. Har du dem ikke, kan en god rød pesto fungere som snarvei – men da får du litt annen smak, og pestoen inneholder ofte ost og nøtter." },
      { q: "Kan jeg lage marry me chicken som pasta i én panne?", a: "Ja, en populær variant er å koke pastaen og vende den inn i sausen til slutt, eller å koke pastaen rett i sausen med litt ekstra kraft. Lag sausen som i oppskriften, og spe med mer kraft eller pastavann til du har ønsket konsistens før du blander inn pastaen." },
      { q: "Hvor lenge holder marry me chicken, og kan den fryses?", a: "Rester holder seg 2–3 dager i kjøleskap i tett boks. Du kan fryse retten i opptil 2–3 måneder, men fløtesauser kan skille seg litt ved tining – varm den forsiktig opp igjen og rør godt, eventuelt med en skvett ekstra fløte eller kraft for å samle sausen." },
      { q: "Er marry me chicken sterk?", a: "Nei, den er mild og kremet. Chiliflakene gir bare et hint av varme som balanserer fløten og parmesanen. Vil du ha den helt mild, kan du droppe chilien; vil du ha mer futt, øker du mengden." }
    ]
  },

  {
    id: "baja-fish-tacos", slug: "baja-fish-tacos.html", status: "live",
    shortName: "Baja fish tacos", name: "Baja fish tacos (sprøstekt fisketaco)",
    tagline: "Sprøstekt, ølfritert fisk eller kylling i myke tortillas med frisk kålslaw, chipotlekrem og lime.",
    description: "Baja fish tacos – sprøstekt fisk eller kylling i myke tortillas med kålslaw, chipotlekrem og lime. Velg nivå, juster porsjoner og tilpass ingrediensene.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Mexicansk",
    keywords: "baja fish tacos, fisketacos, baja chicken tacos, sprøstekt fisketaco",
    recipeYield: "4 porsjoner", times: { prep: "PT25M", cook: "PT15M", total: "PT40M" },
    search: "baja fish tacos fisketacos kyllingtacos baja chicken tacos sprøstekt fisk kylling ølrøre kålslaw chipotle lime majstortilla torsk fredagstaco",
    faq: [
      { q: "Hva er baja fish tacos?", a: "Det er fisketacoen fra Baja California i Mexico: strimler av sprøstekt, ølfritert hvit fisk i en myk majstortilla, toppet med frisk, syrlig kålslaw og en røkt chipotlekrem, med en god klem lime over. Kombinasjonen av varm, sprø fisk, kald og frisk slaw og kremet, røkt saus er det som gjør den så populær." },
      { q: "Hvilken fisk passer best i fisketacos?", a: "Fast, mager hvit fisk er best fordi den holder formen og blir saftig under den sprø panering. Torsk er klassikeren, men hyse (kolje), sei og lyr fungerer like godt. Vil du ha en fetere variant, kan du bruke laks. Skjær fisken i jevne strimler så de steker likt." },
      { q: "Hvordan får jeg sprø panering på fisken?", a: "Hemmeligheten er en kald ølrøre som lages rett før fritering – kullsyren i ølet gir en lett og luftig skorpe. Bland gjerne litt maizena i melet for ekstra sprøhet, hold røren kald, og friter i olje på 175–180 °C til fisken er gyllen, bare ett par minutter på hver side. Ikke ha for mye fisk i gryta om gangen, så holder oljen temperaturen." },
      { q: "Hvilken tortilla bruker man til fisketacos?", a: "Autentiske Baja fish tacos lages med små majstortillas (majstortilla), som er naturlig glutenfrie og gir den ekte smaken. I Norge er myke hvetetortillas mer vanlig og fungerer fint. Varm tortillaene i tørr panne eller over flammen så de blir myke og smidige før du fyller dem." },
      { q: "Kan jeg lage fisketacos uten fritering, i ovn eller airfryer?", a: "Ja. For en lettere variant kan du vende fisken i krydret mel og panstekte den sprø i litt olje, eller steke den i ovn på 220 °C eller i airfryer til den er gyllen. Du mister litt av den boblende ølrøre-skorpa, men får en mindre fettrik taco som passer fint til hverdags." },
      { q: "Hva er chipotle, og hva kan jeg bruke i stedet?", a: "Chipotle er røkt og tørket jalapeño, ofte solgt i en krydret adobosaus på boks eller som paste. Den gir fisketacoen sin karakteristiske røkte varme. Får du ikke tak i den, kan du blande røkt paprikapulver med litt sterk saus eller chiliflak – du får en mildere, men liknende røksmak." },
      { q: "Hvilket tilbehør passer til fisketacos?", a: "Klassisk topping er en frisk kålslaw (gjerne av rødkål), chipotle- eller limekrem, friske limebåter og rikelig med koriander. Mange har også pico de gallo (frisk tomatsalsa), guacamole eller avokado, og syltet rødløk. Server gjerne med ris og bønner ved siden av for et fullt måltid." },
      { q: "Kan jeg lage fisketacos glutenfri?", a: "Ja. Bytt hvetemelet i røren mot en glutenfri melblanding eller ren maizena, bruk glutenfritt øl eller sprudlevann i røren, og velg majstortilla, som er naturlig glutenfri. Da blir hele tacoen glutenfri uten at den mister sprøheten." },
      { q: "Kan jeg bruke frossen fisk til fisketacos?", a: "Ja, frossen hvit fisk fungerer godt. Tin den helt, og klapp den godt tørr med kjøkkenpapir før du panerer – overflødig vann gjør at panering ikke fester seg og at oljen spruter. Tørr fisk gir den sprøeste skorpa." },
      { q: "Kan jeg lage baja tacos med kylling i stedet for fisk?", a: "Ja – baja chicken tacos er like populært. Skjær kyllingfilet i strimler, og enten friter dem i samme ølrøre eller stek dem sprø i krydret mel. Alt det andre er likt: rødkålslaw, chipotlekrem, lime og tortilla. Pass bare på at kyllingen er gjennomstekt. I oppskriften vår ligger kylling klar som likestilt alternativ til fisken, og mengdene justeres automatisk." }
    ]
  },

  {
    id: "spagetti-kjottsaus", slug: "spagetti-kjottsaus.html", status: "live",
    shortName: "Spagetti med kjøttsaus", name: "Spagetti med kjøttsaus (bolognese)",
    tagline: "Den evige familiefavoritten: spagetti med en rik, mør kjøttsaus av tomat og kjøttdeig.",
    description: "Spagetti med kjøttsaus (bolognese) – rik saus av kjøttdeig og tomat. Velg nivå, juster porsjoner og tilpass ingrediensene til allergier.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Italiensk",
    keywords: "spagetti med kjøttsaus, spagetti bolognese, kjøttsaus oppskrift, pasta bolognese, ragù",
    recipeYield: "4 porsjoner", times: { prep: "PT15M", cook: "PT45M", total: "PT60M" },
    search: "spagetti med kjøttsaus spagetti bolognese kjøttsaus oppskrift kjøttdeig pasta bolognese ragu ragù alla bolognese tomatsaus parmesan familiemiddag hverdagsmiddag pancetta soffritto",
    faq: [
      { q: "Hvor lenge bør kjøttsausen koke?", a: "En enkel hverdagssaus blir god etter 15–20 minutter, men kjøttsaus blir bedre jo lenger den får putre. En ekte ragù alla bolognese koker på svak varme i 2–4 timer, slik at smakene blir runde og kjøttet mørt. Putrer du lenge, spe med litt vann eller kraft underveis så sausen ikke tørker ut. Har du dårlig tid, gir selv 30–40 minutter på lav varme et tydelig løft i smak." },
      { q: "Hva er forskjellen på bolognese og kjøttsaus?", a: "I praksis er det samme rett – «spagetti med kjøttsaus» er det norske hverdagsnavnet, mens «bolognese» (etter byen Bologna) er det italienske. Den ekte italienske ragù alla bolognese er litt annerledes enn den norske: den bruker soffritto av løk, gulrot og selleri, ofte pancetta, vin og en skvett melk, mindre tomat, og koker svært lenge. Den norske varianten er gjerne tomatrikere og raskere." },
      { q: "Hvorfor ha melk i bolognese?", a: "Melk er et klassisk italiensk triks. En liten skvett melk eller fløte tilsatt mot slutten runder av syren fra tomatene og gjør sausen mildere og mer kremet. I den autentiske ragùen tilsettes melken tidlig, før vin og tomat, og får koke inn i kjøttet – det gir et mørt, fyldig resultat. Du trenger ikke mye; et par spiseskjeer er nok." },
      { q: "Kan jeg lage spagetti bolognese uten vin?", a: "Ja. Vinen gir syrlig dybde, men er ikke nødvendig. Dropp den, eller erstatt med litt ekstra kraft eller buljong og en liten skvett balsamico eller eddik for friskheten. Lager du retten til barn, er det vanlig å droppe vinen helt – alkoholen koker stort sett bort uansett, men sausen blir like god uten." },
      { q: "Hvor mye kjøttdeig trenger jeg per person?", a: "Regn rundt 100–125 g kjøttdeig per voksen til en god kjøttsaus, altså cirka 400–500 g til fire porsjoner. Til pastaen regner du rundt 80–100 g tørr spagetti per person. Vil du strekke kjøttet, kan du erstatte en del av kjøttdeigen med ekstra revet gulrot, sopp eller linser uten at retten taper seg." },
      { q: "Kan jeg fryse kjøttsaus?", a: "Ja, kjøttsaus egner seg veldig godt til frysing, og mange lager dobbel porsjon med vilje. Avkjøl sausen, fordel den i porsjonsbokser, og frys i opptil 3 måneder. Tin i kjøleskap og varm forsiktig opp igjen, gjerne med en skvett vann. Frys bare sausen – kok fersk pasta når du skal servere." },
      { q: "Hvilken kjøttdeig er best i bolognese?", a: "Vanlig kjøttdeig av storfe fungerer fint, men en blanding av okse- og svinekjøtt gir saftigere og rundere smak – svinekjøttet tilfører fett og mildhet. Vil du nærme deg det italienske, kan du grovkverne kjøttet selv og bruke litt pancetta eller bacon i bunnen for ekstra dybde. Velg gjerne en deig med litt fett, ikke den aller magreste, for best smak." },
      { q: "Hvordan får jeg sausen til å feste seg på pastaen?", a: "Hemmeligheten er pastavann. Spar en kopp av det stivelsesrike kokevannet, og vend den nykokte spagettien rett i kjøttsausen i panna med en skvett av vannet. Stivelsen binder saus og pasta sammen, og det smaker langt bedre enn å øse saus over en haug naken spagetti på tallerkenen." },
      { q: "Kan jeg lage spagetti bolognese glutenfri?", a: "Ja. Selve kjøttsausen er naturlig glutenfri – bytt bare ut spagettien med glutenfri pasta. Sjekk eventuell buljong eller ferdig kraft for hvete, og bruk en glutenfri variant om du er følsom. Da er hele retten trygg ved cøliaki uten å miste smak." }
    ]
  },

  {
    id: "vafler", slug: "vafler.html", status: "live",
    shortName: "Vafler", name: "Vafler (norske hjertevafler)",
    tagline: "Sprø eller myke hjertevafler – justerbar røre med kardemomme.",
    description: "Norske hjertevafler i tre nivåer, fra rask hverdagsrøre til kulturmelk og brunet smør. Juster antall og tilpass ingrediensene – også melkefritt og glutenfritt.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "vafler, vaffelrøre, norske hjertevafler",
    recipeYield: "10 vafler", times: { prep: "PT10M", cook: "PT20M", total: "PT40M" },
    search: "vafler vaffelrøre hjertevafler kardemomme",
    faq: [
      { q: "Hvordan får jeg sprø vafler?", a: "Sprø vafler får du med mer fett (smeltet smør) og litt mindre melk i røren, og ved å steke dem litt lenger til de er gyllenbrune. Legg dem enkeltvis på rist – ikke i stabel – så damper de ikke seg myke igjen." },
      { q: "Hvordan får jeg myke vafler?", a: "Myke vafler vil du ha litt mer melk og litt mindre stekt – ta dem ut når de er lyst gylne. Legg dem oppå hverandre under et klede mens de hviler, så holder de seg myke og bøyelige." },
      { q: "Hvorfor blir vaflene mine klissete?", a: "Klissete vafler skyldes som regel for tynn røre, for kort steketid eller at jernet ikke er varmt nok. La røren svelle, stek til de slipper jernet lett, og bruk et godt forvarmet vaffeljern." },
      { q: "Kan vaffelrøren stå og hvile?", a: "Ja, og den blir bedre av det. La gjerne røren hvile 20–30 minutter, eller lag den kvelden før og sett den kaldt – melet sveller og vaflene blir mørere. Rør lett om før steking og spe med litt melk hvis den har tyknet." },
      { q: "Kan jeg lage vaffelrøre kvelden før?", a: "Ja. Røren holder seg fint i kjøleskapet over natten i en tett bolle. Den tykner litt, så rør om og spe med en skvett melk til ønsket konsistens før du steker." },
      { q: "Kan jeg lage melkefrie vafler?", a: "Ja – bytt melken mot havredrikk eller annen plantedrikk og smøret mot margarin eller nøytral olje. Røren oppfører seg likt, og vaflene blir like gode." },
      { q: "Kan jeg lage glutenfrie vafler?", a: "Ja, bytt hvetemelet mot en glutenfri melblanding med bindemiddel. La røren svelle litt lenger, og spe med litt ekstra melk om den blir tykk." },
      { q: "Hva er forskjellen på kulturmelk og melk i vafler?", a: "Kulturmelk (eller kefir) gir litt syrlige, ekstra møre og luftige vafler fordi syren reagerer med bakepulveret. Vanlig melk gir en mildere, mer nøytral vaffel. Begge fungerer – kulturmelk er det lille ekstra." },
      { q: "Kan jeg fryse vafler?", a: "Ja. Avkjøl dem helt, legg dem lagvis med bakepapir imellom i en tett pose, og frys i opptil 3 måneder. Varm dem i brødrister eller stekepanne så blir de sprø igjen." }
    ]
  },

  {
    id: "taco", slug: "taco.html", status: "live",
    shortName: "Taco", name: "Taco (fredagstaco)",
    tagline: "Den norske fredagsklassikeren med krydret kjøttdeig og alt tilbehøret.",
    description: "Norsk fredagstaco med krydret kjøttdeig, frisk salsa og tilbehør. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Tex-Mex",
    keywords: "taco, fredagstaco, taco med kjøttdeig, hjemmelaget taco, hjemmelaget tacokrydder",
    recipeYield: "4 porsjoner", times: { prep: "PT20M", cook: "PT20M", total: "PT40M" },
    search: "taco fredagstaco kjøttdeig tacokrydder hjemmelaget",
    faq: [
      { q: "Hvordan lager jeg hjemmelaget tacokrydder?", a: "Bland 2 ts spisskummen, 2 ts paprikapulver, 1 ts malt koriander, 0,5–1 ts chilipulver (etter styrke), 1 ts tørket oregano, 1 ts hvitløkspulver, 1 ts løkpulver og 1 ts salt. Det tilsvarer omtrent én pose ferdigkrydder og rekker til 400–500 g kjøttdeig. Stek krydderet med kjøttet og spe med en dl vann." },
      { q: "Hvor mye kjøttdeig trenger jeg per person til taco?", a: "Regn omtrent 100–150 g kjøttdeig per voksen, altså 400–600 g til fire. Til barn holder det med mindre kjøtt og mer av tilbehøret som mais, ost og salat." },
      { q: "Hvordan lager jeg glutenfri taco?", a: "Bytt hvetetortilla mot maistortilla eller glutenfrie lefser, og bruk hjemmelaget tacokrydder – mange ferdigblandinger inneholder hvete. Mais, ost, rømme, salsa og grønnsaker er naturlig glutenfrie." },
      { q: "Hva passer til taco?", a: "Klassisk tilbehør er revet ost, mais, hakket tomat og agurk, isbergsalat, rømme, salsa og guacamole. Mange har også jalapeño, vårløk, sort bønner eller ris ved siden av. Server alt i skåler så alle kan bygge sin egen." },
      { q: "Hvilken kjøttdeig er best til taco?", a: "Vanlig storfekjøttdeig (kvernet storfe) gir mest smak og en saftig taco. Magrere karbonadedeig fungerer også, men da bør du steke litt forsiktigere så kjøttet ikke blir tørt. Kyllingkjøttdeig gir en lettere variant." },
      { q: "Er taco det samme som ekte meksikansk mat?", a: "Nei. Den norske fredagstacoen er en tex-mex-variant med ferdigkrydder, mais, revet ost og rømme i myk hvetetortilla. Ekte meksikanske tacos bruker små maistortillaer, friske salsaer, lime og koriander, og som regel langtidskrydret kjøtt uten ost og rømme." },
      { q: "Hvordan lager jeg taco til mange?", a: "Skaler oppskriften opp og stek kjøttdeigen i flere omganger så pannen ikke blir for full – da damper kjøttet i stedet for å brune. Sett alt tilbehør i skåler på bordet, og hold tortillaene varme i folie eller en ren klut til servering." },
      { q: "Hvordan får jeg sterkere eller mildere taco?", a: "Styrken sitter i chilien. Lager du krydderet selv, justerer du chilipulveret opp eller ned – eller dropper det helt for de minste. Frisk eller syltet jalapeño på toppen gir varme til dem som vil ha det, uten å gjøre hele retten sterk." }
    ]
  },

  {
    id: "pizza", slug: "pizza.html", status: "live",
    shortName: "Pizza", name: "Hjemmelaget pizza",
    tagline: "Sprø og luftig pizzabunn fra bunnen – deig, saus og topping i tre nivåer.",
    description: "Hjemmelaget pizza med sprø, luftig bunn. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass deig, saus og topping – mengdene følger med.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Italiensk",
    keywords: "pizzadeig, hjemmelaget pizza, pizzadeig oppskrift, kald langheving pizza",
    recipeYield: "2 pizzaer (4 porsjoner)", times: { prep: "PT25M", cook: "PT12M", total: "PT100M" },
    search: "pizzadeig hjemmelaget pizza tipo 00 langheving sprø bunn",
    faq: [
      { q: "Hvilket mel er best til pizzadeig?", a: "Italiensk tipo 00 gir den mest elastiske deigen og en sprø, luftig bunn fordi det er finmalt og har mye gluten. Vanlig hvetemel fungerer fint til hverdags; tilsett gjerne litt durum/semolina for tygg. Til langheving lønner det seg med tipo 00 med høyt proteininnhold." },
      { q: "Hvor lenge skal pizzadeig heve?", a: "En samme-dags deig trenger 1–2 timer i romtemperatur til den er dobbelt så stor. Vil du ha mer smak og bedre bunn, kaldhev deigen i kjøleskap i 24–48 timer. Jo lenger heving, desto mindre gjær trenger du og desto mindre gjærsmak får du." },
      { q: "Hva er kald langheving, og hvorfor gjør man det?", a: "Kald langheving betyr at deigen hever sakte i kjøleskap (4–8 grader) i 24–72 timer i stedet for raskt i romtemperatur. Den langsomme gjæringen utvikler smak og gjør bunnen lettere å fordøye, sprøere utenpå og luftigere inni. Bruk lite gjær og la deigen romtemperere et par timer før utbaking." },
      { q: "Hvordan får jeg sprø pizzabunn hjemme uten pizzaovn?", a: "Sett ovnen så varm den går (250–275 grader) med en stekestein eller et stekebrett snudd opp ned i ovnen i minst 30–45 minutter først. Bak deigen tynt, ikke ha for mye saus, og stek pizzaen rett på den glohete steinen i 6–10 minutter. Høy bunnvarme er nøkkelen til sprø skorpe." },
      { q: "Kan jeg lage pizzadeig dagen før?", a: "Ja, det er den enkleste måten å forbedre pizzaen på. Elt deigen kvelden før, dekk bollen og sett den i kjøleskapet. Ta den ut 1–2 timer før du skal bake så den blir romtemperert. Kald deig som har stått over natten er både mer smakfull og lettere å kjevle ut." },
      { q: "Hvor mye gjær skal jeg ha i pizzadeigen?", a: "Det avhenger av hevetiden. Til en rask samme-dags deig bruker du rikelig (rundt 25 g fersk gjær eller 1 pose tørrgjær per 500 g mel). Til kald langheving over 24–48 timer holder det med en brøkdel – gjerne bare 2–5 g fersk gjær – fordi deigen får god tid på seg." },
      { q: "Hvordan lager jeg glutenfri pizzadeig?", a: "Bytt hvetemelet mot en ferdig glutenfri pizzamelmiks (de fleste inneholder bindemiddel som psyllium eller xanthan). Deigen blir mer klissete og mindre elastisk, så bre den ut med våte hender eller mellom bakepapir i stedet for å kjevle. Den trenger ikke like lang heving som hvetedeig." },
      { q: "Hva slags ost er best på pizza?", a: "Klassisk er fersk mozzarella (gjerne fior di latte eller buffelmozzarella) som smelter mykt og mildt. Riv eller skjær den opp, og la litt vann renne av først så pizzaen ikke blir våt. Vil du ha mer smak, kan du blande inn litt revet parmesan." },
      { q: "På hvilken temperatur skal pizza stekes?", a: "Så varmt som mulig. Hjemmeovner bør stå på maks, vanligvis 250–275 grader, med stekestein eller varmt brett. En tynn pizza er ferdig på 6–10 minutter. Pizzaovner og vedfyrte ovner går mye høyere (400–450 grader) og steker en napolitansk pizza på under to minutter." }
    ]
  },

  {
    id: "lasagne", slug: "lasagne.html", status: "live",
    shortName: "Lasagne", name: "Lasagne",
    tagline: "Klassisk italiensk lasagne med kjøttsaus, bechamel og ost.",
    description: "Klassisk lasagne med kjøttsaus og ekte bechamel. Velg nivå (enkel/medium/kompleks), juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["middag"], badge: "3 nivåer",
    recipeCategory: "Hovedrett", cuisine: "Italiensk",
    keywords: "lasagne, lasagne oppskrift, klassisk lasagne med bechamel",
    recipeYield: "4 porsjoner", times: { prep: "PT25M", cook: "PT45M", total: "PT1H10M" },
    search: "lasagne kjøttsaus bechamel ost klassisk",
    faq: [
      { q: "Må man forkoke lasagneplater?", a: "Vanlige lasagneplater trenger du ikke forkoke – la sausene være litt rikelige og litt løse, så trekker platene til seg nok væske i ovnen. Glutenfrie plater er mer ujevne: forvell dem gjerne et par minutter i lettsaltet vann, eller gjør sausene ekstra fuktige." },
      { q: "Hvordan lager jeg bechamel uten klumper?", a: "Smelt smøret, rør inn melet og la jevningen surre et par minutter. Ta gryta av varmen og spe med melken litt etter litt mens du visper godt, til sausen er blank før du spe videre. Lar du det koke opp mellom hver omgang, blir den jevn og fin." },
      { q: "Hvor mange lag skal lasagnen ha?", a: "Sikt på tre til fire lag med plater. Start og slutt med saus så platene ikke tørker ut, og avslutt med bechamel og revet ost på toppen for en gyllen skorpe." },
      { q: "Kan jeg lage lasagne dagen før?", a: "Ja. Lag kjøttsaus og bechamel dagen før og oppbevar dem kaldt, eller sett sammen hele lasagnen ferdig og dekk den til i kjøleskapet. Bak den rett fra kjøleskap, gjerne 10 minutter ekstra siden den er kald." },
      { q: "Kan man fryse lasagne?", a: "Ja. Frys den gjerne ferdig sammensatt men ubakt i en form med lokk eller folie i opptil 3 måneder, og bak den fra frossen med litt lengre steketid. Ferdigbakt lasagne kan også fryses i porsjoner." },
      { q: "Hvordan lager jeg glutenfri lasagne?", a: "Bruk glutenfrie lasagneplater og bytt hvetemelet i bechamelen mot maizena eller glutenfri melblanding. Resten av retten er naturlig glutenfri. Forvell de glutenfrie platene kort eller gjør sausene litt løsere." },
      { q: "Hvordan lager jeg melkefri lasagne?", a: "Bytt melken i bechamelen mot plantemelk og smøret mot margarin eller olje, og bruk vegansk parmesan og ost. Da blir hele retten melkefri uten at den hvite sausen mister kremen." },
      { q: "Hvilken ost er best i lasagne?", a: "Nyrevet parmesan eller grana padano gir mest smak, gjerne sammen med revet mozzarella for den seige osteoverflaten. Mozzarella alene blir mildt; parmesan løfter både saus og topp." },
      { q: "Kan jeg lage vegetarlasagne?", a: "Ja – bytt kjøttdeigen mot finhakket sopp og røde linser eller plantefarse. De gir en fyldig, kjøttaktig saus. Resten av oppskriften er den samme." }
    ]
  },

  {
    id: "boller", slug: "boller.html", status: "live",
    shortName: "Boller", name: "Boller (hveteboller)",
    tagline: "Saftige, luftige hveteboller med kardemomme – grunndeigen all gjærbakst bygger på.",
    description: "Saftige hveteboller og rosinboller med kardemomme. Velg nivå (enkel/medium/kompleks), juster antall og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "boller, hveteboller, rosinboller, saftige boller, gjærbakst grunndeig, boller oppskrift, kardemommeboller",
    recipeYield: "12 boller", times: { prep: "PT30M", cook: "PT12M", total: "PT2H30M" },
    search: "boller hveteboller rosinboller saftige kardemomme gjærbakst",
    faq: [
      { q: "Hva er hemmeligheten bak saftige boller?", a: "Riktig væskemengde, nok fett (smør), god elting og lang nok heving. Elt deigen smidig så glutenet utvikler seg, ikke spe i for mye mel, og pakk bollene godt inn så snart de er avkjølt så de holder på fuktigheten." },
      { q: "Hvorfor blir bollene mine flate og harde?", a: "Vanligvis for lite elting, for lite væske eller for lang/varm heving som kollapser. Stek heller ikke for lenge – overstekte boller mister all fuktighet. Elt til deigen er smidig, la den heve til dobbel størrelse, og stek bollene raskt på 200 grader til de så vidt er gylne." },
      { q: "Hvor varm skal melken være til boller?", a: "Fingervarm, rundt 37 grader – det skal kjennes lunkent, ikke varmt, på innsiden av håndleddet. For varm melk (over ca. 45 grader) dreper gjæren, og da hever ikke deigen. Bruker du tørrgjær kan melken være litt varmere enn for fersk gjær – følg pakken." },
      { q: "Kan jeg kaldheve bolledeigen over natten?", a: "Ja. Bruk en fjerdedel av gjæren, rør den ut i kald melk, og sett deigen tildekket i kjøleskapet i 8–12 timer. Neste morgen tar du ut deigen, former bollene, lar dem etterheve en liten stund i romtemperatur og steker. Kald langheving gir mer smak og saftigere boller." },
      { q: "Hvor lenge skal boller heve?", a: "Første heving tar omtrent 45–60 minutter i romtemperatur, til deigen er dobbelt så stor. Etter at du har trillet bollene lar du dem etterheve ferdig formet i 30–45 minutter til før steking. Kald deig hever saktere; gi den god tid." },
      { q: "Skal jeg ha rosiner i bollene eller ikke?", a: "Det er en smakssak. Rosinboller er klassisk og barnevennlig – bland inn et par never rosiner mot slutten av eltingen. Vil du ha rene hveteboller, dropper du dem. Bløtlegg gjerne rosinene i litt varmt vann først så de blir saftige." },
      { q: "Kan jeg fryse boller?", a: "Ja, det er den beste måten å ta vare på dem på. Frys bollene godt avkjølt i en tett pose i opptil 3 måneder. Tin dem i romtemperatur, eller varm dem rett fra fryseren i ovnen på 160 grader i 8–10 minutter så de smaker nybakt." },
      { q: "Kan jeg lage bollene melkefrie eller glutenfrie?", a: "Ja. For melkefrie boller bytter du melk mot plantedrikk og smør mot margarin. For glutenfrie boller bruker du en glutenfri melblanding med bindemiddel; deigen blir litt klissere og hever ikke like mye, så form bollene fuktige og gi dem god etterheving. Egget kan erstattes med plantedrikk-pensling og litt ekstra væske." },
      { q: "Hvorfor brukes kardemomme i boller?", a: "Kardemomme er den klassiske norske smaken i søt gjærbakst og gir bollene den varme, litt blomstrete aromaen vi forbinder med hjemmebakst. Nystøtte frø gir mest smak; ferdigmalt kardemomme er greit, men bruk gjerne litt rikelig." },
      { q: "Er dette grunndeigen til kanelboller og skolebrød også?", a: "Ja. Dette er den søte gjærdeigen mange andre kaker bygger på – ruller du den ut med kanelfyll får du kanelboller, fyller du med vaniljekrem får du skolebrød. Behersker du denne bolledeigen, behersker du det meste av norsk søt gjærbakst." }
    ]
  },

  {
    id: "kanelboller", slug: "kanelboller.html", status: "live",
    shortName: "Kanelboller", name: "Saftige kanelboller",
    tagline: "Myke, saftige kanelboller med kardemomme og rikelig kanelfyll – i tre nivåer.",
    description: "Saftige kanelboller med kanelfyll og kardemomme. Velg nivå (enkel/medium/kompleks), juster antall og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "kanelboller, saftige kanelboller, kanelboller oppskrift, kanelsnurrer, kanelboller med kardemomme",
    recipeYield: "12 kanelboller", times: { prep: "PT30M", cook: "PT12M", total: "PT2H15M" },
    search: "kanelboller saftige oppskrift kanelfyll kardemomme",
    faq: [
      { q: "Hvorfor blir kanelbollene mine tørre og harde?", a: "Som regel for mye mel eller for lang steketid. Mål melet med vekt (ikke desiliter), elt deigen smidig men ikke tilsett mer mel enn nødvendig, og stek bollene kort på god varme – 10–12 minutter ved 220 °C. Ta dem ut så snart de er gylne; ettervarmen tørker dem fort." },
      { q: "Hvordan får jeg ekstra saftige kanelboller?", a: "Hold deigen litt klissete, bruk rikelig romtemperert smør i fyllet, og ikke oversteik. Et triks er å la bollene heve godt, og eventuelt helle litt kremfløte over rett før steking – den trekker inn og gjør dem myke. Kald langheving over natten gir også mørere, saftigere boller." },
      { q: "Kan jeg kaldheve kanelbolledeigen i kjøleskapet over natten?", a: "Ja, og det gir best smak og saftighet. Bruk kald melk og omtrent halvparten av gjæren, dekk deigen (eller de ferdig rullede bollene) og sett den kaldt i 8–24 timer. Ta den ut ca. 1 time før steking. Kald deig er dessuten lettere å kjevle og rulle." },
      { q: "Hvor mye kanel skal jeg ha i fyllet?", a: "Til ca. 12 boller bruker du rundt 2 ss kanel blandet med 100 g romtemperert smør og 1 dl sukker. Liker du kraftig kanelsmak, kan du øke til 3 ss. Bland til en smørbar pasta og smør jevnt utover hele deigen før du ruller." },
      { q: "Trenger jeg kardemomme i kanelboller?", a: "Det er ikke et must, men kardemomme i deigen gir den klassiske nordiske bollesmaken. Nystøtte kardemommefrø gir mest aroma; ferdigmalt kardemomme fungerer fint i hverdagen. Bruk ca. 1–2 ts til en porsjon på 12 boller." },
      { q: "Kan jeg fryse kanelboller?", a: "Ja. Frys dem ferdigstekte og avkjølte i tett pose i opptil 3 måneder. Tin i romtemperatur, eller varm dem 3–4 minutter i ovnen på 175 °C så de blir myke igjen. Frys gjerne uten glasur og pensle/glaser etter opptining." },
      { q: "Perlesukker eller melisglasur på toppen?", a: "Begge er klassiske. Perlesukker pensles på med sammenpisket egg før steking og gir knasende topp. Melisglasur (melis rørt ut med litt vann eller melk) has på etter steking og gir en søtere, blank finish. Velg det du liker best – eller dropp begge for en mildere bolle." },
      { q: "Hvordan lager jeg melkefrie eller glutenfrie kanelboller?", a: "Melkefritt: bytt melk til havredrikk og smør (både i deig og fyll) til melkefri margarin, og pensle med plantedrikk. Glutenfritt: bruk en glutenfri melblanding med bindemiddel og la deigen hvile litt lenger – glutenfri deig blir klissete og bør håndteres forsiktig." },
      { q: "Hva er forskjellen på kanelboller og kanelsnurrer?", a: "Smaken er den samme – forskjellen er formen. Kanelboller rulles til en pølse og skjæres i skiver (snurrer/snegler), mens kanelsnurrer ofte brettes og knytes eller tvinnes. Denne deigen og fyllet passer til begge; velg den formingen du foretrekker." }
    ]
  },

  {
    id: "eplekake", slug: "eplekake.html", status: "live",
    shortName: "Eplekake", name: "Eplekake (saftig norsk eplekake)",
    tagline: "Saftig norsk eplekake med kanel – fra rask rørekake til brunet smør og mandel.",
    description: "Saftig norsk eplekake med kanel og epler. Velg nivå (enkel/medium/kompleks), juster antall stykker og tilpass ingrediensene – også glutenfritt og melkefritt.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    season: "okt",
    keywords: "eplekake, saftig eplekake, norsk eplekake, eplekake med kanel",
    recipeYield: "12 stykker", times: { prep: "PT20M", cook: "PT40M", total: "PT60M" },
    search: "eplekake saftig norsk eplekake kanel epler rørekake glutenfri melkefri høst",
    faq: [
      { q: "Hvilke epler er best til eplekake?", a: "Litt syrlige, faste epler gir best resultat – de holder formen i steken og balanserer søtheten i røren. Norske høstepler som Aroma, Discovery, Summerred eller en god matpapir-syrlig variant er perfekte. Vil du ha to nyanser i kaka, bland gjerne et grønt (syrlig) og et rødt eple. Unngå veldig melne epler, som koker helt ut og gjør kaka våt." },
      { q: "Hvordan får jeg eplekaka saftig?", a: "Saftigheten kommer av nok smør (eller olje), at du ikke baker kaka for lenge, og av eplene selv som avgir fukt under steking. Pisk smør og sukker luftig, ikke overstek – ta kaka ut når en kakepinne kommer ut med noen fuktige smuler – og legg gjerne rikelig med epler. En klype salt og litt vaniljesukker løfter også smaken." },
      { q: "Hvilken form bruker jeg til eplekake?", a: "En rund springform på 22–24 cm eller en liten langpanne på ca. 20 x 30 cm fungerer begge fint. Springform gir en høyere, mer kakeaktig form; langpanne gir flatere, raskere stekte stykker. Kle bunnen med bakepapir og smør kanten, så slipper kaka lett." },
      { q: "Skal eplene oppi røren eller på toppen?", a: "Begge deler er vanlig. Vender du epleterningene inn i røren, blir hele kaka saftig og fuktig. Legger du eplebåter i et pent mønster på toppen og strør kanelsukker over, får du en penere kake med karamellisert overflate. I oppskriften vår gjør enkel-nivået det raskt med epler på toppen, mens kompleks-nivået legger eplebåter i mønster." },
      { q: "Kan jeg lage glutenfri eplekake?", a: "Ja. Bytt hvetemelet mot en glutenfri melblanding med bindemiddel. Glutenfri røre blir gjerne litt fastere, så la den hvile et par minutter og spe eventuelt med en skvett ekstra melk. Resten av oppskriften er den samme, og kaka blir like saftig av eplene." },
      { q: "Kan jeg lage melkefri eplekake?", a: "Ja. Bytt melken mot havredrikk eller annen plantedrikk, og smøret mot margarin eller nøytral olje. Olje gir faktisk en ekstra saftig kake. Da blir hele kaka melkefri uten at den mister smak eller konsistens." },
      { q: "Hvor mye kanel skal i eplekake?", a: "Kanel og eple hører sammen. Regn cirka 1 ts malt kanel i selve røren til en kake på 12 stykker, og strø gjerne litt kanelsukker (kanel rørt i sukker) over toppen før steking for en søt, krydret skorpe. Liker du mye kanel, kan du trygt øke til 1,5–2 ts – juster etter smak." },
      { q: "Kan jeg fryse eplekake?", a: "Ja, eplekake fryser godt. Avkjøl den helt, pakk den godt inn eller legg den i tett boks, og frys i opptil 3 måneder. Tin i romtemperatur, og varm gjerne stykkene litt i ovnen så de blir friske igjen. Du kan også fryse den i porsjonsstykker." },
      { q: "Hva serverer man til eplekake?", a: "Klassisk er en kule vaniljeis, en klatt lettpisket krem eller en skvett vaniljesaus ved siden av den lune kaka. Gresk yoghurt eller créme fraîche passer også fint hvis du vil ha noe litt syrlig som balanserer søtheten. Et dryss melis på toppen gjør den ekstra pen." }
    ]
  },

  {
    id: "focaccia", slug: "focaccia.html", status: "live",
    shortName: "Focaccia", name: "Focaccia (italiensk olivenoljebrød)",
    tagline: "Luftig italiensk focaccia med olivenolje, flaksalt og rosmarin.",
    description: "Luftig italiensk focaccia med olivenolje, flaksalt og rosmarin. Velg nivå (enkel/medium/kompleks), juster antall og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Italiensk",
    keywords: "focaccia, luftig focaccia, focaccia oppskrift",
    recipeYield: "12 stykker", times: { prep: "PT20M", cook: "PT25M", total: "PT3H" },
    search: "focaccia luftig olivenolje flaksalt rosmarin italiensk brød",
    faq: [
      { q: "Hva er hemmeligheten bak luftig focaccia?", a: "To ting: høy hydrering og god heving. En våt, klissete deig (rundt 75–80 % vann) holder på luften, og lang eller dobbel heving gir de store boblene. Ikke kna luften ut – brett deigen forsiktig, og lag fordypninger med fingertuppene rett før steking." },
      { q: "Hvor mye olivenolje skal i focaccia?", a: "Vær raus. Ha rikelig olje i bunnen av formen (2–3 ss) så bunnen blir nesten frityrstekt og sprø, og ringle 1–2 ss over toppen før steking. Olivenoljen er focacciaens sjel – den gir både smak, sprøhet og den blanke overflaten." },
      { q: "Kan jeg kaldheve focaccia over natten?", a: "Ja, og mange synes det gir best smak. Bruk lite gjær (2–4 g fersk) og kaldt vann, og la deigen heve tildekket i kjøleskap i 18–24 timer. Ta den ut og la den temperere og etterheve i formen før steking. Lang, kald heving gir mer smak og luftigere krumme." },
      { q: "Hvor mye vann skal i focaccia (hydrering)?", a: "Focaccia er et brød med høy hydrering – typisk 70–80 % vann i forhold til melvekt. Jo mer vann, desto luftigere og mer åpen krumme, men deigen blir også klissete. Begynn rundt 70 % hvis du er usikker, og øk etter hvert som du blir trygg på den våte deigen." },
      { q: "Hva er forskjellen på flaksalt og vanlig salt på focaccia?", a: "Salt i deigen smaker du gjennom hele brødet, mens flaksalt (som Maldon) strøs på toppen rett før steking og gir små, sprø saltkrystaller du kjenner i hvert jafs. Bruk fint salt i deigen og flaksalt som topping – ikke bytt dem om, da blir toppen for salt og grov." },
      { q: "Kan jeg lage glutenfri focaccia?", a: "Ja. Bytt hvetemelet mot en glutenfri brødmiks (gjerne med psylliumfrøskall for struktur), og øk væsken litt siden glutenfritt mel suger mer. Deigen blir mer som en tykk røre enn en deig – bre den ut i formen med en våt slikkepott. Den blir saftig og luftig, men litt tettere enn med hvetemel." },
      { q: "Hva kan jeg ha på focaccia (topping)?", a: "Klassisk er rosmarin og flaksalt, men focaccia tåler mye: cherrytomater, oliven, tynne løkringer, hvitløk, soltørket tomat, parmesan eller frisk salvie. Trykk toppingen ned i fordypningene så den ikke faller av, og hold deg til litt om gangen så brødet får heve fritt." },
      { q: "Hvilken form bruker jeg til focaccia?", a: "En langpanne eller en lav, kantet form i metall fungerer best – cirka 30 x 20 cm til denne mengden. Olje formen godt, eller kle den med bakepapir og olje oppå. En tykk metallform gir sprøere bunn enn glass eller silikon." }
    ]
  },

  {
    id: "grovbrod", slug: "grovbrod.html", status: "live",
    shortName: "Grovbrød", name: "Hjemmelaget grovbrød",
    tagline: "Saftig, grovt hverdagsbrød med sammalt hvete, havre og frø.",
    description: "Saftig hjemmelaget grovbrød med sammalt hvete, havregryn og frø. Velg nivå (enkel/medium/kompleks), juster antall brød og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk",
    keywords: "grovbrød, hjemmelaget brød, brød oppskrift, eltefritt grovbrød, saftig grovbrød",
    recipeYield: "2 brød", times: { prep: "PT20M", cook: "PT40M", total: "PT3H" },
    search: "grovbrød hjemmelaget brød oppskrift sammalt hvete frø",
    faq: [
      { q: "Hvorfor blir grovbrødet mitt kompakt og tungt?", a: "Vanligste årsak er for mye mel eller for kort heving. Grovt mel og frø suger mye væske, så deigen skal være klissete, ikke fast – juster med vann, ikke mel. La brødet heve dobbelt to ganger, og åpne ikke ovnen for tidlig." },
      { q: "Hvor lenge skal grovbrød heve?", a: "Med vanlig mengde gjær hever deigen til dobbel størrelse på 45–60 minutter, og de formede brødene etterhever 30–45 minutter. Kald langheving i kjøleskap tar 8–12 timer og gir saftigere, mer smaksrikt brød." },
      { q: "Hvordan lager jeg eltefritt grovbrød?", a: "Rør sammen alt til en våt, klissete deig uten å elte, dekk til og la den heve lenge (gjerne 2–12 timer). Det lange hevet bygger gluten av seg selv. Hell deigen rett i en smurt brødform og stek." },
      { q: "Kan jeg sette grovbrød til kald langheving over natten?", a: "Ja. Bruk mindre gjær (ca. 5 g fersk per brød), rør deigen om kvelden og sett den kaldt i 8–12 timer. Da rekker den å bygge smak sakte, og du baker ferskt brød om morgenen." },
      { q: "Hvorfor skal jeg bløtlegge frø og havregryn?", a: "Tørre frø, kjerner og havregryn stjeler fukt fra deigen og kan gi tørt, kompakt brød. Bløtlegg dem i litt av vannet 15–30 minutter (eller over natten) først, så beholder brødet saftigheten." },
      { q: "Hvor grovt bør grovbrødet være?", a: "En grovhetsgrad på rundt 50 % grovt mel (sammalt hvete, sikta rug, havre) mot 50 % hvetemel gir et saftig brød som fortsatt hever godt. Vil du ha det grovere, øk det grove gradvis – for mye gir et tungt, kompakt brød." },
      { q: "Kan jeg fryse hjemmelaget brød?", a: "Ja. Avkjøl brødet helt, skjær det gjerne opp, og frys i pose eller boks i opptil 3 måneder. Frosne skiver kan ristes direkte, og et helt brød tines på benken eller varmes kort i ovnen." },
      { q: "Hvilken vanntemperatur skal jeg bruke til gjæren?", a: "Fingervarmt vann, rundt 37 grader, til vanlig heving – for varmt vann (over ca. 45 grader) dreper gjæren. Til kald langheving bruker du kaldt vann, siden gjæren skal jobbe sakte i kjøleskapet." },
      { q: "Kan jeg lage glutenfritt grovbrød?", a: "Ja, bytt melet mot en glutenfri brødmiks med bindemiddel. Glutenfritt brød oppfører seg annerledes: deigen blir mer som en tykk røre, hever mindre og trenger lengre stekemtid – følg pakkens væskeforhold." }
    ]
  },

  {
    id: "kyllingkraft", slug: "kyllingkraft.html", status: "live",
    shortName: "Kyllingkraft", name: "Hjemmelaget kyllingkraft",
    tagline: "Gyllen kraft kokt sakte på skrog og bein – grunnmuren i supper, sauser og risotto.",
    description: "Hjemmelaget kyllingkraft kokt på skrog og bein. Velg nivå (enkel/medium/kompleks), juster mengden og tilpass ingrediensene – mengdene følger med.",
    image: null, category: ["suppe"], badge: "3 nivåer",
    recipeCategory: "Tilbehør", cuisine: "Norsk",
    keywords: "kyllingkraft, hjemmelaget kyllingkraft, kraft av kyllingbein, kyllingkraft oppskrift, hønsekraft",
    recipeYield: "2 liter", times: { prep: "PT15M", cook: "PT3H", total: "PT3H15M" },
    search: "kyllingkraft hjemmelaget kraft kyllingbein skrog hønsekraft buljong fond suppe saus risotto",
    faq: [
      { q: "Hvor lenge skal kyllingkraft koke?", a: "La kraften så vidt syde i minst 3–4 timer for full smak og gelatin – gjerne lenger om du har tid. En rask hverdagskraft på ett skrog blir likevel god etter halvannen til to timer. Jo lenger den trekker på svak varme, desto mer smak og kropp får du ut av beina." },
      { q: "Skal jeg ha salt i kyllingkraften?", a: "Helst ikke, eller bare en liten klype. Kraft kokes ofte inn senere, og salter du den nå, blir den fort for salt når du reduserer den i en saus. Lag kraften nesten saltfri, og salt heller den ferdige retten du bruker kraften i. Derfor er saltet her valgfritt og holdt lavt." },
      { q: "Hva er forskjellen på kraft, buljong og fond?", a: "Kraft kokes på bein i flere timer og trekker ut naturlig gelatin – det gir kropp og dybde nesten uten salt. Buljong er som regel et ferdigprodukt (terning eller pulver) og er ofte saltere og enklere. Fond er kraft kokt kraftig inn til en konsentrert, nesten sirupsaktig væske. Hjemmelaget kraft havner et godt stykke over terningen i smak." },
      { q: "Hvorfor blir kyllingkraften min grumsete og uklar?", a: "Nesten alltid fordi den har kokt for hardt. Hard fosskoking pisker fett og partikler inn i væsken, og kraften blir grå og uklar. La den i stedet bare så vidt syde – med små bobler – og skum av skummet og fettet som legger seg på toppen de første minuttene. Da blir kraften gyllen og klar." },
      { q: "Må jeg brune eller steke beina først?", a: "Nei, ikke for en lys, mild kraft – da legger du beina rett i kaldt vann. Vil du ha en mørkere, rikere kraft med mer farge og dybde, steker du skrog og grønnsaker gyllenbrune i ovnen først (slik vårt kompleks-nivå gjør). Begge deler er riktig; det avhenger av hva du skal bruke kraften til." },
      { q: "Kan jeg lage kyllingkraft på skroget etter en grillet eller stekt kylling?", a: "Ja, det er en av de beste måtene å utnytte en hel kylling på. Når kjøttet er spist, legger du skroget og alle beina i gryta og koker kraft på dem. Den stekte kyllingen gir en ekstra dyp, rik kraft helt gratis. Frys gjerne skrog til du har nok til en stor sats." },
      { q: "Kan jeg fryse kyllingkraft?", a: "Ja, kraft fryser utmerket. Avkjøl den, fordel i porsjonsbokser, og frys i 3–6 måneder. Et smart triks er å fryse kraft i isbitform – da kan du slippe en eller to terninger rett i gryta når en saus eller risotto trenger et løft, uten å tine en hel boks." },
      { q: "Hvor lenge holder hjemmelaget kyllingkraft i kjøleskapet?", a: "Sil og avkjøl kraften raskt, og den holder seg 3–4 dager i kjøleskapet. Lar du fettlaget ligge som et lokk på toppen, holder den enda litt lenger – fettet stenger luften ute. Skal du oppbevare den lenger, er frysing det tryggeste." },
      { q: "Hva kan jeg bruke kyllingkraft til?", a: "Kraft er grunnmuren i utrolig mye: kremede supper og kyllingsuppe, alle slags sauser og jus, risotto og paella, gryteretter, og til å koke ris, couscous eller grøt i for ekstra smak. Bytt vannet mot kraft neste gang du koker noe salt, så merker du forskjellen." }
    ]
  },

  {
    id: "pavlova-landslagsfarger", slug: "pavlova-landslagsfarger.html", status: "live",
    shortName: "Pavlova i landslagsfarger", name: "Pavlova i landslagsfarger med pasjonsfrukt",
    tagline: "Sprø pavlova pyntet i rødt, hvitt og blått med syrlig pasjonsfrukt – VM-desserten foran skjermen.",
    description: "Festlig pavlova i landslagsfarger med kremtopp, friske bær og pasjonsfrukt. Velg nivå, juster porsjoner og tilpass ingrediensene – mengdene følger med.",
    image: "pavlova-landslagsfarger.jpg", category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Norsk-brasiliansk",
    keywords: "pavlova oppskrift, pavlova i landslagsfarger, pasjonsfrukt pavlova, VM-dessert, norsk dessert",
    recipeYield: "8 porsjoner", times: { prep: "PT30M", cook: "PT1H30M", total: "PT3H" },
    search: "pavlova landslagsfarger pasjonsfrukt maracuja marengs krem bær VM dessert norge brasil fest",
    faq: [
      { q: "Hvorfor sprekker pavlovaen min?", a: "Litt sprekker hører pavlova til og er helt normalt – det er nettopp slik den skal se ut. Store sprekker og kollaps kommer som regel av at marengsen er overpisket etter at sukkeret er i, eller at ovnen er for varm. Pisk til marengsen er blank og stiv (ikke tørr og kornete), stek på lav varme, og la pavlovaen kjølne sakte i ovnen med døren på gløtt." },
      { q: "Hvordan får jeg sprø marengs på utsiden og seig kjerne?", a: "Tre triks: pisk eggehvitene i en helt ren, tørr og fettfri bolle, tilsett sukkeret litt om gangen til marengsen er blank og stiv, og vend inn en teskje eddik og litt maizena – det gir den klassiske marshmallow-kjernen. Stek lavt og lenge (rundt 120 °C), og la pavlovaen tørke ferdig i avslått ovn med døren på gløtt." },
      { q: "Hvordan pynter jeg pavlova i landslagsfarger til VM?", a: "Tenk rødt, hvitt og blått: røde jordbær og bringebær, snøhvit krem og et dryss melis, og blåbær for det blå. Skje så det gule, syrlige fruktkjøttet fra pasjonsfrukt (maracujá) over på toppen – det er den grønn-gule broen til Brasil. Vil du gjøre det ekstra tydelig, legg bærene i felter eller striper som et flagg." },
      { q: "Hva er pasjonsfrukt (maracujá), og kan jeg bytte den ut?", a: "Maracujá er den brasilianske pasjonsfrukten – rynkete skall, og inni et aromatisk, syrlig-søtt gult fruktkjøtt med spiselige frø. Syren er perfekt motvekt til den søte marengsen. Får du ikke tak i fersk, kan du bruke frossen pasjonsfruktpuré, eller toppe med mango og litt limesaft for en liknende tropisk friskhet." },
      { q: "Kan jeg lage pavlova i forveien?", a: "Ja, og det er smart når du skal samle gjengen foran kampen. Stek marengsbunnen dagen før og oppbevar den helt tørt og lufttett i romtemperatur – aldri i kjøleskap, der trekker den fukt og blir seig. Pisk kremen og pynt med bær og pasjonsfrukt først helt rett før servering, ellers mykner bunnen." },
      { q: "Kan jeg lage pavlova melkefri?", a: "Ja. Selve marengsbunnen er naturlig melkefri – det er bare kremtoppen som inneholder melk. Bytt kremfløten mot en pisket plantefløte (kokos- eller havrebasert), så blir hele desserten melkefri. Velg en plantefløte merket for pisking, og pisk den godt kald." },
      { q: "Hvor lenge holder en ferdig pyntet pavlova?", a: "En pyntet pavlova bør spises samme dag – helst innen et par timer – for da er bunnen fortsatt sprø og kremen fast. Etter hvert trekker fukt fra krem og frukt inn i marengsen og gjør den seig. Rester kan stå kaldt til neste dag; de smaker fortsatt godt, men teksturen blir mykere." },
      { q: "Kan jeg bruke frosne bær?", a: "Til pynt er friske bær best, fordi frosne bær slipper mye væske når de tiner og farger kremen. Vil du likevel bruke frosne, la dem tine på litt kjøkkenpapir og legg dem på helt rett før servering. Frosne bær egner seg bedre til en bærsaus du skjer ved siden av enn som topping." }
    ]
  },

  {
    id: "brigadeiro", slug: "brigadeiro.html", status: "live",
    shortName: "Brigadeiro med brunost", name: "Brigadeiro med brunost – brasilianske sjokoladekuler",
    tagline: "Brasils klissete sjokoladekuler møter norsk brunost – det søteste landslaget på fatet, perfekt VM-godteri.",
    description: "Brigadeiro – brasilianske sjokoladekuler kokt på kondensert melk og kakao, med en norsk brunost-vri. Velg nivå, juster antall kuler og tilpass ingrediensene.",
    image: "brigadeiro.jpg", category: ["dessert"], badge: "3 nivåer",
    recipeCategory: "Dessert", cuisine: "Norsk-brasiliansk",
    keywords: "brigadeiro oppskrift, brasilianske sjokoladekuler, brunost dessert, VM-godteri, sjokoladekuler",
    recipeYield: "ca. 20 kuler", times: { prep: "PT20M", cook: "PT10M", total: "PT2H30M" },
    search: "brigadeiro brunost brasilianske sjokoladekuler kondensert melk kakao VM godteri norge brasil sjokoladetrøffel",
    faq: [
      { q: "Hvor lenge skal brigadeiro-massen koke?", a: "Regn 8–10 minutter på svak til middels varme under stadig omrøring. Massen er ferdig når den er tykk og slipper bunnen – det vil si at du så vidt ser bunnen av kjelen når du drar slikkepotten over. Koker du for kort, blir kulene for løse til å trille; koker du for lenge, blir de harde og seige." },
      { q: "Hva er forskjellen på søtet kondensert melk og vikingmelk?", a: "Dette er den vanligste fellen. Søtet kondensert melk (på boks) er tilsatt sukker, og er søtere, brunere og mye tykkere – det er denne du skal ha i brigadeiro. Vikingmelk (evaporated milk) er usøtet og tynnere, og gir ikke samme søte, seige masse. Sjekk at det står «søtet/sweetened» på boksen." },
      { q: "Hvorfor brunost i brigadeiro?", a: "Brunost gir den klissete sjokolademassen en karamellaktig, lett salt dybde som passer overraskende godt til den søte kakaoen – nesten som en norsk dulce de leche. Det er den lekne broen mellom Brasil og Norge i denne VM-utgaven. Riv brunosten fint så den smelter jevnt inn i massen mens den koker." },
      { q: "Hvordan triller jeg kulene uten at alt klisser seg fast?", a: "To ting: la massen bli helt kald først (gjerne i kjøleskap et par timer eller over natten), og smør hendene med litt smør eller nøytral olje før du triller. Ta små klatter med en teskje, trill raskt til kuler, og rull dem i pynt med en gang. Klisser det likevel, fukt eller smør hendene på nytt underveis." },
      { q: "Kan jeg lage brigadeiro melkefri?", a: "Ja. Bytt den søtede kondenserte melken mot en kokosbasert variant (finnes melkefri på boks) og smøret mot margarin. Da må du droppe brunosten, som ikke finnes melkefri – men du sitter igjen med en klassisk, melkefri sjokoladekule. I oppskriften ligger byttene klare, og mengdene justeres automatisk." },
      { q: "Hvordan pynter jeg brigadeiro i landslagsfarger til VM?", a: "Rull kulene i forskjellig pynt og lag et «landslag» på fatet: rødt og hvitt strøssel, blå dragé- eller sukkerperler, og kokos for det hvite. Vil du lage en ekte landskamp, kan du rulle halvparten i klassisk mørkt sjokoladestrøssel (Brasil) og halvparten i rødt, hvitt og blått (Norge). Sett dem i små papirformer så de er lette å dele ut foran skjermen." },
      { q: "Hvor lenge holder brigadeiro, og hvordan oppbevarer jeg dem?", a: "Ferdige brigadeiro holder seg 4–5 dager i en tett boks i kjøleskapet. Ta dem gjerne ut en liten stund før servering, så de mykner litt og blir mest mulig kremete. Skal du lage dem i forveien, kan du koke massen og oppbevare den kaldt, og så trille og pynte kulene samme dag som de skal serveres." },
      { q: "Kan jeg fryse brigadeiro?", a: "Ja. Legg de ferdige kulene i en tett boks med bakepapir mellom lagene, og frys i opptil 3 måneder. Tin dem i kjøleskapet før servering. Konsistensen blir aller best på ferske kuler, men frysing fungerer fint når du vil forberede en stor sats til kampkvelden." }
    ]
  },

  {
    id: "pao-de-queijo", slug: "pao-de-queijo.html", status: "live",
    shortName: "Pão de queijo", name: "Pão de queijo med Norvegia – brasiliansk ostebrød",
    tagline: "Seige, luftige brasilianske ostebrød bakt med norsk Norvegia – naturlig glutenfri VM-snacks rett fra ovnen.",
    description: "Pão de queijo – brasiliansk, glutenfritt ostebrød på tapiokamel, bakt med norsk Norvegia. Velg nivå, juster antall boller og tilpass ingrediensene.",
    image: "pao-de-queijo.jpg", category: ["baking"], badge: "3 nivåer",
    recipeCategory: "Baking", cuisine: "Norsk-brasiliansk",
    keywords: "pao de queijo oppskrift, brasiliansk ostebrød, glutenfri ostebrød, ostebrød oppskrift, VM-snacks",
    recipeYield: "ca. 16 boller", times: { prep: "PT20M", cook: "PT25M", total: "PT45M" },
    search: "pao de queijo brasiliansk ostebrød glutenfri tapiokamel norvegia ost VM snacks norge brasil osteboller",
    faq: [
      { q: "Er pão de queijo glutenfri?", a: "Ja, helt naturlig. Ostebrødene bakes på tapiokamel – stivelse fra maniokroten (cassava) – og inneholder verken hvete eller annet glutenkorn. Så lenge osten og resten av ingrediensene er glutenfrie (det er de fleste rene oster), er pão de queijo trygt ved cøliaki. Det er nettopp derfor de har blitt så populære som glutenfri snacks." },
      { q: "Hva er tapiokamel, og hvor får jeg tak i det?", a: "Tapiokamel (også kalt tapiokastivelse eller cassava-/maniokmel) er en fin, hvit stivelse utvunnet fra maniokroten. Det er det som gir pão de queijo den karakteristiske seige, litt elastiske konsistensen, og kan ikke byttes 1:1 med potetmel eller maizena. Du finner det i велassorterte dagligvarebutikker, i asiatiske og latinamerikanske matbutikker, og på nett." },
      { q: "Hvilken ost passer best i pão de queijo?", a: "I Brasil brukes en fersk, lett syrlig ost (queijo minas), men en god, fast norsk gulost som Norvegia fungerer utmerket og gir den norske vrien. Vil du ha kraftigere smak, kan du blande inn litt lagret ost eller revet parmesan. Riv osten selv for best smelting – ferdigrevet ost har ofte antiklumpemiddel som gjør røren litt grynete." },
      { q: "Hvorfor blir ostebrødene mine flate eller harde?", a: "Som regel handler det om forholdet væske/mel eller for hard steking. Røren skal være tykk og litt klissete, ikke rennende – spe med tapiokamel om den er for løs. Bak på god varme (200 °C) til de er pufne og gylne, og server dem helst rykende ferske; de er på sitt beste rett fra ovnen og blir seigere når de kjølner." },
      { q: "Hvordan får jeg dem seige og luftige inni?", a: "Den seige, luftige kjernen kommer av tapiokamelet og av eggene som gir struktur. Bruker du skåldemetoden – der du heller kokende melk og olje over melet før du tilsetter egg og ost – får du den mest autentiske, seige konsistensen. Ikke overbak dem; de skal være gylne utenpå og fortsatt myke og seige inni." },
      { q: "Kan jeg lage pão de queijo melkefri?", a: "Delvis. Bytt melken mot plantedrikk og smør/olje er allerede melkefritt, men osten er kjernen i retten. Bruker du en fast, smeltende vegansk ost i stedet for Norvegia, kan du lage en melkefri variant – smaken blir litt annerledes, men konsistensen holder. I oppskriften ligger byttene klare." },
      { q: "Kan jeg fryse pão de queijo og bake fra frossen?", a: "Ja, og det er den store fordelen med dem. Trill rå deigkuler, frys dem på et brett, og legg dem så i pose. Du kan bake dem rett fra frossen – legg på et par minutter ekstra steketid – og ha alltid ferske, varme ostebrød klare. Da kan du bake nykker etter behov gjennom hele kampen." },
      { q: "Hvordan serverer jeg pão de queijo til VM?", a: "Server dem rykende varme i en kurv eller skål så hele gjengen kan forsyne seg under kampen – de forsvinner fort. De er gode som de er, men passer også med en dipp eller litt smør. Vil du ha full Norge–Brasil-stemning, skyll dem ned med en kald brasiliansk guaraná-brus eller en norsk pils, og sett ut noe i rødt, hvitt og blått ved siden av." }
    ]
  },

  /* ── Kommer snart ── */
  {
    id: "bouillabaisse", slug: "bouillabaisse.html", status: "soon",
    shortName: "Bouillabaisse", name: "Bouillabaisse",
    tagline: "Fransk fiskegryte med safran, servert med rouille.",
    image: null, category: ["suppe"], recipeCategory: "Suppe",
    search: "bouillabaisse fransk fiskegryte"
  },
  {
    id: "persisk-safranris", slug: "persisk-safranris.html", status: "soon",
    shortName: "Persisk safranris", name: "Persisk safranris og safrankylling",
    tagline: "Safranris og safrankylling – vakkert og gavegivende.",
    image: null, category: ["middag"], recipeCategory: "Hovedrett",
    search: "persisk safranris safrankylling kylling"
  }
];

/* Hjelpere – brukes av site.js og recipe-schema.js (delt global scope). */
window.RecipesIndex = {
  all: function () { return window.RECIPES_INDEX; },
  byId: function (id) {
    var list = window.RECIPES_INDEX || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i];
    return null;
  },
  byCategory: function (slug) {
    return (window.RECIPES_INDEX || []).filter(function (r) {
      return (r.category || []).indexOf(slug) !== -1;
    });
  },
  categoryBySlug: function (slug) {
    var cats = window.RECIPE_CATEGORIES || [];
    for (var i = 0; i < cats.length; i++) if (cats[i].slug === slug) return cats[i];
    return null;
  }
};

/* Gjør manifestet tilgjengelig for Node-tester (ingen effekt i nettleser). */
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    RECIPES_INDEX: window.RECIPES_INDEX,
    RECIPE_CATEGORIES: window.RECIPE_CATEGORIES,
    RecipesIndex: window.RecipesIndex
  };
}
