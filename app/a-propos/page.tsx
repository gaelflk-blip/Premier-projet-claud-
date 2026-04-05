import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

const timeline = [
  {
    annee: '2016',
    titre: 'Les débuts — un rêve, une plancha',
    texte: 'Tout commence avec une idée simple : apporter le vrai goût du Mexique aux Bruxellois. Thierry Gaël Florkin Lobato installe son premier stand sur un marché de quartier. Peu de matériel, mais des recettes solides, transmises et maîtrisées. Les clients s\'arrêtent. Ils goûtent. Ils reviennent.',
  },
  {
    annee: '2017–2019',
    titre: 'La fidélité, semaine après semaine',
    texte: 'Les marchés suivants, les mêmes visages réapparaissent. Des familles, des curieux, des habitués. Le bouche-à-oreille fait son chemin. Acatacos n\'est pas juste un stand — c\'est un rituel, un rendez-vous, une adresse qui ne déçoit jamais.',
  },
  {
    annee: '2020–2022',
    titre: 'Résistance et résilience',
    texte: 'La crise sanitaire frappe de plein fouet le monde des marchés. Mais Acatacos tient. Les recettes s\'affinent. Les méthodes s\'améliorent. Chaque retour au marché est accueilli comme une retrouvaille. La clientèle attendait.',
  },
  {
    annee: '2023–2024',
    titre: 'L\'excellence artisanale',
    texte: 'Acatacos s\'installe sur les marchés d\'Ixelles et Saint-Gilles. Les tortillas sont toujours pressées à la main. La viande toujours marinée la veille. La cuisson toujours à la minute. 8 ans de présence, de régularité, de qualité sans compromis.',
  },
  {
    annee: 'Demain',
    titre: 'La prochaine étape — un restaurant',
    texte: 'L\'ambition est claire : ouvrir un restaurant Acatacos à Bruxelles. Un lieu permanent, chaleureux, où cette cuisine mexicaine authentique trouvera enfin un toit. Les marchés ont été l\'école. Le restaurant sera la consécration.',
    futur: true,
  },
];

