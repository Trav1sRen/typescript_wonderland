// Use Proxy to get array element with minus index
function createArray(...elements: string[]): string[] {
    return new Proxy(elements, {
        get(arr, idx) {
            if (Number(idx) < 0) {
                idx = String(Number(idx) + arr.length);
            }
            return Reflect.get(arr, idx);
        }
    });
}
const arr: string[] = createArray('a', 'b', 'c');
console.log(arr[-1]); // "c"

// ****************************************************
const num: Array<number> = [1, 2, 3, 4, 5];
console.log(
    num.reduce(
        (total, num) =>
            // No need to pass the initial value '0', it could start with number '1'
            total + num,
        0
    )
); // 15

// ****************************************************
const pipe = (val: number) => {
    const funcStack: Array<(n: number) => number> = [];
    return new Proxy(
        {},
        {
            get(_pipeObj, fnName, proxyObj) {
                // Third param 'proxyObj' is the Proxy object itself
                if (fnName === 'get') {
                    return funcStack.reduce((val, fn) => fn(val), val);
                }
                funcStack.push(funcObj[fnName as string]);
                return proxyObj;
            }
        }
    );
};

const funcObj: { [key: string]: (n: number) => number } = {
    double: n => n * 2,
    pow: n => n * n,
    reverseInt: n => Number(String(n).split('').reverse().join('')) | 0
};

// @ts-ignore (avoid issue caused by meta-programming)
console.log(pipe(3).double.pow.reverseInt.get); // 63

// ****************************************************
