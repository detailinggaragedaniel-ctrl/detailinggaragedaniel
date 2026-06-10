import { useState } from 'react';
import { ArrowRight, CheckCircle, Check } from 'lucide-react';

const CTA_BG = 'https://images.pexels.com/photos/3972755/pexels-photo-3972755.jpeg?auto=compress&cs=tinysrgb&w=1920';

const pricingGuide = [
  {
    service: 'Oscuramento Vetri',
    items: [
      { desc: 'Vetri posteriori + lunotto' },
      { desc: 'Vetri laterali completi' },
      { desc: 'Auto completa' },
    ],
  },
  {
    service: 'Wrapping',
    items: [
      { desc: 'Wrapping parziale (tetto, specchietti)' },
      { desc: 'Wrapping completo auto media' },
      { desc: 'Wrapping completo auto grande / SUV' },
    ],
  },
  {
    service: 'Rivestimenti Interni',
    items: [
      { desc: 'Cielo auto' },
      { desc: 'Sedili anteriori (coppia)' },
      { desc: 'Pannelli porte' },
    ],
  },
];

const services = [
  'Oscuramento Vetri',
  'Wrapping Completo',
  'Wrapping Parziale',
  'Rivestimento Cielo',
  'Rivestimento Sedili',
  'Pannelli Porte',
  'Lucidatura',
  'Altro (specificare nel messaggio)',
];

const cosaInclude = [
  'Valutazione dettagliata del lavoro richiesto',
  'Stima precisa dei tempi di esecuzione',
  'Dettaglio dei materiali utilizzati',
  'Prezzo finale trasparente senza sorprese',
  'Consulenza sui materiali e le opzioni disponibili',
  'Garanzia sui materiali e sulla manodopera',
];

// Input style — floats inside the solid teal panel
const inputBase =
  'w-full bg-transparent border-0 border-b border-white/25 px-0 py-3 text-white text-sm font-sans placeholder:text-white/35 focus:border-white/70 focus:outline-none transition-colors duration-150';

