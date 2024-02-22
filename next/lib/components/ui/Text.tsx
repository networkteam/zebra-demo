'use client';
import classNames from 'classnames';

import { useTheme } from '@/lib/utils/themeContext';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Text = ({ className, children }: Props) => {
  const theme = useTheme();

  return (
    <div
      className={classNames(
        {
          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
          'text-dark dark:text-white': !theme,
        },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Text;
