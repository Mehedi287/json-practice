const getQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(res => res.json())
        .then(data => display(data))
}
const display = quote => {
    console.log(quote);
    const quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = (quote.quote);

}