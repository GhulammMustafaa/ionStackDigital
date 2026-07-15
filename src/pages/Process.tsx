import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Map, Layers, Code2, CheckSquare, Rocket, ArrowUpRight, Clock, Users, MessageSquare, BadgeCheck } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const steps = [
{
  num: '01',
  icon: <Search size={24} />,
  title: 'Discovery',
  duration: '1–2 Days',
  color: '#ffffff',
  description:
    'We start by understanding your business, goals, target audience, and project requirements to create a website that truly represents your brand.',
  activities: [
    'Business & Goal Discussion',
    'Target Audience Analysis',
    'Competitor Research',
    'Project Requirement Gathering',
    'Website Structure Planning',
    'Feature & Functionality Planning',
  ],
  deliverables: [
    'Project Brief',
    'Website Sitemap',
    'Project Timeline',
    'Development Plan',
    'PRD',
  ],
},
  {
  num: '02',
  icon: <Map size={24} />,
  title: 'Planning',
  duration: '1–2 Days',
  color: '#ffffff',
  description:
    'Once we understand your requirements, we plan the website structure, user journey, and project timeline to ensure a smooth development process.',
  activities: [
    'Website Structure Planning',
    'Page & Content Planning',
    'UI/UX Wireframe Planning',
    'Technology Selection',
    'Project Timeline Creation',
    'Development Roadmap',
  ],
  deliverables: [
    'Website Sitemap',
    'Project Timeline',
    'Wireframe',
    'Development Plan',
  ],
},
  {
  num: '03',
  icon: <Layers size={24} />,
  title: 'Design & Development',
  duration: '1–3 Weeks',
  color: '#ffffff',
  description:
    'We design and develop a modern, responsive website that reflects your brand and delivers a seamless user experience, with regular progress updates throughout the project.',
  activities: [
    'UI/UX Design',
    'Responsive Website Development',
    'Frontend & Backend Development',
    'Content Integration',
    'Performance Optimization',
    'Client Feedback & Revisions',
  ],
  deliverables: [
    'Responsive Website',
    'UI Design',
    'Source Code',
    'Ready-to-Test Website',
  ],
},
 {
  num: '04',
  icon: <BadgeCheck size={24} />,
  title: 'Launch & Support',
  duration: '1–2 Days',
  color: '#ffffff',
  description:
    'After thorough testing, we launch your website and ensure everything runs smoothly. We also provide ongoing support, updates, and assistance whenever you need it.',
  activities: [
    'Website Testing & Quality Assurance',
    'Bug Fixes & Final Adjustments',
    'Website Deployment',
    'Performance & Security Checks',
    'Post-Launch Support',
    'Maintenance & Future Updates',
  ],
  deliverables: [
    'Live Website',
    'Source Code',
    'Deployment Files',
    'Support & Maintenance',
  ],
},
];

const principles = [
  { icon: <Clock size={20} />, title: 'On-Time Delivery', desc: '94% of our projects ship on or before deadline.' },
  { icon: <Users size={20} />, title: 'Dedicated Team', desc: 'A named PM, designer, and lead dev on every project.' },
  { icon: <MessageSquare size={20} />, title: 'Weekly Syncs', desc: 'Regular video calls and async updates so you\'re never in the dark.' },
];

