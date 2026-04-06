import Link from 'next/link';
import { ArrowRight, Leaf, Flame, MessageCircle } from 'lucide-react';

const tacos = [
  {
    nom: 'Cochinita',
    sousTitre: 'Porc mariné',
    desc: 'Porc mariné lentement dans les épices yucatèques — achiote, orange amère, herbes. Une viande fondante au goût profond et enveloppant.',
    tag: null,
  },
  {
    nom: 'Carnitas',
    sousTitre: 'Porc effiloché',
    desc: 'Porc effiloché confit dans sa propre graisse jusqu\'à la perfection. Fondant à l\'intérieur, légèrement croustillant à l\'extérieur.',
    tag: null,
  },
  {
    nom: 'Pastor',
    sousTitre: 'Porc mariné et grillé',
    desc: 'Porc mariné aux épices rouges et grillé à la broche. La recette iconique de la street food mexicaine. Servi avec ananas caramélisé.',
    tag: 'Best-seller',
  },
  {
    nom: 'Asada de Bœuf',
    sousTitre: 'Bœuf sel et poivre',
    desc: 'Bœuf saisi à feu vif, assaisonné simplement au sel et poivre. Une viande franche, savoureuse, généreuse.',
    tag: null,
  },
  {
    nom: 'Pollo Azteca',
    sousTitre: 'Poivron rouge + Nopales',
    desc: 'Poulet accompagné de poivrons rouges grillés et de nopales (cactus). Une combinaison fraîche, colorée et typiquement mexicaine.',
    tag: null,
  },
  {
    nom: 'Pescado',
    sousTitre: 'Poisson mariné sel et poivre',
    desc: 'Poisson mariné simplement au sel et poivre, grillé à la minute. Léger, savoureux, parfait avec une sauce fraîche.',
    tag: null,
  },
  {
    nom: 'Végétariens',
    sousTitre: 'Légumes et cactus',
    desc: 'Mélange de légumes grillés et de nopales (feuilles de cactus). Une option végétarienne généreuse, pleine de saveurs mexicaines authentiques.',
    tag: 'Végé',
  },
];

const tamales = [
  { nom: 'Rojos', desc: 'Sauce rouge épicée, maïs nixtamalisé, cuit en feuille de banane.' },
  { nom: 'Verdes', desc: 'Sauce verte tomatillo, fraîche et légèrement acidulée.' },
  { nom: 'Mole', desc: 'La sauce mexicaine par excellence — chocolat, épices, piment. Complexe et inoubliable.' },
  { nom: 'Chile Poblano & Queso', desc: 'Piment poblano doux et fromage fondu. Un classique réconfortant.' },
];

const burritos = [
  { nom: 'Burrito Pollo', desc: 'Poulet grillé, riz, haricots, salsa, crème. Tortilla de farine roulée et généreusement garnie.' },
  { nom: 'Burrito Carnitas', desc: 'Porc effiloché, riz, haricots noirs, guacamole, pico de gallo.' },
  { nom: 'Burrito Beef', desc: 'Bœuf assaisonné, riz, haricots, fromage fondu, jalapeños.' },
];

const vins = {
  rouge: ['Nero d\'Avola', 'Chianti', 'Primitivo'],
  blanc: ['Chardonnay', 'Pinot Grigio', 'Pecorino', 'Bianco Toscano', 'Falanchina', 'Trebbiano Borgho'],
  mousseux: ['Proseco'],
  rose: ['Primitivo Rosé'],
};

const cocktails = [
  { nom: 'Margarita', desc: 'Tequila, triple sec, citron vert. Le cocktail mexicain par excellence.', emoji: '🍋' },
  { nom: 'Paloma', desc: 'Tequila, pamplemousse, citron vert. Frais, légèrement amer, très mexicain.', emoji: '🍊' },
  { nom: 'Spritz Aperol', desc: 'Aperol, Proseco, eau gazeuse. Doux et rafraîchissant.', emoji: '🍷' },
];

const bieres = [
  { nom: 'Mayahuel', desc: 'Bière artisanale — Bière / Cerveza / Beer', emoji: '🍺' },
  { nom: 'Floral', desc: 'Bière aux notes florales — Bière / Cerveza / Beer', emoji: '🌸' },
];

const softs = [
  { nom: 'Jarritos', desc: 'Sodas mexicains aux fruits. Saveurs authentiques directement du Mexique.', emoji: '🫙' },
  { nom: 'Aguas (México)', desc: 'Boissons mexicaines fraîches — eau de Jamaica, horchata et plus.', emoji: '💧' },
  { nom: 'Softs', desc: 'Sélection de boissons fraîches.', emoji: '🥤' },
];

