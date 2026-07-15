import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, MapPin, CheckCircle2, ArrowUpRight, Send, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import emailjs from '@emailjs/browser';

const budgets = ['< 30,000', '30,000 – 45,000', '50,000 – 75,000', '75,000 – 100,000', '100,000+'];
const services = ['Web Development', 'UI/UX Design', 'E-Commerce', 'Performance Optimization', 'Analytics & SEO', 'Cloud Infrastructure', 'Not sure yet'];
const timelines = ['ASAP', '1 Month', '1–3 Months', '3+ Months'];

const EMAILJS_SERVICE_ID = 'service_up9zb0f';
const EMAILJS_TEMPLATE_ID = 'template_wt29gwp';
const EMAILJS_PUBLIC_KEY = 'PqY8F60FIdLcO3jU5';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', company: '', service: '', budget: '', timeline: '', message: ''
  });
  const [step, setStep] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        name: form.name,
        email: form.email,
        company: form.company || 'Not provided',
        service: form.service || 'Not specified',
        budget: form.budget || 'Not specified',
        timeline: form.timeline || 'Not specified',
        message: form.message,
      },
      EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error('EmailJS send failed:', err);
        setLoading(false);
        setError(true);
      });
  };

  const handleChange = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 32px' }}
      >
        <div style={{ textAlign: 'center', maxWidth: 560 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(0, 255, 136, 0.15)',
              border: '2px solid rgba(0, 255, 136, 0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 32px', color: '#cdcdcd'
            }}
          >
            <CheckCircle2 size={36} />
          </motion.div>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 40, fontWeight: 900, color: '#f0f4f8', letterSpacing: '-0.03em', marginBottom: 16 }}>
            Message Received!
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.7, marginBottom: 40 }}>
            Thank you, <span style={{ color: '#ededed' }}>{form.name}</span>. Our team will review your project details and reach back within <strong style={{ color: '#f0f4f8' }}>2 business hours</strong>. Check your inbox at <span style={{ color: '#dadada' }}>{form.email}</span>.
          </p>
          <div style={{ display: 'flex', gap: 12, flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em' }}>
              While you wait, explore our work →
            </p>
            <a href="/work" style={{
              color: '#cccccc', textDecoration: 'none', fontSize: 14, fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 6
            }}>
              View Case Studies <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section style={{
        paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden',
      }}>
        <div className="animated-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="orb orb-cyan" style={{ width: 500, height: 500, top: -100, right: -100 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 60, alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
              <div className="section-label" style={{ marginBottom: 20 }}>Let's Talk</div>
              <h1 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(36px, 5vw, 62px)',
                fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 24, lineHeight: 1.1
              }}>
                Start Your Project<br /><span className="gradient-text">Today.</span>
              </h1>
              <p style={{ fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 48, maxWidth: 440 }}>
                Tell us about your vision. The more detail you share, the better we can tailor our response — and the faster we move.
              </p>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: <Mail size={18} />, label: 'Email Us', value: 'ionStackDigital@gmail.com' },
                  { icon: <Clock size={18} />, label: 'Response Time', value: 'Within 2 business hours' },
                  { icon: <Phone size={18} />, label: 'Contact', value: '+92 316-1384516' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: 10,
                      background: 'rgba(50, 87, 94, 0.4)',
                      border: '1px solid rgba(0, 212, 255, 0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#ffffff', flexShrink: 0
                    }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.1em', marginBottom: 2 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: '#f0f4f8', fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div style={{ marginTop: 48, padding: 24, background: 'rgba(15, 21, 32, 0.6)', border: '1px solid var(--border-subtle)', borderRadius: 12 }}>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.15em', marginBottom: 16, textTransform: 'uppercase' }}>
                  What Happens Next
                </div>
                {[
                  'We review your project details (same day)',
                  'Schedule a 30-min discovery call',
                  'Receive a tailored proposal within 48hrs',
                  'Project kickoff upon approval',
                ].map((item, i) => (
                  <div key={item} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', marginBottom: 12 }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: 'rgba(50, 87, 94, 0.4)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 9, fontWeight: 700, color: '#ffffff',
                      flexShrink: 0, marginTop: 1,
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}>{i + 1}</div>
                    <span style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="glass-card" style={{ padding: 40, borderRadius: 20 }}>
                {/* Step Indicator */}
                <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
                  {[1, 2, 3].map(s => (
                    <div key={s} style={{
                      height: 3, flex: 1, borderRadius: 2,
                      background: s <= step ? 'linear-gradient(90deg, #23484f, #1e4734)' : 'var(--border-subtle)',
                      transition: 'all 0.4s ease',
                    }} />
                  ))}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 24, letterSpacing: '0.1em' }}>
                  Step {step} of 3
                </div>

                {step === 1 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0f4f8', marginBottom: 24 }}>
                      Tell us about yourself
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Full Name *
                        </label>
                        <input
                          className="form-input"
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={e => handleChange('name', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Business Email *
                        </label>
                        <input
                          type="email"
                          className="form-input"
                          placeholder="Enter your e-mail"
                          value={form.email}
                          onChange={e => handleChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Company / Project Name
                        </label>
                        <input
                          className="form-input"
                          placeholder="Enter Company/Project name"
                          value={form.company}
                          onChange={e => handleChange('company', e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      disabled={!form.name || !form.email}
                      className="btn-primary"
                      style={{ width: '100%', marginTop: 24, opacity: (!form.name || !form.email) ? 0.5 : 1 }}
                    >
                      Continue →
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0f4f8', marginBottom: 24 }}>
                      Project details
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Primary Service Needed
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {services.map(svc => (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => handleChange('service', svc)}
                              style={{
                                padding: '8px 14px', borderRadius: 6,
                                background: form.service === svc ? 'rgba(0, 212, 255, 0.15)' : 'rgba(15, 21, 32, 0.8)',
                                color: form.service === svc ? '#5a7f86' : 'var(--text-secondary)',
                                fontSize: 12, cursor: 'none', fontFamily: 'Space Grotesk, sans-serif',
                                outline: form.service === svc ? '1px solid rgba(0, 212, 255, 0.4)' : '1px solid var(--border-subtle)',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {svc}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Budget Range
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {budgets.map(b => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => handleChange('budget', b)}
                              style={{
                                padding: '8px 14px', borderRadius: 6,
                                background: form.budget === b ? 'rgba(0, 212, 255, 0.15)' : 'rgba(15, 21, 32, 0.8)',
                                color: form.budget === b ? '#00d4ff' : 'var(--text-secondary)',
                                fontSize: 12, cursor: 'none', fontFamily: 'Space Grotesk, sans-serif',
                                outline: form.budget === b ? '1px solid rgba(0, 212, 255, 0.4)' : '1px solid var(--border-subtle)',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 10, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                          Ideal Timeline
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                          {timelines.map(t => (
                            <button
                              key={t}
                              type="button"
                              onClick={() => handleChange('timeline', t)}
                              style={{
                                padding: '8px 14px', borderRadius: 6,
                                background: form.timeline === t ? 'rgba(0, 212, 255, 0.15)' : 'rgba(15, 21, 32, 0.8)',
                                color: form.timeline === t ? '#00d4ff' : 'var(--text-secondary)',
                                fontSize: 12, cursor: 'none', fontFamily: 'Space Grotesk, sans-serif',
                                outline: form.timeline === t ? '1px solid rgba(0, 212, 255, 0.4)' : '1px solid var(--border-subtle)',
                                transition: 'all 0.2s ease',
                              }}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
                      <button type="button" onClick={() => setStep(1)} className="btn-outline" style={{ flex: 1 }}>← Back</button>
                      <button type="button" onClick={() => setStep(3)} className="btn-primary" style={{ flex: 2 }}>Continue →</button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0f4f8', marginBottom: 24 }}>
                      Describe your vision
                    </h3>
                    <div>
                      <label style={{ fontSize: 12, color: 'var(--text-secondary)', display: 'block', marginBottom: 8, letterSpacing: '0.05em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
                        Project Brief *
                      </label>
                      <textarea
                        className="form-input"
                        placeholder="Tell us about your project, your goals, current challenges, and anything else that would help us understand the scope..."
                        value={form.message}
                        onChange={e => handleChange('message', e.target.value)}
                        required
                        rows={6}
                        style={{ resize: 'vertical', minHeight: 140 }}
                      />
                    </div>

                    {/* Summary */}
                    <div style={{ background: 'rgba(0, 212, 255, 0.04)', border: '1px solid rgba(0, 212, 255, 0.1)', borderRadius: 10, padding: 16, marginTop: 16, marginBottom: 20 }}>
                      <div style={{ fontSize: 11, color: '#4c6f76', fontFamily: 'JetBrains Mono, monospace', marginBottom: 10, letterSpacing: '0.1em' }}>SUBMISSION SUMMARY</div>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                        {[
                          { label: 'Name', value: form.name },
                          { label: 'Email', value: form.email },
                          { label: 'Service', value: form.service || 'TBD' },
                          { label: 'Budget', value: form.budget || 'TBD' },
                        ].map(item => (
                          <div key={item.label}>
                            <div style={{ fontSize: 10, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>{item.label}</div>
                            <div style={{ fontSize: 12, color: '#f0f4f8', fontWeight: 500, marginTop: 2 }}>{item.value || '—'}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {error && (
                      <div style={{
                        background: 'rgba(255, 80, 80, 0.08)', border: '1px solid rgba(255, 80, 80, 0.25)',
                        borderRadius: 8, padding: '10px 14px', marginBottom: 16,
                        fontSize: 13, color: '#ff8080'
                      }}>
                        Something went wrong sending your message. Please try again or email us directly.
                      </div>
                    )}

                    <div style={{ display: 'flex', gap: 12 }}>
                      <button type="button" onClick={() => setStep(2)} className="btn-outline" style={{ flex: 1 }}>← Back</button>
                      <button
                        type="submit"
                        disabled={!form.message || loading}
                        className="btn-primary"
                        style={{ flex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: !form.message ? 0.5 : 1 }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                              style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(0,0,0,0.3)', borderTopColor: '#000' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>Send Message <Send size={16} /></>
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section style={{ padding: '80px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 48 }}>
            <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, color: '#f0f4f8' }}>
              Trusted by Teams at
            </h3>
          </AnimatedSection>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 60, flexWrap: 'wrap', opacity: 0.4 }}>
            {['BLOOMBERG', 'SHOPIFY', 'STRIPE', 'NOTION', 'FIGMA', 'WEBFLOW'].map(brand => (
              <span key={brand} style={{
                fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 18,
                color: '#f0f4f8', letterSpacing: '0.1em'
              }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}