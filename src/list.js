// @flow
const delimiter: string = '\n';
export const l = (...items: Array<any>): string => items.join(delimiter);

// BEGIN (write your solution here)
export const head = (list: string): string => {
  const index = list.indexOf(delimiter);
  return list.substr(0, index > -1 ? index : list.length);
};

export const tail = (list: string): string => {
  const index: number = list.indexOf(delimiter);
  return index > -1 ? list.substr(index + delimiter.length) : l();
};

export const isEmpty = (list: string): boolean => list.length === 0;

export const cons = (item: string, list: string): string =>
  (isEmpty(list) ? item : `${item}${delimiter}${list}`);

export const reduce = (
  func: (item: string, acc: string) => string,
  init: string,
  list: string,
): string => {
  const iter = (rest: string, acc: string): string => {
    if (isEmpty(rest)) {
      return acc;
    }
    return iter(tail(rest), func(head(rest), acc));
  };
  return iter(list, init);
};

export const reverse = (list: string): string =>
  reduce((item, acc) => cons(item, acc), l(), list);

export const filter = (predicate: (item: string) => boolean, list: string): string => {
  const reversedResult = reduce(
    (item, acc) => (predicate(item) ? cons(item, acc) : acc),
    l(),
    list,
  );
  return reverse(reversedResult);
};

export const map = (func: (item: string) => string, list: string): string => {
  const reversedResult = reduce(
    (item, acc) => cons(func(item), acc),
    l(),
    list,
  );
  return reverse(reversedResult);
};

export const toString = (list: string): string => {
  const str = reduce((item, acc) => `${acc}, ${item}`, head(list), tail(list));
  return `(${str})`;
};
// END
