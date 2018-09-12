/* eslint-disable import/prefer-default-export */
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import { l, isEmpty, reverse, toString as listToString, isList, head, tail, cons as consList, reduce } from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type List = (...args: mixed) => mixed | null;

const isUnique = (list: List): boolean => {
  if (isEmpty(tail(list))) {
    return true;
  }

  const current: mixed = head(list);
  const rest: List = tail(list);
  const predicate: () => boolean = (element: mixed) => current !== element;
  const func = (element: mixed): boolean => predicate(element);
  const reduced: boolean = reduce(func, true, rest);

  if (reduced) {
    return isUnique(rest);
  }
  return false;
};

const isPairDiffHigherThanOne = (list: List): boolean => {
  if (isEmpty(tail(list))) {
    return true;
  }

  const first: mixed = head(list);
  const second: mixed = head(tail(list));
  if (Math.abs(first - second) <= 1) {
    return false;
  }
  return isPairDiffHigherThanOne(tail(list));
};

export default (list: List): boolean => isUnique(list) && isPairDiffHigherThanOne(list);

// END
