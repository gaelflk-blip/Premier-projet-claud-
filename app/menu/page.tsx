import Link from 'next/link';
import { ArrowRight, Leaf, Flame } from 'lucide-react';

const tacos = [
  {
    nom: 'Pastor',
    desc: 'Porc mariné aux épices rouges et ananas grillé. La recette iconique des taquerias mexicaines.',
    ingredients: ['Porc mariné', 'Épices rouges', 'Ananas', 'Coriandre'],
    badge: 'Best-seller',
    badgeColor: '#c0392b',
  },
  {
    nom: 'Cochinita Pibil',
    desc: 'Porc mijoté lentement dans les épices yucatèques. Un goût profond, fondant, inoubliable.',
    ingredients: ['Porc effiloché', 'Achiote', 'Orange amère', 'Oignon mariné'],
    badge: 'Signature',
    badgeColor: '#d35400',
  },
  {
    nom: 'Carnitas',
    desc: 'Viande de porc confite dans sa propre graisse jusqu\'à la perfection. Fondante et croustillante à la fois.',
    ingredients: ['Porc confit', 'Ail', 'Laurier', 'Orange'],
    badge: null,
    badgeColor: null,
  },
  {
    nom: 'Poulet Grillé',
    desc: 'Blanc de poulet mariné aux épices mexicaines et grillé à la minute. Juteux, parfumé.',
    ingredients: ['Poulet mariné', 'Cumin', 'Paprika', 'Citron'],
    badge: null,
    badgeColor: null,
  },
  {
    nom: 'Bœuf Épicé',
    desc: 'Viande de bœuf assaisonnée et saisie à feu vif. Riche en saveurs, généreux en garnitures.',
    ingredients: ['Bœuf haché', 'Épices mexicaines', 'Tomate', 'Piment'],
    badge: null,
    badgeColor: null,
  },
  {
    nom: 'Végétarien',
    desc: 'Légumes grillés, haricots noirs, fromage fondant. Saveurs mexicaines sans compromis.',
    ingredients: ['Légumes grillés', 'Haricots noirs', 'Fromage', 'Salsa verde'],
    badge: 'Végé',
    badgeColor: '#2d6a4f',
  },
];

