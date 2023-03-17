import { useMeta, useNode } from '@networkteam/zebra';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { createContext, Ref, useEffect, useRef, useState } from 'react';

import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

type LogoTargetContextType = {
  logoTarget: HTMLDivElement | null;
  setLogoTarget: (ref: HTMLDivElement | null) => void;
};

export const LogoTargetContext = createContext<LogoTargetContextType>({
  logoTarget: null,
  setLogoTarget: () => {},
});

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  const node = useNode();
  const { isRootPage } = useMeta();
  const [logoTarget, setLogoTarget] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const clearLogoTarget = (routePath: string) => {
      if (routePath === router.asPath) return;

      setLogoTarget(null);
    };

    router.events.on('routeChangeStart', clearLogoTarget);

    return () => {
      router.events.off('routeChangeStart', clearLogoTarget);
    };
  }, [router]);

  return (
    <div
      className={classNames({
        dark: isRootPage,
      })}
    >
      <LogoTargetContext.Provider value={{ logoTarget, setLogoTarget }}>
        <Header />
        <motion.div
          key={node.identifier}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <main className="relative z-10 min-h-screen bg-white pt-20 pb-12 transition-colors duration-500 dark:bg-dark">
            {children}
          </main>
        </motion.div>
      </LogoTargetContext.Provider>
    </div>
  );
};

export default Layout;
