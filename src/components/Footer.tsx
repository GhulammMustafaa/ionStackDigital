import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, Send } from 'lucide-react';

/* ── Inline SVG social icons (lucide-react dropped brand icons) ── */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.847h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.153h7.594l5.243 6.932 6.064-6.932Zm-1.29 19.494h2.04L6.486 3.246H4.298l13.313 17.401Z"/>
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'Process', path: '/process' },
    { label: 'FAQs', path: '/faq' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const socials = [
    { label: 'Facebook', Icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=61591981498863' },
    { label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/ionstackdigital/' },
    { label: 'LinkedIn', Icon: LinkedinIcon, href: '#' },
    { label: 'Twitter', Icon: XIcon, href: 'https://x.com/ionstackdigital' },
  ];

  return (
    <footer
      className="site-footer"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        paddingTop: 80,
        paddingBottom: 0,
      }}
    >
      {/* ── Responsive rules ── */}
      <style>{`
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 280px 1fr 1fr 1.15fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 64px;
        }

        .footer-logo-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding-top: 12px;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 20px 0;
        }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            row-gap: 48px;
          }
          .footer-logo-col {
            grid-column: 1 / -1;
            flex-direction: row;
            align-items: center;
            padding-top: 0;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .site-footer {
            padding-top: 56px;
          }
          .footer-inner {
            padding: 0 20px;
          }
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }
          .footer-logo-col {
            justify-content: center;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px 0 24px;
          }
          .footer-bottom p,
          .footer-bottom a {
            font-size: 11px !important;
          }
        }
      `}</style>

      <div className="footer-inner">

        {/* ── Top grid: Logo | Quick Links | Socials | Contact card ── */}
        <div className="footer-grid">

          {/* ── Column 1: Logo ── */}
          <div className="footer-logo-col">
            <Link to="/">
              <img
                src="/icfooter.png"
                alt="IonStack"
                style={{
                  width: 200,
                  maxWidth: '60vw',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Link>
          </div>

          {/* ── Column 2: Quick Links ── */}
          <div>
            <h4
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#f0f4f8',
                marginBottom: 28,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16, padding: 0, margin: 0 }}>
              {quickLinks.map(item => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: 14,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#1592ab';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    <ChevronRight
                      size={14}
                      style={{ color: '#1592ab', flexShrink: 0, opacity: 0.85 }}
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Socials ── */}
          <div>
            <h4
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                color: '#f0f4f8',
                marginBottom: 28,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Socials
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 20, padding: 0, margin: 0 }}>
              {socials.map(({ label, Icon, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: 14,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 12,
                      transition: 'color 0.25s ease',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = '#1592ab';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                    }}
                  >
                    <Icon />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 4: Contact Card ── */}
          <div>
            <div
              style={{
                background: 'linear-gradient(135deg, rgba(0,212,255,0.07) 0%, rgba(13,18,32,0.95) 70%)',
                border: '1px solid rgba(0,212,255,0.18)',
                borderRadius: 18,
                padding: '32px 28px',
                boxShadow: '0 8px 48px rgba(0,0,0,0.45), 0 0 0 1px rgba(0,212,255,0.06) inset',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent glow */}
              <div
                style={{
                  position: 'absolute',
                  top: -50,
                  right: -50,
                  width: 160,
                  height: 160,
                  background: 'radial-gradient(circle, rgba(0,212,255,0.1) 0%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />

              <h4
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 700,
                  fontSize: 13,
                  color: '#f0f4f8',
                  marginBottom: 20,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Contact
              </h4>

              {/* Divider under heading */}
              <div
                style={{
                  height: 1,
                  background: 'rgba(0,212,255,0.18)',
                  marginBottom: 26,
                }}
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

                {/* Email */}
                <a
                  href="mailto:ionStackDigital@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: 13,
                    transition: 'color 0.25s ease',
                    wordBreak: 'break-word',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#1592ab';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={15} color="#1592ab" />
                  </span>
                  ionStackDigital@gmail.com
                </a>

                {/* Phone */}
                <a
                  href="tel:+923161384516"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: 13,
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = '#1592ab';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={15} color="#1592ab" />
                  </span>
                  +92 (316) 1384516
                </a>

                {/* Location */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                    color: 'var(--text-secondary)',
                    fontSize: 13,
                  }}
                >
                  <span
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 9,
                      background: 'rgba(0,212,255,0.1)',
                      border: '1px solid rgba(0,212,255,0.22)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MapPin size={15} color="#1592ab" />
                  </span>
                  Karachi, Pakistan
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: 'var(--border-subtle)' }} />

        {/* ── Bottom bar ── */}
        <div className="footer-bottom">
          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: 12,
              fontFamily: 'JetBrains Mono, monospace',
              display: 'flex',
              alignItems: 'center',
              gap: 7,
              margin: 0,
            }}
          >
            <span style={{ color: '#1592ab', fontSize: 15, lineHeight: 1 }}>©</span>
            {year} ionStack Digital | Precision Engineered
          </p>

          <a
            href="mailto:ionStackDigital@gmail.com"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontSize: 12,
              fontFamily: 'JetBrains Mono, monospace',
              transition: 'color 0.25s ease',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = '#1592ab';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-secondary)';
            }}
          >
            <Send size={13} style={{ color: '#1592ab' }} />
            ionStackDigital@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}