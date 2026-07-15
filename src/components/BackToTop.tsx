import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{
            position: 'fixed', bottom: 32, right: 32, zIndex: 1000,
            width: 48, height: 48, borderRadius: '50%',
            background: 'transparent',
            border: 'none', cursor: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 20px rgba(106, 106, 106, 0.24)',
          }}
          whileHover={{ scale: 1.1, boxShadow: '0 4px 30px rgba(200, 200, 200, 0.6)' }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp size={20} strokeWidth={2.5} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
