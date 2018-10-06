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
  reduce,
} from 'hexlet-html-tags'; // eslint-disable-line

// BEGIN (write your solution here)
const selectByTags = (query, root) => {
  const iter = (tags, tree, acc) => {
    if (isEmpty(tree)) {
      return acc;
    }

    // tags
    const tag = head(tags);
    const restTags = tail(tags);

    // nodes
    const element = head(tree);
    const restNodes = tail(tree);

    if (isEmpty(restTags) && is(tag, element)) {
      return tree;
    }

    if (hasChildren(element) && is(tag, element)) {
      return iter(restTags, children(element), acc);
    }
    return iter(tags, restNodes, acc);
  };
  return iter(query, root, l());
};

const select = (query, root) => {
  const iter = (tags, tree, acc) => {
    if (isEmpty(tree)) {
      return acc;
    }

    // nodes
    const element = head(tree);
    const restNodes = tail(tree);

    if (hasChildren(element)) {
      return iter(
        tags,
        restNodes,
        iter(
          tags,
          children(element),
          concat(acc, selectByTags(tags, l(element))),
        ),
      );
    }
    return iter(tags, restNodes, concat(acc, selectByTags(tags, l(element))));
  };
  return iter(query, root, l());
};
export default select;
// END
