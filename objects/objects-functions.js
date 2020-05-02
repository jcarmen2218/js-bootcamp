let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create function - take fahrenheit in - return object with all all three

let convertfahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        celsius: (5/9) * (fahrenheit-32),
        kelvin: (fahrenheit + 459.67) * (5/9)
    }
}

let tempSummary = convertfahrenheit(74)
console.log(tempSummary)