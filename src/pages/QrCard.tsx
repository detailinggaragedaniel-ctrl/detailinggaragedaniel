import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Navigation } from 'lucide-react';

// ─── Editable constants ───────────────────────────────────────────────────────
const QR_CARD_BG = '/images/daniel/all/daniel-182.webp';

const SOCIAL = {
  whatsapp:  'https://wa.me/393893451489?text=Ciao%20vorrei%20un%20preventivo%20gratuito',
  facebook:  'https://www.facebook.com/109292172016288',
  instagram: 'https://www.instagram.com/detailing_garage__daniel/',
  tiktok:    'https://www.tiktok.com/@detailinggaragedaniel',
  telegram:  'https://t.me/Dimak89',
};

const GOOGLE_REVIEW_URL = 'https://g.page/r/CT2FaJPotiY8EBM/review';
// ─────────────────────────────────────────────────────────────────────────────

// ── Inline SVG icons ──────────────────────────────────────────────────────────
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z"/>
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

// ── Decorative card header — self-contained, does NOT import UnifiedHeader ────
function CardHeader() {
  return (
    <div className="relative w-full" style={{ height: '96px' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="qr-notch-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.02 L 0.845,0.02 L 0.677,0.75 L 0.323,0.75 L 0.155,0.02 L 0,0.02 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0"
        style={{ background: '#000000', clipPath: 'url(#qr-notch-clip)' }}
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 96"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="qr-notch-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
            <stop offset="20%"  stopColor="#00c4d4" stopOpacity="0.3" />
            <stop offset="38%"  stopColor="#00c4d4" stopOpacity="0.65" />
            <stop offset="50%"  stopColor="#00c4d4" stopOpacity="0.8" />
            <stop offset="62%"  stopColor="#00c4d4" stopOpacity="0.65" />
            <stop offset="80%"  stopColor="#00c4d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          points="0,1.92 155,1.92 323,72 677,72 845,1.92 1000,1.92"
          fill="none"
          stroke="url(#qr-notch-grad)"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div
        className="absolute flex flex-col items-center justify-center pointer-events-none select-none"
        style={{
          left: '52px',
          right: '52px',
          top: '2px',
          height: '70px',
          gap: '3px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', width: '100%' }}>
          <span
            className="header-logo-font"
            style={{ fontSize: '13px', letterSpacing: '0.15em', color: '#ffffff', lineHeight: 1, whiteSpace: 'nowrap' }}
          >
            DETAILING
          </span>
          <span
            className="header-logo-font"
            style={{ fontSize: '13px', letterSpacing: '0.15em', color: '#ffffff', lineHeight: 1, whiteSpace: 'nowrap' }}
          >
            GARAGE
          </span>
        </div>
        <span
          className="header-logo-font"
          style={{ fontSize: '19px', letterSpacing: '0.38em', color: '#0a7c8c', lineHeight: 1, display: 'block', textAlign: 'center', transform: 'scaleX(1.08) translateX(4px)', transformOrigin: 'center', whiteSpace: 'nowrap' }}
        >
          DANIEL
        </span>
      </div>

      <div className="absolute left-0" style={{ top: '0px', width: '42px', height: '96px' }}>
        <a
          href={SOCIAL.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 0, 100% 22%, 100% 78%, 0 100%)',
            paddingRight: '6px',
          }}
        >
          <Facebook className="w-[18px] h-[18px]" style={{ color: '#00c4d4' }} />
        </a>
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 96"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="qr-btn-left-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="0,0 42,21.12 42,74.88 0,96" fill="none" stroke="url(#qr-btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="0" x2="0" y2="96" stroke="url(#qr-btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="absolute right-0" style={{ top: '0px', width: '42px', height: '96px' }}>
        <a
          href={SOCIAL.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 22%, 100% 0, 100% 100%, 0 78%)',
            paddingLeft: '6px',
          }}
        >
          <Instagram className="w-[18px] h-[18px]" style={{ color: '#00c4d4' }} />
        </a>
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 96"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="qr-btn-right-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="42,0 0,21.12 0,74.88 42,96" fill="none" stroke="url(#qr-btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="42" y1="0" x2="42" y2="96" stroke="url(#qr-btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}

// ── Decorative bottom frame — with Telegram/TikTok side buttons ──────────────
function CardFooter() {
  return (
    <div className="relative w-full" style={{ height: '96px' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="qr-footer-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,1 L 1,1 L 1,0.98 L 0.845,0.98 L 0.677,0.25 L 0.323,0.25 L 0.155,0.98 L 0,0.98 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0"
        style={{ background: '#000000', clipPath: 'url(#qr-footer-clip)' }}
      />

      <svg
        aria-hidden="true"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 96"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="qr-footer-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
            <stop offset="20%"  stopColor="#00c4d4" stopOpacity="0.3" />
            <stop offset="38%"  stopColor="#00c4d4" stopOpacity="0.65" />
            <stop offset="50%"  stopColor="#00c4d4" stopOpacity="0.8" />
            <stop offset="62%"  stopColor="#00c4d4" stopOpacity="0.65" />
            <stop offset="80%"  stopColor="#00c4d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline
          points="0,94.08 155,94.08 323,24 677,24 845,94.08 1000,94.08"
          fill="none"
          stroke="url(#qr-footer-grad)"
          strokeWidth="0.9"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Link
        to="/"
        className="absolute flex flex-col items-center justify-center select-none"
        style={{ left: '52px', right: '52px', top: '22px', height: '52px', gap: '3px', textDecoration: 'none' }}
      >
        <span
          className="header-logo-font"
          style={{ fontSize: '13px', letterSpacing: '0.28em', color: '#ffffff', lineHeight: 1, whiteSpace: 'nowrap' }}
        >
          VISITA IL SITO
        </span>
        <span
          className="font-sans"
          style={{ fontSize: '8px', color: 'rgba(0,196,212,0.6)', letterSpacing: '0.12em', lineHeight: 1 }}
        >
          detailinggaragedaniel.it
        </span>
      </Link>

      <div className="absolute left-0" style={{ top: '0px', width: '42px', height: '96px' }}>
        <a
          href={SOCIAL.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 0, 100% 22%, 100% 78%, 0 100%)',
            paddingRight: '6px',
          }}
        >
          <TelegramIcon className="w-[18px] h-[18px]" style={{ color: '#00c4d4' } as React.CSSProperties} />
        </a>
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 96"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="qr-footer-btn-left-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="0,0 42,21.12 42,74.88 0,96" fill="none" stroke="url(#qr-footer-btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="0" x2="0" y2="96" stroke="url(#qr-footer-btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="absolute right-0" style={{ top: '0px', width: '42px', height: '96px' }}>
        <a
          href={SOCIAL.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 22%, 100% 0, 100% 100%, 0 78%)',
            paddingLeft: '6px',
          }}
        >
          <TikTokIcon className="w-[17px] h-[17px]" style={{ color: '#00c4d4' } as React.CSSProperties} />
        </a>
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 96"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="qr-footer-btn-right-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="42,0 0,21.12 0,74.88 42,96" fill="none" stroke="url(#qr-footer-btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="42" y1="0" x2="42" y2="96" stroke="url(#qr-footer-btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────
export default function QrCard() {
  useEffect(() => {
    document.title = 'Detailing Garage Daniel';
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => { document.head.removeChild(meta); };
  }, []);

  return (
    <div
      className="min-h-screen w-full flex items-start justify-center"
      style={{ background: '#050709' }}
    >
      <div className="fixed inset-0 z-0">
        <img
          src={QR_CARD_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 40%, rgba(0,0,0,0.82) 100%)' }} />
      </div>

      <div
        className="relative z-10 w-full flex flex-col"
        style={{ maxWidth: '430px', minHeight: '100vh' }}
      >
        <CardHeader />

        <div className="flex-1 flex flex-col px-5 pt-6 pb-4 gap-5">

          <div
            className="w-full flex flex-col gap-4"
            style={{
              background: 'rgba(0,0,0,0.62)',
              border: '1px solid rgba(0,196,212,0.22)',
              padding: '22px 20px',
            }}
          >
            <div className="flex flex-col gap-1">
              <p
                className="font-sans uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(0,196,212,0.7)', lineHeight: 1 }}
              >
                Detailing Auto Premium
              </p>
              <h1
                className="header-logo-font"
                style={{ fontSize: 'clamp(18px, 5.5vw, 22px)', color: '#ffffff', letterSpacing: '0.12em', lineHeight: 1.1 }}
              >
                DETAILING GARAGE<br />
                <span style={{ color: '#0a7c8c', letterSpacing: '0.3em' }}>DANIEL</span>
              </h1>
              <p
                className="font-sans"
                style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5, marginTop: '4px' }}
              >
                Detailing auto premium a Novara dal 2015.
              </p>
            </div>

            <div className="flex flex-col gap-3" style={{ borderTop: '1px solid rgba(0,196,212,0.15)', paddingTop: '12px' }}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Via+Stazione+1+28060+Nibbia+NO"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group"
              >
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#00c4d4' }} />
                <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.45 }}>
                  Via Stazione, 1, 28060 Nibbia NO
                </span>
              </a>
              <a
                href="tel:+393893451489"
                className="flex items-center gap-3"
              >
                <Phone className="w-4 h-4 shrink-0" style={{ color: '#00c4d4' }} />
                <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  +39 389 345 1489
                </span>
              </a>
              <a
                href="mailto:detailinggaragedaniel@gmail.com"
                className="flex items-center gap-3 translate-y-px sm:translate-y-0"
              >
                <Mail className="w-4 h-4 shrink-0" style={{ color: '#00c4d4' }} />
                <span className="font-sans" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>
                  detailinggaragedaniel@gmail.com
                </span>
              </a>
            </div>
          </div>

          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full transition-all duration-200 active:scale-[0.98]"
            style={{
              background: 'rgba(0,196,212,0.12)',
              border: '1px solid rgba(0,196,212,0.55)',
              padding: '16px 24px',
              color: '#00c4d4',
            }}
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0" />
            <span
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.22em' }}
            >
              Scrivici su WhatsApp
            </span>
          </a>

          <a
            href="tel:+393893451489"
            className="flex items-center justify-center gap-3 w-full transition-all duration-200 active:scale-[0.98]"
            style={{
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(255,255,255,0.1)',
              padding: '13px 24px',
              color: 'rgba(255,255,255,0.6)',
            }}
          >
            <Phone className="w-4 h-4 shrink-0" />
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.2em' }}
            >
              Chiama Ora
            </span>
          </a>

          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Via%20Stazione%2C%201%2C%2028060%20Nibbia%20NO"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full transition-all duration-200 active:scale-[0.98]"
            style={{
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(0,196,212,0.22)',
              padding: '13px 24px',
              color: 'rgba(0,196,212,0.8)',
            }}
          >
            <Navigation className="w-4 h-4 shrink-0" />
            <span
              className="font-sans font-medium uppercase"
              style={{ fontSize: '11px', letterSpacing: '0.2em' }}
            >
              Apri il Percorso su Google Maps
            </span>
          </a>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 w-full transition-all duration-200 active:scale-[0.98]"
            style={{
              background: 'rgba(0,196,212,0.18)',
              border: '1px solid rgba(0,196,212,0.72)',
              padding: '18px 24px',
              color: '#ffffff',
              boxShadow: '0 0 28px rgba(0,196,212,0.12)',
            }}
          >
            <span
              className="font-sans font-semibold uppercase"
              style={{ fontSize: '12px', letterSpacing: '0.22em', color: '#ffffff' }}
            >
              Lasciaci una recensione
            </span>
            <span
              className="font-sans"
              style={{ fontSize: '10px', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.62)', lineHeight: 1.35, textAlign: 'center' }}
            >
              La tua opinione ci aiuterebbe molto
            </span>
          </a>

          <div className="flex-1" style={{ minHeight: '8px' }} />
        </div>

        <CardFooter />
      </div>
    </div>
  );
}