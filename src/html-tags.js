/* eslint-disable import/prefer-default-export */
import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Message = 'car' | 'cdr';
type Pair = (message: Message) => any;
type List = (...args: any) => any | null;

export const extractHeaders = (html: List): List => {
  const filteredHtml = filter((element: Pair): boolean => is('h2', element), html);
  const values = map((element: Pair): List => value(element), filteredHtml);
  return map((val: string): List => node('p', val), values);
};

// END
