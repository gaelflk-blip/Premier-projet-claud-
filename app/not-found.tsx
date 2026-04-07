import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div style={{
      backgroundColor: '#0f0a06',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1.5rem',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px', height: '600px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '500px' }}>
        {/* Logo */}
        <div style={{ marginBottom: '2rem' }}>
          <Image
            src="/67E18DF9-0FCF-414E-9E80-FF932405E769.png"
            alt="Acatacos"
            width={120}
            height={120}
            style={{ objectFit: 'contain', filter: 'drop-shadow(0 4px 20px rgba(192,57,43,0.3))' }}
          />
        </div>

        {/* 404 */}
        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(5rem, 15vw, 9rem)',
          fontWeight: 900,
          lineHeight: 1,
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, rgba(245,237,224,0.15), rgba(245,237,224,0.05))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          404
        </div>

        {/* Message */}
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2rem)',
          fontWeight: 700, color: '#f5ede0',
          marginBottom: '1rem', lineHeight: 1.2,
        }}>
          Cette page s&apos;est<br />
          <span style={{ color: '#c0392b' }}>égarée au Mexique.</span>
        </h1>

        <p style={{
          color: 'rgba(245, 237, 224, 0.5)',
          fontSize: '0.95rem', lineHeight: 1.7,
          marginBottom: '2.5rem',
        }}>
          La page que vous cherchez n&apos;existe pas. Mais nos tacos, eux, sont bien réels — et ils vous attendent sur les marchés de Bruxelles.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/" style={{
            backgroundColor: '#c0392b', color: '#f5ede0',
            padding: '0.875rem 2rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <ArrowRight size={15} /> Retour à l&apos;accueil
          </Link>
          <Link href="/ou-nous-trouver" style={{
            border: '1px solid rgba(245,237,224,0.2)',
            color: '#f5ede0', padding: '0.875rem 2rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <MapPin size={15} /> Nos marchés
          </Link>
        </div>
      </div>
    </div>
  );
}
