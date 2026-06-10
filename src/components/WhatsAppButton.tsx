import { useEffect, useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/393893451489?text=Ciao%20vorrei%20un%20preventivo%20gratuito';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contattaci su WhatsApp"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="hidden md:flex fixed bottom-6 right-6 z-50 items-center justify-center"
      style={{
        width: '56px',
        height: '56px',
        background: '#000000',
        clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.35s ease, transform 0.35s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* teal outline SVG overlay */}
      <svg
        aria-hidden="true"
        viewBox="0 0 56 56"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          overflow: 'visible',
        }}
      >
        <polygon
          points="12,1 55,1 44,55 1,55"
          fill="none"
          stroke={hovered ? 'rgba(0,196,212,0.9)' : 'rgba(0,196,212,0.5)'}
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          style={{ transition: 'stroke 0.2s ease' }}
        />
      </svg>

      {/* WhatsApp SVG icon */}
      <svg
        viewBox="0 0 24 24"
        fill={hovered ? '#ffffff' : '#00c4d4'}
        aria-hidden="true"
        style={{
          width: '26px',
          height: '26px',
          position: 'relative',
          zIndex: 1,
          transition: 'fill 0.2s ease',
          flexShrink: 0,
        }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      {/* hover tooltip */}
      {hovered && (
        <span
          className="absolute right-full mr-3 font-sans text-xs uppercase tracking-[0.14em] pointer-events-none select-none whitespace-nowrap"
          style={{
            background: '#000000',
            border: '1px solid rgba(0,196,212,0.35)',
            color: 'rgba(0,196,212,0.85)',
            padding: '6px 12px',
          }}
        >
          Scrivici su WhatsApp
        </span>
      )}
    </a>
  );
}
