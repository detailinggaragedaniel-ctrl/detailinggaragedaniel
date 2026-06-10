import { Shield, Award, Heart, Target, ArrowRight, Check } from 'lucide-react';

const CTA_BG = 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920';
const BRAND_IMG = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  { icon: Shield, title: 'Qualità Certificata',      desc: 'Utilizziamo materiali certificati e prodotti selezionati per garantire risultati duraturi e conformi alle normative.' },
  { icon: Award,  title: 'Esperienza Professionale', desc: 'Dal 2015 nel settore automotive, con interventi su veicoli di ogni tipo.' },
  { icon: Heart,  title: 'Passione per i Dettagli',  desc: 'Ogni auto riceve la nostra massima attenzione, dalla preparazione alla finitura finale.' },
  { icon: Target, title: 'Risultati Garantiti',      desc: 'La tua soddisfazione è la nostra priorità. Ogni intervento viene controllato prima della consegna.' },
];

const standards = [
  'Materiali professionali di prima qualità',
  'Ambiente di lavoro controllato e pulito',
  "Strumenti e tecniche all'avanguardia",
  'Attenzione maniacale ai dettagli',
  'Trasparenza su tempi e costi',
  'Assistenza post-intervento',
];

const distinctions = [
  { title: 'Consulenza Personalizzata', desc: 'Ti guidiamo nella scelta dei materiali e delle soluzioni più adatte alle tue esigenze.' },
  { title: 'Preventivi Trasparenti',    desc: 'Nessun costo nascosto. Saprai esattamente cosa aspettarti prima di iniziare.' },
  { title: 'Garanzia sui Lavori',       desc: 'Ogni intervento è garantito. La tua soddisfazione è la nostra priorità.' },
];

export default function About() {
  return (
    <div className="min-h-screen text-white bg-[#000000]" style={{ paddingTop: '88px' }}>

      {/* Hero */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
            Chi Siamo
          </h1>
          <p className="text-white/50 font-sans text-base max-w-xl leading-relaxed">
            Dal 2015 a San Pietro Mosezzo, portiamo precisione, cura e professionalità nel settore del detailing automotive.
          </p>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Mission + brand image */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">

            {/* Mission text */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-8">
                La Nostra Missione
              </h2>
              <div className="space-y-5">
                <p className="text-white/60 font-sans text-base leading-relaxed">
                  Detailing Garage Daniel nasce dalla passione per l'auto e dall'attenzione ai dettagli. Ogni veicolo viene trattato come un progetto unico: ascoltiamo l'esigenza del cliente, valutiamo materiali e soluzioni, poi lavoriamo con precisione per ottenere un risultato pulito, coerente e duraturo.
                </p>
                <p className="text-white/60 font-sans text-base leading-relaxed">
                  Siamo specializzati in oscuramento vetri, wrapping, rivestimenti interni e cura estetica del veicolo. Utilizziamo materiali selezionati e tecniche professionali per garantire qualità e affidabilità.
                </p>
                <p className="text-white/40 font-sans text-base leading-relaxed italic border-l-2 border-accent/35 pl-5">
                  Il nostro obiettivo è semplice: valorizzare l'auto senza snaturarla.
                </p>
              </div>
            </div>

            {/* Brand / workshop image area */}
            <div className="lg:col-span-6">
              <div className="relative overflow-hidden h-full" style={{ minHeight: '420px' }}>
                <img
                  src='/images/daniel/all/daniel-173.webp'
                  alt="Detailing Garage Daniel"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#000]/30 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="font-sans text-xs tracking-[0.18em] uppercase text-white/40">Dal 2015</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Values */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.05] tracking-[-0.02em] mb-3">
              I Nostri Valori
            </h2>
            <p className="text-white/40 font-sans text-sm max-w-md leading-relaxed">
              I principi che guidano il nostro lavoro quotidiano.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-accent/8">
            {values.map((v, idx) => (
              <div key={idx} className="bg-[#0b0c0e] px-8 py-8 group hover:bg-[#0f1012] transition-colors duration-200">
                <div className="flex items-start gap-5">
                  <div className="w-8 h-8 border border-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-accent/45 transition-colors duration-200">
                    <v.icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-normal text-white text-xl mb-2 leading-snug">{v.title}</h3>
                    <p className="text-white/50 font-sans text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Standards + Distinctions */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-4">
                I Nostri Standard di Qualità
              </h2>
              <p className="text-white/40 font-sans text-sm leading-relaxed mb-8">
                Ogni intervento segue protocolli rigorosi per garantire massima qualità, ordine e precisione.
              </p>
              <ul className="border border-accent/15">
                {standards.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-4 px-6 py-4 border-b border-accent/10 last:border-b-0">
                    <Check className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                    <span className="text-white/60 font-sans text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-8">
                Cosa ci distingue
              </h2>
              <div className="border border-accent/15">
                {distinctions.map((d, idx) => (
                  <div key={idx} className="px-6 py-7 border-b border-accent/10 last:border-b-0">
                    <div className="flex items-start gap-4">
                      <div className="w-5 h-px bg-accent mt-3 flex-shrink-0" />
                      <div>
                        <h3 className="font-heading font-normal text-white text-lg mb-2">{d.title}</h3>
                        <p className="text-white/50 font-sans text-sm leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Final CTA */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <img src="/images/daniel/all/daniel-082.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/96 via-[#000000]/70 to-[#000000]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[480px] px-10 lg:px-20 py-20">
            <div className="max-w-[560px]">
              <h2 className="text-4xl md:text-6xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-5">
                Inizia il tuo progetto oggi
              </h2>
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10">
                Scopri come possiamo valorizzare la tua auto con una consulenza personalizzata.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20maggiori%20informazioni%20sui%20vostri%20servizi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Richiedi consulenza gratuita
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
