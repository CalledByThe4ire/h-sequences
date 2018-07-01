/* eslint-disable import/prefer-default-export, no-confusing-arrow */
import {
  isEmpty,
  head,
  tail,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line
import { value, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Message = 'car' | 'cdr';
type Pair = (message: Message) => any;
type List = (...args: any) => any | null;

export const reduce = (func: Function, acc: 0, elements: List) => {
  if (isEmpty(elements)) {
    return acc;
  }

  return reduce(func, func(head(elements), acc), tail(elements));
};

export const emptyTagsCount = (tagName: string, elements: List): number => {
  const predicate: boolean = element =>
    is(tagName, element) && value(element) === '';
  const func = (element: Pair, acc: number): number =>
    predicate(element) ? acc + 1 : acc;
  return reduce(func, 0, elements);
};
// END

export const headersCount = (tagName: string, elements: List) => {
  const iter = (items: List, acc: number) => {
    if (isEmpty(items)) {
      return acc;
    }
    const item: Pair = head(items);
    const newAcc: number = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};
