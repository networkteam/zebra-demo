import LogoTarget from './LogoTarget';

type StageProps = {
  children?: React.ReactNode;
};

const Stage = ({ children }: StageProps) => {
  return (
    <section className="container mx-auto flex min-h-[calc(100vh_-_8rem)] flex-col px-4">
      <div className="flex grow flex-col justify-center">
        <LogoTarget />
      </div>
      <div className="max-w-2xl border-t-2 border-dark dark:border-white">{children}</div>
    </section>
  );
};

export default Stage;
