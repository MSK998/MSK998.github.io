const fs = require('fs');

function yearMonthDay() {
    const today = new Date(Date.now())

    var dateArray = []

    dateArray.push(Date.parse('21-11-15'));
    dateArray.push(Date.parse('2021-01-14'));

    for (date in dateArray) {
        console.log(Date.parse('2021-11-15'));
    }

    return today.toISOString().substring(0, 10).replaceAll('-', '/')
}

function newPost() {
    const year = new Date().getFullYear()
    const content = `---
title: Title
date: ${yearMonthDay()}
description: Description
lang: en
headerImage: /images/image.jpg
---
    `

    fs.existsSync(__dirname + `/../../blog/${year}`) ?
        null :
        fs.mkdirSync(__dirname + `/../../blog/${year}`, {
            recursive: true
        })

    fs.writeFileSync(__dirname + `/../../blog/${year}/newpost.md`, content)

}

module.exports = newPost()