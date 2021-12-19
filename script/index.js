window.addEventListener('load', (event) => {
    fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then(quote => writeAnimeQuote(quote))
  });


  function writeAnimeQuote (quote) {
    console.log(quote)
    var animePhrase = document.getElementById("animeQuote")
    animePhrase.textContent = quote.quote
  }

function helloWorld () {
    console.log("Hello World")
}
