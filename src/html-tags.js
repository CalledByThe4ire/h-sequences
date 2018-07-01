/* eslint-disable import/prefer-default-export, arrow-body-style */
import { toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
import { node, value, is, toString as htmlToString,  map, filter, reduce } from 'hexlet-html-tags'; // eslint-disable-line

import { wc } from './utils'; // eslint-disable-line

// BEGIN (write your solution here)
// @flow
type Node = {
  tagName: string,
  tagValue: mixed,
};
type List = (...args: any) => any | null;

export const extractHeaders = (html: List): List => {
  const filteredHtml = filter((element: Node): boolean => is('h2', element), html);
  const values = map((element: Node): List => value(element), filteredHtml);
  return map((val: string): List => node('p', val), values);
};

export const wordsCount = (tagName: string, word: string, html: List): number => {
  return reduce((element: Node, acc: number) => {
    if (is(tagName, element) && wc(word, value(element))) {
      return acc + wc(word, value(element));
    }
    return acc;
  }, 0, html);
};
// END
