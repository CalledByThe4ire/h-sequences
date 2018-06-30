/* eslint-disable import/prefer-default-export */
import { l, isEmpty, head, tail, cons, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { name, value, node, is, toString as htmlToString } from 'hexlet-html-tags'; // eslint-disable-line
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
// @flow
type List = (...args: any) => any | null;
// END

export const b2p = (elements: List): List => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement: mixed;
  const element: mixed = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
