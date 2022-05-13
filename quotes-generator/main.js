$(document).ready(function() {
    function generateQuote() {
        fetch('https://animechan.vercel.app/api/random')
            .then(response => response.json())
            .then(quote => setQuote(quote.character, quote.quote, quote.anime))
    }
    function setQuote(char, quote, anime) {
        $('div.holder div .quote').text(quote)
        $('div.holder div .from').text(`${char} from ${anime}`)
    }
    generateQuote()

    $('.spinner').click(function() {
        $('.spin-holder').addClass("spinning")
        generateQuote()
        $('.spin-holder').removeClass("spinning")
    })
})