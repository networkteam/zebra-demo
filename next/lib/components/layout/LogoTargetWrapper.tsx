'use client';
import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useEffect, useState } from 'react';

type LogoTargetContextType = {
  logoTarget: HTMLDivElement | null;
  setLogoTarget: (ref: HTMLDivElement | null) => void;
};

export const LogoTargetContext = createContext<LogoTargetContextType>({
  logoTarget: null,
  setLogoTarget: () => {},
});

const LogoTargetWrapper = ({ children }: { children: ReactNode }) => {
  const [logoTarget, setLogoTarget] = useState<HTMLDivElement | null>(null);

  const pathname = usePathname();
  const [currentPathname, setCurrentPathname] = useState(pathname);

  useEffect(() => {
    const clearLogoTarget = (routePath: string) => {
      if (routePath === currentPathname) return;

      setLogoTarget(null);
      setCurrentPathname(routePath);
    };

    clearLogoTarget(pathname);
  }, [pathname, currentPathname]);

  return <LogoTargetContext.Provider value={{ logoTarget, setLogoTarget }}>{children}</LogoTargetContext.Provider>;
};

export default LogoTargetWrapper;
