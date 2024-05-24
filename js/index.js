var quote = [
    " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ― Marilyn Monroe ",
    " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”― Albert Einstein ",
    " “A room without books is like a body without a soul.”― Marcus Tullius Cicero",
    " “So many books, so little time.”― Frank Zappa",
    " “You only live once, but if you do it right, once is enough.”― Mae West",
    " “In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost"
]
var newQuote = []

function generateQuote() {
    for (var i = 0; i < quote.length; i++){
        newQuote = []
        newQuote.push(quote[Math.floor(Math.random()* quote.length)])
    }
    
    document.getElementById("demo").innerHTML= newQuote
}
