import classNames from 'classnames';

type Props = {
  backgroundColor?: string;
  className?: string;
  children?: React.ReactNode;
};

const Section = ({ backgroundColor, className, children }: Props) => {
  return (
    <section
      className={classNames(
        'relative z-10',
        {
          'bg-dark': backgroundColor === 'dark',
          'bg-white': backgroundColor === 'white',
        },
        className
      )}
    >
      <div className="container relative mx-auto px-4">{children}</div>
    </section>
  );
};

export default Section;
