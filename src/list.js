const delimiter = '\n';
export const l = (...items) => items.join(delimiter);

// BEGIN (write your solution here)
export const head = (list) => {
  const index = list.indexOf(delimiter);
  return list.substr(0, index > -1 ? index : list.length);
};

export const tail = (list) => {
  const index = list.indexOf(delimiter);
  return index > -1 ? list.substr(index + delimiter.length) : l();
};

export const isEmpty = list => list.length === 0;

export const cons = (item, list) =>
  (isEmpty(list) ? item : `${item}${delimiter}${list}`);

export const reduce = (func, init, list) => {
  const iter = (rest, acc) => {
    if (isEmpty(rest)) {
      return acc;
    }
    return iter(tail(rest), func(head(rest), acc));
  };
  return iter(list, init);
};

export const reverse = list =>
  reduce((item, acc) => cons(item, acc), l(), list);

export const filter = (predicate, list) => {
  const reversedResult = reduce(
    (item, acc) => (predicate(item) ? cons(item, acc) : acc),
    l(),
    list,
  );
  return reverse(reversedResult);
};

export const map = (func, list) => {
  const reversedResult = reduce(
    (item, acc) => cons(func(item), acc),
    l(),
    list,
  );
  return reverse(reversedResult);
};

export const toString = (list) => {
  const str = reduce((item, acc) => `${acc}, ${item}`, head(list), tail(list));
  return `(${str})`;
};
// END
