import { useState, useCallback, useRef, useEffect } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

// ─────────────────────────────────────────────────────────────────────────────
// IMAGE CONTROL PANEL — ONLY CHANGE FILE NAMES HERE
// Uploaded files are in:  public/images/daniel/all/
// Use paths like:         /images/daniel/all/daniel-161.webp
// Do not edit components below unless changing layout.
// ─────────────────────────────────────────────────────────────────────────────

const PORTFOLIO_IMAGES = {

  // ── VETRI ──────────────────────────────────────────────────────────────────
  vetri: {
    main:   '/images/daniel/all/daniel-160.webp',    // big card (16:10)
    small1: '/images/daniel/all/daniel-120.webp',  // top small card (4:3)
    small2: '/images/daniel/all/daniel-067.webp',  // bottom small card (4:3)
    small3: '/images/daniel/all/daniel-100.webp',  // grid card (3:2)
    process: [                                               // 6 images for process modal
      '/images/daniel/all/daniel-159.webp',
      '/images/daniel/all/daniel-155.webp',
      '/images/daniel/all/daniel-158.webp',
      '/images/daniel/all/daniel-157.webp',
      '/images/daniel/all/daniel-156.webp',
      '/images/daniel/all/daniel-160.webp',
    ],
    after: [                                                 // optional result images
      '/images/daniel/all/daniel-vetri-after1.webp',
    ],
  },

  // ── WRAPPING ───────────────────────────────────────────────────────────────
  wrapping: {
    main:   '/images/daniel/all/daniel-090.webp',
    small1: '/images/daniel/all/daniel-101.webp',
    small2: '/images/daniel/all/daniel-048.webp',
    small3: '/images/daniel/all/daniel-108.webp',
    process: [
      '/images/daniel/all/daniel-142.webp',
      '/images/daniel/all/daniel-094.webp',
      '/images/daniel/all/daniel-092.webp',
      '/images/daniel/all/daniel-093.webp',
      '/images/daniel/all/daniel-091.webp',
      '/images/daniel/all/daniel-143.webp',
    ],
    after: [
      '/images/daniel/all/daniel-wrapping-after1.webp',
    ],
  },

  // ── INTERNI ────────────────────────────────────────────────────────────────
  interni: {
    main:   '/images/daniel/all/daniel-166.webp',
    small1: '/images/daniel/all/daniel-095.webp',
    small2: '/images/daniel/all/daniel-128.webp',
    small3: '/images/daniel/all/daniel-130.webp',
    process: [
      '/images/daniel/all/daniel-129.webp',
      '/images/daniel/all/daniel-132.webp',
      '/images/daniel/all/daniel-133.webp',
      '/images/daniel/all/daniel-134.webp',
      '/images/daniel/all/daniel-135.webp',
      '/images/daniel/all/daniel-139.webp',
    ],
    after: [
      '/images/daniel/all/daniel-interni-after1.webp',
    ],
  },

  // ── LUCIDATURA ─────────────────────────────────────────────────────────────
  lucidatura: {
    main:   '/images/daniel/all/daniel-062.webp',
    small1: '/images/daniel/all/daniel-085.webp',
    small2: '/images/daniel/all/daniel-045.webp',
    small3: '/images/daniel/all/daniel-054.webp',
    process: [
      '/images/daniel/all/daniel-061.webp',
      '/images/daniel/all/daniel-063.webp',
      '/images/daniel/all/daniel-060.webp',
      '/images/daniel/all/daniel-066.webp',
      '/images/daniel/all/daniel-065.webp',
      '/images/daniel/all/daniel-064.webp',
    ],
    after: [
      '/images/daniel/all/daniel-lucidatura-after1.webp',
    ],
  },

  // ── PROTEZIONE ─────────────────────────────────────────────────────────────
  protezione: {
    main:   '/images/daniel/all/daniel-103.webp',
    small1: '/images/daniel/all/daniel-080.webp',
    small2: '/images/daniel/all/daniel-059.webp',
    small3: '/images/daniel/all/daniel-071.webp',
    process: [
      '/images/daniel/all/daniel-107.webp',
      '/images/daniel/all/daniel-106.webp',
      '/images/daniel/all/daniel-105.webp',
      '/images/daniel/all/daniel-104.webp',
      '/images/daniel/all/daniel-103.webp',
      '/images/daniel/all/daniel-102.webp',
    ],
    after: [
      '/images/daniel/all/daniel-protezione-after1.webp',
    ],
  },

  // ── DETAILING ──────────────────────────────────────────────────────────────
  detailing: {
    main:   '/images/daniel/all/daniel-037.webp',
    small1: '/images/daniel/all/daniel-099.webp',
    small2: '/images/daniel/all/daniel-053.webp',
    small3: '/images/daniel/all/daniel-038.webp',
    process: [
      '/images/daniel/all/daniel-007.webp',
      '/images/daniel/all/daniel-162.webp',
      '/images/daniel/all/daniel-163.webp',
      '/images/daniel/all/daniel-164.webp',
      '/images/daniel/all/daniel-165.webp',
      '/images/daniel/all/daniel-037.webp',
    ],
    after: [
      '/images/daniel/all/daniel-detailing-after1.webp',
    ],
  },

  // ── ALTRI LAVORI ───────────────────────────────────────────────────────────
  // Clean gallery — no process modal, no labels, only photos
  altriLavori: {
    main:    '/images/daniel/all/daniel-174.webp',  // large photo left
    small1:  '/images/daniel/all/daniel-181.webp',  // right top
    small2:  '/images/daniel/all/daniel-169.webp',  // right bottom
    small3:  '/images/daniel/all/daniel-173.webp',  // bottom row left
    small4:  '/images/daniel/all/daniel-172.webp',  // bottom row right
    process: [] as string[],
    after:   [] as string[],
  },

} as const;

