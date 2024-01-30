import classNames from 'classnames';
import Image from 'next/image';

import DummyImage from '../helper/DummyImage';
import LinkAugmenter from '../helper/LinkAugmenter';

export type Props = {
  image: {
    src: string;
    width: number;
    height: number;
    title: string;
    caption: string;
    copyrightNotice: string;
  };
  altText: string;
  fullwidth: boolean;
  title: string;
  link: string;
  className: string;
  inBackend?: boolean;
};

const ImageComponent = ({ image, altText, fullwidth, title, link, className, inBackend }: Props) => {
  return (
    <>
      {image && image.src ? (
        <LinkAugmenter href={link} className="block" inBackend={inBackend}>
          <Image
            className={classNames(
              'h-auto max-w-full',
              {
                'w-full': fullwidth,
              },
              className
            )}
            alt={altText || image?.title || ''}
            src={image.src}
            width={image.width}
            height={image.height}
            title={title}
          />
        </LinkAugmenter>
      ) : (
        <DummyImage />
      )}
    </>
  );
};

export default ImageComponent;
