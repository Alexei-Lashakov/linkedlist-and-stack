class LinkedNode<T> {
    public data: T;
    public next: LinkedNode<T> | null;
    constructor(data: T, next: LinkedNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList<T> {
    private head: LinkedNode<T> | null;
    private length: number;
    constructor(headElement?: LinkedNode<T>) {
        this.head = headElement || null;
        this.length = 0;
    }

    size(): number {
        return this.length;
    }

    get(index: number): LinkedNode<T> {
        let counter = 0;
        let node = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }

    add(data: T, index: number): void {
        if (!this.head) {
            this.head = new LinkedNode(data);
            this.length++;
            return;
        }

        if (index === 0) {
            this.head = new LinkedNode(data, this.head);
            this.length++;
            return;
        }

        if (index > this.length) { //append newNode to the tail
            index = this.length;
        }

        const previous = this.get(index - 1);
        const newNode = new LinkedNode(data);
        newNode.next = previous.next;
        previous.next = newNode;
        this.length++;

        return;
    }

    remove(index: number): void {
        if (index === 0) {
            this.head = this.head.next;
            this.length--;
            return;
        }

        const previous = this.get(index - 1);
        if (!previous || !previous.next) {
            return;
        }
        previous.next = previous.next.next;
        this.length--;
        return;
    }

    toString(): string {
        if (!this.head) {
            return 'Nothing here';
        }
        let result = '';
        let currentNode = this.head;
        while (currentNode.next != null) {
            result += currentNode.data + ", ";
            currentNode = currentNode.next;
        }
        result += currentNode.data;
        return "List: " + result;
    }

    equals(obj: LinkedList<T>): boolean {
        if (this.length !== obj.length) {
            return false;
        }

        let list1 = this.head;
        let list2 = obj.head;

        while (list1 !== null) {
            if (list1.data !== list2.data) {
                return false;
            }
            list1 = list1.next;
            list2 = list2.next;
        }
        return true;

    }
}