// CTA background image — change file name here if needed
const CTA_BG = '/images/daniel/all/daniel-023.webp';

// ─────────────────────────────────────────────────────────────────────────────
// END IMAGE CONTROL PANEL — do not edit components below unless changing layout
// ─────────────────────────────────────────────────────────────────────────────

type CategoryKey = keyof typeof PORTFOLIO_IMAGES;

interface PortfolioItem {
  id: number;
  category: CategoryKey;
  title: string;
  vehicle: string;
  duration: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  // ── VETRI ──
  { id: 1,  category: 'vetri',      title: 'Oscuramento Completo',       vehicle: 'TESLA MODEL 3',              duration: '3 ore',    description: 'Pellicole oscuranti su vetri posteriori e lunotto per maggiore privacy, comfort e protezione solare.',    image: PORTFOLIO_IMAGES.vetri.main   },
  { id: 4,  category: 'vetri',      title: 'Oscuramento Completo',       vehicle: 'AUDI A3',                    duration: '2 ore',    description: "Oscuramento vetri con finitura uniforme, pulita e coerente con lo stile dell'auto.",                        image: PORTFOLIO_IMAGES.vetri.small1 },
  { id: 8,  category: 'vetri',      title: 'Oscuramento Vetri',          vehicle: 'JEEP COMPASS',               duration: '3 ore',    description: 'Pellicole oscuranti per migliorare privacy, protezione interna ed estetica.',                               image: PORTFOLIO_IMAGES.vetri.small2 },
  { id: 10, category: 'vetri',      title: 'Oscuramento Vetri',          vehicle: 'JEEP WRANGLER',              duration: '4 ore',    description: 'Finitura scura e protettiva per un look più deciso e funzionale.',                                          image: PORTFOLIO_IMAGES.vetri.small3 },
  // ── WRAPPING ──
  { id: 2,  category: 'wrapping',   title: 'Wrapping Completo Sportivo', vehicle: 'TESLA MODEL Y',              duration: '4 giorni', description: 'Cambio colore completo con pellicola opaca e finitura sportiva uniforme.',                                  image: PORTFOLIO_IMAGES.wrapping.main   },
  { id: 6,  category: 'wrapping',   title: 'Wrapping Completo',          vehicle: 'AUDI A3',                    duration: '2 giorni', description: 'Wrapping totale con pellicola dedicata e finitura pulita.',                                                 image: PORTFOLIO_IMAGES.wrapping.small1 },
  { id: 11, category: 'wrapping',   title: 'Wrapping Stile M3 GTR',      vehicle: 'BMW SERIE 3 E46',            duration: '5 giorni', description: 'Personalizzazione estetica ispirata allo stile racing, con dettagli sportivi e finitura decisa.',           image: PORTFOLIO_IMAGES.wrapping.small2 },
  { id: 12, category: 'wrapping',   title: 'Wrapping Sportivo',          vehicle: 'RANGE ROVER SPORT',          duration: '3 giorni', description: 'Pellicola opaca con finitura premium e carattere più aggressivo.',                                          image: PORTFOLIO_IMAGES.wrapping.small3 },
  // ── INTERNI ──
  { id: 3,  category: 'interni',    title: 'Rivestimento Cielo',         vehicle: 'MERCEDES-BENZ',              duration: '1 giorno', description: 'Rivestimento cielo interno con effetto luminoso e finitura personalizzata.',                                image: PORTFOLIO_IMAGES.interni.main   },
  { id: 7,  category: 'interni',    title: 'Rivestimento Cielo in Alcantara', vehicle: 'PORSCHE CAYENNE',       duration: '3 giorni', description: 'Rifinitura del cielo interno con materiale effetto Alcantara e lavorazione su misura.',                      image: PORTFOLIO_IMAGES.interni.small1 },
  { id: 13, category: 'interni',    title: 'Pannelli Interni Custom',    vehicle: 'PANNELLI INTERNI',           duration: '2 giorni', description: "Rivestimento e rifinitura personalizzata per pannelli e dettagli dell'abitacolo.",                            image: PORTFOLIO_IMAGES.interni.small2 },
  { id: 14, category: 'interni',    title: 'Restauro Rivestimento Interno', vehicle: 'ALCANTARA CUSTOM',        duration: '4 giorni', description: 'Lavorazione interna su misura con finitura pulita, elegante e coerente con l\'abitacolo.',                   image: PORTFOLIO_IMAGES.interni.small3 },
  // ── LUCIDATURA ──
  { id: 5,  category: 'lucidatura', title: 'Lucidatura Completa',        vehicle: 'PORSCHE CAYENNE',            duration: '2 giorni', description: 'Correzione vernice multi-step per profondità, gloss e protezione finale.',                                   image: PORTFOLIO_IMAGES.lucidatura.main   },
  { id: 9,  category: 'lucidatura', title: 'Ripristino Vernice',         vehicle: 'AUDI A1',                    duration: '1 giorno', description: 'Correzione difetti, aloni e micrograffi per una superficie più pulita e brillante.',                         image: PORTFOLIO_IMAGES.lucidatura.small1 },
  { id: 15, category: 'lucidatura', title: 'Ceramic Coating',            vehicle: 'DETTAGLIO LUCIDATURA',       duration: '3 giorni', description: 'Applicazione trattamento protettivo per maggiore gloss, idrorepellenza e durata.',                          image: PORTFOLIO_IMAGES.lucidatura.small2 },
  { id: 16, category: 'lucidatura', title: 'Test Correzione Vernice',    vehicle: 'TEST VERNICE',               duration: '2 giorni', description: 'Controllo prima/dopo su area di prova per valutare correzione, gloss e finitura.',                           image: PORTFOLIO_IMAGES.lucidatura.small3 },
  // ── PROTEZIONE ──
  { id: 17, category: 'protezione', title: 'PPF Completo',               vehicle: 'FERRARI ROMA',               duration: '6 giorni', description: 'Pellicola protettiva trasparente su carrozzeria completa per massima protezione.',                          image: PORTFOLIO_IMAGES.protezione.main   },
  { id: 18, category: 'protezione', title: 'PPF Frontale',               vehicle: 'AUDI RS3',                   duration: '2 giorni', description: 'Protezione frontale su paraurti, cofano e zone più esposte a pietrisco e usura.',                           image: PORTFOLIO_IMAGES.protezione.small1 },
  { id: 19, category: 'protezione', title: 'Protezione Fari',            vehicle: 'BMW SERIE 4',                duration: '3 ore',    description: 'Pellicola protettiva su fari e dettagli anteriori per preservare trasparenza e finitura.',                  image: PORTFOLIO_IMAGES.protezione.small2 },
  { id: 20, category: 'protezione', title: 'Protezione Soglie',          vehicle: 'VOLVO XC90',                 duration: '1 giorno', description: 'Pellicola protettiva su soglie e zone soggette a graffi, sfregamenti e usura quotidiana.',                  image: PORTFOLIO_IMAGES.protezione.small3 },
  // ── DETAILING ──
  { id: 21, category: 'detailing',  title: 'Sanificazione Interni',      vehicle: 'MERCEDES-BENZ CLASSE C',     duration: '4 ore',    description: "Sanificazione profonda e pulizia completa dell'abitacolo.",                                                  image: PORTFOLIO_IMAGES.detailing.main   },
  { id: 22, category: 'detailing',  title: 'Detailing Esterno',          vehicle: 'BMW E38',                    duration: '1 giorno', description: 'Pulizia, lucidatura e finitura esterna con attenzione ai dettagli.',                                         image: PORTFOLIO_IMAGES.detailing.small1 },
  { id: 23, category: 'detailing',  title: 'Restauro Fari',              vehicle: 'FARI AUTO',                  duration: '2 ore',    description: 'Lucidatura e ripristino trasparenza fari per estetica, sicurezza e visibilità.',                             image: PORTFOLIO_IMAGES.detailing.small2 },
  { id: 24, category: 'detailing',  title: 'Detailing Interni Completo', vehicle: 'FORD FOCUS',                 duration: '3 ore',    description: "Pulizia completa degli interni, plastiche, tessuti e superfici dell'abitacolo.",                              image: PORTFOLIO_IMAGES.detailing.small3 },
  // ── ALTRI LAVORI ──
  { id: 25, category: 'altriLavori', title: 'Altri Lavori',              vehicle: 'Vari veicoli',               duration: 'Su misura', description: 'Una selezione di interventi diversi: dettagli, finiture, pellicole, protezioni e lavorazioni speciali realizzate su veicoli e progetti differenti.', image: PORTFOLIO_IMAGES.altriLavori.main   },
  { id: 26, category: 'altriLavori', title: 'Lavorazioni Speciali',      vehicle: 'Vari veicoli',               duration: 'Su misura', description: 'Interventi speciali e personalizzati su veicoli e superfici.',                                              image: PORTFOLIO_IMAGES.altriLavori.small1 },
  { id: 27, category: 'altriLavori', title: 'Dettagli e Finiture',       vehicle: 'Vari veicoli',               duration: 'Su misura', description: 'Cura dei dettagli e finiture di precisione per ogni tipo di veicolo.',                                     image: PORTFOLIO_IMAGES.altriLavori.small2 },
  { id: 28, category: 'altriLavori', title: 'Progetti Extra',            vehicle: 'Vari veicoli',               duration: 'Su misura', description: 'Progetti fuori categoria: pellicole, protezioni e interventi su misura.',                                   image: PORTFOLIO_IMAGES.altriLavori.small3 },
];

