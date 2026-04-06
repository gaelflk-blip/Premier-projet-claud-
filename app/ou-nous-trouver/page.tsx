import Link from 'next/link';
import { MapPin, Clock, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

const marches = [
  {
    quartier: 'Saint-Gilles',
    lieu: 'Place Maurice Van Meenen',
    ville: 'Bruxelles',
    description: 'Le marché de la place Maurice Van Meenen, au cœur de Saint-Gilles. Un quartier populaire, chaleureux et diversifié où nos tacos font partie du rituel hebdomadaire.',
    jours: [
      { jour: 'Lundi', horaires: '12h00 – 21h00' },
    ],
    metro: 'Proche métro Hôtel des Monnaies',
    accent: '#c0392b',
    emoji: '🏙️',
  },
  {
    quartier: 'Ixelles',
    lieu: 'Place du Châtelain',
    ville: 'Bruxelles',
    description: 'Le marché du Châtelain à Ixelles — l\'un des plus animés de Bruxelles. Atmosphère bohème, clientèle fidèle et cosmopolite. Dernière commande à 19h40.',
    jours: [
      { jour: 'Mercredi', horaires: '12h00 – 19h40*' },
    ],
    metro: 'Proche métro Louise / tram Châtelain',
    accent: '#d35400',
    emoji: '🌿',
  },
  {
    quartier: 'Schaerbeek',
    lieu: 'Place du Châtelain',
    ville: 'Bruxelles',
    description: 'Le marché du vendredi soir à Schaerbeek. Une ambiance conviviale de fin de semaine, idéale pour un repas mexicain après le travail.',
    jours: [
      { jour: 'Vendredi', horaires: '16h00 – 20h30' },
    ],
    metro: 'Proche métro Diamant / Meiser',
    accent: '#2d6a4f',
    emoji: '🏘️',
  },
];

export default function OuNousTrouverPage() {
  return (
    <div style={{ backgroundColor: '#0f0a06', paddingTop: '5rem' }}>

      {/* Header */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem 3rem',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, right: 0, bottom: 0,
          width: '40%',
          background: 'radial-gradient(ellipse at right, rgba(192,57,43,0.08) 0%, transparent 70%)',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
            <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Nos emplacements
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.05, marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            Où nous<br />
            <span style={{
              background: 'linear-gradient(135deg, #e67e22, #c0392b)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              trouver
            </span>
          </h1>
          <p style={{
            color: 'rgba(245, 237, 224, 0.55)',
            fontSize: '1.05rem', maxWidth: '500px', lineHeight: 1.7,
          }}>
            Retrouvez-nous 3 fois par semaine sur les marchés de Bruxelles — Saint-Gilles, Ixelles et Schaerbeek. Une même passion, trois rendez-vous.
          </p>
        </div>
      </section>

      {/* ===== MARCHÉS ===== */}
      <section style={{ padding: '2rem 1.5rem clamp(4rem, 8vw, 8rem)', backgroundColor: '#0f0a06' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {marches.map((m) => (
            <div key={m.quartier} style={{
              border: `1px solid rgba(245, 237, 224, 0.07)`,
              borderRadius: '12px', overflow: 'hidden',
              backgroundColor: '#13100a',
            }}>
              {/* Top accent bar */}
              <div style={{ height: '4px', backgroundColor: m.accent }} />

              <div style={{
                padding: 'clamp(1.75rem, 4vw, 2.5rem)',
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '2rem', alignItems: 'start',
              }}>
                {/* Left: info */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '2rem' }}>{m.emoji}</span>
                    <div>
                      <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: 900, color: '#f5ede0', lineHeight: 1,
                      }}>
                        {m.quartier}
                      </h2>
                      <div style={{ color: m.accent, fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginTop: '0.25rem' }}>
                        {m.ville}
                      </div>
                    </div>
                  </div>
                  <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: '380px' }}>
                    {m.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <MapPin size={14} style={{ color: m.accent, flexShrink: 0 }} />
                    <span style={{ color: '#f5ede0', fontSize: '0.85rem', fontWeight: 600 }}>{m.lieu}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} style={{ color: 'transparent', flexShrink: 0 }} />
                    <span style={{ color: 'rgba(245, 237, 224, 0.4)', fontSize: '0.78rem' }}>{m.metro}</span>
                  </div>
                </div>

                {/* Right: horaires */}
                <div>
                  <h3 style={{
                    color: '#f5ede0', fontWeight: 600, fontSize: '0.8rem',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}>
                    Horaires
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {m.jours.map((j) => (
                      <div key={j.jour} style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        padding: '1rem 1.25rem',
                        border: `1px solid ${m.accent}30`,
                        borderRadius: '6px',
                        backgroundColor: `${m.accent}08`,
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                          <Calendar size={15} style={{ color: m.accent }} />
                          <span style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.9rem' }}>{j.jour}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <Clock size={13} style={{ color: 'rgba(245, 237, 224, 0.4)' }} />
                          <span style={{ color: 'rgba(245, 237, 224, 0.65)', fontSize: '0.875rem' }}>{j.horaires}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Note */}
                  <p style={{
                    color: 'rgba(245, 237, 224, 0.35)', fontSize: '0.75rem',
                    marginTop: '0.875rem', fontStyle: 'italic',
                  }}>
                    * Dernière commande à 19h40 le mercredi. Horaires pouvant varier selon météo. Contactez-nous pour confirmer.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== INFORMATIONS PRATIQUES ===== */}
      <section style={{
        padding: 'clamp(4rem, 6vw, 6rem) 1.5rem',
        backgroundColor: '#13100a',
        borderTop: '1px solid rgba(192, 57, 43, 0.15)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              fontWeight: 900, color: '#f5ede0', marginBottom: '0.875rem',
            }}>
              Infos pratiques
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              {
                icon: <Clock size={22} />,
                titre: 'Arrivez tôt',
                texte: 'Les premiers arrivés sont les premiers servis. Certaines garnitures peuvent s\'épuiser en fin de marché.',
              },
              {
                icon: <MapPin size={22} />,
                titre: 'Repérez-nous',
                texte: "Cherchez notre stand avec l'enseigne Acatacos. Vous sentirez les arômes avant même de nous voir.",
              },
              {
                icon: <MessageCircle size={22} />,
                titre: 'Commandes de groupe',
                texte: 'Pour les groupes ou événements, contactez-nous à l\'avance via WhatsApp pour organiser votre commande.',
              },
            ].map((info) => (
              <div key={info.titre} style={{
                padding: '1.75rem',
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', backgroundColor: '#0f0a06',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '50px', height: '50px', borderRadius: '50%',
                  backgroundColor: 'rgba(192, 57, 43, 0.1)',
                  border: '1px solid rgba(192, 57, 43, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c0392b', margin: '0 auto 1.25rem',
                }}>
                  {info.icon}
                </div>
                <h3 style={{ color: '#f5ede0', fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>
                  {info.titre}
                </h3>
                <p style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {info.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA CONTACT ===== */}
      <section style={{
        padding: 'clamp(4rem, 7vw, 7rem) 1.5rem',
        textAlign: 'center', backgroundColor: '#0f0a06',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 900, color: '#f5ede0', marginBottom: '1rem',
        }}>
          Une question sur nos horaires ?
        </h2>
        <p style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.95rem', marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
          Contactez-nous sur WhatsApp pour confirmer notre présence ou pour les commandes de groupe.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href="https://wa.me/32487385577" target="_blank" rel="noopener noreferrer" style={{
            backgroundColor: '#2d6a4f', color: '#f5ede0',
            padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link href="/contact" style={{
            border: '1px solid rgba(245, 237, 224, 0.25)',
            color: '#f5ede0', padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            Formulaire <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
