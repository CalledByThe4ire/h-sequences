/* eslint-disable import/prefer-default-export, arrow-body-style */
import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import {
  node,
  value,
  is,
  toString as htmlToString,
  map,
  filter,
  reduce,
} from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Node = {
  tagName: string,
  tagValue: mixed
};
type List = (...args: any) => any | null;

export const extractHeaders = (elements: List): List => {
  const filtered: List = filter(
    (element: Node): List => is('h2', element),
    elements,
  );
  return map((element: Node): List => node('p', value(element)), filtered);
};

export const wordsCount = (
  tagName: string,
  word: string,
  elements: List,
): number => {
  const filtered: List = filter(
    (element: Node): List => is(tagName, element),
    elements,
  );
  const values: List = map((element: Node): List => value(element), filtered);
  return reduce(
    (text: string, acc: number): number => wc(word, text) + acc,
    0,
    values,
  );
};
// END
