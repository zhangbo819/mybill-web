// TODO change build
const fs = require('fs')

const targetFile = './docs/index.html'

const host = 'https://zhangbo819.github.io/mybill-web/'

fs.readFile(targetFile, 'utf-8', (err, data) => {
    console.log(err, data)

    data = data.replace(/\/static\//ig, host + 'static/')
        .replace('/manifest.json', host + 'manifest.json')

    fs.writeFile(targetFile, data, function () { })
})