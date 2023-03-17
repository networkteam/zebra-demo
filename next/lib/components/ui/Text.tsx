import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Text = ({ className, children }: Props) => {
  return (
    <div className={classNames('text-dark dark:text-white', className)}>
      {children}
    </div>
  );
};

export default Text;
