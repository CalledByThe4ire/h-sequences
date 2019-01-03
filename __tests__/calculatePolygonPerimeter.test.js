import { l } from 'hexlet-pairs-data';
import { makePoint } from 'hexlet-points';
import calculatePolygonPerimeter from '../src/calculatePolygonPerimeter';

test('calculatePolygonPerimeter', () => {
  const a = makePoint(1, 1);
  const b = makePoint(3, 3);
  const c = makePoint(4, 1);
  const d = makePoint(3, -2);
  const e = makePoint(7, -2);
  const f = makePoint(9, 0);
  const g = makePoint(2, -6);
  const h = makePoint(-1, -1);
  const i = makePoint(-5, 7);

  expect(calculatePolygonPerimeter(l())).toBeNull();
  expect(calculatePolygonPerimeter(l(a))).toBeNull();
  expect(calculatePolygonPerimeter(l(b, c))).toBeNull();

  expect(calculatePolygonPerimeter(l(a, b, c))).toBeCloseTo(8.064, 3);
  expect(calculatePolygonPerimeter(l(a, c, b))).toBeCloseTo(8.064, 3);
  expect(calculatePolygonPerimeter(l(b, c, a))).toBeCloseTo(8.064, 3);

  expect(calculatePolygonPerimeter(l(b, f, e, d))).toBeCloseTo(18.537, 3);
  expect(calculatePolygonPerimeter(l(i, f, g, h))).toBeCloseTo(39.647, 3);

  expect(calculatePolygonPerimeter(l(a, b, f, e, d))).toBeCloseTo(19.971, 3);

  expect(calculatePolygonPerimeter(l(a, b, f, e, d, c))).toBeCloseTo(22.527, 3);
  expect(calculatePolygonPerimeter(l(a, c, d, e, f, b))).toBeCloseTo(22.527, 3);
  expect(calculatePolygonPerimeter(l(a, c, d, f, e, d))).toBeCloseTo(22.921, 3);
  expect(calculatePolygonPerimeter(l(a, c, b, f, e, d))).toBeCloseTo(22.378, 3);
});
