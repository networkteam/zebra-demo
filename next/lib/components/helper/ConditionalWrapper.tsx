type ConditionalWrapperProps = {
  condition: boolean;
  children: any;
  className: string;
  tagName?: string;
  attributes?: { [key: string]: any };
};

const ConditionalWrapper = ({
  condition,
  children,
  className,
  tagName = 'div',
  attributes,
}: ConditionalWrapperProps) => {
  const Tag = tagName as keyof JSX.IntrinsicElements;

  return condition ? (
    <Tag className={className} {...attributes}>
      {children}
    </Tag>
  ) : (
    children
  );
};

export default ConditionalWrapper;
