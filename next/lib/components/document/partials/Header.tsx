'use client';
import { NeosNode } from '@networkteam/zebra';
import classNames from 'classnames';
import { AnimationProps, motion } from 'framer-motion';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

import LinkAugmenter from '../../helper/LinkAugmenter';
import { LogoTargetContext } from '../../layout/LogoTargetWrapper';
import Logo from '../../ui/Logo';

export interface MenuItem {
  state: 'normal' | 'current' | 'active' | 'absent';
  label: string;
  menuLevel: number;
  node: NeosNavigationNode;
  subItems?: MenuItem[];
}

export interface NeosNavigationNode extends NeosNode {
  dimensions?: {
    [key: string]: any;
  };
  routePath: string;
  properties: {
    uriPathSegment: string;
    title: string;
    [key: string]: any;
  };
}

const Header = ({ mainNavigation, inBackend }: { mainNavigation: MenuItem[]; inBackend?: boolean }) => {
  const { logoTarget } = useContext(LogoTargetContext);
  const [targetBoundaries, setTargetBoundaries] = useState<DOMRect | null>(null);

  useEffect(() => {
    if (!logoTarget) {
      setTargetBoundaries(null);
      return;
    }

    const handleResize = () => {
      setTargetBoundaries(logoTarget.getBoundingClientRect());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [logoTarget]);

  const headerAnimationProps: AnimationProps = {
    initial: {
      color: '#282828',
    },
    animate: {
      color: targetBoundaries ? '#fff' : '#282828',
    },
    transition: {
      type: 'spring',
      duration: 0.3,
      bounce: 0,
    },
  };

  const logoAnimationProps: AnimationProps = {
    initial: {
      color: '#282828',
    },
    animate: {
      top: targetBoundaries ? targetBoundaries.top - 16 : 0,
      width: targetBoundaries ? targetBoundaries.right - targetBoundaries.left : '8rem',
      height: targetBoundaries ? targetBoundaries.bottom - targetBoundaries.top : 'auto',
      color: targetBoundaries ? '#fff' : '#282828',
    },
    transition: {
      type: 'spring',
      duration: 0.6,
      bounce: 0,
    },
  };

  return (
    <motion.header
      className="absolute right-0 left-0 top-0 z-50 py-4 transition-colors duration-500"
      {...headerAnimationProps}
    >
      <div className="container relative mx-auto flex items-center justify-end gap-4 px-4">
        <motion.div className="absolute left-4 z-50 w-32" {...logoAnimationProps}>
          <LinkAugmenter className="block" href="/" inBackend={inBackend}>
            <Logo className="transition-colors duration-500" />
          </LinkAugmenter>
        </motion.div>
        <nav>
          <ul className="flex gap-6">
            {mainNavigation.map((item: MenuItem) => (
              <li key={item.node.identifier}>
                <Link
                  className="group font-bayon text-xl text-current transition-colors duration-500 sm:text-2xl"
                  href={item.node.routePath}
                >
                  {item.label}
                  <span
                    className={classNames('transition-opacity', {
                      'opacity-0 group-hover:opacity-100 group-focus:opacity-100': item.state !== 'current',
                      'opacity-100': item.state === 'current',
                    })}
                  >
                    ?
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
