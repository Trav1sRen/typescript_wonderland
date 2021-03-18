import fetch, { Response } from 'node-fetch';
import { assert } from 'chai';

fixture('Call public API "https://yesno.wtf/api"');

test('Check if status code equals 200, and "answer" exists in response', async () => {
    await (async function () {
        const response: Response = await fetch('https://yesno.wtf/api', {
            method: 'GET'
        }).catch(err => {
            console.log('Error when fetching the source: ' + err);
            process.exit(1);
        });

        assert.equal(response.status, 200);
        const resBody: any = await response.json();
        console.log('Response body: ' + JSON.stringify(resBody));
        assert.isDefined(resBody.answer);
    })().catch(err => {
        console.log('Actual result does not match the expectation: ' + err);
        process.exit(1);
    });
});
