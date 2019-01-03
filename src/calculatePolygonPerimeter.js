// @flow
import { getX, getY } from 'hexlet-points';
import { isEmpty, head, tail } from 'hexlet-pairs-data';

type List = (...args: any) => any | null;
type Point = Point;

const areThereLessThenThreePoints = (points: List) => {
  const iter = (list: List, acc: number) => {
    if (acc > 2) {
      return false;
    }

    if (isEmpty(list)) {
      return true;
    }

    return iter(tail(list), acc + 1);
  };

  return iter(points, 0);
};

const segmentLength = (point1: Point, point2: Point) => {
  const x1: number = getX(point1);
  const x2: number = getX(point2);
  const y1: number = getY(point1);
  const y2: number = getY(point2);

  return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
};

export default (points: List) => {
  if (areThereLessThenThreePoints(points)) {
    return null;
  }

  const startPoint: Point = head(points);
  const iter = (list: List) => {
    const currentPoint: Point = head(list);
    const rest: List = tail(list);
    if (isEmpty(rest)) {
      return segmentLength(currentPoint, startPoint);
    }

    const nextPoint: Point = head(rest);
    return segmentLength(currentPoint, nextPoint) + iter(rest);
  };

  return iter(points);
};
// END
