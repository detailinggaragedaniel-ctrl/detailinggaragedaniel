/* ============================================================
   HEADER LOCK — DO NOT MODIFY
   Current correct Header typography and layout are protected here.
   Future portfolio/services/gallery edits must not touch this Header.

   Font:         Ethnocentric (local /fonts/Ethnocentric-Regular.otf)
   Logo colours: #ffffff (DETAILING/GARAGE) · #0a7c8c (DANIEL)
   Nav font:     11px / font-extrabold / tracking-[0.25em] / uppercase
   Nav bg rest:  #01414a (surface)
   Nav bg trans: rgba(1,65,74,0.30) + backdrop-blur
   Notch stroke: #00c4d4 gradient, appears on scroll
   Mobile menu:  13px / font-extrabold / tracking-[0.3em]
   ============================================================ */

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

/* HEADER LOCK — height constant must not change */
const HEADER_HEIGHT = 88;

/* HEADER LOCK — WhatsApp SVG icon used in mobile side button and menu CTA */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* HEADER LOCK — nav links list */
const NAV_LINKS = [
  { to: '/', label: 'HOME' },
  { to: '/servizi', label: 'SERVIZI' },
  { to: '/portfolio', label: 'PORTFOLIO' },
  { to: '/chi-siamo', label: 'CHI SIAMO' },
  { to: '/prezzi', label: 'PREZZI' },
  { to: '/contatti', label: 'CONTATTO' },
];

/* HEADER LOCK — helper returns the correct header-nav-link modifier class */
function navLinkClass(isActive: boolean, isScrolled: boolean): string {
  const base = 'header-nav-link';
  if (isActive)    return `${base} header-nav-link--active`;
  if (isScrolled)  return `${base} header-nav-link--scrolled`;
  return `${base} header-nav-link--transparent`;
}

/* HEADER LOCK — helper returns the correct header-mobile-nav-link modifier class */
function mobileNavLinkClass(isActive: boolean): string {
  const base = 'header-mobile-nav-link';
  return isActive ? `${base} header-mobile-nav-link--active` : `${base} header-mobile-nav-link--rest`;
}