export default function Pricing() {
  const [formData, setFormData] = useState({
    nome: '',
    telefono: '',
    modello: '',
    servizio: '',
    messaggio: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Ciao! Richiesta preventivo:%0A%0ANome: ${formData.nome}%0ATelefono: ${formData.telefono}%0AModello auto: ${formData.modello}%0AServizio: ${formData.servizio}%0AMessaggio: ${formData.messaggio || 'Nessun messaggio aggiuntivo'}`;
    window.open(`https://wa.me/393893451489?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nome: '', telefono: '', modello: '', servizio: '', messaggio: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen text-white bg-[#000000]" style={{ paddingTop: '88px' }}>

      {/* Hero */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
            Richiedi un Preventivo
          </h1>
          <p className="text-white/50 font-sans text-base max-w-xl leading-relaxed mb-3">
            Ogni auto è diversa. Inviaci le foto e ricevi una valutazione chiara entro 24 ore.
          </p>
          <p className="text-white/25 font-sans text-sm tracking-wide">
            Nessun impegno. Tempi chiari. Materiali spiegati prima di iniziare.
          </p>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Guida prezzi */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.05] tracking-[-0.02em] mb-4">
              Guida Prezzi Indicativa
            </h2>
            <p className="text-white/40 font-sans text-sm max-w-lg leading-relaxed">
              I prezzi variano in base al modello dell'auto, alle condizioni e alle specifiche richieste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-accent/8">
            {pricingGuide.map((cat, idx) => (
              <div key={idx} className="bg-[#0b0c0e] px-7 py-8">
                <div className="w-5 h-px bg-accent mb-5" />
                <h3 className="font-heading font-normal text-white text-xl mb-6 leading-snug">{cat.service}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-px h-4 bg-accent/40 mt-1 flex-shrink-0 inline-block" />
                      <div className="flex-1">
                        <span className="text-white/60 font-sans text-sm leading-snug block">{item.desc}</span>
                        <span className="text-white/25 font-sans text-xs mt-0.5 block">Da preventivo su foto</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-accent/30 pl-5 py-1">
            <p className="text-white/35 font-sans text-sm leading-relaxed">
              <span className="text-white/55 font-medium">Nota:</span> I prezzi finali dipendono dal modello specifico del veicolo,
              dalle condizioni attuali e dal tipo di materiale scelto. Contattaci per un preventivo preciso e gratuito.
            </p>
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Form + cosa include */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Form — solid teal panel */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-4xl font-heading font-normal text-white leading-[1.05] tracking-[-0.02em] mb-2">
                  Modulo Richiesta Preventivo
                </h2>
                <p className="text-white/40 font-sans text-sm leading-relaxed">
                  Compila il form e ti contatteremo entro 24 ore.
                </p>
              </div>

              {!submitted ? (
                <div className="bg-[#01414a] px-8 py-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nome" className="block font-sans text-xs uppercase tracking-[0.14em] text-white/55 mb-2.5">
                          Nome <span className="text-white/80">*</span>
                        </label>
                        <input
                          type="text" id="nome" name="nome" required
                          value={formData.nome} onChange={handleChange}
                          className={inputBase} placeholder="Il tuo nome"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block font-sans text-xs uppercase tracking-[0.14em] text-white/55 mb-2.5">
                          Telefono / WhatsApp <span className="text-white/80">*</span>
                        </label>
                        <input
                          type="tel" id="telefono" name="telefono" required
                          value={formData.telefono} onChange={handleChange}
                          className={inputBase} placeholder="+39 ..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modello" className="block font-sans text-xs uppercase tracking-[0.14em] text-white/55 mb-2.5">
                        Modello auto <span className="text-white/80">*</span>
                      </label>
                      <input
                        type="text" id="modello" name="modello" required
                        value={formData.modello} onChange={handleChange}
                        className={inputBase} placeholder="es. Audi A4 2022"
                      />
                    </div>

                    <div>
                      <label htmlFor="servizio" className="block font-sans text-xs uppercase tracking-[0.14em] text-white/55 mb-2.5">
                        Servizio richiesto <span className="text-white/80">*</span>
                      </label>
                      <select
                        id="servizio" name="servizio" required
                        value={formData.servizio} onChange={handleChange}
                        className={inputBase + ' appearance-none cursor-pointer'}
                      >
                        <option value="" style={{ background: '#01414a' }}>Seleziona un servizio</option>
                        {services.map((s, i) => (
                          <option key={i} value={s} style={{ background: '#01414a' }}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="messaggio" className="block font-sans text-xs uppercase tracking-[0.14em] text-white/55 mb-2.5">
                        Messaggio <span className="text-white/30">(opzionale)</span>
                      </label>
                      <textarea
                        id="messaggio" name="messaggio"
                        value={formData.messaggio} onChange={handleChange}
                        rows={4}
                        className={inputBase + ' resize-none'}
                        placeholder="Descrivi eventuali dettagli aggiuntivi o richieste specifiche..."
                      />
                    </div>

                    <div className="pt-1">
                      <button
                        type="submit"
                        className="w-full bg-white hover:bg-white/92 text-[#01414a] font-sans font-bold text-xs uppercase tracking-widest py-4 transition-colors duration-150 flex items-center justify-center gap-2.5"
                      >
                        Invia richiesta su WhatsApp
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <p className="text-center text-white/30 font-sans text-xs mt-3">
                        Verrai reindirizzato a WhatsApp per completare l'invio.
                      </p>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="bg-[#01414a] p-10 text-center">
                  <div className="w-12 h-12 border border-white/30 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-heading font-normal text-white mb-3">Richiesta Inviata</h2>
                  <p className="text-white/60 font-sans text-sm leading-relaxed">
                    Ti contatteremo su WhatsApp entro 24 ore per fornirti il preventivo.
                  </p>
                </div>
              )}
            </div>

            {/* Cosa include */}
            <div className="lg:col-span-5">
              <div className="lg:sticky" style={{ top: '110px' }}>
                <div className="mb-8">
                  <h2 className="text-3xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em]">
                    Cosa Include il Preventivo
                  </h2>
                </div>

                <ul className="border border-accent/15">
                  {cosaInclude.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 px-6 py-5 border-b border-accent/10 last:border-b-0 hover:bg-accent/3 transition-colors duration-150">
                      <Check className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-white/55 font-sans text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 border border-accent/10 bg-[#0b0c0e] px-6 py-5">
                  <p className="text-white/30 font-sans text-xs leading-relaxed">
                    Risposta entro 24 ore lavorative. Nessun obbligo di acquisto.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Final CTA */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ minHeight: '440px' }}>
          <img src="/images/daniel/all/daniel-182.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/96 via-[#000000]/70 to-[#000000]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[440px] px-10 lg:px-20 py-20">
            <div className="max-w-[520px]">
              <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-5">
                Non serve indovinare il prezzo.
              </h2>
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10">
                Inviaci foto e dettagli: ti rispondiamo con una valutazione chiara.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20un%20preventivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Richiedi preventivo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
