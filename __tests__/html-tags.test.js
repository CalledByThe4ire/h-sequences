import { l, head, tail } from 'hexlet-pairs-data';
import { make, append, toString, node, name, value } from '../src/html-tags';

describe('dom', () => {
  it('#make', () => {
    const dom1 = make();
    expect(dom1).toBe(l());
  });

  it('#node', () => {
    const node1 = node('h1', 'hello, world');
    expect(name(node1)).toBe('h1');
    expect(value(node1)).toBe('hello, world');
  });

  it('#append', () => {
    const dom1 = make();

    const dom2 = append(dom1, node('h1', 'hello, world'));
    expect(name(head(dom2))).toBe('h1');
    expect(value(head(dom2))).toBe('hello, world');

    const dom = append(dom2, node('h2', 'header2'));
    expect(name(head(dom))).toBe('h2');
    expect(value(head(dom))).toBe('header2');
    expect(name(head(tail(dom)))).toBe('h1');
    expect(value(head(tail(dom)))).toBe('hello, world');
  });

  it('#toString 1', () => {
    const result = '';
    expect(toString(make())).toEqual(result);
  });

  it('#toString 2', () => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'hello, world'));

    const result = '<h1>hello, world</h1>';
    expect(toString(dom2)).toEqual(result);
  });

  it('#toString 3', () => {
    const dom1 = make();
    const dom2 = append(dom1, node('h1', 'hello, world'));
    const dom = append(dom2, node('h2', 'header2'));

    const result = '<h1>hello, world</h1><h2>header2</h2>';
    expect(toString(dom)).toEqual(result);
  });
});
