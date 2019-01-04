/* eslint-disable import/prefer-default-export */
import {
  l,
  isEmpty,
  head,
  tail,
  concat,
  toString as listToString,
} from 'hexlet-pairs-data'; // eslint-disable-line
import {
  is,
  toString as htmlToString,
  hasChildren,
  children,
  map,
  filter,
  reduce,
} from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
const getChildrenFromElements = (elements) => {
  const mapped = map(element => (hasChildren(element) ? children(element) : l()), elements);
  const result = reduce((elementChildren, acc) => concat(elementChildren, acc), l(), mapped);
  return result;
};

const getSatisfiedChildren = (query, elements) => {
  const first = head(query);
  const rest = tail(query);
  const filtered = filter(element => is(first, element), elements);
  if (isEmpty(rest)) {
    return filtered;
  }
  return getSatisfiedChildren(rest, getChildrenFromElements(filtered));
};

const select = (query, dom) => {
  const iter = (restOfDom, result) => {
    if (isEmpty(restOfDom)) {
      return result;
    }
    const elements = getSatisfiedChildren(query, restOfDom);
    return iter(getChildrenFromElements(restOfDom), concat(elements, result));
  };

  return iter(dom, l());
};

export default select;
// END
