import { ContextProps } from '@networkteam/zebra';
import { useInBackend, useMeta, useNode } from '@networkteam/zebra/server';
import classNames from 'classnames';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

import LogoTargetWrapper from '../../layout/LogoTargetWrapper';
import TransitionFadeWrapper from '../../layout/TransitionFadeWrapper';
import Header from './Header';

const Layout = async ({ ctx, children }: { ctx: ContextProps; children: ReactNode }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const node = await useNode(ctx)();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isRootPage, mainNavigation } = await useMeta(ctx)();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const inBackend = useInBackend(ctx);

  return (
    <div
      className={classNames({
        dark: isRootPage,
      })}
    >
      <LogoTargetWrapper>
        <Header mainNavigation={mainNavigation} inBackend={inBackend} />
        <TransitionFadeWrapper motionKey={node.identifier}>
          <main className="relative z-10 min-h-screen bg-white pt-20 transition-colors duration-500 dark:bg-dark">
            {children}
          </main>
        </TransitionFadeWrapper>
      </LogoTargetWrapper>
    </div>
  );
};

export default Layout;
