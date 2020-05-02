// Multiple arguments
let add = function (a, b, c) {
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

// Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`
} 

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)

// Challenge area
// total, tipPercent .2
// A 25% tip on $40 would be $10

let getTip = function (Total, tipPercent = .25) {
    let percent = tipPercent * 100
    let tip = Total * tipPercent
    return `A ${percent}% tip on $${Total} would be $${tip} `
}

let Tip = getTip(60, .20)
console.log(Tip)