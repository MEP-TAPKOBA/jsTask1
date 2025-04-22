users = require('./users.json')
activity = require('./activity.json')
utilts = require('./utilts')

const table = users.map(user => { // создание нового массива объектов на базе Users что бы не мутировать собственно сам Users[]
    username = utilts.format(user.username)
    return { ...user, username, connectTime: 0, link: [] }
})

let allTime = 0
activity.forEach(block => { // распаковка каждого блока Activity
    const caller = table.find(user => user.userID === block.userID) // определение бота коллера
    if (Array.isArray(block.times)) {
        block.times.forEach(call => {
            let linkUser = table.find(user => user.userID === call.userID) // определение бота, которому приходят запросы
            linkUser.connectTime += call.time
            caller.connectTime += call.time
            caller.link.push(linkUser.username)
            allTime += call.time
        })
    }

})
console.log(`Всего на запросы потрачено ${allTime} секунд`)
table.forEach(user => {
    console.log(`${user.username} потратил на запросы ${user.connectTime} секунд, обращался к: ${utilts.sortByName(user.link).join(', ')}`)
})
