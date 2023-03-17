import classNames from 'classnames';

import { useTheme } from '@/lib/utils/themeContext';

type HeadlineProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const Headline = ({ children, as = 'h1', size, className }: HeadlineProps) => {
  const Component = as;
  const theme = useTheme();

  return (
    <Component
      className={classNames(
        'font-bayon',
        {
          'text-6xl': size === 'h1' || (!size && as === 'h1'),
          'text-5xl': size === 'h2' || (!size && as === 'h2'),
          'text-4xl': size === 'h3' || (!size && as === 'h3'),
          'text-3xl': size === 'h4' || (!size && as === 'h4'),
          'text-2xl': size === 'h5' || (!size && as === 'h5'),
          'text-xl': size === 'h6' || (!size && as === 'h6'),

          'text-dark': theme === 'light',
          'text-white': theme === 'dark',
          'text-dark dark:text-white': !theme,
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Headline;
