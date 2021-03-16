// "yield* [1, 2, 3]" seems like "yield from [1, 2, 3]" in Python
const myIterable: any = {};
myIterable[Symbol.iterator] = function* () {
    yield 1;
    yield 2;
    yield 3;
};

console.log([...myIterable]); // [1, 2, 3]

// ****************************************************
function* f(): Generator<number> {
    for (let i = 0; true; i++) {
        const reset = yield i; // 'reset' receives the arg of .next()
        if (reset) {
            i -= 1;
        }
    }
}

const g = f();
g.next(); // { value: 0, done: false }
g.next(); // { value: 1, done: false }
g.next(true); // { value: 0, done: false }

// g.next() equals to g.send(None) in Python
// g.next(true) equals to g.send(true) in Python
