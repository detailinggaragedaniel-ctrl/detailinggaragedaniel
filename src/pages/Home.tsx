import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Sparkles, CheckCircle, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef, useCallback } from 'react';

// Social icon SVGs
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.54V6.75a4.85 4.85 0 01-1.02-.06z"/>
  </svg>
);

const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);


const carouselSlides = [
  {
    eyebrow: 'SERVIZIO 1 / 3',
    label: 'Wrapping Auto',
    lines: [
      'Dai alla tua auto una nuova identità.',
      'Finiture esclusive e protezione.',
      'Senza compromessi.',
    ],
    cta: 'Scopri il servizio',
    link: '/servizi',
    image: '/omni-58dfd320-3b3e-4266-81f3-abc4113c12c1.png',
    imageDesktop: '/omni-35ec0fba-abbf-4910-bbcd-759d82d1ea94.png',
    alt: 'Wrapping auto premium a Novara',
  },
  {
    eyebrow: 'SERVIZIO 2 / 3',
    label: 'Lucidatura',
    lines: [
      'Correzione difetti, brillantezza profonda.',
      'Vernice più pulita, riflessi più netti.',
      'Finitura elegante e protezione finale.',
    ],
    cta: 'SCOPRI IL SERVIZIO',
    link: '/servizi',
    image: '/omni-84ecfb3f-2b8f-4f33-87a0-fa747edc415f.png',                                                                                                                                    imageDesktop: '/omni-addc6a5b-73d8-4e06-b235-8ecf93ba3f46.png',
    alt: 'Lucidatura auto a Novara',
  },
  {
    eyebrow: 'SERVIZIO 3 / 3',
    label: 'Oscuramento Vetri',
    lines: [
      'Più privacy, meno calore, una linea più pulita.',
      'Pellicole certificate e posa precisa.',
      'Su misura.',
    ],
    cta: 'Scopri il servizio',
    link: '/servizi',
    image: '/lakhuer-service.jpg',                                                                                                                                               imageDesktop: '/images/daniel/all/daniel-167.webp',
    alt: 'Oscuramento vetri auto a Novara',
  },
];

