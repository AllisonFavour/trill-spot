console.log('DAILY APP');

let quotes = [
    'Its who i am not who i wanna be. Its who i am not who i wanna be. Its who i am not who i wanna be.',
    'Its who i am not who i wanna be. Its who i am not who i wanna be.',
    'Its who i am not who i wanna be.'
];

let currentQuote = 0;
document.querySelector('.quote-box').innerText = `${quotes[currentQuote]}`;

document.querySelector('.quote-box').addEventListener('click', (event) => {
    
    updateAndDisplayQuote();
})


document.querySelector('.js-more-quotes-button').addEventListener('click', () => {
    updateAndDisplayQuote();
});



function updateAndDisplayQuote() {
    currentQuote = (currentQuote + 1) % quotes.length;

    document.querySelector('.quote-box').innerText = `${quotes[currentQuote]}`;
}


