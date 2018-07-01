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

export const filter = (fn: Function, elements: List): List => {
  const iter = (udList: List, acc: List): List => {
    if (isEmpty(udList)) {
      return reverse(acc);
    }
    if (!fn(head(udList))) {
      return iter(tail(udList), acc);
    }
    return iter(tail(udList), cons(head(udList), acc));
  };
  return iter(elements, l());
};

export const quotes = (html: List): string => {
  const filteredHtml = filter(
    (element: Pair): boolean => is('blockquote', element),
    html,
  );
  const bqValues = map(
    (element: Pair) => value(element),
    filteredHtml,
  );
  return bqValues;
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