export default function Process() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section style={{
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div className="animated-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>How We Work</div>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 24, lineHeight: 1.05
            }}>
              A Process Built for<br /><span className="gradient-text">Predictable Excellence</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Six rigorously defined phases. Every project, every time. Our methodology eliminates surprises and maximizes quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '60px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            {principles.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: 'rgba(0, 212, 255, 0.1)', border: '1px solid rgba(0, 212, 255, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#00d4ff', flexShrink: 0
                  }}>{p.icon}</div>
                  <div>
                    <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: '#f0f4f8', marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{p.desc}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={0.05}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: 48, alignItems: 'center',
                  padding: '80px 0',
                  borderBottom: i < steps.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}>
                  {/* Content (flipped for odd) */}
                  {i % 2 === 0 ? (
                    <>
                      {/* Left */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                          <div style={{
                            width: 56, height: 56, borderRadius: 14,
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}30`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: step.color
                          }}>{step.icon}</div>
                          <div>
                            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: step.color, letterSpacing: '0.15em', marginBottom: 4 }}>
                              Phase {step.num}
                            </div>
                            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 28, color: '#f0f4f8', letterSpacing: '-0.02em' }}>
                              {step.title}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                          <Clock size={14} style={{ color: step.color }} />
                          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>Duration: {step.duration}</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                          {step.description}
                        </p>
                        <div style={{ marginBottom: 24 }}>
                          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: step.color, textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
                            Key Deliverables
                          </div>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {step.deliverables.map(d => (
                              <span key={d} style={{
                                background: `${step.color}10`,
                                border: `1px solid ${step.color}25`,
                                color: step.color, padding: '4px 12px', borderRadius: 4,
                                fontSize: 12, fontFamily: 'JetBrains Mono, monospace'
                              }}>{d}</span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right: Activities */}
                      <div className="glass-card" style={{ padding: 32, borderRadius: 16 }}>
                        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
                          What We Do
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                          {step.activities.map((a, ai) => (
                            <motion.div
                              key={a}
                              initial={{ opacity: 0, x: 20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: ai * 0.05 }}
                              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                            >
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: step.color, boxShadow: `0 0 6px ${step.color}`, flexShrink: 0 }} />
                              <span style={{ fontSize: 14, color: '#f0f4f8' }}>{a}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Activities first */}
                      <div className="glass-card" style={{ padding: 32, borderRadius: 16 }}>
                        <div style={{ fontSize: 11, letterSpacing: '0.15em', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 20 }}>
                          What We Do
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                          {step.activities.map((a, ai) => (
                            <motion.div
                              key={a}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: ai * 0.05 }}
                              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                            >
                              <div style={{ width: 6, height: 6, borderRadius: '50%', background: step.color, boxShadow: `0 0 6px ${step.color}`, flexShrink: 0 }} />
                              <span style={{ fontSize: 14, color: '#f0f4f8' }}>{a}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Content */}
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
                          <div style={{
                            width: 56, height: 56, borderRadius: 14,
                            background: `${step.color}15`,
                            border: `1px solid ${step.color}30`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: step.color
                          }}>{step.icon}</div>
                          <div>
                            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: step.color, letterSpacing: '0.15em', marginBottom: 4 }}>
                              Phase {step.num}
                            </div>
                            <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 28, color: '#f0f4f8', letterSpacing: '-0.02em' }}>
                              {step.title}
                            </div>
                          </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                          <Clock size={14} style={{ color: step.color }} />
                          <span style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>Duration: {step.duration}</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                          {step.description}
                        </p>
                        <div>
                          <div style={{ fontSize: 11, letterSpacing: '0.15em', color: step.color, textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace', marginBottom: 12 }}>
                            Key Deliverables
                          </div>
                          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {step.deliverables.map(d => (
                              <span key={d} style={{
                                background: `${step.color}10`,
                                border: `1px solid ${step.color}25`,
                                color: step.color, padding: '4px 12px', borderRadius: 4,
                                fontSize: 12, fontFamily: 'JetBrains Mono, monospace'
                              }}>{d}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-cyan" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div style={{ maxWidth: 700, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, color: '#f0f4f8', letterSpacing: '-0.03em', marginBottom: 20 }}>
              Ready to Start Phase 01?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 40, lineHeight: 1.7 }}>
              The discovery call is free, fast, and the most valuable 30 minutes you'll spend on your project.
            </p>
            <Link to="/contact">
              <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 44px', fontSize: 15 }}>
                Book Discovery Call <ArrowUpRight size={16} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
