import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import useTypewriter from '@/lib/hooks/typewriter';

type HeroProps = {
  title: string | React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  typewriterEnabled?: boolean;
  className?: string;
};

const Hero = ({ title, subtitle, description, image, typewriterEnabled, className }: HeroProps) => {
  const router = useRouter();
  const { currentText, startTyping, reverseTyping } = useTypewriter({
    duration: 800,
    reverseDuration: 300,
  });

  const landscape = image && image.width > image.height;

  useEffect(() => {
    if (!typewriterEnabled || typeof title !== 'string') return;

    startTyping(title);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!typewriterEnabled || typeof title !== 'string') return;

    const reverse = (routePath: string) => {
      if (routePath === router.asPath) return;

      reverseTyping(title);
    };

    router.events.on('routeChangeStart', reverse);

    return () => {
      router.events.off('routeChangeStart', reverse);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return (
    <section
      className={classNames(
        'container mx-auto flex min-h-[calc(100vh_-_5rem)] flex-col justify-between gap-8 px-4 py-8 md:flex-row lg:gap-12 lg:py-16',
        className
      )}
    >
      <div
        className={classNames('grow justify-self-end text-dark dark:text-white lg:mb-0', {
          'lg:mt-24 xl:mt-48 2xl:mt-64': landscape,
          'lg:mt-24 xl:mt-48': !landscape,
        })}
      >
        <h1 className="h-[12.5rem] font-bayon text-[10rem] leading-tight">{typewriterEnabled ? currentText : title}</h1>
        {subtitle && <div className="mb-4 font-bayon text-2xl lg:w-2/3">{subtitle}</div>}
        {description && (
          <div
            className={classNames('text-lg', {
              'md:-mr-48 lg:-mr-32': landscape,
            })}
          >
            {description}
          </div>
        )}
      </div>
      <div
        className={classNames('flex shrink-0 justify-center', {
          'mb-32 basis-1/2 lg:justify-end': landscape,
          'basis-72 lg:justify-center xl:basis-1/3': !landscape,
        })}
      >
        {image?.src && (
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              duration: 2,
              bounce: 0,
              delay: 0.3,
            }}
          >
            <Image
              className="h-full w-full object-contain object-right-top"
              src={image.src}
              alt={image.alt || ''}
              width={image.width}
              height={image.height}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
