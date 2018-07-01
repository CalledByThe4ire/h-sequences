/* eslint-disable import/prefer-default-export */
import {
  l,
  isEmpty,
  head,
  tail,
  cons,
  reverse,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line
import {
  make,
  append,
  node,
  value,
  is,
  toString as htmlToString,
  map,
} from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Message = 'car' | 'cdr';
type Pair = (message: Message) => any;
type List = (...args: any) => any | null;

export const filter = (func: Function, elements: List): List => {
  const iter = (items: List, acc: List): List => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item: Pair = head(items);
    const newAcc: List = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

export const quotes = (elements: List): string => {
  const filtered: List = filter(element => is('blockquote', element), elements);
  const result: string = map(value: Function, filtered);
  return result;
};
// END

export const removeHeaders = (elements: List): List => {
  if (isEmpty(elements)) {
    return l();
  }

  const element: Pair = head(elements);
  const tailElements: List = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