const projectPhotos = [
  {
    src: '/landrover-service-4k-mobile-card-4k.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/audi-service-4k-mobile-card-4k copy.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
    objectPosition: 'bottom',
  },
  {
    src: '/dima-service-4k-mobile-card-4k.webp',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/jhuv-service-05-clean-dark-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/ppp-service-4k-desktop-wide-4k.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/sss-service-05-crisp-contrast-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/lar-service-04-crisp-contrast-mobile-card-2160x2700.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/ljhover-service-05-crisp-contrast-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/ffffdrover-service-04-dark-premium-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/iouok-service-05-clean-dark-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
  {
    src: '/poihn-service-05-clean-dark-base.jpg',
    title: 'Galleria Dettagli',
    vehicle: '',
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [faqExpanded, setFaqExpanded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const carouselSectionRef = useRef<HTMLDivElement>(null);
  const [notchScrollProgress, setNotchScrollProgress] = useState(0);

  const [projectIndex, setProjectIndex] = useState(0);
  const projectTrackRef = useRef<HTMLDivElement>(null);
  const isLastProject = projectIndex === projectPhotos.length - 1;

  const projectPrev = useCallback(() => {
    setProjectIndex(i => Math.max(0, i - 1));
  }, []);

  const projectNext = useCallback(() => {
    setProjectIndex(i => Math.min(projectPhotos.length - 1, i + 1));
  }, []);

  const startInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselSlides.length);
    }, 6000);
  };

  useEffect(() => {
    startInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // Track when carousel top notch approaches the header bottom notch
  useEffect(() => {
    const HEADER_BOTTOM = 93; // 5px bar + 88px header
    const TRANSITION_RANGE = 400; // px — large range so animation starts way earlier

    const handleScroll = () => {
      if (!carouselSectionRef.current) return;
      const rect = carouselSectionRef.current.getBoundingClientRect();
      const progress = 1 - Math.min(1, Math.max(0, (rect.top - HEADER_BOTTOM) / TRANSITION_RANGE));
      setNotchScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (idx: number) => {
    setActiveSlide(idx);
    startInterval();
  };

  const prev = () => goTo((activeSlide - 1 + carouselSlides.length) % carouselSlides.length);
  const next = () => goTo((activeSlide + 1) % carouselSlides.length);

  const processSteps = [
    {
      number: '01',
      title: 'Richiesta Preventivo',
      desc: 'Scrivici su WhatsApp e inviaci foto, modello dell\'auto e servizio desiderato.',
    },
    {
      number: '02',
      title: 'Valutazione e Prezzo',
      desc: 'Analizziamo il lavoro e ti inviamo una proposta chiara con tempi e materiali.',
    },
    {
      number: '03',
      title: 'Esecuzione Lavoro',
      desc: 'Realizziamo l\'intervento con cura, precisione e controllo finale prima della consegna.',
    },
  ];

  const faqs = [
    {
      q: 'Quanto tempo richiede un oscuramento vetri?',
      a: 'Dipende dal modello dell\'auto e dal tipo di pellicola. In molti casi il lavoro viene completato in giornata.',
    },
    {
      q: 'Il wrapping danneggia la vernice originale?',
      a: 'No, se viene applicato e rimosso correttamente con materiali professionali. Può anche aiutare a proteggere la vernice.',
    },
    {
      q: 'Operate solo a Novara?',
      a: 'Lavoriamo principalmente su Novara e provincia, ma valutiamo anche richieste da zone vicine.',
    },
    {
      q: 'Che garanzia offrite sui lavori?',
      a: 'La garanzia dipende dal tipo di servizio e dai materiali utilizzati. Ti spieghiamo tutto prima di iniziare.',
    },
    {
      q: 'Posso richiedere un preventivo senza impegno?',
      a: 'Sì. Puoi inviarci foto e dettagli su WhatsApp: ti daremo una valutazione iniziale chiara.',
    },
    {
      q: 'Le pellicole rispettano i limiti di legge?',
      a: 'Utilizziamo soluzioni certificate e ti indichiamo sempre cosa è consentito per il tuo veicolo.',
    },
  ];

  return (
    <div className="min-h-screen text-primary">
      <div style={{ backgroundColor: '#000000', padding: '0 6px', position: 'relative' }}>
      <section className="relative w-full overflow-hidden" style={{ height: 'calc(100vh - 57px)' }}>
        {/* Desktop hero image */}
        <img
          src="/omni-865d478c-c158-40a6-a3b9-cc3c6666bd30(2).png"
          alt="Premium Car"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* Mobile hero image */}
        <img
          src="/omni-7c44ebe3-857e.jpeg"
          alt="Premium Car"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
        />

        {/* ── MOBILE hero content ── */}
        <div
          className="md:hidden absolute inset-0 z-10 flex flex-col justify-end px-6"
          style={{
            paddingBottom: 'clamp(1rem, 3vh, 1.75rem)',
            background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 40%, rgba(0,0,0,0.10) 65%, transparent 100%)',
          }}
        >
          <h1
            className="font-heading font-normal text-white leading-[1.1] tracking-[-0.025em] mb-3"
            style={{ fontSize: 'clamp(2rem, 8.5vw, 2.6rem)', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}
          >
            Rendi la tua auto più pulita, protetta e riconoscibile.
          </h1>
          <p
            className="font-heading font-normal text-white leading-[1.2] mb-6"
            style={{ fontSize: 'clamp(1rem, 4vw, 1.15rem)', textShadow: '0 2px 18px rgba(0,0,0,0.55)' }}
          >
            Oscuramento vetri, wrapping, PPF, lucidatura e lavaggio interno professionale: scegliamo la soluzione giusta per la tua auto, il tuo stile e il risultato che vuoi ottenere.
          </p>
          <a
            href="https://wa.me/393893451489?text=Ciao%20vorrei%20un%20preventivo%20gratuito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start items-center px-7 py-3 bg-white text-[#01414a] font-sans font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 active:bg-white/90"
          >
            Richiedi preventivo
            <ArrowRight className="ml-2.5 w-4 h-4" />
          </a>
        </div>

        {/* ── DESKTOP hero content ── */}
        <div className="hidden md:flex relative z-10 h-full w-full items-end px-16 pb-12">
          <div style={{ maxWidth: '660px', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            <h1
              className="font-heading font-normal text-white leading-[1.15] tracking-[-0.02em] mb-4"
              style={{ fontSize: 'clamp(1.35rem, 3.5vw, 2.65rem)' }}
            >
              Rendi la tua auto più pulita,<br /> protetta e riconoscibile.
            </h1>
            <p
              className="font-sans text-white/75 leading-relaxed mb-8"
              style={{ fontSize: 'clamp(0.78rem, 1.35vw, 0.92rem)', maxWidth: '540px' }}
            >
              Oscuramento vetri, wrapping, PPF, lucidatura e lavaggio interno professionale: scegliamo la soluzione giusta per la tua auto, il tuo stile e il risultato che vuoi ottenere.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center px-7 py-3.5 bg-white hover:bg-white/90 text-[#01414a] font-sans font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300"
              >
                Guarda i lavori
                <ArrowRight className="ml-2.5 w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/393893451489?text=Ciao%20vorrei%20un%20preventivo%20gratuito"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 font-sans font-medium text-xs uppercase tracking-[0.18em] text-white transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.45)' }}
              >
                Richiedi preventivo
                <ArrowRight className="ml-2.5 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Services Showcase Carousel */}
      <section ref={carouselSectionRef} className="relative w-full overflow-hidden" style={{ height: '85vh', minHeight: '520px', maxHeight: '820px', marginTop: '3px' }}>
        {/* Notch — top notch with social icons / SERVIZI text */}
        <svg
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6vh',
            zIndex: 20,
            display: 'block',
            pointerEvents: 'none',
          }}
        >
          {/* Desktop notch — unchanged */}
          <polygon className="hidden md:block" points="325,0 675,0 605,100 395,100" fill="#000000" />
          {/* Mobile notch — raised 5px (bottom y=90), steeper knees (295/705) */}
          <polygon className="md:hidden" points="295,0 705,0 605,90 395,90" fill="#000000" />
        </svg>

        {/* Social icons / SERVIZI in the top notch */}
        <div
          className="absolute top-0 left-0 right-0 z-30 flex justify-center items-start"
          style={{ height: '6vh', pointerEvents: 'none' }}
        >
          <div className="relative flex items-center justify-center" style={{ height: '100%', width: '500px' }}>
            {/* Desktop social icons — all 5 */}
            {([
              { href: 'https://www.tiktok.com/@detailinggaragedaniel', Icon: TikTokIcon, idx: 0 },
              { href: 'https://www.facebook.com/109292172016288', Icon: FacebookIcon, idx: 1 },
              { href: 'https://www.instagram.com/detailing_garage__daniel/', Icon: InstagramIcon, idx: 2 },
              { href: 'https://wa.me/393893451489', Icon: WhatsAppIcon, idx: 3 },
              { href: 'https://t.me/Dimak89', Icon: TelegramIcon, idx: 4 },
            ] as const).map(({ href, Icon, idx }) => {
              const centerOffset = idx - 2;
              const iconProgress = notchScrollProgress;
              const spreadX = iconProgress * centerOffset * 60;
              const opacity = Math.max(0, 1 - iconProgress * 2.2);
              return (
                <a
                  key={`d-${idx}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:block"
                  style={{
                    pointerEvents: notchScrollProgress > 0.65 ? 'none' : 'auto',
                    position: 'absolute',
                    top: '50%',
                    marginTop: '-12px',
                    left: '50%',
                    marginLeft: `${centerOffset * 50 + spreadX - 12}px`,
                    opacity,
                    transition: 'opacity 0.08s, margin-left 0.08s',
                  }}
                >
                  <Icon className="w-[25px] h-[25px] text-[#F5F1E8]/80 hover:text-accent transition-colors duration-300" />
                </a>
              );
            })}
            {/* Mobile social icons — TikTok, Instagram, Facebook only (3 icons) */}
            {([
              { href: 'https://www.tiktok.com/@detailinggaragedaniel', Icon: TikTokIcon, idx: 0 },
              { href: 'https://www.instagram.com/detailing_garage__daniel/', Icon: InstagramIcon, idx: 1 },
              { href: 'https://www.facebook.com/109292172016288', Icon: FacebookIcon, idx: 2 },
            ] as const).map(({ href, Icon, idx }) => {
              const centerOffset = idx - 1;
              const spreadX = notchScrollProgress * centerOffset * 55;
              const opacity = Math.max(0, 1 - notchScrollProgress * 2.2);
              return (
                <a
                  key={`m-${idx}`}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md:hidden"
                  style={{
                    pointerEvents: notchScrollProgress > 0.65 ? 'none' : 'auto',
                    position: 'absolute',
                    top: '42%',
                    marginTop: '-10px',
                    left: '50%',
                    marginLeft: `${centerOffset * 40 + spreadX - 10}px`,
                    opacity,
                    transition: 'opacity 0.08s, margin-left 0.08s',
                  }}
                >
                  <Icon className="w-[20px] h-[20px] text-[#F5F1E8]/80 hover:text-accent transition-colors duration-300" />
                </a>
              );
            })}

            {/* SERVIZI — same style as DANIEL, with added letter-spacing */}
            <div
              className="absolute font-heading font-semibold text-white leading-none"
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)',
                letterSpacing: '0.05em',
                opacity: Math.max(0, (notchScrollProgress - 0.5) / 0.5),
                transform: `translateY(${Math.max(0, (1 - (notchScrollProgress - 0.5) / 0.5)) * 6}px)`,
                transition: 'opacity 0.08s, transform 0.08s',
                pointerEvents: 'none',
                top: '50%',
                marginTop: '-15px',
              }}
            >
              SERVIZI
            </div>
          </div>
        </div>
        {carouselSlides.map((slide, idx) => (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: idx === activeSlide ? 1 : 0, pointerEvents: idx === activeSlide ? 'auto' : 'none' }}
          >
            {slide.imageDesktop && (
              <img
                src={slide.imageDesktop}
                alt={slide.alt ?? slide.label}
                className="hidden lg:block absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
            )}
            <img
              src={slide.image}
              alt={slide.alt ?? slide.label}
              className={slide.imageDesktop ? 'lg:hidden absolute inset-0 w-full h-full object-cover' : 'absolute inset-0 w-full h-full object-cover'}
              style={{ objectPosition: 'center center' }}
            />
            {/* Subtle left gradient for text readability only */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/60 via-transparent to-transparent" />
          </div>
        ))}

        {/* Text content — bottom-left */}
        <div className="relative z-10 h-full flex items-end px-8 md:px-16 lg:px-20 pb-16">
          <div style={{ maxWidth: '680px', textShadow: '0 2px 24px rgba(0,0,0,0.6)' }}>
            {/* Title — same scale as hero pyramid, Vollkorn mixed-case */}
            <h2
              className="font-heading font-normal text-white leading-[1.1] tracking-[-0.025em] mb-4 transition-all duration-500"
              style={{ fontSize: 'clamp(2rem, 3.8vw, 3rem)' }}
            >
              {carouselSlides[activeSlide].label}
            </h2>
            <div className="mb-8 flex flex-col gap-1">
              <p className="font-heading font-normal text-white leading-[1.2]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                {carouselSlides[activeSlide].lines[0]}
              </p>
              <p className="font-heading font-normal text-white leading-[1.2]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                {carouselSlides[activeSlide].lines[1]}
              </p>
              <p className="font-heading font-normal text-white leading-[1.2]" style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>
                {carouselSlides[activeSlide].lines[2]}
              </p>
            </div>
            <Link
              to={carouselSlides[activeSlide].link}
              className="inline-flex items-center px-7 py-3 bg-white hover:bg-white/90 text-[#01414a] font-sans font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300"
            >
              {carouselSlides[activeSlide].cta}
              <ArrowRight className="ml-2.5 w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Slide indicators — 3 horizontal lines, bottom center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
              className="transition-all duration-400"
              style={{
                width: idx === activeSlide ? '40px' : '24px',
                height: '2px',
                background: idx === activeSlide ? '#0a7c8c' : 'rgba(255,255,255,0.3)',
                border: 'none',
                padding: 0,
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Arrow controls — bare icons only */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-[#F5F1E8]/70 hover:text-accent transition-colors duration-300"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-[#F5F1E8]/70 hover:text-accent transition-colors duration-300"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

      </section>
      </div>

      {/* I Nostri Lavori — Aston Martin editorial grid */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">

          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-4">
              I Nostri Lavori
            </h2>
            <p className="text-white/65 text-sm font-sans leading-relaxed max-w-xl">
              Una selezione di interventi reali: superfici, dettagli e finiture che raccontano il livello della lavorazione.
            </p>
          </div>

          {/* Grid: desktop = left 2 stacked + right 1 tall featured */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-stretch">

            {/* LEFT — 2 small cards stacked (mobile: order 2) */}
            <div className="flex flex-col gap-8 lg:w-[40%] order-2 lg:order-1" style={{ paddingBottom: '25px' }}>

              {/* Small card 1 */}
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/pfvpfv-service-02-premium-sharp-service-card-2400x1600.jpg"
                    alt="Wrapping Sportivo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-semibold text-white leading-snug mb-1 group-hover:text-accent transition-colors duration-300">
                    Wrapping Sportivo
                  </h3>
                  <p className="text-white/65 text-xs font-sans tracking-wide mb-1">Mercedes Classe A — finitura gold</p>
                  <p className="text-white/50 text-xs font-sans leading-relaxed">Finitura aggressiva, linee più pulite, presenza più decisa.</p>
                </div>
              </Link>

              {/* Small card 2 */}
              <Link to="/portfolio" className="group block">
                <div className="overflow-hidden mb-4" style={{ aspectRatio: '4/3' }}>
                  <img
                    src="/photo_2026-05-23_00-18-37.jpg"
                    alt="Interni Custom"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div>
                  <h3 className="text-3xl font-heading font-semibold text-white leading-snug mb-1 group-hover:text-accent transition-colors duration-300">
                    Interni Custom
                  </h3>
                  <p className="text-white/65 text-xs font-sans tracking-wide mb-1">Rivestimento e finitura interna</p>
                  <p className="text-white/50 text-xs font-sans leading-relaxed">Materiali selezionati e dettagli interni rifiniti su misura.</p>
                </div>
              </Link>
            </div>

            {/* RIGHT — 1 tall featured card. pb-[25px] extends overall height so photo bottom aligns with small card 2 photo bottom */}
            <Link to="/portfolio" className="group flex flex-col lg:flex-1 order-1 lg:order-2">
              <div className="overflow-hidden flex-1 min-h-0 mb-5 w-full">
                <img
                  src="/photo_2026-05-21_07-36-44_(4).jpg"
                  alt="Dettaglio Premium Ferrari Roma"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-heading font-normal text-white leading-[1.12] tracking-[-0.01em] mb-2 group-hover:text-accent transition-colors duration-300">
                  Dettaglio Premium
                </h3>
                <p className="text-white/65 text-sm font-sans tracking-wide mb-2">
                  Ferrari Roma — protezione e cura estetica
                </p>
                <p className="text-white/50 text-xs font-sans leading-relaxed max-w-md">
                  Ogni superficie viene trattata per valorizzare l'auto senza alterarne l'identità.
                </p>
              </div>
            </Link>
          </div>

          {/* CTA — aligned right */}
          <div className="flex justify-end mt-10">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-3 text-[#F5F1E8] font-heading font-bold text-xs uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
            >
              Vedi tutti i lavori
              <span className="w-8 h-px bg-current transition-all duration-300 group-hover:w-12" />
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* Perché Sceglierci — staggered cards */}
      <section className="relative py-16 px-6 lg:px-12 overflow-hidden">
        <div className="max-w-[1600px] mx-auto">

          {/* Desktop: staggered cards — uneven steps, bottom-aligned */}
          <div className="hidden lg:flex items-end gap-0">

            {/* Card 1 — same height as card 3, title centered inside */}
            <div className="relative bg-[#01414a] border border-[#025d69] flex flex-col w-[28%] shrink-0" style={{ height: '560px' }}>
              <div className="px-7 pt-10 pb-7 flex flex-col flex-1">
                <Shield className="w-7 h-7 text-accent mb-5" />
                <h2 className="text-4xl font-heading font-normal text-white leading-[1.12] tracking-[-0.02em] mb-5">
                  Perché<br />Sceglierci
                </h2>
                <h3 className="text-3xl font-heading font-semibold text-white leading-tight mb-3">
                  Materiali Certificati
                </h3>
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-3">
                  Pellicole omologate, prodotti professionali e finiture pensate per durare nel tempo.
                </p>
                <p className="text-white/55 text-xs font-sans leading-relaxed mb-3">
                  Ogni materiale viene scelto per resa estetica, affidabilità e coerenza con il livello del veicolo.
                </p>
                <p className="text-white/55 text-xs font-sans leading-relaxed">
                  Scelti per qualità, resa estetica e affidabilità.
                </p>
              </div>
            </div>

            {/* Card 2 — middle, car photo in accent frame, Google reviews CTA aligned to bottom of siblings */}
            <div className="relative flex flex-col w-[38%] shrink-0 justify-end" style={{ alignSelf: 'stretch' }}>
              <div className="bg-[#01414a] border border-[#025d69] flex flex-col" style={{ height: '380px' }}>
                {/* Car photo */}
                <div className="mx-7 mt-7 relative overflow-hidden">
                  <img
                    src="/photo_2026-05-21_07-36-44_(5).jpg"
                    alt="Esperienza dal 2015"
                    className="w-full object-cover"
                    style={{ height: '160px', objectFit: 'cover', objectPosition: 'center center' }}
                  />
                  <div className="absolute inset-0 bg-black/35" />
                </div>
                <div className="px-7 pt-5 pb-7 flex flex-col flex-1 justify-end">
                  <CheckCircle className="w-7 h-7 text-accent mb-4" />
                  <h3 className="text-3xl font-heading font-semibold text-white leading-tight mb-3">
                    Esperienza dal 2015
                  </h3>
                  <p className="text-white/70 text-sm font-sans leading-relaxed">
                    Anni di lavoro su auto sportive, premium, daily car e progetti speciali.
                  </p>
                </div>
              </div>
              {/* Google reviews CTA — sits below card, centered */}
              <div className="flex items-center justify-center px-1 pt-6">
                <a
                  href="https://g.page/r/CT2FaJPotiY8EBM/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 text-xs font-heading font-bold uppercase tracking-[0.2em]"
                  style={{ color: '#c0392b' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                  </svg>
                  Vedi le recensioni su Google
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Card 3 — slightly taller than card 2 */}
            <div className="relative bg-[#01414a] border border-[#025d69] flex flex-col flex-1" style={{ height: '560px' }}>
              <div className="mx-7 mt-7 relative overflow-hidden" style={{ height: '200px' }}>
                <img
                  src="/ldrvr-service-02-premium-sharp-base.jpg"
                  alt="Precisione Artigianale"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center bottom' }}
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>
              <div className="px-7 pt-5 pb-7 flex flex-col flex-1 justify-end">
                <Sparkles className="w-7 h-7 text-accent mb-4" />
                <h3 className="text-3xl font-heading font-semibold text-white leading-tight mb-3">
                  Precisione Artigianale
                </h3>
                <p className="text-white/70 text-sm font-sans leading-relaxed mb-6">
                  Ogni dettaglio viene curato con attenzione: tagli, bordi, superfici e pulizia finale.
                </p>
                <div className="grid grid-cols-2 gap-4 border-t border-[#025d69] pt-5">
                  <div>
                    <div className="text-2xl font-heading font-bold text-white mb-1">9+</div>
                    <p className="text-white/60 font-sans font-medium text-xs uppercase tracking-[0.15em]">Anni di Attività</p>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-white mb-1">950+</div>
                    <p className="text-white/60 font-sans font-medium text-xs uppercase tracking-[0.15em]">Clienti Serviti</p>
                  </div>
                  <div className="col-span-2 pt-1">
                    <div className="text-2xl font-heading font-bold text-white mb-1">100%</div>
                    <p className="text-white/60 font-sans font-medium text-xs uppercase tracking-[0.15em]">Cura del Dettaglio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: vertical stack */}
          <div className="lg:hidden flex flex-col gap-4">
            {/* Mobile title */}
            <div className="mb-2">
              <h2 className="text-4xl font-heading font-normal text-white leading-[1.12] tracking-[-0.02em]">
                Perché<br />Sceglierci
              </h2>
            </div>

            <div className="bg-[#01414a] border border-[#025d69] p-7">
              <h3 className="text-2xl font-heading font-semibold text-white mb-3">Materiali Certificati</h3>
              <p className="text-white/65 text-sm font-sans leading-relaxed mb-2">Pellicole omologate, prodotti professionali e finiture pensate per durare nel tempo.</p>
              <p className="text-white/50 text-xs font-sans leading-relaxed">Scelti per qualità, resa estetica e affidabilità.</p>
            </div>

            {/* Card 2 — full-bleed photo with overlay */}
            <div className="relative overflow-hidden border border-[#025d69]" style={{ minHeight: '220px' }}>
              <img
                src="/photo_2026-05-21_07-36-44_(5).jpg"
                alt="Esperienza dal 2015"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
              <div className="relative z-10 p-7 flex flex-col justify-end h-full" style={{ minHeight: '220px' }}>
                <h3 className="text-2xl font-heading font-semibold text-white mb-2">Esperienza dal 2015</h3>
                <p className="text-white/80 text-sm font-sans leading-relaxed">Anni di lavoro su auto sportive, premium, daily car e progetti speciali.</p>
              </div>
            </div>

            <div className="bg-[#01414a] border border-[#025d69] p-7">
              <h3 className="text-2xl font-heading font-semibold text-white mb-3">Precisione Artigianale</h3>
              <p className="text-white/65 text-sm font-sans leading-relaxed">Ogni dettaglio viene curato con attenzione: tagli, bordi, superfici e pulizia finale.</p>
            </div>

            {/* Google reviews CTA */}
            <div className="flex items-center pt-1">
              <a
                href="https://g.page/r/CT2FaJPotiY8EBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:opacity-80 transition-opacity duration-300 text-xs font-heading font-bold uppercase tracking-[0.2em]"
                style={{ color: '#c0392b' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
                </svg>
                Vedi le recensioni su Google
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </section>

      {/* I Nostri Progetti */}
      <section className="pt-10 pb-10 md:py-16 overflow-hidden">
        <div className="mb-10 px-6 md:px-0" style={{ paddingLeft: undefined }}>
          <div className="md:pl-[150px]">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em] mb-4">
              Galleria Dettagli
            </h2>
            <p className="text-white/65 text-sm font-sans leading-relaxed max-w-xl">
              Scorri una selezione di finiture, superfici e dettagli realizzati nel nostro garage.
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Track */}
          <div
            className="overflow-hidden transition-all duration-500"
            style={{ paddingLeft: 'max(24px, min(150px, 12vw))', paddingRight: isLastProject ? '200px' : '400px' }}
          >
            <div
              ref={projectTrackRef}
              className="flex gap-5 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${projectIndex} * (min(70vw, 800px) + 20px)))` }}
            >
              {projectPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0"
                  style={{ width: 'min(70vw, 800px)' }}
                >
                  <div className="overflow-hidden bg-black" style={{ aspectRatio: '4/3' }}>
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8" style={{ paddingLeft: 'max(24px, min(150px, 12vw))', paddingRight: 'max(24px, min(150px, 12vw))' }}>
            <button
              onClick={projectPrev}
              disabled={projectIndex === 0}
              aria-label="Progetto precedente"
              className="text-[#F5F1E8]/60 hover:text-accent transition-colors duration-300 disabled:opacity-20 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            <div className="relative h-7 flex items-center">
              <button
                onClick={projectNext}
                disabled={isLastProject}
                aria-label="Progetto successivo"
                className="text-[#F5F1E8]/60 hover:text-accent transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
                style={{ position: 'absolute', right: 0 }}
              >
                <ChevronRight className="w-7 h-7" />
              </button>

              {/* CTA — appears on last slide in place of right arrow */}
              <div
                className="transition-all duration-500 absolute right-0"
                style={{ opacity: isLastProject ? 1 : 0, pointerEvents: isLastProject ? 'auto' : 'none', transform: isLastProject ? 'translateX(0)' : 'translateX(12px)' }}
              >
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 px-7 py-3 bg-white hover:bg-white/90 text-[#01414a] font-sans font-medium text-xs uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap"
                >
                  Apri il portfolio completo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 relative overflow-hidden bg-card border border-border">
              <img
                src="/photo_2026-05-17_20-40-40.jpg"
                alt="Professional car detailing"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectPosition: 'center center' }}
              />
              <div className="absolute inset-0 bg-black/45" />
              <div className="relative z-10 h-full min-h-[520px] flex flex-col justify-between p-10">
                <div>
                  <h2 className="text-4xl font-heading font-normal text-white mb-4 leading-[1.1] tracking-[-0.02em]">
                    Lavorazione<br />Professionale
                  </h2>
                  <p className="text-white/70 text-base leading-relaxed max-w-md font-sans">
                    Ogni fase del processo è pensata per garantire un risultato preciso, pulito e duraturo.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div>
                    <p className="text-3xl font-heading font-bold text-white mb-1">2-4h</p>
                    <p className="text-white/60 font-sans font-medium text-xs uppercase tracking-[0.15em] mb-0.5">Tempo Medio</p>
                    <p className="text-white/70 text-xs font-sans">Per intervento standard</p>
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-bold text-white mb-1">100%</p>
                    <p className="text-white/60 font-sans font-medium text-xs uppercase tracking-[0.15em] mb-0.5">Garanzia Qualità</p>
                    <p className="text-white/70 text-xs font-sans">Su ogni lavoro</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em]">
                  Come Funziona
                </h2>
              </div>
              <div className="grid gap-4">
                {processSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="relative bg-card border border-border p-8 hover:border-accent transition-all duration-300 group"
                  >
                    <div className="absolute top-8 right-8 text-7xl font-heading font-bold text-accent/10 leading-none">
                      {step.number}
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-3xl font-heading font-semibold mb-4 text-white">{step.title}</h3>
                      <p className="text-white/70 text-sm leading-relaxed font-sans">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-6">
            <h2 className="text-4xl md:text-5xl font-heading font-normal text-white leading-[1.1] tracking-[-0.02em]">
              Domande Frequenti
            </h2>
          </div>

          {/* Desktop: two independent columns. Mobile: first 3 + expandable 3 */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            {/* Left column — even indices */}
            <div className="flex flex-col gap-3">
              {faqs.filter((_, i) => i % 2 === 0).map((faq) => {
                const idx = faqs.indexOf(faq);
                return (
                  <div key={idx} className="bg-card border border-border overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                    >
                      <span className="font-sans font-semibold text-sm text-white pr-8 leading-relaxed">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6">
                        <p className="text-white/70 text-sm leading-relaxed font-sans">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            {/* Right column — odd indices */}
            <div className="flex flex-col gap-3">
              {faqs.filter((_, i) => i % 2 === 1).map((faq) => {
                const idx = faqs.indexOf(faq);
                return (
                  <div key={idx} className="bg-card border border-border overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                    >
                      <span className="font-sans font-semibold text-sm text-white pr-8 leading-relaxed">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                    </button>
                    {openFaq === idx && (
                      <div className="px-6 pb-6">
                        <p className="text-white/70 text-sm leading-relaxed font-sans">{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: single column, first 3 visible + expandable */}
          <div className="flex flex-col gap-3 lg:hidden">
            {faqs.map((faq, idx) => {
              const hiddenOnMobile = idx >= 3 && !faqExpanded;
              return (
                <div
                  key={idx}
                  className={`bg-card border border-border overflow-hidden transition-all duration-300 ${hiddenOnMobile ? 'hidden' : ''}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-card/50 transition-colors"
                  >
                    <span className="font-sans font-semibold text-sm text-white pr-8 leading-relaxed">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-accent flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-white/70 text-sm leading-relaxed font-sans">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile expand/collapse button */}
          <div className="lg:hidden flex justify-center mt-4">
            <button
              onClick={() => setFaqExpanded(e => !e)}
              className="flex items-center gap-2 text-accent font-sans font-semibold text-xs uppercase tracking-[0.18em] transition-colors duration-300 hover:text-white"
            >
              {faqExpanded ? 'Mostra meno' : 'Mostra altro'}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${faqExpanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="relative overflow-hidden bg-[#000000] border border-accent/30" style={{ minHeight: '280px' }}>
            <img
              src="/ldrvr-service-02-premium-sharp-base.jpg"
              alt="Premium automotive service"
              className="absolute inset-0 w-full h-full object-cover hidden md:block"
              style={{ objectPosition: 'center center' }}
            />
            <img
              src="/r-service-03-dark-premium-mobile-card-2160x2700.jpg"
              alt="Premium automotive service"
              className="absolute inset-0 w-full h-full object-cover md:hidden"
              style={{ objectPosition: 'center 20%' }}
            />
            <div className="absolute inset-0 bg-[#000000]/40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/50 via-[#000000]/35 to-[#000000]/25"></div>
            <div className="relative z-10 px-8 lg:px-12 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-4xl font-heading font-normal mb-3 text-white leading-[1.12] tracking-[-0.02em]">
                  Non cambiare auto.<br />Cambia il modo in cui viene percepita.
                </h2>
                <p className="text-sm text-white/70 leading-relaxed font-sans">
                  Inviaci le foto: ti proponiamo solo ciò che valorizza davvero il tuo veicolo.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20richiedere%20una%20valutazione"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-3.5 bg-white hover:bg-white/90 text-[#01414a] text-xs font-sans font-medium uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap"
                >
                  Richiedi una valutazione
                  <ArrowRight className="ml-2.5 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
