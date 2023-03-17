import React from "react";

/**
 * ConditionalWrapper is a wrapper component that renders the children only if the condition is true.
 * It allows more flexibility for setting selector classes higher or lower in the hierarchy depending on the needs of implementation.
 * @param {boolean} condition Wrapper condition
 * @param {React.ReactNode} children Children to render if condition is true
 * @param {string} classNames Space separated list of classes to add to the wrapper
 * @param {string} tagName HTML Tag name of the wrapper
 * @returns {React.ReactNode | React.ReactNode[]} children wrapped or unwrapped
 */

type ConditionalWrapperProps = {
  condition: boolean;
  children: any;
  classNames: string;
  tagName?: string;
  attributes?: { [key: string]: any };
};

const ConditionalWrapper = ({
  condition,
  children,
  classNames,
  tagName = "div",
  attributes
}: ConditionalWrapperProps) => {
  const Tag = `${tagName}` as keyof JSX.IntrinsicElements;
  return condition ? <Tag className={classNames} {...attributes}>{children}</Tag> : children;
};

export default ConditionalWrapper;
