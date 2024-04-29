'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const TransitionFadeWrapper = ({ motionKey, children }: { motionKey: string; children: ReactNode }) => {
  return (
    <motion.div
      key={motionKey}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default TransitionFadeWrapper;
