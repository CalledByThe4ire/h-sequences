import { getX, getY } from 'hexlet-points';
import { isEmpty, head, tail } from 'hexlet-pairs-data';

const isListValid = (list) => {
  if (isEmpty(list)) {
    return false;
  }
  const iter = (pointsList, acc, limit) => {
    if (acc === limit) {
      return true;
    }
    const rest = tail(pointsList);
    const newAcc = acc + 1;

    if (isEmpty(rest) && (newAcc < limit)) {
      return false;
    }
    return iter(rest, newAcc, limit);
  };
  return iter(list, 0, 3);
};

const findSegmentLength = (point1, point2) => {
  // point1
  const x1 = getX(point1);
  const y1 = getY(point1);

  // point1
  const x2 = getX(point2);
  const y2 = getY(point2);

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

// BEGIN (write your solution here)
export default (list) => {
  if (!isListValid(list)) {
    return null;
  }
  const first = head(list);
  const iter = (pointsList, acc) => {
    const current = head(pointsList);
    const rest = tail(pointsList);

    if (isEmpty(rest)) {
      return acc + findSegmentLength(current, first);
    }
    const len = findSegmentLength(current, head(rest));
    const newAcc = acc + len;

    return iter(rest, newAcc);
  };
  return iter(list, 0);
};
// END
