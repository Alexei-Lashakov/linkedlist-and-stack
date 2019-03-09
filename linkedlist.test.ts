import { LinkedList } from './linkedlist';
import { assert } from 'chai';
import 'mocha';

describe('LinkedList', () => {
    it('can create empty list', () => {
        const l = new LinkedList<number>();
        assert.strictEqual(l.size(), 0);
    });
    it('can add more data', () => {
         const l = new LinkedList<number>();
        l.add(2, 11);
        l.add(1, 0);
        l.add(3, 33);
        assert.strictEqual(l.size(), 3);
    });
    it('does not point to a nonexistent element', () => {
        const l = new LinkedList<number>();
        l.add(2, 11);
        l.add(1, 0);
        l.add(3, 33);
        assert.isNull(l.get(4));
    });
    it('can remove some data', () => {
        const l = new LinkedList<number>();
        l.add(2, 11);
        l.add(1, 0);
        l.add(3, 33);
        l.remove(2);
        l.remove(0);
        assert.strictEqual(l.size(), 1);
    });
    it('does not remove any data, if we point to a nonexistent element', () => {
        const l = new LinkedList<number>();
        l.add(2, 11);
        l.add(1, 0);
        l.add(3, 33);
        l.remove(22);
        assert.strictEqual(l.size(), 3);
    });
    it('can be represented as a text value when it is empty ', () => {
        const l = new LinkedList<number>();
        assert.strictEqual(l.toString(), 'Nothing here');
    });
    it('can be represented as a text value when it is not empty ', () => {
        const l = new LinkedList<number>();
        l.add(2, 11);
        l.add(1, 0);
        l.add(3, 33);
        assert.strictEqual(l.toString(), 'List: 1, 2, 3');
    });
    it('can define two equal linkedlists', () => {
        const l1 = new LinkedList<number>();
        l1.add(2, 11);
        l1.add(1, 0);
        l1.add(3, 33);
        const l2 = new LinkedList<number>();
        l2.add(2, 11);
        l2.add(1, 0);
        l2.add(3, 33);
        assert.isOk(l1.equals(l2));
    });
    it('can define two different linkedlists with equal sizes', () => {
        const l1 = new LinkedList<number>();
        l1.add(2, 11);
        l1.add(1, 0);
        l1.add(3, 33);
        const l2 = new LinkedList<number>();
        l2.add(22, 11);
        l2.add(1, 0);
        l2.add(3, 33);
        assert.isNotOk(l1.equals(l2));
    });
    it('can define two different linkedlists with dissimilar sizes', () => {
        const l1 = new LinkedList<number>();
        l1.add(2, 11);
        l1.add(1, 0);
        l1.add(3, 33);
        const l2 = new LinkedList<number>();
        l2.add(22, 11);
        assert.isNotOk(l1.equals(l2));
    });
});