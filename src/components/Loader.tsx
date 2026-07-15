import { useEffect, useState } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing');

  useEffect(() => {
    const stages = ['Initializing', 'Loading Assets', 'Optimizing', 'Ready'];
    let stage = 0;
    const interval = setInterval(() => {
      setProgress(p => {
        const next = p + Math.random() * 15 + 5;
        if (next > 100) { clearInterval(interval); return 100; }
        return next;
      });
      stage = Math.min(stage + 1, stages.length - 1);
      setText(stages[stage]);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: '#080b0f', zIndex: 99999,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: '32px'
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 10,
          background: 'linear-gradient(135deg, #00d4ff, #00ff88)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 22, color: '#000', fontFamily: 'Space Grotesk, sans-serif'
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
        <span style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, color: '#f0f4f8', letterSpacing: '-0.02em' }}>
          ionStack<span style={{ color: '#545555' }}> Digital</span>
        </span>
      </div>

      {/* Progress Bar */}
      <div style={{ width: 280 }}>
        <div style={{
          height: 2, background: '#1a2535', borderRadius: 1, overflow: 'hidden', marginBottom: 12
        }}>
          <div style={{
            height: '100%', width: `${progress}%`,
            background: 'linear-gradient(90deg, #193237, #388561)',
            borderRadius: 1, transition: 'width 0.3s ease',
            boxShadow: '0 0 10px #cfcfcf'
          }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#888888', letterSpacing: '0.15em' }}>
            {text}
          </span>
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, color: '#8899aa' }}>
            {Math.floor(progress)}%
          </span>
        </div>
      </div>

      {/* Decorative elements */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            width: Math.random() * 2 + 1,
            height: Math.random() * 200 + 50,
            background: 'linear-gradient(to bottom, transparent, #00d4ff22, transparent)',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3,
            transform: `rotate(${Math.random() * 360}deg)`,
          }} />
        ))}
      </div>
    </div>
  );
}
