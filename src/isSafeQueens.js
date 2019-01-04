// @flow
/* eslint-disable import/prefer-default-export */
import { cons, car, cdr, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
import {
  l,
  isEmpty,
  reverse,
  toString as listToString,
  isList,
  head,
  tail,
  cons as consList,
  reduce,
  length,
} from 'hexlet-pairs-data'; // eslint-disable-line

// BEGIN (write your solution here)
type List = (...args: Array<number>) => number | null;

const isUnique = (list: List): boolean => {
  const iter = (items: List) => {
    const rest: List = tail(items);
    if (isEmpty(rest)) {
      return true;
    }
    const current: number = head(items);
    const reduced: number = reduce(
      (item, num) => (item === current ? num - 1 : num),
      1,
      list,
    );
    if (!reduced) {
      return iter(rest);
    }
    return false;
  };
  return iter(list);
};

const makePairDiffList = (list: List) => {
  const iter = (items: List, acc: List) => {
    const rest: List = tail(items);

    if (isEmpty(rest)) {
      return acc;
    }

    const first: number = head(items);
    const second: number = head(rest);
    const diff: number = Math.abs(first - second);
    const newAcc: List = cons(diff, acc);

    return iter(rest, newAcc);
  };
  return iter(list, l());
};

const isSiblingPairDiffRepeat = (list: List) => {
  const diffList: List = makePairDiffList(list);
  const iter = (items: List) => {
    const rest: List = tail(items);

    if (isEmpty(rest)) {
      return true;
    }

    const first: number = head(items);
    const second: number = head(rest);

    if (first === second) {
      return false;
    }

    return iter(rest);
  };
  return iter(diffList);
};

const isPairDiffHigherThanOne = (list: List) => {
  const diffList: List = makePairDiffList(list);
  const iter = (items: List) => {
    if (isEmpty(items)) {
      return true;
    }

    const current: number = head(items);
    const rest: List = tail(items);

    if (current > 1) {
      return iter(rest);
    }

    return false;
  };
  return iter(diffList);
};

export default (list: List): boolean =>
  isUnique(list) &&
  isPairDiffHigherThanOne(list) &&
  isSiblingPairDiffRepeat(list);
// END