const categories: { id: CategoryKey; name: string }[] = [
  { id: 'vetri',       name: 'Vetri' },
  { id: 'wrapping',    name: 'Wrapping' },
  { id: 'interni',     name: 'Interni' },
  { id: 'lucidatura',  name: 'Lucidatura' },
  { id: 'protezione',  name: 'Protezione' },
  { id: 'detailing',   name: 'Detailing' },
  { id: 'altriLavori', name: 'Altri lavori' },
];

// ─── Process Gallery Modal ────────────────────────────────────────────────────

const TEAL = '#00d9c0';
const TEAL_DIM = 'rgba(0,217,192,0.22)';
const TEAL_FAINT = 'rgba(0,217,192,0.10)';

interface GalleryModalProps {
  images: string[];
  initialIndex: number;
  title: string;
  onClose: () => void;
}

function GalleryModal({ images, initialIndex, title, onClose }: GalleryModalProps) {
  const [current, setCurrent] = useState(initialIndex);
  const [fade, setFade] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();
    return () => { document.body.style.overflow = saved; };
  }, []);

  const goTo = useCallback((index: number) => {
    setFade(false);
    setTimeout(() => { setCurrent(index); setFade(true); }, 150);
  }, []);

  const prev = useCallback(() => goTo((current - 1 + images.length) % images.length), [current, images.length, goTo]);
  const next = useCallback(() => goTo((current + 1) % images.length), [current, images.length, goTo]);

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'ArrowLeft') { prev(); return; }
      if (e.key === 'ArrowRight') { next(); return; }
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
          'button,[href],[tabindex]:not([tabindex="-1"])'
        );
        if (!focusable?.length) return;
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (e.shiftKey) { if (document.activeElement === first) { e.preventDefault(); last.focus(); } }
        else            { if (document.activeElement === last)  { e.preventDefault(); first.focus(); } }
      }
    };
    window.addEventListener('keydown', handle);
    return () => window.removeEventListener('keydown', handle);
  }, [onClose, prev, next]);

  const src = images[current] ?? images[0] ?? '';

  // Gradient line: transparent → teal → transparent, giving a thicker center / thinner edges effect
  const gradLine = `linear-gradient(to right, transparent 0%, ${TEAL_DIM} 18%, rgba(0,217,192,0.38) 50%, ${TEAL_DIM} 82%, transparent 100%)`;
  // Slightly stronger variant for the outer frame top/bottom inset highlight
  const gradLineStrong = `linear-gradient(to right, transparent 0%, rgba(0,217,192,0.18) 12%, rgba(0,217,192,0.45) 50%, rgba(0,217,192,0.18) 88%, transparent 100%)`;

  return (
    <>
      <style>{`
        @keyframes _gIn { from { opacity:0; transform:scale(0.968); } to { opacity:1; transform:scale(1); } }
        ._gModal { animation: _gIn 0.24s cubic-bezier(0.22,1,0.36,1) both; }
        ._gImg   { transition: opacity 0.15s ease; }

        ._gArrow:hover { color: #fff !important; }
        ._gArrow:hover svg { stroke: ${TEAL}; }
        ._gClose:hover { color: #fff !important; }
        ._gThumb:hover { opacity: 0.75 !important; }

        @media (max-width: 639px) {
          ._gModal {
            width: 100vw !important;
            max-width: 100vw !important;
            height: calc(100dvh - 20%) !important;
            max-height: calc(100dvh - 20%) !important;
            /* strip solid side/bottom borders on mobile — gradient lines handle it */
            border-left: none !important;
            border-right: none !important;
            border-bottom: none !important;
            border-top: none !important;
            border-radius: 0 !important;
          }
          ._gArrowDesktop { display: none !important; }
          ._gThumbs       { display: none !important; }
          ._gDots         { display: flex !important; }
          ._gMobileNav    { display: flex !important; }
          /* hide the top gradient line above the header on mobile */
          ._gTopLine      { display: none !important; }
        }
      `}</style>

      {/* ── Fullscreen overlay ── */}
      <div
        className="fixed inset-0 z-[9999] flex items-end justify-center"
        style={{ backgroundColor: 'rgba(0,0,0,0.92)' }}
        onClick={e => { if (e.target === e.currentTarget) onClose(); }}
        role="dialog"
        aria-modal="true"
        aria-label="Processo di lavorazione"
      >
        <div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>

          {/* ── Modal shell ── */}
          <div
            ref={modalRef}
            className="_gModal"
            style={{
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              background: '#080808',
              /* Outer frame: uniform teal border — center-weighted effect comes from gradient inset lines */
              border: `1px solid ${TEAL_DIM}`,
              boxShadow: `0 32px 80px rgba(0,0,0,0.85), 0 0 0 1px ${TEAL_FAINT}`,
              width: 'min(90vw, 1280px)',
              height: 'min(86vh, 820px)',
              overflow: 'hidden',
              position: 'relative',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Top inset gradient line — thicker center, fades to corners (desktop only) */}
            <div className="_gTopLine" style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: gradLineStrong, zIndex: 2 }} />
            {/* Bottom inset gradient line */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: gradLineStrong, zIndex: 2 }} />

            {/* ── Header ── */}
            <div style={{
              flexShrink: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '58px',
              background: '#080808',
            }}>
              {/* Centered title block */}
              <div style={{ textAlign: 'center', lineHeight: 1 }}>
                <div style={{ color: TEAL, fontSize: '9px', letterSpacing: '0.26em', textTransform: 'uppercase', fontFamily: 'inherit', marginBottom: '5px' }}>
                  Processo di lavorazione
                </div>
                <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'inherit' }}>
                  {title}
                </div>
              </div>

              {/* Close button — no box, just clean icon */}
              <button
                ref={closeButtonRef}
                onClick={onClose}
                aria-label="Chiudi galleria"
                className="_gClose"
                style={{
                  position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                  width: '32px', height: '32px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent', border: 'none',
                  color: 'rgba(255,255,255,0.38)',
                  cursor: 'pointer',
                  transition: 'color 0.15s',
                }}
              >
                <X size={14} strokeWidth={1.4} />
              </button>

              {/* Header bottom divider — gradient line */}
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: gradLine }} />
            </div>

            {/* ── Image stage ── */}
            <div style={{
              flex: '1 1 0%',
              minHeight: 0,
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#040404',
              overflow: 'hidden',
            }}>
              <img
                key={src}
                src={src}
                alt={`${title} — fase ${current + 1}`}
                className="_gImg"
                style={{
                  display: 'block',
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  opacity: fade ? 1 : 0,
                }}
                onError={e => { if (images[0]) (e.currentTarget as HTMLImageElement).src = images[0]; }}
              />

              {/* Desktop ghost arrows */}
              <button
                onClick={prev}
                aria-label="Immagine precedente"
                className="_gArrow _gArrowDesktop"
                style={{
                  position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)',
                  width: '40px', height: '56px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.30)', cursor: 'pointer',
                  transition: 'color 0.15s',
                }}
              >
                <ChevronLeft size={26} strokeWidth={1.2} />
              </button>
              <button
                onClick={next}
                aria-label="Immagine successiva"
                className="_gArrow _gArrowDesktop"
                style={{
                  position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)',
                  width: '40px', height: '56px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'none', border: 'none',
                  color: 'rgba(255,255,255,0.30)', cursor: 'pointer',
                  transition: 'color 0.15s',
                }}
              >
                <ChevronRight size={26} strokeWidth={1.2} />
              </button>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ flexShrink: 0, background: '#080808', position: 'relative' }}>
              {/* Top divider of bottom bar — gradient line */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: gradLine }} />

              {/* Desktop thumbnails */}
              <div className="_gThumbs" style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '7px', padding: '12px 20px',
              }}>
                {images.map((imgSrc, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Vai alla foto ${i + 1}`}
                    className="_gThumb"
                    style={{
                      flexShrink: 0, width: '76px', height: '50px',
                      overflow: 'hidden',
                      border: i === current ? `1.5px solid ${TEAL}` : '1.5px solid rgba(255,255,255,0.07)',
                      opacity: i === current ? 1 : 0.32,
                      cursor: 'pointer', background: '#111', padding: 0,
                      transition: 'opacity 0.15s, border-color 0.15s',
                    }}
                  >
                    <img src={imgSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </button>
                ))}
              </div>

              {/* Mobile nav: bare arrows + dots */}
              <div className="_gMobileNav" style={{
                display: 'none', flexDirection: 'column',
                alignItems: 'center', gap: '10px',
                padding: '10px 20px 14px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  {/* Bare arrow — no box */}
                  <button
                    onClick={prev}
                    aria-label="Immagine precedente"
                    style={{
                      width: '44px', height: '36px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'none', border: 'none',
                      color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                    }}
                  >
                    <ChevronLeft size={20} strokeWidth={1.3} />
                  </button>

                  {/* Progress dots */}
                  <div className="_gDots" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Vai alla foto ${i + 1}`}
                        style={{
                          border: 'none', cursor: 'pointer', padding: 0,
                          background: i === current ? TEAL : 'rgba(255,255,255,0.22)',
                          width: i === current ? '22px' : '5px',
                          height: '3px',
                          transition: 'width 0.22s, background 0.22s',
                        }}
                      />
                    ))}
                  </div>

                  {/* Bare arrow — no box */}
                  <button
                    onClick={next}
                    aria-label="Immagine successiva"
                    style={{
                      width: '44px', height: '36px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'none', border: 'none',
                      color: 'rgba(255,255,255,0.45)', cursor: 'pointer',
                    }}
                  >
                    <ChevronRight size={20} strokeWidth={1.3} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// ─── Cards ────────────────────────────────────────────────────────────────────

