const breakAndCheckWords = words => {
    let brokenWords = words.map(e => e.split(''))

    let allChars = []
    brokenWords.forEach(e => allChars.push(...e))

    let chars = []
    allChars.forEach(e => { if (!chars.includes(e)) { chars.push(e) } })

    // codificate with chars
    let charIndexs = brokenWords.map(e => e.map(i => chars.findIndex(el => el === i)))
    if (chars.length > 10) {
        console.log('too many characters')
        return
    }

    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let {combinations, number} = calculateUniqueCombinations(numbers, chars.length)
    let correctCombinations = []

    combinations.forEach(e => {
        let firstWord = ""
        charIndexs[0].forEach(i => { firstWord = firstWord + `${e[i]}` })
        let secondWord = ""
        charIndexs[1].forEach(i => { secondWord = secondWord + `${e[i]}` })
        let thirdWord = ""
        charIndexs[2].forEach(i => { thirdWord = thirdWord + `${e[i]}` })

        if (parseInt(firstWord) + parseInt(secondWord) === parseInt(thirdWord)) correctCombinations.push(e)
    })

    console.log('Checked ', combinations.length, ' combinations.')
    console.log('Found ', correctCombinations.length, !!correctCombinations.length ? ' answers:' : 'answers.')
    if (!!correctCombinations.length) console.log(correctCombinations.map(e => e.map((el, index) => `${chars[index]} = ${el}`)))
}

const calculateUniqueCombinations = (choices, itemsLength) => {
    let combinations = []
    let items = new Array(itemsLength).fill(choices[0])
    let number = 0
    const recurse = (choices, items, index) => {
        console.log('choices ',choices)
        console.log(`${number}th combination`)
        if (index !== (items.length) && !!choices.length) {
            for (let i = 0; i < choices.length; i++) {
                items[index] = choices[i]
                number++
                let toSplice = [...choices]
                toSplice.splice(i, 1)
                recurse(toSplice, items, index + 1)
            }
        } else if ((new Set([...items]).size === itemsLength)) {
            combinations.push([...items])
        } else {
            console.log('skip')
        }
    }

    recurse(choices, items, 0)

    return {combinations, number}
}

let words = ['javab', 'mideh', 'nana']


breakAndCheckWords(words)