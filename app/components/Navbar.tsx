'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/menu', label: 'Menu' },
  { href: '/ou-nous-trouver', label: 'Marchés' },
  { href: '/a-propos', label: 'Notre histoire' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'rgba(15, 10, 6, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(192, 57, 43, 0.2)' : '1px solid transparent',
          padding: scrolled ? '0.875rem 1.5rem' : '1.25rem 1.5rem',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '1.5rem',
                fontWeight: 900,
                color: '#f5ede0',
                letterSpacing: '-0.02em',
              }}>
                ACA<span style={{ color: '#c0392b' }}>TACOS</span>
              </span>
              <span style={{
                fontSize: '0.6rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#a89880',
                marginTop: '1px',
              }}>
                Bruxelles · Artisanal
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hidden-mobile">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: '0.78rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: pathname === l.href ? '#c0392b' : 'rgba(245, 237, 224, 0.7)',
                  transition: 'color 0.3s ease',
                  position: 'relative',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/menu" style={{
              backgroundColor: '#c0392b',
              color: '#f5ede0',
              padding: '0.6rem 1.25rem',
              borderRadius: '3px',
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'background 0.3s ease',
            }}>
              Voir le menu
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: 'none',
              border: 'none',
              color: '#f5ede0',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
            }}
            className="show-mobile"
            aria-label="Menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#0f0a06',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '2.5rem',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s ease',
      }}>
        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '2rem',
            fontWeight: 900,
            color: '#f5ede0',
          }}>
            ACA<span style={{ color: '#c0392b' }}>TACOS</span>
          </span>
        </div>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              fontSize: '1.5rem',
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              color: pathname === l.href ? '#c0392b' : '#f5ede0',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
