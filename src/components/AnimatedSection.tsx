import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedSection({ children, delay = 0, direction = 'up', className = '', style }: Props) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.7, delay, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
