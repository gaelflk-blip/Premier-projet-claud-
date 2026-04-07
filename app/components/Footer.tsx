import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Mail, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#0a0703',
      borderTop: '1px solid rgba(192, 57, 43, 0.2)',
      padding: '4rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <Image
                src="/67E18DF9-0FCF-414E-9E80-FF932405E769.png"
                alt="Acatacos"
                width={110}
                height={110}
                style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
              />
              <div style={{ marginTop: '0.5rem' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', color: '#a89880', textTransform: 'uppercase' }}>
                  Bruxelles · Artisanal
                </span>
              </div>
            </div>
            <p style={{ color: '#a89880', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '260px' }}>
              Street food mexicaine artisanale sur les marchés de Bruxelles depuis plus de 8 ans.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
              <a href="https://www.instagram.com/acatacos?igsh=MWh0aTV0Z3ZjbzU0Mg==" target="_blank" rel="noopener noreferrer" style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(192, 57, 43, 0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#a89880', transition: 'all 0.3s ease', textDecoration: 'none',
                fontSize: '0.75rem', fontWeight: 700,
              }}>
                IG
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Navigation
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { href: '/', label: 'Accueil' },
                { href: '/menu', label: 'Menu' },
                { href: '/ou-nous-trouver', label: 'Où nous trouver' },
                { href: '/a-propos', label: 'Notre histoire' },
                { href: '/contact', label: 'Contact' },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{
                  color: '#a89880', fontSize: '0.875rem', textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Nous contacter
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <MapPin size={15} style={{ color: '#c0392b', flexShrink: 0 }} />
                <span style={{ color: '#a89880', fontSize: '0.875rem' }}>Marchés de Bruxelles<br />Saint-Gilles · Ixelles · Schaerbeek</span>
              </div>
              <a href="mailto:gaelflk@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <Mail size={15} style={{ color: '#c0392b', flexShrink: 0 }} />
                <span style={{ color: '#a89880', fontSize: '0.875rem' }}>gaelflk@gmail.com</span>
              </a>
              <a href="https://wa.me/32487385577" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
                <MessageCircle size={15} style={{ color: '#c0392b', flexShrink: 0 }} />
                <span style={{ color: '#a89880', fontSize: '0.875rem' }}>0487 38 55 77</span>
              </a>
            </div>
          </div>

          {/* Markets */}
          <div>
            <h4 style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
              Sur les marchés
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[
                { quartier: 'Saint-Gilles', lieu: 'Pl. Maurice Van Meenen', jours: 'Lundi · 12h–21h' },
                { quartier: 'Ixelles', lieu: 'Pl. du Châtelain', jours: 'Mercredi · 12h–19h40' },
                { quartier: 'Schaerbeek', lieu: 'Pl. du Châtelain', jours: 'Vendredi · 16h–20h30' },
              ].map((m) => (
                <div key={m.quartier} style={{
                  padding: '0.75rem 0.875rem',
                  border: '1px solid rgba(192, 57, 43, 0.2)',
                  borderRadius: '4px',
                }}>
                  <div style={{ color: '#f5ede0', fontSize: '0.875rem', fontWeight: 600 }}>{m.quartier}</div>
                  <div style={{ color: '#a89880', fontSize: '0.75rem', marginTop: '0.15rem' }}>{m.lieu}</div>
                  <div style={{ color: '#c0392b', fontSize: '0.75rem', marginTop: '0.15rem', fontWeight: 600 }}>{m.jours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          alignItems: 'center',
          textAlign: 'center',
        }}>
          <p style={{ color: '#a89880', fontSize: '0.8rem' }}>
            © 2025 Acatacos — Fondé par Thierry Gaël Florkin Lobato · Bruxelles
          </p>
          <p style={{ color: 'rgba(168, 152, 128, 0.5)', fontSize: '0.75rem' }}>
            Street food mexicaine artisanale · Fait maison · Cuisson minute
          </p>
        </div>
      </div>
    </footer>
  );
}
