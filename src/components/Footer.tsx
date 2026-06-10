import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const BUSINESS_ADDRESS = "Via Stazione, 1, 28060 Nibbia NO";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_ADDRESS)}`;

// Shared social links — single source of truth for Footer and Contact page
export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/detailing_garage__daniel/',
  facebook:  'https://www.facebook.com/109292172016288',
  tiktok:    'https://www.tiktok.com/@detailinggaragedaniel',
  telegram:  'https://t.me/Dimak89',
};

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

export default function Footer() {
  return (
    <footer className="bg-[#01414a] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "'Ethnocentric', 'Arial Narrow', Arial, sans-serif",
                fontSize: '0.82rem',
                fontWeight: 400,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                lineHeight: 1.4,
              }}
            >
              Detailing Garage Daniel
            </h3>
            <p className="text-secondary leading-relaxed mb-4 font-sans">
              Detailing auto premium a Novara dal 2015.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.telegram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
              >
                <TelegramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold mb-4 uppercase tracking-[0.18em] text-white/60">Servizi</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servizi" className="text-secondary hover:text-accent transition-colors font-sans">
                  Oscuramento Vetri
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-secondary hover:text-accent transition-colors font-sans">
                  Wrapping Auto
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-secondary hover:text-accent transition-colors font-sans">
                  Rivestimenti Interni
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="text-secondary hover:text-accent transition-colors font-sans">
                  Lucidatura
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold mb-4 uppercase tracking-[0.18em] text-white/60">Contatti</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-secondary">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <a
                  href={GOOGLE_MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans hover:text-accent transition-colors duration-150"
                >
                  {BUSINESS_ADDRESS}
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <a href="tel:+393893451489" className="text-secondary hover:text-accent transition-colors font-sans">
                  +39 389 345 1489
                </a>
              </li>
              <li className="flex items-start space-x-2 translate-y-px sm:translate-y-0">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <a href="mailto:detailinggaragedaniel@gmail.com" className="text-secondary hover:text-accent transition-colors font-sans">
                  detailinggaragedaniel@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-sans font-semibold mb-4 uppercase tracking-[0.18em] text-white/60">Area Operativa</h4>
            <p className="text-secondary mb-3 font-sans">
              Raggio operativo 50 km da Novara.
            </p>
            <p className="text-secondary text-sm mb-4 font-sans">
              Per progetti importanti, flotte, concessionarie o più veicoli, valutiamo interventi anche fuori zona.
            </p>
            <p className="text-secondary text-sm font-sans">
              <strong className="text-primary font-heading">Da Lunedì a Sabato</strong><br />
              Su appuntamento
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-secondary text-sm">
          <p className="font-sans">&copy; {new Date().getFullYear()} Detailing Garage Daniel. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}
