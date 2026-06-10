import { Check, ChevronDown, ArrowRight, Building2, Anchor, Car } from 'lucide-react';
import { useState } from 'react';

const CTA_BG = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920';

// ─────────────────────────────────────────────────────────────────────────────
// SERVICES DATA — order here controls the page order
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: 'vetri',
    title: 'Oscuramento Vetri Auto',
    pricing: 'PREVENTIVO SU FOTO',
    description: 'Pellicole omologate per migliorare privacy, comfort e protezione UV, con una posa precisa e pulita.',
    features: [
      'Pellicole omologate secondo normativa italiana',
      'Protezione UV fino al 99%',
      'Riduzione del calore interno',
      'Maggiore privacy e sicurezza',
      'Installazione professionale senza bolle',
      'Garanzia su materiali e manodopera',
    ],
    image: '/images/daniel/all/daniel-180.webp',
    faqs: [
      { q: 'Le pellicole sono omologate?', a: 'Sì, utilizziamo soluzioni certificate e ti indichiamo sempre cosa è consentito per il tuo veicolo.' },
      { q: "Quanto dura l'applicazione?", a: "Dipende dal modello dell'auto. In molti casi il lavoro viene completato in giornata." },
      { q: 'Quanto durano le pellicole?', a: 'Utilizziamo prodotti professionali pensati per durare nel tempo, con la giusta manutenzione.' },
    ],
  },
  {
    id: 'wrapping',
    title: 'Wrapping Auto',
    pricing: 'PREVENTIVO SU MISURA',
    description: 'Cambio colore completo o parziale con finiture esclusive, protezione della carrozzeria e risultato su misura.',
    features: [
      'Wrapping completo o parziale',
      'Ampia gamma di colori e finiture',
      'Protezione della vernice originale',
      'Rimozione senza danni alla carrozzeria',
      'Resistenza a graffi e agenti atmosferici',
      'Garanzia su materiali premium',
    ],
    image: '/images/daniel/all/daniel-178.webp',
    faqs: [
      { q: 'Il wrapping rovina la vernice?', a: 'No, se applicato e rimosso correttamente con materiali professionali. Può anche proteggere la vernice originale.' },
      { q: 'Quanto tempo serve per un wrapping completo?', a: 'Dipende dal veicolo e dalla complessità del lavoro. Definiamo tempi e materiali nel preventivo.' },
      { q: 'Posso scegliere qualsiasi colore?', a: 'Sì, valutiamo finiture opache, lucide, satinate, metallizzate e soluzioni speciali.' },
    ],
  },
  {
    id: 'protezione',
    title: 'Protezione PPF',
    pricing: 'PREVENTIVO SU MISURA',
    description: 'Pellicole protettive trasparenti per preservare vernice, paraurti, cofano, fari e zone più esposte da graffi, pietrisco e usura quotidiana.',
    features: [
      'Protezione paraurti, cofano, fari e zone sensibili',
      'Pellicola trasparente ad alta resistenza',
      'Taglio preciso e applicazione professionale',
      'Finitura pulita e invisibile',
      'Soluzione ideale per auto nuove, sportive e premium',
    ],
    image: '/images/daniel/all/daniel-177.webp',
    faqs: [
      { q: 'La pellicola PPF si vede?', a: 'No, è praticamente invisibile. La finitura è pulita e il risultato è indistinguibile dalla carrozzeria nuda.' },
      { q: 'Quanto dura la protezione PPF?', a: 'Con la giusta manutenzione dura diversi anni. Garantiamo copertura duratura contro graffi e pietrisco.' },
      { q: 'Si applica solo sulla parte frontale?', a: 'No, possiamo proteggere qualsiasi zona: cofano, paraurti, specchietti, fari, soglie e carrozzeria completa.' },
    ],
  },
  {
    id: 'lucidatura',
    title: 'Lucidatura Auto',
    pricing: 'PREVENTIVO SU MISURA',
    description: 'Correzione della vernice, rimozione micrograffi, aloni e ossidazione per restituire profondità, gloss e presenza estetica al veicolo.',
    features: [
      'Decontaminazione della carrozzeria',
      'Correzione difetti e micrograffi',
      'Lucidatura professionale multi-step',
      'Finitura gloss profonda',
      'Possibile protezione finale con cera, sigillante o trattamento dedicato',
    ],
    image: '/images/daniel/all/daniel-179.webp',
    faqs: [
      { q: 'La lucidatura rimuove tutti i graffi?', a: "Dipende dalla profondità. I micrograffi superficiali vengono rimossi; quelli profondi richiedono una valutazione specifica." },
      { q: 'Quanto dura una lucidatura professionale?', a: "Con la protezione finale applicata, gli effetti durano a lungo. Ti consigliamo la soluzione più adatta al tuo veicolo." },
      { q: 'È necessario dopo il wrapping o PPF?', a: 'In certi casi sì, per preparare la superficie prima dell\'applicazione e garantire adesione e risultato ottimali.' },
    ],
  },
  {
    id: 'interni',
    title: 'Rivestimenti Interni',
    pricing: 'PREVENTIVO PERSONALIZZATO',
    description: 'Interni su misura per rendere l\'abitacolo più pulito, personale e raffinato: cielo, sedili, dettagli e finiture interne.',
    features: [
      'Rivestimento cielo auto',
      'Sedili e dettagli interni',
      'Pannelli porta e finiture',
      'Lavorazione su misura',
      'Finitura pulita e coerente con lo stile dell\'auto',
    ],
    image: '/images/daniel/all/daniel-095.webp',
    faqs: [
      { q: 'Quali materiali posso scegliere?', a: "Valutiamo tessuti, alcantara, pelle sintetica e materiali premium in base allo stile dell'auto." },
      { q: 'Quanto dura il rivestimento del cielo?', a: "Lavoriamo con prodotti pensati per resistere nel tempo." },
      { q: 'Posso personalizzare i colori?', a: "Sì, possiamo studiare una combinazione coerente con l'auto e con il tuo gusto." },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ADDITIONAL SERVICES — text cards only, no large photos
// ─────────────────────────────────────────────────────────────────────────────

const ADDITIONAL = [
  { name: 'Trattamento Ceramico',                       desc: 'Protezione a lunga durata con ceramic coating professionale.' },
  { name: 'Sanificazione Interni',                      desc: "Pulizia profonda e igienizzazione completa dell'abitacolo." },
  { name: 'Plastiche Esterne',                          desc: 'Ripristino e protezione plastiche, gomme e guarnizioni.' },
  { name: 'Sistemi Multimediali Auto',                   desc: 'Upgrade di display, autoradio e impianti audio con soluzioni moderne e integrate.' },
  { name: 'Lavaggio Interno / Esterno',                 desc: 'Lavaggio completo con cura dei dettagli interni ed esterni.' },
  { name: 'Tappezzeria Auto',                           desc: 'Rifacimento o riparazione sedili, pannelli e rivestimenti su misura.' },
  { name: 'Pellicole per Uffici e Vetrate Commerciali', desc: 'Pellicole oscuranti, decorative e privacy per vetrate e superfici commerciali.' },
  { name: 'Yacht e Imbarcazioni',                       desc: 'Detailing, wrapping e protezioni per yacht e imbarcazioni, con finiture curate e materiali adatti all\'ambiente nautico.' },
];

// Mobile-only reordering: "Lavaggio Interno / Esterno" (index 4) moves to first
const ADDITIONAL_MOBILE = [
  ADDITIONAL[4],
  ADDITIONAL[0],
  ADDITIONAL[1],
  ADDITIONAL[2],
  ADDITIONAL[3],
  ADDITIONAL[5],
  ADDITIONAL[6],
  ADDITIONAL[7],
];

// ─────────────────────────────────────────────────────────────────────────────

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-accent/10 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-sans text-sm font-medium text-white/75 pr-8 leading-snug">{q}</span>
        <ChevronDown
          className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="pb-4 text-sm text-white/45 leading-relaxed font-sans">{a}</p>}
    </div>
  );
}

