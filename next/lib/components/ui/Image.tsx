import classNames from 'classnames';
import Image from 'next/image';
import ConditionalWrapper from '../helper/ConditionalWrapper';
import DummyImage from '../helper/DummyImage';

type Props = {
  altText: string;
  fullwidth: boolean;
  image: any;
  title: string;
  link: string; // TODO: implement link
  baseClasses: string;
};

const ImageComponent = ({ altText, fullwidth, image, title, link, baseClasses }: Props) => {
  return (
    <>
      {image && image.src ? (
        <ConditionalWrapper condition={!!link} classNames='block' tagName='a' attributes={{href: link, target: "_blank"}}>
          <Image
            className={classNames('max-full h-auto', baseClasses, {
              'w-full': fullwidth,
            })}
            alt={altText}
            src={image.src}
            width={image.width}
            height={image.height}
            title={title}
          />
        </ConditionalWrapper>
      ) : (
        <DummyImage  height='200px'/>
      )}
    </>
  );
};

export default ImageComponent;
