const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const express = require('express');
const axios = require('axios');

const PORT = 8000;
const app = express();


app.get('/', function(req, res) {
    puppeteer.launch().then(async function(browser) {
        const page = await browser.newPage().catch()
        await page.goto('https://www.mlb.com/gameday/mets-vs-nationals/2022/04/07/662571#game_state=final,game_tab=play-by-play,game=662571').catch()
        await page.screenshot({path: 'sample1.png'}).catch()
        const pageData = await page.$$eval('div.info', function(pageData) {
            return pageData.map(function(pageData) {
                return pageData.innerText;
            })
        }).catch()

        await browser.close().catch()

        
        // Sending
        res.send(pageData);
    })
});
app.get('/allplays', function(req, res) {
    puppeteer.launch().then(async function(browser) {
        const page = await browser.newPage().catch()
        await page.goto('https://www.mlb.com/gameday/mets-vs-nationals/2022/04/07/662571#game_state=final,game_tab=play-by-play,game=662571').catch()
        await page.screenshot({path: 'sample1.png'}).catch()
        const pageData = await page.$$eval('div.info', function(pageData) {
            return pageData.map(function(pageData) {
                return pageData.innerText;
            })
        }).catch()

        await browser.close().catch()

        
        // Sending
        res.send(pageData);
    })
});
app.get('/basicstats', function(req, res) {
    puppeteer.launch().then(async function(browser) {
        const awayPitching = 'away-r4'
        const awayBatting = 'away-r1'
        const page = await browser.newPage().catch('Error with getting a new page')
        await page.goto('https://www.mlb.com/gameday/mets-vs-nationals/2022/04/07/662571#game_state=final,game_tab=box,game=662571').catch()
        await page.screenshot({path: 'basicstats.png'}).catch('error with lineup screenshot')
        const lineupData = await page.evaluate(() => Array.from(
                document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreTeamTablestyle__TeamTableWrapper-sc-15fvlso-0.cODBvb.away-r1 > div > div > table > tbody > tr:not(:last-child)`),
                row => {
                    Array.from(row.querySelectorAll('th, td'))
                    const player = row.innerText.split('\n')
                    const statsString = player.join('\t')
                    const stats = statsString.split('\t')
                    const entries = new Map([
                        ['player', player[0]],
                        ['atbats', stats[1]],
                        ['runs', stats[2]],
                        ['hits', stats[3]],
                        ['rbi', stats[4]],
                        ['walks', stats[5]],
                        ['strikeouts', stats[6]],
                        ['lob', stats[7]],
                        ['avg', stats[8]],
                        ['ops', stats[9]]
                    ])
                    const objLineup = Object.fromEntries(entries)
                    return objLineup
                },
        )).catch('Error with lineup data')

        const battingData = await page.evaluate(() => Array.from(
            document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreInfostyle__BoxscoreInfoContainer-sc-1g9pw6v-8.iBbnLK.away-r3`),
            row => {
                Array.from(row.querySelectorAll('div'))
                const content = row.innerText
                let stats = []
                let doubles = []
                let triples = []
                let homeruns = []
                const contentArray = content.split('\n')
                contentArray.shift()
                for (let i = 0; i < contentArray.length; i++) {
                    stats.push(contentArray[i])

                    if () {
                        doubles.push(stats[i])
                    }                    
                }

                const entries = new Map([
                    ['2B', stats[0]],
                    ['3B', contentArray[1]],
                    ['HR', contentArray[2]]
                ])                  
                
                const objLineup = Object.fromEntries(entries)
                return objLineup
            },
        )).catch('Error with batting data')

        const totalBattingData = await page.evaluate(() => Array.from(
            document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreTeamTablestyle__TeamTableWrapper-sc-15fvlso-0.cODBvb.away-r1 > div > div > table > tbody > tr:last-child`),
            row => {
                Array.from(row.querySelectorAll('th, td'))
                const totalRow = row.innerText.split('\n')
                const statsString = totalRow.join('\t')
                const stats = statsString.split('\t')
                const entries = new Map([
                    ['atbats', stats[0]],
                    ['runs', stats[1]],
                    ['hits', stats[2]],
                    ['rbi', stats[3]],
                    ['walks', stats[4]],
                    ['strikeouts', stats[5]],
                    ['lob', stats[6]]
                ])
                const objLineup = Object.fromEntries(entries)
                return objLineup
            },
        )).catch('Error with total batting data')

        const startingPitchingData = await page.evaluate(() => Array.from(
            document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreTeamTablestyle__TeamTableWrapper-sc-15fvlso-0.cODBvb.away-r4 > div > div > table > tbody > tr:nth-child(1)`),
            row => {
                Array.from(row.querySelectorAll('th, td'))
                const player = row.innerText.split('\n')
                const statsString = player.join('\t')
                const stats = statsString.split('\t')
                const entries = new Map([
                    ['player', player[0]],
                    ['innings', stats[1]],
                    ['hits', stats[2]],
                    ['runs', stats[3]],
                    ['earnedruns', stats[4]],
                    ['walks', stats[5]],
                    ['strikeouts', stats[6]],
                    ['homeruns', stats[7]],
                    ['era', stats[8]],
                ])
                const objPitching = Object.fromEntries(entries)
                return objPitching
            }
        )).catch()

        const reliefPitchingData = await page.evaluate(() => Array.from(
            document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreTeamTablestyle__TeamTableWrapper-sc-15fvlso-0.cODBvb.away-r4 > div > div > table > tbody > tr:not(:first-child):not(:last-child)`),
            row => {
                Array.from(row.querySelectorAll('th, td'))
                const player = row.innerText.split('\n')
                const statsString = player.join('\t')
                const stats = statsString.split('\t')
                const entries = new Map([
                    ['player', player[0]],
                    ['innings', stats[1]],
                    ['hits', stats[2]],
                    ['runs', stats[3]],
                    ['earnedruns', stats[4]],
                    ['walks', stats[5]],
                    ['strikeouts', stats[6]],
                    ['homeruns', stats[7]],
                    ['era', stats[8]],
                ])
                const objPitching = Object.fromEntries(entries)
                return objPitching
            }
        )).catch()

        const totalPitchingData = await page.evaluate(() => Array.from(
            document.querySelectorAll(`#gameday-index-component__app > div > div.ViewController.GD5WrapViewController > div > div.Boxscorestyle__BoxscoreWrapper-sc-13cgpxo-3.cRfhs > div.Boxscorestyle__BoxscoreTeamsGridWrapper-sc-13cgpxo-0.epupQd > div.BoxscoreTeamTablestyle__TeamTableWrapper-sc-15fvlso-0.cODBvb.away-r4 > div > div > table > tbody > tr:last-child`),
            row => {
                Array.from(row.querySelectorAll('th, td'))
                const totalRow = row.innerText.split('\n')
                const statsString = totalRow.join('\t')
                const stats = statsString.split('\t')
                const entries = new Map([
                    ['innings', stats[0]],
                    ['hits', stats[1]],
                    ['runs', stats[2]],
                    ['earnedruns', stats[3]],
                    ['walks', stats[4]],
                    ['strikeouts', stats[5]],
                    ['homeruns', stats[6]]
                ])
                const objPitching = Object.fromEntries(entries)
                return objPitching
            }
        )).catch()
        

        await browser.close().catch()

        
        // Sending
        res.send({
            lineup: lineupData,
            batting: battingData,
            total_batting: totalBattingData,
            starting_pitching: startingPitchingData,
            relief_pitching: reliefPitchingData,
            total_pitching: totalPitchingData
        });
    })
});
// (async () => {
    
//     const pageData = await page.evaluate(() => {
//         return {
//             html: document.documentElement.innerHTML,
//         }
//     })

//     
//    const $ = cheerio.load(pageData.html);
//     let element = $('div.feed-item');

//     element.each((index, element) => {
//         text = $(element).find('div.description').text();
//         return text;
//     })
    
    
// })();

app.listen(PORT, () => console.log('Server Running!'))