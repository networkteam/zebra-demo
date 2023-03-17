import classNames from 'classnames';

type HeadlineProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

const Headline = ({ children, as: Component = 'h1', size, className }: HeadlineProps) => {
  return (
    <Component
      className={classNames(
        'font-bayon text-dark dark:text-white',
        {
          'text-6xl': size === 'h1',
          'text-5xl': size === 'h2',
          'text-4xl': size === 'h3',
          'text-3xl': size === 'h4',
          'text-2xl': size === 'h5',
          'text-xl': size === 'h6',
        },
        className
      )}
    >
      {children}
    </Component>
  );
};

export default Headline;
