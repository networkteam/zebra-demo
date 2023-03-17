import { NeosContentNode } from '@networkteam/zebra';
import classNames from 'classnames';

const sizes = new Map([
  ['topExtraSmall', 't-12'],
  ['topSmall', 't-20'],
  ['topBase', 't-24'],
  ['topLarge', 't-28'],
  ['topExtraLarge', 't-36'],
  ['extraSmall', 'y-12'],
  ['small', 'y-20'],
  ['base', 'y-24'],
  ['large', 'y-28'],
  ['extraLarge', 'y-36'],
  ['bottomExtraSmall', 'b-12'],
  ['bottomSmall', 'b-20'],
  ['bottomBase', 'b-24'],
  ['bottomLarge', 'b-28'],
  ['bottomExtraLarge', 'b-36'],
]);

const marginClasses = (node: NeosContentNode) => {
  const mobile = sizes.get(node.properties.marginMobile);
  const desktop = sizes.get(node.properties.marginDesktop);

  return classNames({
    [`m${mobile}`]: mobile,
    [`sm:m${desktop}`]: desktop,
  });
};

const paddingClasses = (node: NeosContentNode) => {
  const mobile = sizes.get(node.properties.paddingMobile);
  const desktop = sizes.get(node.properties.paddingDesktop);

  return classNames({
    [`p${mobile}`]: mobile,
    [`sm:p${desktop}`]: desktop,
  });
};

export const baseClasses = (node: NeosContentNode) => {
  return classNames(marginClasses(node), paddingClasses(node));
};
