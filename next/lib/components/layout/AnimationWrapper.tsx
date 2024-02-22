'use client';
import { AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

const AnimationWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait" initial={false}>
      {children}
    </AnimatePresence>
  );
};

export default AnimationWrapper;
