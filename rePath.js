// TODO change build
const fs = require('fs')

const targetFile = './docs/index.html'

const host = 'https://zhangbo819.github.io/mybill-web/'

fs.readFile(targetFile, 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    
    data = data.replace(/\/assets\//ig, host + 'assets/')
    .replace('/manifest.json', host + 'manifest.json')
    
    console.log(data)

    fs.writeFile(targetFile, data, function () { })
})