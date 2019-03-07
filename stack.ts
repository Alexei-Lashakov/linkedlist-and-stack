interface StackConfig<T> {
    [index: string]: T;
}


class Stack<T> {
    private length: number;
    private stack: StackConfig<T>;
    constructor() {
        this.length = 0;
        this.stack = {};
    }

    push(item: T): void {
        this.stack[this.length] = item;
        this.length++;
    }

    pop(): void {
        if (!this.length) {
            return;
        }

        delete this.stack[this.length];
        this.length--;
    }

    size(): number {
        return this.length;
    }

    equals(obj: Stack<T>): boolean {

        if (this.length !== obj.length) {
            return false;
        }
        for (let i = 0; i < this.length; i++) {

            if (this.stack[i] !== obj.stack[i]) {
                return false;
            }
        }
        return true;
    }

    toString(): string {
        if (!this.length) {
            return 'Nothing here';
        }
        let result = '';
        for (let i = 0; i < this.length; i++) {
            result += this.stack[i] + ", ";
        }
        return "Stack: " + result.slice(0, -2);
    }
}


