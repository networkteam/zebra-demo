import { ContextProps } from '@networkteam/zebra';
import { withMeta, withNode } from '@networkteam/zebra/server';
import classNames from 'classnames';
import { ReactNode } from 'react';

import LogoTargetWrapper from '../../layout/LogoTargetWrapper';
import TransitionFadeWrapper from '../../layout/TransitionFadeWrapper';
import Header from './Header';

const Layout = async ({ ctx, children }: { ctx: ContextProps; children: ReactNode }) => {
  const node = await withNode(ctx);
  const { isRootPage, mainNavigation } = await withMeta(ctx);
  const inBackend = ctx.inBackend;

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
