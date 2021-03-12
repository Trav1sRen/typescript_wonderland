const array: string[] = ['a', 'b', 'c'];
const iter = array[Symbol.iterator](); // get the iterator of Array Object
iter.next(); // get the first element in Array

// ****************************************************
class RangeIterator {
    constructor(private start: number, private readonly stop: number) {
        this.start = start;
        this.stop = stop;
    }

    [Symbol.iterator]() {
        return this;
    }

    next() {
        const val = this.start;
        if (val < this.stop) {
            this.start++;
            return { value: val, done: false };
        }
        return { done: true };
    }
}

function range(start: number, stop: number) {
    return new RangeIterator(start, stop);
}

for (const val of range(0, 5)) {
    console.log(val);
}

// ****************************************************
const iterable = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
    [Symbol.iterator]: Array.prototype[Symbol.iterator] // Assign Iterator to Array's
};
for (const item of iterable) {
    console.log(item);
}
