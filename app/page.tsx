import Link from 'next/link';
import { ArrowRight, Clock, Star, Flame, Heart, ChefHat, MapPin } from 'lucide-react';

const produits = [
  {
    emoji: '🌮',
    nom: 'Tacos Artisanaux',
    description: 'Tortillas maison pressées à la main, garnies de viande marinée et cuites minute. Chaque taco est une explosion de saveurs.',
    sensations: ['Viande juteuse', 'Tortilla fraîche', 'Épices maison'],
    couleur: '#c0392b',
  },
  {
    emoji: '🧀',
    nom: 'Quesadillas',
    description: 'Tortilla dorée à la plancha, fromage fondant, garniture généreuse. Un classique mexicain réinterprété avec générosité.',
    sensations: ['Fromage coulant', 'Croustillant', 'Fondant'],
    couleur: '#d35400',
  },
  {
    emoji: '🥤',
    nom: 'Boissons Mexicaines',
    description: "Agua de jamaica fleurie, horchata crémeuse à la cannelle — des boissons authentiques pour compléter l'expérience.",
    sensations: ['Agua de Jamaica', 'Horchata', 'Softs & eau'],
    couleur: '#2d6a4f',
  },
];

const preuves = [
  { icon: <Clock size={28} />, chiffre: '8 ans', texte: 'sur les marchés bruxellois' },
  { icon: <Heart size={28} />, chiffre: '100%', texte: 'fait maison chaque jour' },
  { icon: <Flame size={28} />, chiffre: 'Cuisson', texte: 'minute, à la commande' },
  { icon: <Star size={28} />, chiffre: 'Fidèles', texte: 'clients semaine après semaine' },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: '#0f0a06' }}>

      {/* ===== HERO ===== */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '0 1.5rem',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 60% 50%, rgba(192, 57, 43, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(211, 84, 0, 0.1) 0%, transparent 50%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(245,237,224,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,237,224,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10, paddingTop: '7rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: '780px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              border: '1px solid rgba(192, 57, 43, 0.5)',
              padding: '0.4rem 1rem', borderRadius: '2px',
              marginBottom: '2rem',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#c0392b', display: 'inline-block' }} />
              <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}>
                Bruxelles · Marchés artisanaux
              </span>
            </div>

            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#f5ede0',
              marginBottom: '1.75rem',
              letterSpacing: '-0.02em',
            }}>
              Le vrai goût<br />
              <span style={{
                background: 'linear-gradient(135deg, #e67e22, #c0392b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                du Mexique
              </span>
              <br />à Bruxelles.
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'rgba(245, 237, 224, 0.65)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '2.75rem',
              fontWeight: 300,
            }}>
              Tacos artisanaux, tortillas pressées à la main, viande marinée et cuisson minute.
              Sur les marchés de Bruxelles depuis plus de{' '}
              <strong style={{ color: '#f5ede0', fontWeight: 600 }}>8 ans</strong>.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link href="/menu" style={{
                backgroundColor: '#c0392b',
                color: '#f5ede0',
                padding: '1rem 2rem',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                Voir le menu <ArrowRight size={16} />
              </Link>
              <Link href="/ou-nous-trouver" style={{
                border: '1px solid rgba(245, 237, 224, 0.3)',
                color: '#f5ede0',
                padding: '1rem 2rem',
                borderRadius: '3px',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <MapPin size={16} /> Nous trouver
              </Link>
            </div>

            <div style={{
              display: 'flex', flexWrap: 'wrap', gap: '2.5rem',
              marginTop: '4rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(245, 237, 224, 0.08)',
            }}>
              {[
                { val: '8 ans', label: 'sur les marchés' },
                { val: '100%', label: 'fait maison' },
                { val: 'Minute', label: 'cuisson à la commande' },
              ].map((s) => (
                <div key={s.label}>
                  <div style={{ color: '#c0392b', fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>{s.val}</div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.78rem', letterSpacing: '0.05em', marginTop: '0.25rem' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)',
          fontSize: 'clamp(8rem, 20vw, 22rem)',
          opacity: 0.05, userSelect: 'none', lineHeight: 1,
        }}>
          🌮
        </div>

        <div style={{
          position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        }}>
          <span style={{ color: 'rgba(245, 237, 224, 0.3)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Découvrir</span>
          <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, rgba(192,57,43,0.6), transparent)' }} />
        </div>
      </section>

      {/* ===== STORYTELLING ===== */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        backgroundColor: '#13100a',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.4), transparent)',
        }} />

        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem', alignItems: 'center',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '2px', backgroundColor: '#c0392b' }} />
              <span style={{ color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Notre histoire</span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 900, color: '#f5ede0',
              lineHeight: 1.15, marginBottom: '1.75rem',
            }}>
              Chaque taco<br />
              <em style={{ color: '#d35400' }}>raconte une histoire.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ color: 'rgba(245, 237, 224, 0.7)', fontSize: '1rem', lineHeight: 1.8 }}>
                Chez Acatacos, chaque taco raconte une histoire. Celle d&apos;une cuisine transmise de génération en génération, d&apos;un savoir-faire artisanal préservé, et de plusieurs années passées à servir, tester, perfectionner chaque recette sur les marchés de Bruxelles.
              </p>
              <p style={{ color: 'rgba(245, 237, 224, 0.7)', fontSize: '1rem', lineHeight: 1.8 }}>
                Des clients qui reviennent semaine après semaine. Des familles qui se retrouvent autour de nos tacos. Un lien qui se crée autour de la nourriture, de l&apos;authenticité, de la chaleur humaine.
              </p>
            </div>
            <Link href="/a-propos" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              color: '#c0392b', fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              textDecoration: 'none', marginTop: '2rem',
              borderBottom: '1px solid rgba(192, 57, 43, 0.4)',
              paddingBottom: '3px',
            }}>
              Lire notre histoire <ArrowRight size={14} />
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: <ChefHat size={20} />, titre: 'Recettes authentiques', texte: 'Issues de la tradition mexicaine, transmises et adaptées avec soin au fil des années.' },
              { icon: <Flame size={20} />, titre: 'Cuisson à la minute', texte: 'Chaque taco est préparé à la commande. Jamais en avance, toujours frais, toujours chaud.' },
              { icon: <Heart size={20} />, titre: 'Clientèle fidèle', texte: "Depuis 8 ans, des visages familiers reviennent chaque semaine. La meilleure des preuves." },
            ].map((item) => (
              <div key={item.titre} style={{
                padding: '1.5rem',
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '6px',
                backgroundColor: 'rgba(245, 237, 224, 0.02)',
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: 'rgba(192, 57, 43, 0.1)',
                  border: '1px solid rgba(192, 57, 43, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c0392b', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.titre}</div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.texte}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUITS ===== */}
      <section style={{ padding: 'clamp(4rem, 8vw, 8rem) 1.5rem', backgroundColor: '#0f0a06' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
              <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>Nos produits</span>
              <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 900, color: '#f5ede0', lineHeight: 1.15,
            }}>
              Ce qu&apos;on prépare<br />
              <span style={{ color: '#d35400' }}>avec passion</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {produits.map((p) => (
              <div key={p.nom} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '2.5rem 2rem',
                backgroundColor: '#13100a', position: 'relative', overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: '3px', backgroundColor: p.couleur, opacity: 0.8,
                }} />
                <div style={{ fontSize: '3rem', marginBottom: '1.25rem' }}>{p.emoji}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem', fontWeight: 700,
                  color: '#f5ede0', marginBottom: '0.875rem',
                }}>
                  {p.nom}
                </h3>
                <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.sensations.map((s) => (
                    <span key={s} style={{
                      padding: '0.3rem 0.75rem',
                      border: `1px solid ${p.couleur}40`,
                      borderRadius: '2px',
                      color: p.couleur,
                      fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/menu" style={{
              backgroundColor: '#c0392b', color: '#f5ede0',
              padding: '1rem 2.5rem', borderRadius: '3px',
              fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              Voir le menu complet <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== PREUVES ===== */}
      <section style={{
        padding: 'clamp(4rem, 6vw, 6rem) 1.5rem',
        background: 'linear-gradient(135deg, #1a0a08 0%, #0f0a06 50%, #0a1008 100%)',
        borderTop: '1px solid rgba(192, 57, 43, 0.15)',
        borderBottom: '1px solid rgba(192, 57, 43, 0.15)',
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {preuves.map((p) => (
              <div key={p.texte} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ color: '#c0392b', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  {p.icon}
                </div>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.75rem', fontWeight: 700, color: '#f5ede0', marginBottom: '0.4rem',
                }}>
                  {p.chiffre}
                </div>
                <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.85rem', lineHeight: 1.5 }}>
                  {p.texte}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL ===== */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 10rem) 1.5rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
        backgroundColor: '#0f0a06',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{
            color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem',
          }}>
            Vous avez faim ?
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.1, marginBottom: '1.5rem', letterSpacing: '-0.02em',
          }}>
            Envie de goûter<br />
            <span style={{ color: '#d35400' }}>nos tacos ?</span>
          </h2>
          <p style={{
            color: 'rgba(245, 237, 224, 0.55)',
            fontSize: '1rem', maxWidth: '420px',
            margin: '0 auto 2.5rem', lineHeight: 1.7,
          }}>
            Retrouvez-nous sur les marchés de Bruxelles. Ixelles, Saint-Gilles — on vous attend.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/ou-nous-trouver" style={{
              backgroundColor: '#c0392b', color: '#f5ede0',
              padding: '1rem 2.5rem', borderRadius: '3px',
              fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            }}>
              <MapPin size={16} /> Voir les marchés
            </Link>
            <Link href="/contact" style={{
              border: '1px solid rgba(245, 237, 224, 0.25)',
              color: '#f5ede0', padding: '1rem 2.5rem', borderRadius: '3px',
              fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', textDecoration: 'none',
            }}>
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
