import puppeteer from 'puppeteer';

const link = 'https://platzi.com/blog/que-es-platzi-master/';

(async function browser() {
    console.log('Abrimos chromium')
    const browser = await puppeteer.launch({headless: false})// lanzamos el navegador

    const page = await browser.newPage()
    await page.goto(link)

    const commentsText = await page.evaluate(() => {
        const comments = document.querySelectorAll('.CommentContent-text p')
        const listOfComments: string[] = []
        comments.forEach(comment => {
            listOfComments.push(comment.innerHTML)
        })
        return listOfComments
    })

    browser.close()

    console.log(commentsText)
})()