import { Stack } from './stack';
import { assert } from 'chai';
import 'mocha';

describe('Stack', () => {
    it('can create empty stack', () => {
        const s = new Stack<number>();
        assert.strictEqual(s.size(), 0);
    });
    it('can be pushed upon', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(15);
        s.push(115);
        assert.strictEqual(s.size(), 3);
    });
    it("doesn't do anything when it's empty", () => {
        const s = new Stack<number>();
        s.pop();
        assert.strictEqual(s.size(), 0);
    });
    it('can be popped', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(15);
        s.push(115);
        s.pop();
        assert.strictEqual(s.size(), 2);
    });
    it('can define two equal stacks', () => {
        const s1 = new Stack<number>();
        s1.push(5);
        s1.push(15);
        s1.push(115);
        const s2 = new Stack<number>();
        s2.push(5);
        s2.push(15);
        s2.push(115);
        assert.isOk(s1.equals(s2));
    });
    it('can define two different stacks with equal sizes', () => {
        const s1 = new Stack<number>();
        s1.push(5);
        s1.push(15);
        s1.push(115);
        const s2 = new Stack<number>();
        s2.push(5);
        s2.push(15);
        s2.push(999);
        assert.isNotOk(s1.equals(s2));
    });
    it('can define two different stacks with dissimilar sizes', () => {
        const s1 = new Stack<number>();
        s1.push(5);
        s1.push(15);
        s1.push(115);
        s1.push(1115);
        const s2 = new Stack<number>();
        s2.push(5);
        assert.isNotOk(s1.equals(s2));
    });
    it('can be represented as a text value when it is empty ', () => {
        const s = new Stack<number>();
        assert.strictEqual(s.toString(), 'Nothing here');
    });
    it('can be represented as a text value when it is not empty ', () => {
        const s = new Stack<number>();
        s.push(5);
        s.push(15);
        s.push(115);
        s.push(1115);
        assert.strictEqual(s.toString(), 'Stack: 5, 15, 115, 1115');
    });
});