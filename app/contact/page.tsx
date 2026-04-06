'use client';

import { useState } from 'react';
import { MessageCircle, Mail, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nom: '', email: '', sujet: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1200);
  };

  return (
    <div style={{ backgroundColor: '#0f0a06', paddingTop: '5rem' }}>

      {/* Header */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 6rem) 1.5rem clamp(2rem, 4vw, 4rem)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(192,57,43,0.08) 0%, transparent 60%)',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: '#c0392b' }} />
            <span style={{ color: '#c0392b', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600 }}>
              Nous contacter
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 900, color: '#f5ede0',
            lineHeight: 1.05, marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Parlons-nous
          </h1>
          <p style={{
            color: 'rgba(245, 237, 224, 0.55)',
            fontSize: '1rem', maxWidth: '480px', lineHeight: 1.7,
          }}>
            Une question sur nos horaires, une commande groupée, une demande de prestation — on vous répond rapidement.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '0 1.5rem clamp(5rem, 10vw, 10rem)' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem', alignItems: 'start',
        }}>

          {/* Left: contact options */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem', fontWeight: 700, color: '#f5ede0',
              marginBottom: '2rem',
            }}>
              Contactez-nous directement
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>

              {/* WhatsApp */}
              <a href="https://wa.me/32487385577" target="_blank" rel="noopener noreferrer" style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1.5rem',
                border: '1px solid rgba(45, 106, 79, 0.3)',
                borderRadius: '8px',
                backgroundColor: 'rgba(45, 106, 79, 0.06)',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: 'rgba(45, 106, 79, 0.15)',
                  border: '1px solid rgba(45, 106, 79, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#2d6a4f', flexShrink: 0,
                }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    WhatsApp
                  </div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.8rem' }}>
                    Réponse rapide — idéal pour les questions et commandes groupées
                  </div>
                  <div style={{ color: '#2d6a4f', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.4rem' }}>
                    +32 487 38 55 77
                  </div>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:gaelflk@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1.5rem',
                border: '1px solid rgba(192, 57, 43, 0.2)',
                borderRadius: '8px',
                backgroundColor: 'rgba(192, 57, 43, 0.04)',
                textDecoration: 'none',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: 'rgba(192, 57, 43, 0.1)',
                  border: '1px solid rgba(192, 57, 43, 0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#c0392b', flexShrink: 0,
                }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    Email
                  </div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.8rem' }}>
                    Pour les demandes détaillées ou partenariats
                  </div>
                  <div style={{ color: '#c0392b', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.4rem' }}>
                    gaelflk@gmail.com
                  </div>
                </div>
              </a>

              {/* Location */}
              <div style={{
                display: 'flex', alignItems: 'center', gap: '1.25rem',
                padding: '1.5rem',
                border: '1px solid rgba(245, 237, 224, 0.07)',
                borderRadius: '8px',
                backgroundColor: 'rgba(245, 237, 224, 0.02)',
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  backgroundColor: 'rgba(212, 168, 83, 0.1)',
                  border: '1px solid rgba(212, 168, 83, 0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#d4a853', flexShrink: 0,
                }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ color: '#f5ede0', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
                    Sur les marchés
                  </div>
                  <div style={{ color: 'rgba(245, 237, 224, 0.5)', fontSize: '0.8rem' }}>
                    Saint-Gilles · Ixelles · Schaerbeek
                  </div>
                  <div style={{ color: '#d4a853', fontSize: '0.8rem', fontWeight: 600, marginTop: '0.4rem' }}>
                    Voir les horaires →
                  </div>
                </div>
              </div>
            </div>

            {/* Note temps de réponse */}
            <div style={{
              padding: '1.25rem',
              border: '1px solid rgba(212, 168, 83, 0.2)',
              borderRadius: '6px',
              backgroundColor: 'rgba(212, 168, 83, 0.04)',
            }}>
              <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.85rem', lineHeight: 1.65 }}>
                <strong style={{ color: '#d4a853' }}>Temps de réponse</strong> — Nous répondons généralement sous 24h. Pour les urgences ou confirmations de présence le jour du marché, préférez WhatsApp.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.5rem', fontWeight: 700, color: '#f5ede0',
              marginBottom: '2rem',
            }}>
              Envoyer un message
            </h2>

            {sent ? (
              <div style={{
                padding: '3rem 2rem',
                border: '1px solid rgba(45, 106, 79, 0.3)',
                borderRadius: '8px',
                backgroundColor: 'rgba(45, 106, 79, 0.06)',
                textAlign: 'center',
              }}>
                <CheckCircle size={48} style={{ color: '#2d6a4f', marginBottom: '1.25rem' }} />
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.4rem', fontWeight: 700, color: '#f5ede0',
                  marginBottom: '0.875rem',
                }}>
                  Message envoyé !
                </h3>
                <p style={{ color: 'rgba(245, 237, 224, 0.6)', fontSize: '0.9rem', lineHeight: 1.65 }}>
                  Merci pour votre message. Nous vous répondrons dans les meilleurs délais. À très bientôt sur les marchés !
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(245,237,224,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Nom *
                    </label>
                    <input
                      required
                      type="text"
                      value={form.nom}
                      onChange={e => setForm(f => ({ ...f, nom: e.target.value }))}
                      placeholder="Votre nom"
                      style={{
                        width: '100%', padding: '0.875rem 1rem',
                        backgroundColor: '#13100a',
                        border: '1px solid rgba(245, 237, 224, 0.12)',
                        borderRadius: '4px', color: '#f5ede0',
                        fontSize: '0.9rem', outline: 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', color: 'rgba(245,237,224,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="votre@email.com"
                      style={{
                        width: '100%', padding: '0.875rem 1rem',
                        backgroundColor: '#13100a',
                        border: '1px solid rgba(245, 237, 224, 0.12)',
                        borderRadius: '4px', color: '#f5ede0',
                        fontSize: '0.9rem', outline: 'none',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(245,237,224,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Sujet
                  </label>
                  <select
                    value={form.sujet}
                    onChange={e => setForm(f => ({ ...f, sujet: e.target.value }))}
                    style={{
                      width: '100%', padding: '0.875rem 1rem',
                      backgroundColor: '#13100a',
                      border: '1px solid rgba(245, 237, 224, 0.12)',
                      borderRadius: '4px', color: form.sujet ? '#f5ede0' : 'rgba(245,237,224,0.35)',
                      fontSize: '0.9rem', outline: 'none', cursor: 'pointer',
                    }}
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option value="horaires">Horaires et emplacements</option>
                    <option value="groupe">Commande de groupe / événement</option>
                    <option value="partenariat">Partenariat ou collaboration</option>
                    <option value="presse">Presse / médias</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', color: 'rgba(245,237,224,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Votre message..."
                    style={{
                      width: '100%', padding: '0.875rem 1rem',
                      backgroundColor: '#13100a',
                      border: '1px solid rgba(245, 237, 224, 0.12)',
                      borderRadius: '4px', color: '#f5ede0',
                      fontSize: '0.9rem', outline: 'none',
                      resize: 'vertical', fontFamily: 'inherit',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    backgroundColor: loading ? '#922b21' : '#c0392b',
                    color: '#f5ede0',
                    padding: '1rem 2rem',
                    borderRadius: '3px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    border: 'none', cursor: loading ? 'wait' : 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    gap: '0.5rem',
                    transition: 'background 0.3s ease',
                  }}
                >
                  {loading ? 'Envoi en cours...' : (<><Send size={16} /> Envoyer le message</>)}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
