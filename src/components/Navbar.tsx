import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'FAQ', path: '/faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 800,
          padding: scrolled ? '12px 0' : '20px 0',
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(8, 11, 15, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(26, 37, 53, 0.8)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 900, fontSize: 16, color: '#000', fontFamily: 'Space Grotesk, sans-serif',
              boxShadow: '0 0 16px rgba(0, 213, 255, 0)',
            }}>
              <img 
    src="icon.jpeg" 
    alt="Logo" 
    style={{ 
      width: '100%', 
      height: '100%', 
      objectFit: 'contain' 
    }} 
  />
            </div>
            <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 16, color: '#f0f4f8', letterSpacing: '-0.01em' }}>
              ionStack<span style={{ color: '#545555' }}> Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="hidden-mobile">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  textDecoration: 'none',
                  color: location.pathname === link.path ? '#00d4ff' : '#8899aa',
                  fontSize: 13, fontWeight: 500, letterSpacing: '0.05em',
                  padding: '8px 16px', borderRadius: 6,
                  background: location.pathname === link.path ? 'rgba(0, 212, 255, 0.06)' : 'transparent',
                  border: location.pathname === link.path ? '1px solid rgba(0, 212, 255, 0.15)' : '1px solid transparent',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLAnchorElement).style.color = '#f0f4f8';
                  }
                }}
                onMouseLeave={e => {
                  if (location.pathname !== link.path) {
                    (e.target as HTMLAnchorElement).style.color = '#8899aa';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="btn-primary" style={{ padding: '10px 22px', fontSize: 12, marginLeft: 8 }}>
                Book Free Consultancy
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none', flexDirection: 'column', gap: 5, padding: 8,
              background: 'transparent', border: 'none', cursor: 'none'
            }}
            className="show-mobile"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 22, height: 1.5, background: '#f0f4f8', borderRadius: 1 }}
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ display: 'block', width: 22, height: 1.5, background: '#f0f4f8', borderRadius: 1 }}
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              style={{ display: 'block', width: 22, height: 1.5, background: '#f0f4f8', borderRadius: 1 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: '100%', maxWidth: 400, padding: '0 32px' }}>
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, x: 40 }}
              animate={mobileOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <Link
                to={link.path}
                style={{
                  textDecoration: 'none',
                  display: 'block',
                  color: location.pathname === link.path ? '#00d4ff' : '#f0f4f8',
                  fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em',
                  fontFamily: 'Space Grotesk, sans-serif',
                  padding: '16px 0',
                  borderBottom: '1px solid rgba(26, 37, 53, 0.6)'
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            style={{ marginTop: 24 }}
          >
            <Link to="/contact">
              <button className="btn-primary" style={{ width: '100%', fontSize: 14 }}>
                Book Free Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  );
}
