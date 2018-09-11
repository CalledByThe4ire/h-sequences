/* eslint-disable import/prefer-default-export */
import { length, substr, indexOf } from './strings';

const delimiter = '\n';

export const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
// @flow
export const toString = (list) => {
  const iter = (acc, str) => {
    const fragment =
      indexOf(str, delimiter) !== -1
        ? substr(str, 0, indexOf(str, delimiter))
        : substr(str);
    const idx = length(fragment) + 1;

    if (length(str) === 0) {
      return `(${substr(acc, 0, length(acc) - 1)})`;
    }
    return iter(
      `${acc}${fragment}${length(str) - length(fragment) === 0 ? '' : ','} `,
      substr(str, idx),
    );
  };
  return iter('', list);
};

export const head = (list) => {
  if (indexOf(list, delimiter) === -1) {
    return list;
  }
  return substr(list, 0, indexOf(list, delimiter));
};

export const tail = (list) => {
  if (indexOf(list, delimiter) === -1) {
    return '';
  }
  return substr(list, indexOf(list, delimiter) + 1);
};

export const isEmpty = list => length(list) === 0;

export const cons = (item, list) => {
  if (length(list) === 0) {
    return item;
  }
  return `${item}\n${list}`;
};
// END