export default function UnifiedHeader() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close menu on route change */
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* ============================================================
          HEADER LOCK — SVG clip-path definitions
          Desktop notch: #header-top-notch
          Mobile  notch: #header-top-notch-mobile
          DO NOT MODIFY these path values.
          ============================================================ */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          {/* HEADER LOCK — Desktop notch clip-path */}
          <clipPath id="header-top-notch" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.02 L 0.745,0.02 L 0.677,0.87 L 0.323,0.87 L 0.255,0.02 L 0,0.02 Z" fill="white" />
          </clipPath>
          {/* HEADER LOCK — Mobile notch clip-path (raised 15px, steeper angles) */}
          <clipPath id="header-top-notch-mobile" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 L 1,0.02 L 0.845,0.02 L 0.677,0.699 L 0.323,0.699 L 0.155,0.02 L 0,0.02 Z" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {/* HEADER LOCK — 5px top black bar (z: 10000) */}
      <div className="fixed top-0 left-0 right-0 z-[10000]" style={{ height: '5px', backgroundColor: '#000000' }} />

      {/* ============================================================
          HEADER LOCK — Desktop header frame (z: 9999, height: 88px)
          Background: #000000 clipped by header-notch-clip
          ============================================================ */}
      <header
        className="fixed left-0 right-0 z-[9999]"
        style={{ top: '5px', height: `${HEADER_HEIGHT}px` }}
      >
        {/* HEADER LOCK — black notch background */}
        <div className="absolute inset-0 bg-[#000000] header-notch-clip" />

        {/* HEADER LOCK — Notch contour SVG stroke (visible only when scrolled)
            Stroke: #00c4d4 linear gradient, width 0.8px non-scaling
            Desktop polyline: 0,1.76 255,1.76 323,76.56 677,76.56 745,1.76 1000,1.76
            Mobile  polyline: 0,1.76 155,1.76 323,61.53 677,61.53 845,1.76 1000,1.76 */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: isScrolled ? 1 : 0, transition: 'opacity 0.35s ease' }}
          viewBox="0 0 1000 88"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="notch-stroke-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="20%"  stopColor="#00c4d4" stopOpacity="0.25" />
              <stop offset="38%"  stopColor="#00c4d4" stopOpacity="0.55" />
              <stop offset="50%"  stopColor="#00c4d4" stopOpacity="0.70" />
              <stop offset="62%"  stopColor="#00c4d4" stopOpacity="0.55" />
              <stop offset="80%"  stopColor="#00c4d4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline className="notch-contour-desktop" points="0,1.76 255,1.76 323,76.56 677,76.56 745,1.76 1000,1.76" fill="none" stroke="url(#notch-stroke-grad)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
          <polyline className="notch-contour-mobile"  points="0,1.76 155,1.76 323,61.53 677,61.53 845,1.76 1000,1.76"  fill="none" stroke="url(#notch-stroke-grad)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* ============================================================
            HEADER LOCK — Mobile logo inside the notch
            Font: Ethnocentric (header-logo-font class)
            Row 1: DETAILING + GARAGE — 3.8vw, tracking 0.12em, #ffffff
            Row 2: DANIEL            — 5.8vw, tracking 0.32em, #0a7c8c, scaleX(1.1) translateX(6px)
            Container: left 15.5%, right 15.5%, top 1.76px, height 59.74px
            ============================================================ */}
        <div
          className="absolute flex md:!hidden flex-col items-center justify-center pointer-events-none select-none"
          style={{
            left: '15.5%',
            right: '15.5%',
            top: '1.76px',
            height: '59.74px',
            gap: '1px',
            overflow: 'hidden',
          }}
        >
          {/* HEADER LOCK — Mobile Row 1: DETAILING · GARAGE */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '4.2vw',
            width: '100%',
            paddingLeft: '14px',
            paddingRight: '14px',
            transform: 'translateY(-3px)',
          }}>
            <span className="header-logo-font header-logo-top-mobile" style={{ marginRight: '-2px' }}>DETAILING</span>
            <span className="header-logo-font header-logo-top-mobile" style={{ marginLeft: '-2px' }}>GARAGE</span>
          </div>

          {/* HEADER LOCK — Mobile Row 2: DANIEL */}
          <span className="header-logo-font header-logo-main-mobile">DANIEL</span>
        </div>

        {/* ============================================================
            HEADER LOCK — Desktop logo inside the notch
            Font: Ethnocentric (header-logo-font class)
            Row 1: DETAILING (left) + GARAGE (right) — 1.45vw, tracking 0.35em, #ffffff
            Row 2: DANIEL (centred) — 2.6vw, tracking 0.9em, #0a7c8c, scaleX(1.25) translateX(20px)
            Container: left 25.5%, right 25.5%, top 1.76px, height 74.8px
            ============================================================ */}
        <div
          className="absolute hidden md:flex flex-col pointer-events-none select-none"
          style={{
            left: '25.5%',
            right: '25.5%',
            top: '1.76px',
            height: `${76.56 - 1.76}px`,
            overflow: 'hidden',
            justifyContent: 'space-between',
            paddingTop: '6px',
            paddingBottom: '10px',
          }}
        >
          {/* HEADER LOCK — Desktop Row 1: DETAILING (left) · GARAGE (right) */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            paddingLeft: '90px',
            paddingRight: '90px',
          }}>
            <span className="header-logo-font header-logo-top-desktop">DETAILING</span>
            <span className="header-logo-font header-logo-top-desktop">GARAGE</span>
          </div>

          {/* HEADER LOCK — Desktop Row 2: DANIEL */}
          <span className="header-logo-font header-logo-main-desktop">DANIEL</span>
        </div>

        {/* ============================================================
            HEADER LOCK — Desktop navigation
            Link style: header-nav-link + state modifier (see index.css)
            font-size: 11px / font-extrabold / tracking-[0.25em] / uppercase
            padding: py-2.5 px-10  (10px / 40px)
            ============================================================ */}
        <nav className="relative top-3 left-0 right-0 px-8">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-start justify-between w-full">

              {/* HEADER LOCK — Left nav column */}
              <div className="hidden md:flex flex-col items-start gap-2 overflow-visible">
                <div className="flex items-center gap-8">
                  <Link to="/servizi"   className={navLinkClass(location.pathname === '/servizi',   isScrolled)}>SERVIZI</Link>
                  <Link to="/portfolio" className={navLinkClass(location.pathname === '/portfolio', isScrolled)}>PORTFOLIO</Link>
                </div>
                <div className="flex justify-end w-full overflow-visible">
                  <Link to="/" className={navLinkClass(location.pathname === '/', isScrolled) + ' z-[5]'} style={{ left: '76px', position: 'relative' }}>HOME</Link>
                </div>
              </div>

              {/* HEADER LOCK — Right nav column */}
              <div className="hidden md:flex flex-col items-end gap-2 overflow-visible">
                <div className="flex items-center gap-8">
                  <Link to="/chi-siamo" className={navLinkClass(location.pathname === '/chi-siamo', isScrolled)}>CHI SIAMO</Link>
                  <Link to="/contatti"  className={navLinkClass(location.pathname === '/contatti',  isScrolled)}>CONTATTO</Link>
                </div>
                <div className="flex justify-start w-full overflow-visible">
                  <Link to="/prezzi" className={navLinkClass(location.pathname === '/prezzi', isScrolled) + ' z-[5]'} style={{ right: '70px', position: 'relative' }}>PREZZI</Link>
                </div>
              </div>

            </div>
          </div>
        </nav>
      </header>

      {/* ============================================================
          HEADER LOCK — Mobile side buttons (parallelogram, z: 10001)
          LEFT:  polygon(0 0, 100% 27%, 100% 73%, 0 100%) — WhatsApp link
          RIGHT: polygon(0 27%, 100% 0, 100% 100%, 0 73%) — burger button
          Background: #000000 · Icon: #00c4d4
          Contour stroke: #00c4d4 gradient (fades top/bottom), appears on scroll
          ============================================================ */}

      {/* HEADER LOCK — LEFT parallelogram: WhatsApp */}
      <div
        className="md:hidden fixed left-0 z-[10001]"
        style={{ top: '8px', width: '42px', height: '80px' }}
      >
        <a
          href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20richiedere%20un%20preventivo"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 0, 100% 27%, 100% 73%, 0 100%)',
            paddingRight: '6px',
          }}
        >
          <WhatsAppIcon className="w-[18px] h-[18px]" style={{ color: '#00c4d4' }} />
        </a>
        {/* SVG after the clipped element so its stroke renders on top */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 80"
          preserveAspectRatio="none"
          style={{ opacity: isScrolled ? 1 : 0, transition: 'opacity 0.35s ease' }}
        >
          <defs>
            <linearGradient id="btn-left-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="0,0 42,21.6 42,58.4 0,80" fill="none" stroke="url(#btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="0" y1="0" x2="0" y2="80" stroke="url(#btn-left-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* HEADER LOCK — RIGHT parallelogram: burger menu */}
      <div
        className="md:hidden fixed right-0 z-[10001]"
        style={{ top: '8px', width: '42px', height: '80px' }}
      >
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          className="absolute inset-0 flex flex-col items-center justify-center gap-[4px]"
          style={{
            background: '#000000',
            clipPath: 'polygon(0 27%, 100% 0, 100% 100%, 0 73%)',
            paddingLeft: '6px',
          }}
        >
          {/* HEADER LOCK — burger icon bars: 16×1.5px, #00c4d4 */}
          <span
            className="block w-[16px] h-[1.5px] transition-all duration-300 origin-center"
            style={{ background: '#00c4d4', ...(menuOpen ? { transform: 'translateY(5.5px) rotate(45deg)' } : {}) }}
          />
          <span
            className="block w-[16px] h-[1.5px] transition-all duration-300"
            style={{ background: '#00c4d4', ...(menuOpen ? { opacity: 0, transform: 'scaleX(0)' } : {}) }}
          />
          <span
            className="block w-[16px] h-[1.5px] transition-all duration-300 origin-center"
            style={{ background: '#00c4d4', ...(menuOpen ? { transform: 'translateY(-5.5px) rotate(-45deg)' } : {}) }}
          />
        </button>
        {/* SVG after the clipped element so its stroke renders on top */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 42 80"
          preserveAspectRatio="none"
          style={{ opacity: isScrolled ? 1 : 0, transition: 'opacity 0.35s ease' }}
        >
          <defs>
            <linearGradient id="btn-right-grad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor="#00c4d4" stopOpacity="0" />
              <stop offset="40%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="60%"  stopColor="#00c4d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#00c4d4" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points="42,0 0,21.6 0,58.4 42,80" fill="none" stroke="url(#btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <line x1="42" y1="0" x2="42" y2="80" stroke="url(#btn-right-grad)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      {/* ============================================================
          HEADER LOCK — Mobile full-screen menu overlay
          Background: #000000
          Nav links: header-mobile-nav-link class (see index.css)
          font-size: 13px / font-extrabold / tracking-[0.3em] / uppercase
          Active: #0a7c8c (text-accent) · Rest: rgba(255,255,255,0.8)
          CTA button: #22c55e theme (WhatsApp green) — NOT header-locked
          ============================================================ */}
      <div
        className="md:hidden fixed inset-0 z-[10000] flex flex-col"
        style={{
          background: '#000000',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.35s ease',
        }}
      >
        <div style={{ height: '54px' }} />

        <nav className="flex flex-col items-center justify-center flex-1 gap-2 px-8">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={mobileNavLinkClass(location.pathname === to)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom WhatsApp CTA — not part of Header lock, unchanged */}
        <div className="px-8 pb-12">
          <a
            href="https://wa.me/393893451489?text=Ciao!%20Vorrei%20richiedere%20un%20preventivo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-4 bg-[#22c55e]/15 border border-[#22c55e]/40 text-[#22c55e] font-sans font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300 hover:bg-[#22c55e]/25"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Richiedi Preventivo
          </a>
        </div>
      </div>
    </>
  );
}

export { HEADER_HEIGHT };
