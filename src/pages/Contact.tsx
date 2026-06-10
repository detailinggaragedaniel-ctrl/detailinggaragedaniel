import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, ArrowRight } from 'lucide-react';
import { SOCIAL_LINKS } from '../components/Footer';

// SVG icons for platforms not in lucide-react (keep in sync with Footer)
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const CTA_BG = 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1920';

const BUSINESS_ADDRESS = "Via Stazione, 1, 28060 Nibbia NO";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;
const MAP_EMBED = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS_ADDRESS)}&output=embed&hl=it`;

const workingHours = [
  { day: 'Lunedì - Venerdì', hours: 'Su appuntamento' },
  { day: 'Sabato',           hours: 'Su appuntamento' },
  { day: 'Domenica',         hours: 'Chiuso' },
];

export default function Contact() {
  return (
    <div className="min-h-screen text-white bg-[#000000]" style={{ paddingTop: '88px' }}>

      {/* Hero */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
            Contatti<br />&amp; Prenotazione
          </h1>
          <p className="text-white/50 font-sans text-base max-w-md leading-relaxed">
            Siamo qui per rispondere alle tue domande e fissare un appuntamento.
          </p>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Top contact blocks */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-accent/8">

            <a href="tel:+393893451489" className="group bg-[#0b0c0e] px-7 py-8 hover:bg-[#0f1012] transition-colors duration-150">
              <div className="w-7 h-7 border border-accent/20 flex items-center justify-center mb-5 group-hover:border-accent/50 transition-colors duration-150">
                <Phone className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="font-sans text-xs tracking-[0.14em] uppercase text-white/30 mb-2">Telefono</p>
              <p className="font-heading font-normal text-white text-xl mb-1">+39 389 345 1489</p>
              <p className="font-sans text-xs text-white/25">Click to call</p>
            </a>

            <a
              href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20maggiori%20informazioni"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0b0c0e] px-7 py-8 hover:bg-[#0f1012] transition-colors duration-150 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-accent" />
              <div className="w-7 h-7 border border-accent/40 flex items-center justify-center mb-5 group-hover:border-accent/80 transition-colors duration-150">
                <MessageCircle className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="font-sans text-xs tracking-[0.14em] uppercase text-accent/60 mb-2">WhatsApp</p>
              <p className="font-heading font-normal text-white text-xl mb-1">+39 389 345 1489</p>
              <p className="font-sans text-xs text-white/25">Rispondiamo velocemente</p>
            </a>

            <a href="mailto:detailinggaragedaniel@gmail.com" className="group bg-[#0b0c0e] px-7 py-8 hover:bg-[#0f1012] transition-colors duration-150 translate-y-px sm:translate-y-0">
              <div className="w-7 h-7 border border-accent/20 flex items-center justify-center mb-5 group-hover:border-accent/50 transition-colors duration-150">
                <Mail className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="font-sans text-xs tracking-[0.14em] uppercase text-white/30 mb-2">Email</p>
              <p className="font-heading font-normal text-white text-base mb-1 break-all">detailinggaragedaniel@gmail.com</p>
              <p className="font-sans text-xs text-white/25">Per richieste dettagliate</p>
            </a>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Dove Siamo + Scrivici */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

            {/* Left */}
            <div className="space-y-3">
              <div className="border border-accent/15 bg-[#0b0c0e] px-6 py-6 flex items-start gap-5">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-normal text-white text-lg mb-2">Dove Siamo</h3>
                  <a
                    href={GOOGLE_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/55 font-sans text-sm leading-relaxed hover:text-white/80 transition-colors duration-150"
                  >
                    {BUSINESS_ADDRESS}
                  </a>
                  <p className="text-white/25 font-sans text-xs mt-2">Raggio operativo: 50 km da Novara</p>
                </div>
              </div>

              <div className="border border-accent/15 bg-[#0b0c0e] px-6 py-6 flex items-start gap-5">
                <Clock className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <h3 className="font-heading font-normal text-white text-lg mb-4">Orari di Lavoro</h3>
                  <div className="border border-accent/10">
                    {workingHours.map((s, i) => (
                      <div key={i} className="flex justify-between items-center px-4 py-3 border-b border-accent/8 last:border-b-0">
                        <span className="font-sans text-xs text-white/40 uppercase tracking-wide">{s.day}</span>
                        <span className={`font-sans text-xs font-medium ${s.hours === 'Chiuso' ? 'text-white/20' : 'text-white/65'}`}>{s.hours}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-white/22 font-sans text-xs mt-4 leading-relaxed">
                    Contattaci per fissare una data che ti è comoda.
                  </p>
                </div>
              </div>

              <div className="border border-accent/15 bg-[#0b0c0e] px-6 py-6">
                <p className="font-sans text-xs tracking-[0.14em] uppercase text-white/30 mb-4">Social Media</p>
                <p className="text-white/40 font-sans text-sm mb-5 leading-relaxed">
                  Seguici per vedere i nostri ultimi lavori.
                </p>
                <div className="flex flex-wrap gap-2">
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 border border-accent/15 flex items-center justify-center hover:border-accent/45 hover:bg-accent/5 transition-colors duration-150"
                  >
                    <Instagram className="w-4 h-4 text-accent" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-9 h-9 border border-accent/15 flex items-center justify-center hover:border-accent/45 hover:bg-accent/5 transition-colors duration-150"
                  >
                    <Facebook className="w-4 h-4 text-accent" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                    className="w-9 h-9 border border-accent/15 flex items-center justify-center hover:border-accent/45 hover:bg-accent/5 transition-colors duration-150"
                  >
                    <TikTokIcon className="w-4 h-4 text-accent" />
                  </a>
                  <a
                    href={SOCIAL_LINKS.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className="w-9 h-9 border border-accent/15 flex items-center justify-center hover:border-accent/45 hover:bg-accent/5 transition-colors duration-150"
                  >
                    <TelegramIcon className="w-4 h-4 text-accent" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-8">
                Scrivici Direttamente
              </h2>

              <div className="border border-accent/20 bg-[#0b0c0e] px-7 py-7 mb-3 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-accent/35" />
                <p className="font-sans text-xs tracking-[0.14em] uppercase text-accent/55 mb-3">Metodo più veloce</p>
                <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
                  Per una risposta immediata, contattaci su WhatsApp. È il modo più veloce per ricevere un preventivo o prenotare un appuntamento.
                </p>
                <a
                  href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20maggiori%20informazioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold text-xs uppercase tracking-widest transition-colors duration-150"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  Apri WhatsApp
                </a>
              </div>

              <div className="border border-accent/15 bg-[#0b0c0e] px-7 py-7 mb-3">
                <p className="font-sans text-xs tracking-[0.14em] uppercase text-white/25 mb-3">Oppure chiamaci</p>
                <p className="text-white/50 font-sans text-sm leading-relaxed mb-6">
                  Preferisci parlare al telefono? Chiamaci durante gli orari di lavoro per discutere del tuo progetto.
                </p>
                <a
                  href="tel:+393893451489"
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-accent/20 text-white/60 hover:border-accent/50 hover:text-white font-sans font-medium text-xs uppercase tracking-widest transition-colors duration-150"
                >
                  <Phone className="w-3.5 h-3.5" />
                  +39 389 345 1489
                </a>
              </div>

              <div className="border-l-2 border-accent/25 pl-5 py-1">
                <p className="text-white/25 font-sans text-xs leading-relaxed">
                  Lavoriamo su appuntamento per garantirti la massima attenzione.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Map */}
      <section className="py-14 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl font-heading font-normal text-white leading-[1.05] tracking-[-0.02em] mb-3">
              Area di Copertura
            </h2>
            <p className="text-white/40 font-sans text-sm leading-relaxed">
              Operiamo in tutta la provincia di Novara e zone limitrofe.
            </p>
          </div>

          <div className="border border-accent/15 overflow-hidden" style={{ height: '360px' }}>
            <iframe
              src={MAP_EMBED}
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block', filter: 'grayscale(40%) contrast(1.05) brightness(0.85)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={BUSINESS_ADDRESS}
            />
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Final CTA */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
        <img src="/images/daniel/all/daniel-175.webp" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/96 via-[#000000]/70 to-[#000000]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[480px] px-10 lg:px-20 py-20">
            <div className="max-w-[560px]">
              <h2 className="text-4xl md:text-6xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-5">
                Parliamo del tuo progetto
              </h2>
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10">
                Scrivici su WhatsApp: è il modo più veloce per ricevere una risposta.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20un%20preventivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Apri WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