// Checkerboard pattern:
// Row 1: teal, dark, teal, dark
// Row 2: dark, teal, dark, teal
const CHECKERBOARD_TEAL = [0, 2, 5, 7];

function AdditionalGrid() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Desktop: 4×2 checkerboard, always visible */}
      <div className="hidden lg:grid lg:grid-cols-4">
        {ADDITIONAL.map((s, i) => {
          const isTeal = CHECKERBOARD_TEAL.includes(i);
          return (
            <div
              key={s.name}
              className={`relative px-8 py-10 group transition-colors duration-200 ${
                isTeal
                  ? 'bg-[#0a2f34] border border-[#0a7c8c]/30 hover:bg-[#0c3840]'
                  : 'bg-[#080a0b] border border-white/[0.04] hover:bg-[#0d1012]'
              }`}
            >
              {isTeal ? (
                <div className="w-6 h-px bg-[#0a7c8c] mb-6" />
              ) : (
                <div className="w-6 h-px bg-[#0a7c8c]/40 mb-6" />
              )}
              <h3
                className={`font-heading font-normal text-lg mb-3 leading-snug ${
                  isTeal ? 'text-white' : 'text-white/85'
                }`}
              >
                {s.name}
              </h3>
              <p
                className={`font-sans text-sm leading-relaxed ${
                  isTeal ? 'text-white/55' : 'text-white/30'
                }`}
              >
                {s.desc}
              </p>
              {isTeal && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#0a7c8c]/20" />
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: show first 4 always, last 4 toggled */}
      <div className="lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {ADDITIONAL_MOBILE.slice(0, 4).map((s, i) => {
            const isTeal = i % 2 === 0;
            return (
              <div
                key={s.name}
                className={`px-7 py-8 border ${
                  isTeal
                    ? 'bg-[#0a2f34] border-[#0a7c8c]/30'
                    : 'bg-[#080a0b] border-white/[0.04]'
                }`}
              >
                <div className={`w-5 h-px mb-5 ${isTeal ? 'bg-[#0a7c8c]' : 'bg-[#0a7c8c]/40'}`} />
                <h3 className={`font-heading font-normal text-base mb-2 leading-snug ${isTeal ? 'text-white' : 'text-white/85'}`}>
                  {s.name}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${isTeal ? 'text-white/55' : 'text-white/30'}`}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {ADDITIONAL_MOBILE.slice(4).map((s, i) => {
            const isTeal = i % 2 !== 0;
            return (
              <div
                key={s.name}
                className={`px-7 py-8 border ${
                  isTeal
                    ? 'bg-[#0a2f34] border-[#0a7c8c]/30'
                    : 'bg-[#080a0b] border-white/[0.04]'
                }`}
              >
                <div className={`w-5 h-px mb-5 ${isTeal ? 'bg-[#0a7c8c]' : 'bg-[#0a7c8c]/40'}`} />
                <h3 className={`font-heading font-normal text-base mb-2 leading-snug ${isTeal ? 'text-white' : 'text-white/85'}`}>
                  {s.name}
                </h3>
                <p className={`font-sans text-sm leading-relaxed ${isTeal ? 'text-white/55' : 'text-white/30'}`}>
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 border border-[#0a7c8c]/35 text-[#0a7c8c] font-sans text-xs tracking-[0.18em] uppercase hover:bg-[#0a7c8c]/10 transition-colors duration-200"
        >
          {expanded ? 'Mostra meno' : 'Mostra altri servizi'}
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
    </>
  );
}

export default function Services() {
  return (
    <div className="min-h-screen text-white bg-[#000000]" style={{ paddingTop: '88px' }}>

      {/* Page header */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
            Servizi Premium<br />per la Tua Auto
          </h1>
          <p className="text-white/50 font-sans text-base max-w-xl leading-relaxed">
            Soluzioni professionali per oscuramento vetri, wrapping, protezione PPF, lucidatura e rivestimenti interni.
          </p>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Main services — alternating zig-zag */}
      {SERVICES.map((service, idx) => {
        const imageLeft = idx % 2 === 0;
        return (
          <div key={service.id}>
            <section>
              <div className="max-w-[1400px] mx-auto">

                <div className="grid lg:grid-cols-2 min-h-[540px]">
                  <div
                    className={`relative overflow-hidden ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
                    style={{ minHeight: '400px' }}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 ${imageLeft ? 'bg-gradient-to-r from-transparent to-[#000]/55' : 'bg-gradient-to-l from-transparent to-[#000]/55'}`} />
                    <div className="absolute top-6 left-6">
                      <span className="font-sans text-xs tracking-[0.2em] text-white/25 uppercase">
                        0{idx + 1} / 0{SERVICES.length}
                      </span>
                    </div>
                  </div>

                  <div className={`flex flex-col justify-center px-10 py-14 lg:px-14 bg-[#0b0c0e] ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="text-accent font-sans text-xs tracking-[0.18em] uppercase mb-4">{service.pricing}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-5">
                      {service.title}
                    </h2>
                    <p className="text-white/50 font-sans text-sm leading-relaxed mb-8 max-w-sm">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/25 mb-4 flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-accent" />
                        Cosa include
                      </p>
                      <ul className="space-y-2.5">
                        {service.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-px h-4 bg-accent/40 mt-1 flex-shrink-0 inline-block" />
                            <span className="text-white/55 font-sans text-sm leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={`https://wa.me/393893451489?text=Ciao!%20Vorrei%20un%20preventivo%20per%20${encodeURIComponent(service.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 self-start px-7 py-3 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
                    >
                      Richiedi preventivo
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* FAQ — seamless, no dividing border */}
                <div className="px-6 lg:px-16 py-10 bg-[#060708]">
                  <p className="font-sans text-xs tracking-[0.18em] uppercase text-white/20 mb-5">
                    Domande frequenti — {service.title}
                  </p>
                  <div className="max-w-2xl">
                    {service.faqs.map((faq, i) => (
                      <FaqItem key={i} q={faq.q} a={faq.a} />
                    ))}
                  </div>
                </div>

              </div>
            </section>
            <div className="divider-teal" />
          </div>
        );
      })}

      {/* Altri Servizi */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.05] tracking-[-0.02em] mb-3">
              Altri Servizi
            </h2>
            <p className="text-white/30 font-sans text-sm max-w-md leading-relaxed">
              Trattamenti complementari e specializzazioni per una cura completa del veicolo.
            </p>
          </div>

          <AdditionalGrid />

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20un%20preventivo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-sans text-xs tracking-widest uppercase hover:text-white transition-colors duration-200"
            >
              Richiedi preventivo su WhatsApp <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Business / extra clients callout */}
      <section className="py-20 px-6 lg:px-16 bg-[#060708]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-accent font-sans text-xs tracking-[0.2em] uppercase mb-5">SOLUZIONI SU MISURA</p>
              <h2 className="text-3xl md:text-5xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
                Soluzioni anche per aziende, uffici, yacht e concessionarie
              </h2>
              <p className="text-white/45 font-sans text-sm leading-relaxed max-w-lg mb-10">
                Oltre alle auto private, realizziamo interventi per uffici, vetrate commerciali, yacht, imbarcazioni e concessionarie. Pellicole oscuranti, wrapping, protezioni, detailing e finiture su misura per chi vuole un risultato pulito, professionale e coerente con la propria immagine.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20informazioni%20per%20un%20progetto%20speciale"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Parlaci del tuo progetto
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-col gap-px bg-accent/8">
              {[
                {
                  Icon: Building2,
                  label: 'Uffici e vetrate commerciali',
                  desc: 'Pellicole oscuranti, decorative e privacy per vetrate di uffici, showroom e attività commerciali.',
                },
                {
                  Icon: Anchor,
                  label: 'Yacht e imbarcazioni',
                  desc: 'Detailing professionale, wrapping e protezioni per scafi, superfici e interni nautici.',
                },
                {
                  Icon: Car,
                  label: 'Concessionarie e attività automotive',
                  desc: 'Servizi dedicati per concessionarie, officine e parchi auto: volumi, tempi e qualità garantita.',
                },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="bg-[#0b0c0e] px-8 py-8 flex items-start gap-5 group hover:bg-[#0f1012] transition-colors duration-200">
                  <div className="flex-shrink-0 w-9 h-9 border border-accent/25 flex items-center justify-center mt-0.5">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-normal text-white text-base mb-2 leading-snug">{label}</h3>
                    <p className="font-sans text-sm text-white/35 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Final CTA */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <img src="/images/daniel/all/daniel-182.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/96 via-[#000000]/70 to-[#000000]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[480px] px-10 lg:px-20 py-20">
            <div className="max-w-[560px]">
              <h2 className="text-4xl md:text-6xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-5">
                Pronto a trasformare la tua auto?
              </h2>
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10">
                Inviaci le foto e ti proponiamo la soluzione più adatta al tuo veicolo.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20un%20preventivo%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Richiedi preventivo gratuito
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
