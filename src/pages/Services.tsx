import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Code2, Palette, Zap, Shield, BarChart3, Globe, ArrowUpRight, CheckCircle2, ChevronRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const services = [
  {
  icon: <Code2 size={28} />,
  title: 'Business Website Development',
  tagline: 'Modern, Fast & Responsive',
  description:
    'We build modern, responsive business websites that strengthen your online presence, build customer trust, and help generate more leads. Every website is optimized for performance, user experience, and long-term growth.',
  features: [
    'Custom Business Websites',
    'Mobile-Responsive Design',
    'Fast Loading Performance',
    'SEO-Friendly Structure',
    'Lead Generation Focus',
    'Easy Content Management',
  ],
  tech: ['React', 'PHP', 'Nodejs','Typescript','MySQL','HTML5','CSS3','JavaScript','Git','Responsive'],
  color: '#0f768b',
},
 {
  icon: <Globe size={28} />,
  title: 'Landing Pages',
  tagline: 'Built to Convert',
  description:
    'We create high-converting landing pages designed to turn visitors into customers. Whether you\'re promoting a product, service, or marketing campaign, every page is optimized for maximum conversions and lead generation.',
  features: [
    'Conversion-Focused Design',
    'Lead Generation Forms',
    'Product & Service Landing Pages',
    'Marketing Campaign Pages',
    'Fast & Mobile Responsive',
    'CTA Optimization',
  ],
  tech: [
    'React',
    'HTML5',
    'CSS3',
    'Figma',
    'TypeScript',
    'PHP',
    'Google Analytics',
    'Meta Pixel',
  ],
  color: '#12653e',
},
{
  icon: <Palette size={28} />,
  title: 'Website Redesign',
  tagline: 'Modern, Premium & User-Focused',
  description:
    'Transform outdated websites into modern, responsive, and high-performing digital experiences. We redesign your website with improved UI/UX, stronger branding, and a structure that helps convert more visitors into customers.',
  features: [
    'Complete UI/UX Redesign',
    'Modern & Responsive Layouts',
    'Brand Identity Refresh',
    'Improved User Experience',
    'Performance & SEO Enhancements',
    'Conversion-Focused Design',
  ],
  tech: [
    'Figma',
    'Adobe Photoshop',
    'React',
    'TypeScript',
    'HTML5',
    'CSS3',
    'JavaScript',
    'PHP',
  ],
  color: '#754f0d',
},
  {
  icon: <Zap size={28} />,
  title: 'Shopify Store Development',
  tagline: 'Built for Sales & Growth',
  description:
    'We build professional Shopify stores that are fast, secure, and easy to manage. From product setup to responsive design, every store is optimized to deliver a smooth shopping experience and drive more sales.',
  features: [
    'Custom Shopify Store Setup',
    'Responsive Store Design',
    'Product & Collection Management',
    'Secure Payment Integration',
    'Shipping & Tax Configuration',
    'App Integration & Store Optimization',
  ],
  tech: [
    'Shopify',
    'Liquid',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Figma',
    'Adobe Photoshop',
  ],
  color: '#c4471a',
},
 {
  icon: <Shield size={28} />,
  title: 'Website Maintenance & Support',
  tagline: 'Reliable Care, Ongoing Support',
  description:
    'Keep your website secure, up-to-date, and running smoothly with our maintenance and support services. We handle regular updates, bug fixes, backups, and technical assistance so you can focus on growing your business.',
  features: [
    'Regular Website Updates',
    'Bug Fixes & Troubleshooting',
    'Website Backups',
    'Security Monitoring',
    'Performance Checks',
    'Technical Support',
  ],
  tech: [
    'WordPress',
    'Shopify',
    'PHP',
    'MySQL',
    'React',
    'Git',
  ],
  color: '#dbdbdb',
},
  {
  icon: <BarChart3 size={28} />,
  title: 'SEO Ready Websites',
  tagline: 'Built for Better Visibility',
  description:
    'Every website we build follows SEO best practices with clean code, fast loading speeds, responsive layouts, and a solid technical foundation to help improve your search engine visibility.',
  features: [
    'SEO-Friendly Website Structure',
    'Fast Loading Performance',
    'Mobile-Responsive Design',
    'Clean & Semantic Code',
    'Optimized Meta Tags',
    'Performance Best Practices',
  ],
  tech: [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'PHP',
  'Google Lighthouse',
  'PageSpeed Insights',
  'Responsive Design',
  ],
  color: '#1eba86',
},
];

const process = [
  { step: '01', title: 'Discovery', desc: 'We understand your business, goals, target audience, and project requirements.' },
  { step: '02', title: 'Planning', desc: 'We create the project roadmap, website structure, and timeline before development begins.' },
  { step: '03', title: 'Design & Developement', desc: 'We design and develop a modern, responsive website with regular progress updates.' },
  { step: '04', title: 'Launch & Support', desc: 'After testing, we launch your website and provide ongoing support when needed.' },
];

export default function Services() {
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
        background: 'var(--bg-secondary)', textAlign: 'center',
      }}>
        <div className="animated-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>What We Do</div>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 24, lineHeight: 1.05
            }}>
              Capabilities Built for<br /><span className="gradient-text">Exceptional Results</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Six core service pillars, each engineered to deliver measurable business impact. Not just websites — digital competitive advantages.
            </p>
            <Link to="/contact">
              <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Get a Free Audit <ArrowUpRight size={16} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section style={{ padding: '120px 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.05}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(15, 21, 32, 0.9)' }}
                  style={{
                    borderBottom: '1px solid var(--border-subtle)',
                    padding: '56px 0',
                    cursor: 'default',
                  }}
                >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 48, alignItems: 'start' }}>
                    {/* Left */}
                    <div>
                      <div style={{
                        width: 60, height: 60, borderRadius: 14,
                        background: `${svc.color}15`,
                        border: `1px solid ${svc.color}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: svc.color, marginBottom: 20
                      }}>
                        {svc.icon}
                      </div>
                      <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: svc.color, letterSpacing: '0.15em', marginBottom: 8 }}>
                        {svc.tagline}
                      </div>
                      <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 800, fontSize: 32, color: '#f0f4f8', letterSpacing: '-0.02em', marginBottom: 20 }}>
                        {svc.title}
                      </h2>
                      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {svc.tech.map(t => (
                          <span key={t} className="tech-badge" style={{ fontSize: 11 }}>{t}</span>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                        {svc.description}
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                        {svc.features.map(f => (
                          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <CheckCircle2 size={14} style={{ color: svc.color, flexShrink: 0 }} />
                            <span style={{ fontSize: 13, color: '#f0f4f8' }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Process */}
      <section style={{ padding: '100px 0', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 60 }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 36, fontWeight: 800, color: '#f0f4f8', letterSpacing: '-0.02em', marginBottom: 16 }}>
              Engagement Flow
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>From first call to flawless launch — typically 4–12 weeks.</p>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="glass-card" style={{ padding: 28, borderRadius: 12, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#7f7f7f', marginBottom: 8, letterSpacing: '0.15em' }}>
                    Step {p.step}
                  </div>
                  <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0f4f8', marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{p.desc}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 500, height: 500, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 900, color: '#f0f4f8', letterSpacing: '-0.03em', marginBottom: 24 }}>
              Not sure which service you need?
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 40, lineHeight: 1.7 }}>
              Let's talk. Our 30-minute discovery call will clarify everything — free of charge, no pressure.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '16px 40px' }}>
                  Schedule Discovery Call <ArrowUpRight size={16} />
                </button>
              </Link>
              <Link to="/process">
                <button className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 40px' }}>
                  See Our Process <ChevronRight size={16} />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
