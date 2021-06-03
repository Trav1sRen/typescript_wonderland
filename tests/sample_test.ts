import { ClientFunction, Selector } from 'testcafe';

fixture('Fixture: Search KeyWord In Google')
    .page('https://www.google.com/')
    .before(async () => {
        console.log('Before Hook: Prepare to navigate to Google home page');
    })
    .after(async () => {
        console.log('After Hook: Test has been done here');
    });

test('Search "TestCafe" in Google, which returns TestCafe home page in results', async t => {
    await t
        .typeText(Selector('[name="q"]'), 'TestCafe')
        .click(Selector('[type="submit"]'));

    // Verify page title here
    await t
        .expect(ClientFunction(() => window.location.href)())
        .contains('google.com/search');

    // Verify 'href' in search results containing TestCafe home page url
    await (async function (...urls: string[]) {
        const arr: string[] = [];
        const sel: Selector = Selector('#rso>.g');

        for (let i = 0; i < (await sel.count); i++) {
            const href: string = await sel
                .nth(i)
                .find('a')
                .getAttribute('href');
            arr.push(href);
        }

        for (const url of urls) {
            await t.expect(arr.find(href => href.indexOf(url) !== -1)).ok();
        }
    })('testcafe.io');
});