export default function AProposPage() {
  return (
    <div style={{ backgroundColor: '#0f0a06', paddingTop: '5rem' }}>

      {/* Header hero */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 7rem) 1.5rem clamp(3rem, 5vw, 5rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(211, 84, 0, 0.1) 0%, transparent 60%)',
        }} />
        <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
            <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Notre histoire
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.05, marginBottom: '2rem',
            letterSpacing: '-0.02em',
          }}>
            Une cuisine<br />
            <em style={{
              background: 'linear-gradient(135deg, #e67e22, #c0392b)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              fontStyle: 'italic',
            }}>
              née d&apos;une passion.
            </em>
          </h1>
          <p style={{
            color: 'rgba(245, 237, 224, 0.7)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.8, maxWidth: '680px',
          }}>
            Acatacos n&apos;est pas né dans une école de cuisine ni dans un incubateur de startups. C&apos;est né sur un marché, sous la pluie de Bruxelles, avec une plancha chaude et des recettes mexicaines apprises avec le cœur.
          </p>
        </div>
      </section>

      {/* ===== FONDATEUR ===== */}
      <section style={{
        padding: 'clamp(4rem, 6vw, 6rem) 1.5rem',
        backgroundColor: '#13100a',
        borderTop: '1px solid rgba(192, 57, 43, 0.15)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem', alignItems: 'center',
          }}>
            {/* Portrait placeholder */}
            <div style={{
              aspectRatio: '4/5',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #1a0a08 0%, #2a1510 50%, #1a1208 100%)',
              border: '1px solid rgba(192, 57, 43, 0.2)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: '1rem', maxHeight: '480px',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at center, rgba(192,57,43,0.1) 0%, transparent 70%)',
              }} />
              <span style={{ fontSize: '5rem', opacity: 0.6 }}>👨‍🍳</span>
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  color: '#f5ede0', fontWeight: 700, fontSize: '1.1rem',
                }}>
                  Thierry Gaël Florkin Lobato
                </div>
                <div style={{ color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.4rem' }}>
                  Fondateur d&apos;Acatacos
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.75rem' }}>
                  <MapPin size={12} style={{ color: 'rgba(245, 237, 224, 0.4)' }} />
                  <span style={{ color: 'rgba(245, 237, 224, 0.4)', fontSize: '0.78rem' }}>Bruxelles, Belgique</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div>
              <div style={{
                fontSize: '4rem', color: '#c0392b', lineHeight: 1,
                fontFamily: "'Playfair Display', serif",
                marginBottom: '1.5rem', opacity: 0.7,
              }}>
                "
              </div>
              <blockquote style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                color: '#f5ede0', lineHeight: 1.65,
                fontStyle: 'italic', marginBottom: '2rem',
              }}>
                Je ne voulais pas juste vendre des tacos. Je voulais faire ressentir quelque chose. Cette chaleur qu&apos;on a dans la cuisine mexicaine, ce goût généreux, cette convivialité — c&apos;est ce que j&apos;ai essayé d&apos;apporter sur chaque marché.
              </blockquote>
              <div style={{
                display: 'flex', flexDirection: 'column', gap: '1rem',
              }}>
                <p style={{ color: 'rgba(245, 237, 224, 0.65)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Originaire de Bruxelles avec des racines qui lui ont transmis l&apos;amour de la cuisine mexicaine, Thierry a décidé de transformer sa passion en métier. Pas dans un restaurant — sur les marchés. Là où le contact avec les gens est direct, immédiat, vivant.
                </p>
                <p style={{ color: 'rgba(245, 237, 224, 0.65)', fontSize: '0.95rem', lineHeight: 1.75 }}>
                  Huit ans plus tard, Acatacos est une marque reconnue. Pas par les guides gastronomiques. Par les gens qui reviennent chaque semaine, les familles qui font le détour, les clients qui recommandent sans qu&apos;on leur demande.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1.5rem', backgroundColor: '#0f0a06' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
              <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>8 ans d&apos;histoire</span>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 900, color: '#f5ede0', lineHeight: 1.1,
            }}>
              Le parcours d&apos;Acatacos
            </h2>
          </div>

          {/* Timeline items */}
          <div style={{ position: 'relative' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute', left: '0', top: 0, bottom: 0,
              width: '1px',
              background: 'linear-gradient(to bottom, #c0392b, rgba(192, 57, 43, 0.1))',
              marginLeft: '1.5rem',
            }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((item, i) => (
                <div key={item.annee} style={{
                  display: 'flex', gap: '2rem',
                  paddingLeft: '1rem',
                  paddingBottom: i < timeline.length - 1 ? '3.5rem' : '0',
                  position: 'relative',
                }}>
                  {/* Dot */}
                  <div style={{
                    width: '12px', height: '12px', borderRadius: '50%',
                    backgroundColor: item.futur ? 'transparent' : '#c0392b',
                    border: `2px solid ${item.futur ? 'rgba(192,57,43,0.5)' : '#c0392b'}`,
                    flexShrink: 0, marginTop: '0.4rem',
                    boxShadow: item.futur ? 'none' : '0 0 12px rgba(192,57,43,0.4)',
                  }} />

                  {/* Content */}
                  <div style={{ paddingBottom: '0' }}>
                    <div style={{
                      color: item.futur ? 'rgba(192, 57, 43, 0.6)' : '#c0392b',
                      fontSize: '0.72rem', fontWeight: 700,
                      letterSpacing: '0.15em', textTransform: 'uppercase',
                      marginBottom: '0.5rem',
                    }}>
                      {item.annee}
                    </div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                      fontWeight: 700, color: item.futur ? 'rgba(245,237,224,0.5)' : '#f5ede0',
                      lineHeight: 1.25, marginBottom: '0.875rem',
                      fontStyle: item.futur ? 'italic' : 'normal',
                    }}>
                      {item.titre}
                    </h3>
                    <p style={{
                      color: item.futur ? 'rgba(245,237,224,0.35)' : 'rgba(245,237,224,0.65)',
                      fontSize: '0.9rem', lineHeight: 1.75,
                    }}>
                      {item.texte}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALEURS ===== */}
      <section style={{
        padding: 'clamp(4rem, 7vw, 7rem) 1.5rem',
        backgroundColor: '#13100a',
        borderTop: '1px solid rgba(192, 57, 43, 0.15)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
              fontWeight: 900, color: '#f5ede0', lineHeight: 1.1,
            }}>
              Ce qui nous définit
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { mot: 'Authentique', desc: 'Des recettes mexicaines sans compromis, sans adaptation pour plaire à tout le monde. Le vrai goût, c\'est celui qu\'on défend.', emoji: '🌶️' },
              { mot: 'Artisanal', desc: 'Tortillas pressées main, viande marinée la veille, cuisson à la minute. L\'industriel n\'a pas sa place ici.', emoji: '🤲' },
              { mot: 'Généreux', desc: 'Des portions honnêtes, des garnitures qui débordent, une expérience qui en donne pour son argent.', emoji: '❤️' },
              { mot: 'Chaleureux', desc: 'Un sourire, un échange, un moment. Chaque commande est une rencontre. C\'est ça aussi, les marchés.', emoji: '☀️' },
            ].map((v) => (
              <div key={v.mot} style={{
                padding: '2rem 1.75rem',
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', backgroundColor: '#0f0a06',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.emoji}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.25rem', fontWeight: 700,
                  color: '#c0392b', marginBottom: '0.875rem',
                }}>
                  {v.mot}
                </h3>
                <p style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(4rem, 7vw, 7rem) 1.5rem',
        textAlign: 'center', backgroundColor: '#0f0a06',
      }}>
        <p style={{
          color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.2em',
          textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem',
        }}>
          Vivez l&apos;expérience
        </p>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.75rem, 4vw, 3rem)',
          fontWeight: 900, color: '#f5ede0',
          lineHeight: 1.1, marginBottom: '1.5rem',
        }}>
          Venez nous rencontrer<br />
          <span style={{ color: '#d35400' }}>sur les marchés.</span>
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/ou-nous-trouver" style={{
            backgroundColor: '#c0392b', color: '#f5ede0',
            padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <MapPin size={16} /> Nos marchés
          </Link>
          <Link href="/menu" style={{
            border: '1px solid rgba(245, 237, 224, 0.25)',
            color: '#f5ede0', padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            Voir le menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

    </div>
  );
}
