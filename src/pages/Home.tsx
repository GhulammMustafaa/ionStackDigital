import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight, Code2, Palette, Zap, Shield, BarChart3, Globe, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

// Animated Counter
function Counter({ end, suffix = '', duration = 2000 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); return; }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// Canvas Particle Background
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number; pulse: number }> = [];
    const NUM = 80;

    for (let i = 0; i < NUM; i++) {
      particles.push({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      });
    }

    let raf: number;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.005;

      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.pulse += 0.02;
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0;
        const op = p.opacity * (0.7 + 0.3 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${op})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };

    draw();

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />;
}

// Typing Text Component
function TypingText() {
  const words = ['Convert', 'Scale', 'Perform', 'Dominate', 'Thrive'];
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const speed = deleting ? 60 : 100;
    const timeout = setTimeout(() => {
      if (!deleting && displayed.length < word.length) {
        setDisplayed(word.slice(0, displayed.length + 1));
      } else if (deleting && displayed.length > 0) {
        setDisplayed(displayed.slice(0, -1));
      } else if (!deleting && displayed.length === word.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && displayed.length === 0) {
        setDeleting(false);
        setIndex((index + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="gradient-text" style={{ borderRight: '3px solid #4f4f4f', paddingRight: 4 }}>
      {displayed}
    </span>
  );
}

const techStack = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Figma', 'Tailwind','Shopify','PHP','MySQL'];

const services = [
  {
    icon: <Code2 size={22} />,
    title: 'Business Website Development',
    description:
      'Modern, fast and responsive business websites that build trust and generate leads.',
    tags: ['React', 'PHP', 'Responsive'],
  },

  {
    icon: <Globe size={22} />,
    title: 'Landing Pages',
    description:
      'High-converting landing pages for marketing campaigns, products and services.',
    tags: ['Conversion', 'Lead Generation'],
  },

  {
    icon: <Palette size={22} />,
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, premium digital experiences.',
    tags: ['UI/UX', 'Modern Design'],
  },

  {
    icon: <Zap size={22} />,
    title: 'Shopify Store Development',
    description:
      'Professional Shopify stores designed for speed, sales and easy management.',
    tags: ['Shopify', 'E-commerce'],
  },

  {
    icon: <Shield size={22} />,
    title: 'Website Maintenance & Support',
    description:
      'Regular updates, bug fixes, backups and technical support to keep your website running smoothly.',
    tags: ['Maintenance', 'Support'],
  },

  {
    icon: <BarChart3 size={22} />,
    title: 'SEO Ready Websites',
    description:
      'Every website is built with clean code, fast performance and SEO best practices.',
    tags: ['SEO', 'Performance'],
  },
];



const advantages = [
  {
    title: 'Business-First Approach',
    desc: "We don't just write code; we solve business challenges. Every technical decision is rooted in your ROI and strategic goals.",
  },
  {
    title: 'Transparent Workflow',
    desc: 'Real-time dashboards, weekly syncs, and clear documentation. You\'re always in the loop with full access to our progress.',
  },
  {
    title: 'Long-term Support',
    desc: 'Launch is just the beginning. We provide ongoing maintenance and strategic evolution to keep you ahead of the competition.',
  },
];

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* HERO */}
      <section ref={heroRef} style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'radial-gradient(ellipse at 60% 0%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(0,255,136,0.04) 0%, transparent 50%), var(--bg-primary)' }}>
        <ParticleCanvas />
        <div className="animated-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />

        {/* Orbs */}
        <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -100, right: -100 }} />
        <div className="orb orb-green" style={{ width: 400, height: 400, bottom: 0, left: -100 }} />

        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative"
        >
          <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', paddingTop: 140, paddingBottom: 80, position: 'relative', zIndex: 2 }}>
            {/* Label */}
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8 }}
>
  {[1, 2, 3, 4, 5].map((s) => (
    <Star
      key={s}
      size={14}
      style={{ fill: '#e0c80d', color: '#e0c80d' }}
    />
  ))}

  <span
    style={{
      fontSize: 13,
      color: 'var(--text-secondary)',
      marginLeft: 6,
      fontWeight: 600,
    }}
  >
    5.0 Rating
  </span>
</motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(44px, 7vw, 88px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                color: '#f0f4f8',
                maxWidth: 900,
                marginBottom: 32,
              }}
            >
              We Build Websites That <br />
              Make Businesses <TypingText />
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ fontSize: 18, color: 'var(--text-secondary)', maxWidth: 580, lineHeight: 1.7, marginBottom: 48 }}
            >
              ionStack Digital architects high-performance digital experiences for leading business. 
              Technical excellence meets business strategy — built to convert, scale, and dominate.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 64 }}
            >
              <Link to="/contact">
                <button className="btn-primary" style={{ fontSize: 14, padding: '16px 36px', display: 'flex', alignItems: 'center', gap: 8 }}>
                  Start Your Project <ArrowUpRight size={16} />
                </button>
              </Link>
              <Link to="/work">
                <button className="btn-outline" style={{ fontSize: 14, padding: '15px 36px' }}>
                  View Our Work
                </button>
              </Link>
            </motion.div>

            {/* Tech Stack Marquee */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{ overflow: 'hidden', marginBottom: 60 }}
            >
              <p style={{ fontSize: 11, color: 'var(--text-secondary)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'JetBrains Mono, monospace' }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {techStack.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 2
          }}
        >
          <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)' }} />
        </motion.div>
      </section>



      {/* CORE EXPERTISE */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-purple" style={{ width: 500, height: 500, top: 0, left: '30%' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Our Capabilities</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 20 }}>
              Services We Provide
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              From business websites to e-commerce stores, we build digital experiences that help brands stand out and scale with confidence.
            </p>
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {services.map((svc, i) => (
              <AnimatedSection key={svc.title} delay={i * 0.08}>
                <div className="glass-card card-border-gradient" style={{ padding: 32, borderRadius: 16, height: '100%' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 12,
                    background: 'rgba(0, 212, 255, 0.1)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#e4e4e4', marginBottom: 20
                  }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 18, color: '#f0f4f8', marginBottom: 12 }}>
                    {svc.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                    {svc.description}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {svc.tags.map(tag => (
                      <span key={tag} style={{
                        background: 'rgba(0, 212, 255, 0.06)',
                        border: '1px solid rgba(0, 212, 255, 0.15)',
                        color: 'var(--text-secondary)',
                        padding: '3px 10px', borderRadius: 4, fontSize: 11,
                        fontFamily: 'JetBrains Mono, monospace',
                        display: 'flex', alignItems: 'center', gap: 4
                      }}>
                        <span style={{ color: '#eeeeeec9' }}>◆</span> {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: 48 }}>
            <Link to="/services">
              <button className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore All Services <ArrowUpRight size={16} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* THE ADVANTAGE */}
      <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 60, alignItems: 'center' }}>
            <div>
              <AnimatedSection direction="left">
                <div className="section-label" style={{ marginBottom: 16, color: '#7f7f7f' }}>The ionStack Advantage</div>
                <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 48, lineHeight: 1.15 }}>
                  Why leading enterprises choose our technical partnership.
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                  {advantages.map((adv, i) => (
                    <motion.div
                      key={adv.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.6 }}
                      style={{ display: 'flex', gap: 16 }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: '50%',
                        background: 'rgba(0, 212, 255, 0.1)',
                        border: '1px solid rgba(13, 55, 63, 1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, marginTop: 2,
                        color: '#ededed', fontSize: 14, fontWeight: 700,
                        fontFamily: 'Space Grotesk, sans-serif',
                      }}>
                        {i + 1}
                      </div>
                      <div>
                        <h4 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: '#f0f4f8', marginBottom: 6 }}>
                          {adv.title}
                        </h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: 14, lineHeight: 1.7 }}>{adv.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Right: Image */}
            <AnimatedSection direction="right">
              <div style={{ position: 'relative' }}>
                <div style={{
                  borderRadius: 24, overflow: 'hidden',
                  border: '1px solid rgba(84, 84, 84, 0.73)',
                  boxShadow: '0 0 60px rgba(71, 71, 71, 0.1)',
                }}>
                  <img
                    src="Logo.png"
                    alt="Modern tech workspace"
                    style={{ width: '100%', display: 'block', filter: 'brightness(0.7) saturate(1.2)' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.05) 0%, transparent 60%)',
                    borderRadius: 24,
                  }} />
                </div>

                {/* Floating stat card */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute', bottom: -24, left: -24,
                    background: 'rgba(13, 17, 23, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 212, 255, 0.2)',
                    borderRadius: 12, padding: '16px 20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#337882', boxShadow: '0 0 8px #458d98' }} />
                    <div>
                      <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>Avg. Perf Score</div>
                      <div style={{ fontSize: 20, fontWeight: 800, color: '#337882', fontFamily: 'Space Grotesk, sans-serif' }}>98/100</div>
                    </div>
                  </div>
                </motion.div>

                {/* Top-right badge */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
                  style={{
                    position: 'absolute', top: -20, right: -20,
                    background: 'rgba(13, 17, 23, 0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(0, 255, 136, 0.2)',
                    borderRadius: 12, padding: '12px 16px',
                  }}
                >
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace', marginBottom: 2 }}>Conversion Rate</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#fafeff', fontFamily: 'Space Grotesk, sans-serif' }}>↑ 340%</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* PROCESS TEASER */}
      <section style={{ padding: '120px 0', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>How We Work</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f4f8', marginBottom: 16 }}>
              Our Methodical Process
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto' }}>
              How we take your vision from a concept to a high-performance reality.
            </p>
          </AnimatedSection>

          <div style={{ position: 'relative' }}>
            {/* Connecting Line */}
            <div style={{
              position: 'absolute', top: 40, left: '10%', right: '10%', height: 1,
              background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.2), transparent)',
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 24, position: 'relative' }}>
              {[
                { num: '01', label: 'Discovery', desc: 'Understanding goals' },
                { num: '02', label: 'Strategy', desc: 'Planning scope' },
                { num: '03', label: 'Design', desc: 'Designing UI' },
                { num: '04', label: 'Development', desc: 'High-end coding' },
                { num: '05', label: 'QA', desc: 'Rigorous testing' },
                { num: '06', label: 'Launch', desc: 'Going live' },
              ].map((step, i) => (
                <AnimatedSection key={step.num} delay={i * 0.1} style={{ textAlign: 'center' }}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}
                  >
                    <div style={{
                      width: 72, height: 72, borderRadius: '50%',
                      border: '1px solid rgba(96, 97, 97, 0.82)',
                      background: i === 0 ? 'rgba(189, 189, 189, 0.21)' : 'rgba(15, 21, 32, 0.8)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 14,
                      color: i === 0 ? '#f2f2f2' : 'var(--text-secondary)',
                      position: 'relative', zIndex: 1,
                      boxShadow: i === 0 ? '0 0 20px rgba(133, 132, 132, 0.4)' : 'none',
                    }}>
                      {step.num}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14, color: '#f0f4f8', marginBottom: 4 }}>{step.label}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>{step.desc}</div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection style={{ textAlign: 'center', marginTop: 64 }}>
            <Link to="/process">
              <button className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Explore Our Process <ChevronRight size={16} />
              </button>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      {/* <section style={{ padding: '120px 0', background: 'var(--bg-secondary)', position: 'relative' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
          <AnimatedSection style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56, flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="section-label" style={{ marginBottom: 12 }}>Case Studies</div>
              <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f4f8' }}>
                Featured Projects
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8 }}>Proof of our performance and technical polish.</p>
            </div>
           
          </AnimatedSection>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 24 }}>
            {[
              {
                title: 'FinTech Dashboard Platform',
                subtitle: 'Banking · Enterprise App',
                img: 'https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
                tags: ['React', 'Node.js', 'AWS'],
                result: '+340% User Retention',
              },
              {
                title: 'Luxury E-Commerce Store',
                subtitle: 'Retail · Web Platform',
                img: 'https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
                tags: ['Next.js', 'Stripe', 'Vercel'],
                result: '+280% Revenue Growth',
              },
              {
                title: 'Luxury E-Commerce Store',
                subtitle: 'Retail · Web Platform',
                img: 'https://images.pexels.com/photos/34212896/pexels-photo-34212896.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
                tags: ['Next.js', 'Stripe', 'Vercel'],
                result: '+280% Revenue Growth',
              },
              
            ].map((proj, i) => (
              <AnimatedSection key={proj.title} delay={i * 0.15}>
                <div className="project-card" style={{ height: 380 }}>
                  <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  <div className="project-card-overlay" />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(8, 11, 15, 0.9) 0%, transparent 50%)',
                    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
                    padding: 28,
                  }}>
                    <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
                      {proj.tags.map(tag => (
                        <span key={tag} style={{
                          background: 'rgba(0, 212, 255, 0.15)', border: '1px solid rgba(0, 212, 255, 0.2)',
                          color: '#00d4ff', padding: '3px 8px', borderRadius: 4, fontSize: 10,
                          fontFamily: 'JetBrains Mono, monospace',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div style={{ fontSize: 11, color: '#00d4ff', fontFamily: 'JetBrains Mono, monospace', marginBottom: 6, letterSpacing: '0.1em' }}>
                      {proj.subtitle}
                    </div>
                    <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 22, color: '#f0f4f8', marginBottom: 8 }}>
                      {proj.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <CheckCircle2 size={14} style={{ color: '#00ff88' }} />
                      <span style={{ fontSize: 13, color: '#00ff88', fontWeight: 600 }}>{proj.result}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      <section style={{ padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="orb orb-green" style={{ width: 400, height: 400, bottom: 0, right: 0 }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection style={{ textAlign: 'center', marginBottom: 64 }}>
            <div className="section-label" style={{ marginBottom: 16 }}>Testimonials</div>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', color: '#f0f4f8' }}>
              What Our Clients Say
            </h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
            {[
              {
                quote: "Working with Ionstack Digital was a great experience. They took the time to understand the requirements, communicated clearly throughout the project, and delivered a clean, modern website with excellent attention to detail. The final result exceeded my expectations, and I would confidently recommend their services to anyone looking for a reliable web development partner.",
                name: "Kabeer Kalhoro",
                role: "Programming Instructor & Teacher, Cambridge",
                avatar: "KK",
                color: '#00d4ff',
              },
              {
                quote: "Ionstack Digital delivered a website that perfectly reflects our brand identity. Their professionalism, creativity, and technical expertise made the entire process smooth and enjoyable. We couldn't be happier with the final result.",
                name: "Ghulam Mustafa",
                role: "Founder, Creovate",
                avatar: "GM",
                color: '#ababac',
              },
              {
                quote: "Our experience with Ionstack Digital was outstanding. They transformed our vision into a premium Shopify store with exceptional design, performance, and usability. The final result truly elevated our online presence and reflected the quality of our brand.",
                name: "Lobo Stables",
                role: "E-commerce Brand",
                avatar: "LS",
                color: '#904d37',
              },
            ].map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="glass-card" style={{ padding: 32, borderRadius: 16, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  {/* <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} style={{ fill: t.color, color: t.color }} />)}
                  </div> */}
                  <blockquote style={{ color: '#f0f4f8', fontSize: 15, lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: 24 }}>
                    "{t.quote}"
                  </blockquote>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: '50%',
                      background: `${t.color}20`,
                      border: `2px solid ${t.color}40`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 13,
                      color: t.color,
                    }}>{t.avatar}</div>
                    <div>
                      <div style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 14, color: '#f0f4f8' }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontFamily: 'JetBrains Mono, monospace' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE TECH BAR */}
      <section style={{ padding: '48px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
        <div className="marquee-track">
          {[...techStack, ...techStack].map((tech, i) => (
            <span key={i} style={{
              padding: '0 40px',
              fontSize: 13, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600,
              color: i % 3 === 0 ? 'rgb(255, 255, 255)' : 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <span style={{ color: 'rgba(0, 212, 255, 0.3)', fontSize: 8 }}>◆</span>
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ padding: '140px 0', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="orb orb-cyan" style={{ width: 700, height: 700, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <div className="section-label" style={{ marginBottom: 20, textAlign: 'center' }}>Ready to Start?</div>
            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(36px, 5vw, 68px)',
              fontWeight: 900, letterSpacing: '-0.03em',
              color: '#f0f4f8', marginBottom: 24, lineHeight: 1.05
            }}>
              Let's build a website that helps<br />
              your business <span className="gradient-text">thrive.</span>
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', maxWidth: 480, margin: '0 auto 48px', lineHeight: 1.7 }}>
              Ready to elevate your digital presence? Join the ranks of high-performance brands today.
            </p>
            <Link to="/contact">
              <button className="btn-primary" style={{ fontSize: 15, padding: '18px 48px', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                Book Your Free Consultation <ArrowUpRight size={18} />
              </button>
            </Link>
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 20, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
              No Commitment Required · 30-Minute Discovery Call
            </p>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  );
}
