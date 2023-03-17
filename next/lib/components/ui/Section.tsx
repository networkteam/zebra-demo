import classNames from 'classnames';

import { Theme, ThemeProvider } from '@/lib/utils/themeContext';

type Props = {
  theme: Theme;
  children?: React.ReactNode;
  className?: string;
};

const Section = ({ theme = 'light', className, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <section
        className={classNames(
          {
            'bg-dark': theme === 'dark',
            'bg-white': theme === 'light',
          },
          className
        )}
      >
        <div className="container relative mx-auto px-4">{children}</div>
      </section>
    </ThemeProvider>
  );
};

export default Section;
