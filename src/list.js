/* eslint-disable import/prefer-default-export */
import { length, substr, indexOf } from './strings';

const delimiter: string = '\n';
export const l = (...items: Array<any>): string => items.join(delimiter);

// BEGIN (write your solution here)
// @flow
export const toString = (list: string): string => {
  const iter = (acc: string, str: string) => {
    const fragment: string =
      indexOf(str, delimiter) !== -1
        ? substr(str, 0, indexOf(str, delimiter))
        : substr(str);
    const idx: number = length(fragment) + 1;

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

export const head = (list: string): string => {
  if (indexOf(list, delimiter) === -1) {
    return list;
  }
  return substr(list, 0, indexOf(list, delimiter));
};

export const tail = (list: string): string => {
  if (indexOf(list, delimiter) === -1) {
    return '';
  }
  return substr(list, indexOf(list, delimiter) + 1);
};

export const isEmpty = (list: string): boolean => length(list) === 0;

export const cons = (item: any, list: string): string => {
  if (length(list) === 0) {
    return item;
  }
  return `${item}\n${list}`;
};

const reverse = (list) => {
  const iter = (acc, items) => {
    if (isEmpty(items)) {
      return acc;
    }
    return iter(cons(head(items), acc), tail(items));
  };
  return iter(l(), list);
};

export const filter = (predicate: () => boolean, list) => {
  const iter = (acc, items) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }

    const item = head(items);
    const newAcc = predicate(item) ? cons(item, acc) : acc;
    return iter(newAcc, tail(items));
  };
  return iter(l(), list);
};

export const map = (callback: Function, list) => {
  const iter = (acc, items) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(cons(callback(head(items)), acc), tail(items));
  };

  return iter(l(), list);
};

export const reduce = (callback: Function, init, list) => {
  if (isEmpty(list)) {
    return init;
  }

  return reduce(callback, callback(head(list), init), tail(list));
};

// END
