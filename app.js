const quoteBtn = document.getElementById('quote-btn');
const quoteText = document.querySelector('.quote');
const author = document.querySelector('.author');

// Getting Random Quote Function
function randomQuote() {
    quoteBtn.innerText = "Loading Quote...";
    // Fetch Random Quote
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        console.log(result)
        quoteText.innerText = result.content;
        author.innerText = result.author;
        quoteBtn.innerText = "New Quote";

    });
}

quoteBtn.addEventListener('click', randomQuote);
