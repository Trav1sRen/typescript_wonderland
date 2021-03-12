const getJSON = function (url: string) {
    return new Promise((resolve, reject) => {
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = () => {
            if (client.readyState !== 4) {
                return;
            }
            if (client.status === 200) {
                resolve(client.response);
            } else {
                reject(new Error(client.statusText));
                // throw new Error(client.statusText);
            }
        };
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });
};
getJSON('/posts.json').then(
    res => console.log('Contents: ' + res),
    err => console.error('Error: ' + err)
);
// Better expression
getJSON('/posts.json')
    .then(res => console.log('Contents: ' + res))
    .catch(err => console.error('Error: ' + err));

// ****************************************************
getJSON('/post/1.json')
    .then(
        post => getJSON((post as any).commentURL) // return a new Promise Object
    )
    .then(
        comment => console.log('resolved: ' + comment),
        err => console.error('Error: ' + err)
    );

// ****************************************************
// .catch(err => console.log('rejected: ' + err))
// 等同于
// .then(undefined, err => console.log('rejected: ' + err))

// ****************************************************
// .finally(() => {...})
// Promise.prototype.finally的回调函数不接收任何参数