const boissons = [
  { nom: 'Agua de Jamaica', desc: 'Infusion de fleurs d\'hibiscus, légèrement sucrée. Rafraîchissante et florale.', emoji: '🌺' },
  { nom: 'Horchata', desc: 'Boisson au riz, lait de coco et cannelle. Douce, crémeuse, typiquement mexicaine.', emoji: '🥛' },
  { nom: 'Softs', desc: 'Sélection de boissons fraîches pour accompagner vos tacos.', emoji: '🥤' },
  { nom: 'Eau', desc: 'Eau minérale ou plate.', emoji: '💧' },
];

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: '#0f0a06', paddingTop: '5rem' }}>

      {/* Header */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem 3rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(192,57,43,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span style={{
            display: 'inline-block',
            color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em',
            textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem',
          }}>
            Menu 2025
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.05, marginBottom: '1.25rem',
            letterSpacing: '-0.02em',
          }}>
            Notre menu
          </h1>
          <p style={{
            color: 'rgba(245, 237, 224, 0.55)',
            fontSize: '1rem', maxWidth: '500px',
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Tortillas maison, viandes marinées, cuisson minute. Chaque plat est préparé à la commande, avec des produits frais sélectionnés chaque jour.
          </p>
        </div>
      </section>

      {/* ===== TACOS ===== */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', backgroundColor: '#13100a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Section header */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.875rem' }}>
                <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
                <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Spécialités
                </span>
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                fontWeight: 900, color: '#f5ede0', lineHeight: 1.1,
              }}>
                Tacos artisanaux
              </h2>
              <p style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.9rem', marginTop: '0.75rem', maxWidth: '420px', lineHeight: 1.6 }}>
                Tortillas maison pressées à la main. Viande marinée. Cuisson minute. Recettes mexicaines authentiques.
              </p>
            </div>
            <div style={{
              backgroundColor: 'rgba(192, 57, 43, 0.1)',
              border: '1px solid rgba(192, 57, 43, 0.3)',
              borderRadius: '6px', padding: '1rem 1.5rem',
              textAlign: 'center',
            }}>
              <div style={{ color: '#c0392b', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Prix
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                color: '#f5ede0', fontSize: '1.75rem', fontWeight: 900, lineHeight: 1,
              }}>
                4 tacos
              </div>
              <div style={{ color: '#d35400', fontSize: '1.1rem', fontWeight: 600, marginTop: '0.25rem' }}>
                à partir de 14€
              </div>
            </div>
          </div>

          {/* Tacos grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {tacos.map((taco) => (
              <div key={taco.nom} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '1.75rem',
                backgroundColor: '#0f0a06', position: 'relative',
                transition: 'border-color 0.3s ease',
              }}>
                {taco.badge && (
                  <span style={{
                    position: 'absolute', top: '1rem', right: '1rem',
                    backgroundColor: taco.badgeColor || '#c0392b',
                    color: '#f5ede0', fontSize: '0.65rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '0.25rem 0.6rem', borderRadius: '2px',
                  }}>
                    {taco.badge}
                  </span>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🌮</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.25rem', fontWeight: 700, color: '#f5ede0',
                  }}>
                    {taco.nom}
                  </h3>
                </div>
                <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                  {taco.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {taco.ingredients.map((ing) => (
                    <span key={ing} style={{
                      padding: '0.2rem 0.6rem',
                      backgroundColor: 'rgba(245, 237, 224, 0.05)',
                      border: '1px solid rgba(245, 237, 224, 0.1)',
                      borderRadius: '2px', color: 'rgba(245, 237, 224, 0.45)',
                      fontSize: '0.7rem', letterSpacing: '0.04em',
                    }}>
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Note tortillas */}
          <div style={{
            marginTop: '2rem', padding: '1.25rem 1.5rem',
            border: '1px solid rgba(212, 168, 83, 0.25)',
            borderRadius: '6px', backgroundColor: 'rgba(212, 168, 83, 0.05)',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <Flame size={18} style={{ color: '#d4a853', flexShrink: 0 }} />
            <p style={{ color: 'rgba(245, 237, 224, 0.65)', fontSize: '0.875rem', lineHeight: 1.6 }}>
              <strong style={{ color: '#d4a853' }}>Tortillas 100% maison</strong> — Pressées à la main le matin même, cuites sur la plancha à la commande. Une différence que vous sentez dès la première bouchée.
            </p>
          </div>
        </div>
      </section>

      {/* ===== QUESADILLAS ===== */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', backgroundColor: '#0f0a06' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.875rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#d35400' }} />
            <span style={{ color: '#d35400', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Classiques
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Quesadillas
          </h2>
          <p style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.95rem', maxWidth: '500px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Tortilla grillée à la plancha, fromage fondant, garniture généreuse. Croustillante à l&apos;extérieur, fondante à l&apos;intérieur.
          </p>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { nom: 'Quesadilla Pastor', desc: 'Porc mariné, fromage fondu, oignons, coriandre.' },
              { nom: 'Quesadilla Poulet', desc: 'Poulet grillé, fromage, jalapeños, crème fraîche.' },
              { nom: 'Quesadilla Végé', desc: 'Légumes grillés, fromage, haricots noirs, salsa.' },
            ].map((q) => (
              <div key={q.nom} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '1.75rem',
                backgroundColor: '#13100a',
                borderTop: '2px solid rgba(211, 84, 0, 0.5)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>🧀</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem', fontWeight: 700, color: '#f5ede0',
                  }}>
                    {q.nom}
                  </h3>
                </div>
                <p style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  {q.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOISSONS ===== */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem',
        backgroundColor: '#13100a',
        borderTop: '1px solid rgba(45, 106, 79, 0.2)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.875rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#2d6a4f' }} />
            <span style={{ color: '#2d6a4f', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              À boire
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
            fontWeight: 900, color: '#f5ede0', lineHeight: 1.1, marginBottom: '1rem',
          }}>
            Boissons
          </h2>
          <p style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.95rem', maxWidth: '420px', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Des boissons mexicaines authentiques pour compléter votre repas.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {boissons.map((b) => (
              <div key={b.nom} style={{
                border: '1px solid rgba(45, 106, 79, 0.2)',
                borderRadius: '8px', padding: '1.5rem',
                backgroundColor: '#0f0a06',
                display: 'flex', alignItems: 'flex-start', gap: '1rem',
              }}>
                <span style={{ fontSize: '1.75rem', flexShrink: 0 }}>{b.emoji}</span>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{b.nom}</div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTE ALLERGÈNES ===== */}
      <section style={{ padding: '2rem 1.5rem', backgroundColor: '#0a0703' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Leaf size={16} style={{ color: '#2d6a4f', flexShrink: 0 }} />
            <p style={{ color: 'rgba(245, 237, 224, 0.4)', fontSize: '0.8rem', lineHeight: 1.6 }}>
              Informations allergènes disponibles sur demande. Certains plats peuvent contenir des traces de noix, gluten ou produits laitiers. N&apos;hésitez pas à nous interroger sur les ingrédients.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(4rem, 7vw, 7rem) 1.5rem',
        textAlign: 'center', backgroundColor: '#0f0a06',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 900, color: '#f5ede0',
          marginBottom: '1rem',
        }}>
          Prêt à commander ?
        </h2>
        <p style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          Retrouvez-nous sur les marchés de Bruxelles.
        </p>
        <Link href="/ou-nous-trouver" style={{
          backgroundColor: '#c0392b', color: '#f5ede0',
          padding: '1rem 2.5rem', borderRadius: '3px',
          fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
          textTransform: 'uppercase', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        }}>
          Voir les marchés <ArrowRight size={16} />
        </Link>
      </section>

    </div>
  );
}
