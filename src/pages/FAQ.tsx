import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I get started with ionStack Digital?',
        a: 'The first step is a free 30-minute discovery call where we learn about your business, goals, and challenges. From there, we create a tailored proposal with detailed scope, timeline, and investment. No commitment required for the discovery call.',
      },
      {
        q: 'How long does a typical project take?',
        a: 'Project timelines vary based on scope and complexity. A landing page or branding project typically takes 2–4 weeks. A full web application or e-commerce platform ranges from 6–16 weeks. During discovery, we\'ll provide a precise timeline with milestones and deadlines.',
      },
      {
        q: 'Do you work with startups or only enterprises?',
        a: 'We work with both. Our portfolio includes funded startups building their first product and Fortune 500 enterprises rebuilding legacy systems. What matters to us is ambition and alignment — if you\'re serious about your digital presence, we\'re serious about helping you.',
      },
      {
        q: 'Can I see examples of your previous work?',
        a: 'Absolutely. Our Work page showcases selected case studies with results and metrics. We also have a more extensive portfolio we can share during a discovery call, including work under NDA that we\'re authorized to show confidentially.',
      },
    ],
  },
  {
    category: 'Pricing & Contracts',
    questions: [
      {
        q: 'How does your pricing work?',
        a: 'We offer both project-based and retainer pricing. Project pricing is scoped upfront with a fixed quote — no surprise invoices. Retainers are for ongoing development, support, and growth optimization. Pricing depends on scope, complexity, and team composition.',
      },
      {
        q: 'What is your typical project investment range?',
        a: 'Entry-level web projects start at 35,000. Mid-complexity applications and e-commerce platforms range from 50,000–80,000. Enterprise-scale builds and ongoing retainers are scoped individually. We match investment to impact — everything we recommend has a clear ROI rationale.',
      },
      {
        q: 'Do you require payment upfront?',
        a: 'We use milestone-based payment structures. Typically: 40% to begin, 40% at design approval, and 20% upon launch. For larger projects, we may structure additional interim milestones. We never ask for 100% upfront.',
      },
      {
        q: 'What does your contract include?',
        a: 'Every engagement includes a detailed Statement of Work (SOW) specifying deliverables, timelines, revision rounds, payment milestones, IP ownership (you own everything we build for you), and post-launch support terms. We use plain-English contracts reviewed by our legal team.',
      },
    ],
  },
  {
    category: 'Development & Design',
    questions: [
      {
        q: 'What technologies do you specialize in?',
        a: 'Our primary stack includes React,JavaScript,HTML5,CSS3,LARAVEL,PHP, TypeScript, Node.js, Python, and MySQL for development. We deploy on Vercel, and Github with Terraform for infrastructure. For design, we work in Figma,Adobe Photoshop and Google Stitch. We always select the right tool for each project\'s specific needs.',
      },
      {
        q: 'Do you design and develop, or do you only do one?',
        a: 'We do both — end to end. Our in-house team covers UI/UX research and design, frontend and backend development, infrastructure, QA, and ongoing support. This unified approach eliminates the communication gaps and delays that come from coordinating separate agencies.',
      },
      {
        q: 'How many revisions are included?',
        a: 'Design phases include 2 rounds of revisions per deliverable. Development includes 2 rounds of feedback post-delivery. We find this sufficient for virtually all projects when we have clear discovery documentation. Additional revision rounds can be added for a transparent hourly rate.',
      },
      {
        q: 'Will my website be mobile-friendly and accessible?',
        a: 'Every project we ship is fully responsive, tested across 20+ device configurations, and meets WCAG 2.1 AA accessibility standards as a baseline. Performance on mobile is a primary concern, not an afterthought — we optimize for Core Web Vitals on all device types.',
      },
    ],
  },
  {
    category: 'Support & Maintenance',
    questions: [
      {
        q: 'What happens after the website launches?',
        a: 'Every project includes a 15-day post-launch support window for bug fixes and minor adjustments at no extra cost. Beyond that, we offer monthly retainer packages for ongoing development, content updates, security monitoring, and strategic growth support.',
      },
      {
        q: 'Do you provide hosting and domain services?',
        a: 'We configure and optimize your hosting environment on your preferred platform (AWS, Vercel, Netlify, etc.) but the hosting account is in your name. We don\'t resell hosting or create dependency. You always own and control your infrastructure.',
      },
      {
        q: 'What if I need urgent support after launch?',
        a: 'Retainer clients receive priority support with response times under 4 hours for critical issues. For non-retainer clients, we offer emergency support packages. We also provide thorough documentation and training so your team can handle day-to-day content management independently.',
      },
      {
        q: 'Can I transfer my project to an in-house team after completion?',
        a: 'Absolutely — and we encourage it. We provide comprehensive technical documentation, codebase walkthroughs, and handover sessions for your in-house or third-party developers. Our code follows industry standards and is built to be maintainable by any competent team.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      style={{
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '24px 0', background: 'transparent', border: 'none', cursor: 'none',
          textAlign: 'left', gap: 24,
        }}
      >
        <span style={{
          fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 17,
          color: open ? '#49778e' : '#f0f4f8', transition: 'color 0.3s ease', lineHeight: 1.4
        }}>
          {q}
        </span>
        <div style={{
          width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
          background: open ? 'rgba(0, 212, 255, 0.15)' : 'rgba(15, 21, 32, 0.8)',
          border: `1px solid ${open ? 'rgba(0, 212, 255, 0.3)' : 'var(--border-subtle)'}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: open ? '#00d4ff' : 'var(--text-secondary)',
          transition: 'all 0.3s ease',
        }}>
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <p style={{
              color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8,
              paddingBottom: 24, paddingRight: 56,
            }}>
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...faqs.map(f => f.category)];

  const filtered = activeCategory === 'All' ? faqs : faqs.filter(f => f.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section style={{
        paddingTop: 160, paddingBottom: 100, position: 'relative', overflow: 'hidden', textAlign: 'center',
      }}>
        <div className="animated-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="orb orb-green" style={{ width: 600, height: 600, top: -200, left: '50%', transform: 'translateX(-50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="section-label" style={{ marginBottom: 20 }}>Questions & Answers</div>
            <h1 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(40px, 6vw, 72px)',
              fontWeight: 900, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 24, lineHeight: 1.05
            }}>
              Frequently Asked<br /><span className="gradient-text">Questions</span>
            </h1>
            <p style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know before we start building together. Can't find your answer? Just ask us directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '0 0 120px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
          {/* Category Filter */}
          <AnimatedSection style={{ marginBottom: 60 }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 60 }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px', borderRadius: 6,
                    background: activeCategory === cat ? '#265166db' : 'rgba(15, 21, 32, 0.8)',
                    color: activeCategory === cat ? '#000' : 'var(--text-secondary)',
                    fontWeight: activeCategory === cat ? 700 : 500,
                    fontSize: 12, cursor: 'none',
                    outline: activeCategory === cat ? '1px solid #18303c' : '1px solid var(--border-subtle)',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Space Grotesk, sans-serif',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* FAQ Categories */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              {filtered.map((section) => (
                <div key={section.category} style={{ marginBottom: 64 }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8,
                    paddingBottom: 16, borderBottom: '1px solid var(--border-subtle)'
                  }}>
                    <div style={{ width: 4, height: 20, background: '#265166', borderRadius: 2 }} />
                    <h2 style={{
                      fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18,
                      color: '#f0f4f8', letterSpacing: '-0.01em'
                    }}>
                      {section.category}
                    </h2>
                  </div>
                  {section.questions.map((item, qi) => (
                    <motion.div
                      key={item.q}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: qi * 0.05 }}
                    >
                      <FAQItem q={item.q} a={item.a} />
                    </motion.div>
                  ))}
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Still have questions */}
          <AnimatedSection>
            <div className="glass-card card-border-gradient" style={{ padding: 48, borderRadius: 20, textAlign: 'center', marginTop: 40 }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>💬</div>
              <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24, color: '#f0f4f8', marginBottom: 12 }}>
                Still have questions?
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.7, marginBottom: 28, maxWidth: 400, margin: '0 auto 28px' }}>
                Our team typically responds within 2 hours during business hours. We love talking shop.
              </p>
              <Link to="/contact">
                <button className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  Send Us a Message <ArrowUpRight size={16} />
                </button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
