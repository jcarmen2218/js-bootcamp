// students score, total possible score
// 15/20 --> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (studentScore, totalPossibleScore) {
    if (typeof studentScore !== 'number' || typeof totalPossibleScore !== 'number') {
        throw Error('Please provide numbers only')
    }  

const score = (studentScore / totalPossibleScore) * 100
let letterGrade = ''

if(score >= 90) {
    letterGrade = 'A'
} else if (score >= 80) {
    letterGrade = 'B'
} else if (score >= 70) {
    letterGrade = 'C'
} else if (score >= 60) {
    letterGrade = 'D'
} else {
    letterGrade = 'F'
}

return `You got a ${letterGrade} (${score})%!`
}

try {
    const scoreValue = gradeCalc('test', 100)
    console.log(scoreValue)
} catch (e) {
    console.log(e.message)
}