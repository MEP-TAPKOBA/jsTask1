const sortByName = arr => arr.sort((a, b) => a[a.length - 1] - b[b.length - 1]) // функция для сортировки массива Link[] на выводе

function format(str) { // функция форматирования имен для массива Users[]
    if ((typeof str) !== 'string') { // проверка типа переменной str
        console.log(`Возникла ошибка в базе "Users.JSON", проверьте актуальность и работоспособность`)
        console.log(`Записи должны быть в формате : UserID : ID, username: "Name"`)
        return ('')
    }
    firstStep = str.replace('_', '') //удаляем символ '_'
    secStep = firstStep.split('') // делим строку
    secStep[0] = secStep[0].toUpperCase() // делаем первый символ большим
    return secStep.join('') // соединяем и возвращаем строку
}

module.exports = {
    format,
    sortByName
} 