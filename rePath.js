// TODO change build
const fs = require('fs')

const targetFile = './docs/index.html'

fs.readFile(targetFile, 'utf-8', (err, data) => {
    console.log(err, data)

    data = data.replace(/\/static\//ig, 'https://zhangbo819.github.io/mybill-web/static/')

    fs.writeFile(targetFile, data, function () {})
})