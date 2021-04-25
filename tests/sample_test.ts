import TestController, { ClientFunction, Selector } from 'testcafe';

fixture('Search KeyWord In Google')
    .page('https://www.google.com/')
    .before(async () => {
        console.log('Prepare to navigate to Google home page');
    })
    .after(async () => {
        console.log('Test has been done here');
    });

test('Search "TestCafe" in Google, it should return TestCafe home page in results', async (t: TestController) => {
    await t
        .typeText(Selector('[name="q"]'), 'TestCafe')
        .click(Selector('[type="submit"]'));

    // Verify page title here
    await t
        .expect(ClientFunction(() => window.location.href)())
        .contains('google.com/search');

    // Verify 'href' in search results containing TestCafe home page url
    await t
        .expect(
            await (async function (...urls: string[]) {
                const arr: string[] = [];
                const sel: Selector = Selector('#rso>div>.g');

                for (let i = 0; i < (await sel.count); i++) {
                    const href: string = await sel
                        .nth(i)
                        .find('div>div>a')
                        .getAttribute('href');
                    arr.push(href);
                }

                return urls.every(
                    url =>
                        arr.filter(href => href.indexOf(url) !== -1).length > 0
                );
            })('testcafe.io')
        )
        .eql(true);
});