function SectionHeader({ tag, tagColor = '#c0392b', titre, sousTitre }: {
  tag: string; tagColor?: string; titre: React.ReactNode; sousTitre?: string;
}) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '0.875rem' }}>
        <div style={{ width: '40px', height: '2px', backgroundColor: tagColor }} />
        <span style={{ color: tagColor, fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
          {tag}
        </span>
      </div>
      <h2 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
        fontWeight: 900, color: '#f5ede0', lineHeight: 1.1, marginBottom: '0.75rem',
      }}>
        {titre}
      </h2>
      {sousTitre && (
        <p style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.9rem', maxWidth: '520px', lineHeight: 1.65 }}>
          {sousTitre}
        </p>
      )}
    </div>
  );
}

export default function MenuPage() {
  return (
    <div style={{ backgroundColor: '#0f0a06', paddingTop: '5rem' }}>

      {/* ===== HEADER ===== */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem 3rem',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
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
            display: 'inline-block', color: '#c0392b', fontSize: '0.72rem',
            letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '1.25rem',
          }}>
            Lo sabroso de México en cada taco
          </span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.05, marginBottom: '1.25rem', letterSpacing: '-0.02em',
          }}>
            Notre menu
          </h1>
          <p style={{
            color: 'rgba(245, 237, 224, 0.55)',
            fontSize: '1rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7,
          }}>
            Tortillas maison, viandes marinées, cuisson minute. Chaque plat est préparé à la commande avec des produits frais.
          </p>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            marginTop: '1.5rem',
            border: '1px solid rgba(212, 168, 83, 0.3)',
            padding: '0.5rem 1.25rem', borderRadius: '2px',
          }}>
            <Flame size={14} style={{ color: '#d4a853' }} />
            <span style={{ color: '#d4a853', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>
              N'oubliez pas de demander la spécialité du jour
            </span>
          </div>
        </div>
      </section>

      {/* ===== TACOS ===== */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', backgroundColor: '#13100a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionHeader
            tag="Spécialités maison"
            titre={<>Tacos <span style={{ color: '#d35400' }}>artisanaux</span></>}
            sousTitre="Tortillas pressées à la main, garnitures généreuses, cuisson à la minute. Servis en portions de 4 pièces."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {tacos.map((taco) => (
              <div key={taco.nom} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '1.75rem',
                backgroundColor: '#0f0a06', position: 'relative',
                borderTop: '2px solid rgba(192, 57, 43, 0.4)',
              }}>
                {taco.tag && (
                  <span style={{
                    position: 'absolute', top: '-1px', right: '1.25rem',
                    backgroundColor: taco.tag === 'Végé' ? '#2d6a4f' : '#c0392b',
                    color: '#f5ede0', fontSize: '0.62rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    padding: '0.2rem 0.6rem', borderRadius: '0 0 3px 3px',
                  }}>
                    {taco.tag}
                  </span>
                )}
                <div style={{ marginBottom: '0.6rem' }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.3rem', fontWeight: 700, color: '#f5ede0',
                    display: 'inline',
                  }}>
                    {taco.nom}
                  </h3>
                  <span style={{
                    color: 'rgba(245, 237, 224, 0.35)', fontSize: '0.78rem',
                    marginLeft: '0.75rem', fontStyle: 'italic',
                  }}>
                    {taco.sousTitre}
                  </span>
                </div>
                <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {taco.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '2rem', padding: '1.25rem 1.5rem',
            border: '1px solid rgba(212, 168, 83, 0.2)',
            borderRadius: '6px', backgroundColor: 'rgba(212, 168, 83, 0.04)',
            display: 'flex', alignItems: 'center', gap: '1rem',
          }}>
            <Flame size={16} style={{ color: '#d4a853', flexShrink: 0 }} />
            <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>
              <strong style={{ color: '#d4a853' }}>Servis en 4 pièces.</strong> Tous nos tacos sont préparés sur tortillas maison, pressées à la main chaque matin.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TAMALES ===== */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', backgroundColor: '#0f0a06' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionHeader
            tag="Tradition mexicaine"
            tagColor="#d35400"
            titre={<>Tamales</>}
            sousTitre="Feuille de banane farcie — Hoja de plátano rellena. Une recette ancestrale mexicaine préparée avec soin."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
            {tamales.map((t) => (
              <div key={t.nom} style={{
                border: '1px solid rgba(211, 84, 0, 0.2)',
                borderRadius: '8px', padding: '1.5rem',
                backgroundColor: '#13100a',
                borderTop: '2px solid rgba(211, 84, 0, 0.4)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🫔</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.1rem', fontWeight: 700, color: '#f5ede0',
                  }}>
                    {t.nom}
                  </h3>
                </div>
                <p style={{ color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BURRITOS ===== */}
      <section style={{ padding: 'clamp(3rem, 6vw, 6rem) 1.5rem', backgroundColor: '#13100a' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionHeader
            tag="Généreux & complet"
            tagColor="#c0392b"
            titre={<>Burritos</>}
            sousTitre="Tortilla de farine roulée et farcie — généreuse, complète, repas à elle seule."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {burritos.map((b) => (
              <div key={b.nom} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '1.75rem',
                backgroundColor: '#0f0a06',
                borderTop: '2px solid rgba(192, 57, 43, 0.4)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🌯</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.15rem', fontWeight: 700, color: '#f5ede0',
                  }}>
                    {b.nom}
                  </h3>
                </div>
                <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOISSONS ===== */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem',
        backgroundColor: '#0f0a06',
        borderTop: '1px solid rgba(45, 106, 79, 0.2)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionHeader
            tag="À boire"
            tagColor="#2d6a4f"
            titre={<>Boissons</>}
            sousTitre="Cocktails mexicains, vins, bières artisanales et softs pour accompagner votre repas."
          />

          {/* Cocktails */}
          <h3 style={{
            color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
          }}>
            Cocktails
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {cocktails.map((c) => (
              <div key={c.nom} style={{
                border: '1px solid rgba(192, 57, 43, 0.2)',
                borderRadius: '8px', padding: '1.5rem',
                backgroundColor: '#13100a',
                display: 'flex', alignItems: 'flex-start', gap: '0.875rem',
              }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{c.emoji}</span>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 700, marginBottom: '0.4rem' }}>{c.nom}</div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.8rem', lineHeight: 1.6 }}>{c.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Vins */}
          <h3 style={{
            color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
          }}>
            Vins — verre & bouteille
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
            {[
              { type: 'Rouge 🍷', liste: vins.rouge },
              { type: 'Blanc 🥂', liste: vins.blanc },
              { type: 'Mousseux & Rosé 🫧', liste: [...vins.mousseux, ...vins.rose] },
            ].map((cat) => (
              <div key={cat.type} style={{
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px', padding: '1.5rem',
                backgroundColor: '#13100a',
              }}>
                <div style={{ color: '#f5ede0', fontWeight: 700, marginBottom: '1rem', fontSize: '0.95rem' }}>
                  {cat.type}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {cat.liste.map((v) => (
                    <div key={v} style={{
                      color: 'rgba(245, 237, 224, 0.55)', fontSize: '0.85rem',
                      paddingBottom: '0.5rem',
                      borderBottom: '1px solid rgba(245,237,224,0.05)',
                    }}>
                      {v}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bières & Softs */}
          <h3 style={{
            color: '#c0392b', fontSize: '0.75rem', letterSpacing: '0.18em',
            textTransform: 'uppercase', fontWeight: 700, marginBottom: '1.25rem',
          }}>
            Bières & Softs
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[...bieres, ...softs].map((b) => (
              <div key={b.nom} style={{
                border: '1px solid rgba(45, 106, 79, 0.2)',
                borderRadius: '8px', padding: '1.25rem',
                backgroundColor: '#13100a',
                display: 'flex', alignItems: 'flex-start', gap: '0.75rem',
              }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{b.emoji}</span>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{b.nom}</div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.45)', fontSize: '0.78rem', lineHeight: 1.55 }}>{b.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTE ALLERGÈNES ===== */}
      <section style={{ padding: '1.5rem 1.5rem', backgroundColor: '#0a0703' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Leaf size={15} style={{ color: '#2d6a4f', flexShrink: 0 }} />
            <p style={{ color: 'rgba(245, 237, 224, 0.35)', fontSize: '0.78rem', lineHeight: 1.6 }}>
              Informations allergènes disponibles sur demande. N&apos;hésitez pas à nous interroger sur les ingrédients.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{
        padding: 'clamp(4rem, 7vw, 7rem) 1.5rem',
        textAlign: 'center', backgroundColor: '#0f0a06',
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 900, color: '#f5ede0', marginBottom: '1rem',
        }}>
          Des questions sur le menu ?
        </h2>
        <p style={{
          color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.95rem',
          marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem', lineHeight: 1.7,
        }}>
          N&apos;oubliez pas de demander la spécialité du jour sur le stand !
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/ou-nous-trouver" style={{
            backgroundColor: '#c0392b', color: '#f5ede0',
            padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            Nous trouver <ArrowRight size={16} />
          </Link>
          <a href="https://wa.me/32000000000" target="_blank" rel="noopener noreferrer" style={{
            border: '1px solid rgba(45,106,79,0.5)',
            color: '#f5ede0', padding: '1rem 2.5rem', borderRadius: '3px',
            fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          }}>
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </section>

    </div>
  );
}
