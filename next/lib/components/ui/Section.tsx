import LogoTarget from './LogoTarget';

type Props = {
  children?: React.ReactNode;
  backgroundColor?: string;
};

const Section = ({ children, backgroundColor }: Props) => {
  return (
    <section className={`relative z-10${backgroundColor ? `bg-${backgroundColor}` : ''}`} >
      <div className="relative container px-4 mx-auto">{children}</div>
    </section>
  );
};

export default Section;
