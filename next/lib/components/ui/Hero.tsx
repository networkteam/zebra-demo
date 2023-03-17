import classNames from 'classnames';
import { motion } from 'framer-motion';
import Image from 'next/image';

type HeroProps = {
  title: React.ReactNode;
  subtitle: React.ReactNode;
  description: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  className?: string;
};

const Hero = ({ title, subtitle, description, image, className }: HeroProps) => {
  const landscape = image && image.width > image.height;

  return (
    <section className={classNames('container mx-auto flex flex-col gap-8 px-4 md:flex-row lg:gap-12', className)}>
      <div
        className={classNames('justify-self-end text-dark dark:text-white lg:mb-0', {
          'lg:mt-24 xl:mt-48 2xl:mt-64': landscape,
          'lg:mt-24 xl:mt-48': !landscape,
        })}
      >
        <h1 className="font-bayon text-[10rem] leading-tight lg:w-2/3 xl:w-1/2">{title}</h1>
        <div className="mb-4 font-bayon text-2xl lg:w-2/3">{subtitle}</div>
        <div
          className={classNames('text-lg', {
            'md:-mr-48 lg:-mr-32': landscape,
          })}
        >
          {description}
        </div>
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
