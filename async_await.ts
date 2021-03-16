// async function returns a Promise object
// await 意味着 等待一个Promise对象的状态变为resolved
// consider 'await' as 'yield in Generator'
// 'await' keyword won't RETURN any value for async function, only 'return' keyword could
async function f1() {
    return 'hello world';
    // return Promise.resolve('hello world');
}

f1().then(v => console.log(v)); // "hello world"
// Or
(async function () {
    const str = await f1();
    console.log(str); // "hello world"
})();

// ****************************************************
async function f2() {
    throw new Error('出错了');
    // return Promise.reject(new Error('出错了'));
}
f2().catch(err => console.log(err)); // 出错了

// Sleep Implementation
function sleep(interval: number) {
    return new Promise(resolve => {
        setTimeout(resolve, interval);
    });
}

(async function (interval: number) {
    for (let i = 0; i < interval; i++) {
        await sleep(1000);
    }
})(5);
