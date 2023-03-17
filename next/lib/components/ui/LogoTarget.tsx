import classNames from 'classnames';
import { useContext, useEffect, useRef } from 'react';

import { LogoTargetContext } from '../document/partials/Layout';

type LogoTargetType = {
  className?: string;
};

const LogoTarget = ({ className }: LogoTargetType) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setLogoTarget } = useContext(LogoTargetContext);

  useEffect(() => {
    if (!ref.current) return;

    setLogoTarget(ref.current);
  }, [ref, setLogoTarget]);

  return <div ref={ref} className={classNames('aspect-[144/37] w-5/6 lg:w-1/2', className)} />;
};

export default LogoTarget;