interface CardFeaturedProps {
  item: PortfolioItem;
  onOpenGallery: () => void;
}

function CardFeatured({ item, onOpenGallery }: CardFeaturedProps) {
  return (
    <div className="relative overflow-hidden group" style={{ aspectRatio: '16/10' }}>
      {item.image
        ? <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
        : <div className="absolute inset-0 bg-[#0f1012]" />
      }
      {/* desktop overlay */}
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {/* mobile overlay — stronger bottom for readability */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

      {/* desktop text block */}
      <div className="absolute bottom-0 left-0 right-0 p-6 hidden sm:block">
        <p className="text-accent font-sans text-xs tracking-[0.16em] uppercase mb-2">{item.vehicle}</p>
        <h3 className="font-heading font-normal text-white text-3xl leading-tight tracking-[-0.01em] mb-2">{item.title}</h3>
        <p className="text-white/50 font-sans text-sm leading-relaxed max-w-sm mb-5">{item.description}</p>
        <button
          onClick={e => { e.stopPropagation(); onOpenGallery(); }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#00d9c0]/60 text-[#00d9c0] font-sans font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-[#00d9c0]/10 hover:border-[#00d9c0] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00d9c0]"
          aria-label={`Guarda il processo per ${item.title}`}
        >
          <Play className="w-3 h-3" />
          Guarda il processo
        </button>
      </div>

      {/* mobile text block — tighter, button lower */}
      <div className="absolute bottom-0 left-0 right-0 sm:hidden" style={{ padding: '0 18px 16px' }}>
        <p
          className="text-accent font-sans uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.12em', marginBottom: '4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}
        >
          {item.vehicle}
        </p>
        <h3
          className="font-heading font-normal text-white"
          style={{ fontSize: 'clamp(22px, 6vw, 28px)', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '5px', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}
        >
          {item.title}
        </h3>
        <p
          className="font-sans line-clamp-2"
          style={{ color: '#00d9c0', fontSize: '11px', lineHeight: 1.4, marginBottom: '12px', maxWidth: '92%' }}
        >
          {item.description}
        </p>
        <button
          onClick={e => { e.stopPropagation(); onOpenGallery(); }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#00d9c0]/60 text-[#00d9c0] font-sans font-medium uppercase hover:bg-[#00d9c0]/10 hover:border-[#00d9c0] transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00d9c0]"
          style={{ fontSize: '10px', letterSpacing: '0.18em' }}
          aria-label={`Guarda il processo per ${item.title}`}
        >
          <Play className="w-3 h-3" />
          Guarda il processo
        </button>
      </div>
    </div>
  );
}

function CardSmall({ item }: { item: PortfolioItem }) {
  return (
    <div className="relative overflow-hidden group" style={{ aspectRatio: '4/3' }}>
      {item.image
        ? <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        : <div className="absolute inset-0 bg-[#0f1012]" />
      }
      {/* desktop overlay */}
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      {/* mobile overlay */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

      {/* desktop text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 hidden sm:block">
        <p className="text-accent font-sans text-xs tracking-[0.14em] uppercase mb-1">{item.vehicle}</p>
        <h3 className="font-heading font-normal text-white text-lg leading-snug">{item.title}</h3>
      </div>

      {/* mobile text */}
      <div className="absolute bottom-0 left-0 right-0 sm:hidden" style={{ padding: '0 14px 12px' }}>
        <p
          className="text-accent font-sans uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.11em', marginBottom: '3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}
        >
          {item.vehicle}
        </p>
        <h3
          className="font-heading font-normal text-white"
          style={{ fontSize: 'clamp(16px, 4.5vw, 20px)', lineHeight: 1.05, textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
        >
          {item.title}
        </h3>
      </div>
    </div>
  );
}

function CardGrid({ item }: { item: PortfolioItem }) {
  return (
    <div className="relative overflow-hidden group" style={{ aspectRatio: '3/2' }}>
      {item.image
        ? <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
        : <div className="absolute inset-0 bg-[#0f1012]" />
      }
      {/* desktop overlay */}
      <div className="absolute inset-0 hidden sm:block bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
      {/* mobile overlay */}
      <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-black/95 via-black/55 to-black/10" />

      {/* desktop text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 hidden sm:block">
        <p className="text-accent font-sans text-[10px] tracking-[0.14em] uppercase mb-1">{item.vehicle}</p>
        <h3 className="font-heading font-normal text-white text-base leading-snug">{item.title}</h3>
        <p className="text-white/40 font-sans text-xs leading-relaxed mt-1 line-clamp-2">{item.description}</p>
      </div>

      {/* mobile text */}
      <div className="absolute bottom-0 left-0 right-0 sm:hidden" style={{ padding: '0 14px 12px' }}>
        <p
          className="text-accent font-sans uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.11em', marginBottom: '3px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}
        >
          {item.vehicle}
        </p>
        <h3
          className="font-heading font-normal text-white"
          style={{ fontSize: 'clamp(15px, 4vw, 17px)', lineHeight: 1.05, marginBottom: '4px', textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}
        >
          {item.title}
        </h3>
        <p
          className="font-sans line-clamp-2"
          style={{ color: '#00d9c0', fontSize: '11px', lineHeight: 1.35, maxWidth: '92%' }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
}

// ─── Altri Lavori — clean photo gallery, no labels/buttons/modal ─────────────

function AltriLavoriGallery() {
  const imgs = PORTFOLIO_IMAGES.altriLavori;
  return (
    <div className="space-y-3">
      {/* Row 1: large left + two stacked right */}
      <div className="grid lg:grid-cols-12 gap-3">
        <div className="lg:col-span-8 overflow-hidden group" style={{ aspectRatio: '16/10' }}>
          <img
            src={imgs.main}
            alt="Altri lavori"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="lg:col-span-4 grid grid-rows-2 gap-3">
          <div className="overflow-hidden group" style={{ aspectRatio: '4/3' }}>
            <img
              src={imgs.small1}
              alt="Altri lavori"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
          <div className="overflow-hidden group" style={{ aspectRatio: '4/3' }}>
            <img
              src={imgs.small2}
              alt="Altri lavori"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
      {/* Row 2: two equal photos */}
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="overflow-hidden group" style={{ aspectRatio: '3/2' }}>
          <img
            src={imgs.small3}
            alt="Altri lavori"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
        <div className="overflow-hidden group" style={{ aspectRatio: '3/2' }}>
          <img
            src={imgs.small4}
            alt="Altri lavori"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [filter, setFilter] = useState<CategoryKey>('vetri');
  const [galleryOpen, setGalleryOpen] = useState(false);

  const filtered = portfolioItems.filter(item => item.category === filter);
  const featuredItem = filtered[0];
  const galleryImages = PORTFOLIO_IMAGES[filter].process;

  return (
    <div className="min-h-screen text-white bg-[#000000]" style={{ paddingTop: '88px' }}>

      {/* Process gallery modal — not used for altriLavori */}
      {galleryOpen && featuredItem && filter !== 'altriLavori' && (
        <GalleryModal
          images={galleryImages}
          initialIndex={0}
          title={featuredItem.title}
          onClose={() => setGalleryOpen(false)}
        />
      )}

      {/* Page header */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-5xl md:text-7xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-6">
            Portfolio
          </h1>
          <p className="text-white/50 font-sans text-base max-w-md leading-relaxed mb-10">
            Scopri i risultati del nostro lavoro su veicoli di ogni tipo.
          </p>

          {/* Filters — desktop: single row | mobile: 3-2-1 pyramid */}
          <div className="hidden md:flex gap-0 border border-accent/20 self-start w-fit">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 font-sans font-medium uppercase text-xs tracking-[0.14em] transition-colors duration-150 border-r border-accent/15 last:border-r-0 ${
                  filter === cat.id
                    ? 'bg-accent text-[#000]'
                    : 'bg-transparent text-white/45 hover:text-white hover:bg-accent/5'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Mobile rows: 3 + 2 + 2 */}
          <div className="md:hidden flex flex-col items-center gap-2">
            {[categories.slice(0, 3), categories.slice(3, 5), categories.slice(5, 7)].map((row, ri) => (
              <div key={ri} className="flex gap-2">
                {row.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`px-5 py-2.5 font-sans font-medium uppercase text-xs tracking-[0.14em] transition-colors duration-150 border border-accent/20 ${
                      filter === cat.id
                        ? 'bg-accent text-[#000] border-accent'
                        : 'bg-transparent text-white/55 hover:text-white hover:bg-accent/5'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Grid */}
      <section className="py-10 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          {filtered.length === 0 && filter !== 'altriLavori' && (
            <div className="py-24 text-center">
              <p className="text-white/30 font-sans text-sm">Nessun lavoro in questa categoria.</p>
            </div>
          )}

          {/* Altri lavori — clean photo gallery, no labels/modal */}
          {filter === 'altriLavori' && <AltriLavoriGallery />}

          {/* All other categories — standard process-card layout */}
          {filter !== 'altriLavori' && filtered.length > 0 && (
            <div className="space-y-3">
              <div className="grid lg:grid-cols-12 gap-3">
                <div className="lg:col-span-8">
                  <CardFeatured item={filtered[0]} onOpenGallery={() => setGalleryOpen(true)} />
                </div>
                <div className="lg:col-span-4 grid grid-rows-2 gap-3">
                  {filtered[1] && <CardSmall item={filtered[1]} />}
                  {filtered[2] && <CardSmall item={filtered[2]} />}
                  {!filtered[1] && <div className="bg-[#0b0c0e]" />}
                  {!filtered[2] && <div className="bg-[#0b0c0e]" />}
                </div>
              </div>

              {filtered.length > 3 && (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {filtered.slice(3).map((item) => (
                    <CardGrid key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <div className="divider-teal" />

      {/* Stats strip */}
      <section className="py-16 px-6 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-accent/12">
            {[
              { value: '950+',     label: 'Veicoli trattati' },
              { value: 'DAL 2015', label: 'Esperienza e lavorazioni' },
              { value: '50 KM',    label: 'Area operativa da Novara' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center py-10 md:py-6 gap-2">
                <span className="font-heading font-normal text-6xl text-white leading-none tracking-[-0.03em]">{stat.value}</span>
                <div className="w-6 h-px bg-accent mt-1" />
                <span className="font-sans text-xs tracking-[0.18em] uppercase text-white/35 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-teal" />

      {/* Final CTA */}
      <section className="py-0">
        <div className="relative overflow-hidden" style={{ minHeight: '480px' }}>
          <img src={CTA_BG} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/96 via-[#000000]/70 to-[#000000]/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/40 via-transparent to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full min-h-[480px] px-10 lg:px-20 py-20">
            <div className="max-w-[560px]">
              <h2 className="text-4xl md:text-6xl font-heading font-normal text-white leading-[1.05] tracking-[-0.025em] mb-5">
                Vuoi un risultato simile?
              </h2>
              <p className="text-white/50 font-sans text-base leading-relaxed mb-10">
                Raccontaci il tuo progetto e ricevi una proposta personalizzata.
              </p>
              <a
                href="https://wa.me/393893451489?text=Ciao!%20Ho%20visto%20il%20vostro%20portfolio%20e%20vorrei%20un%20preventivo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-accent hover:bg-accent/90 text-[#000] font-sans font-bold uppercase text-xs tracking-widest transition-colors duration-200"
              >
                Preventivo su WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
