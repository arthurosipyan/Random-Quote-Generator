$(document).ready(function() {
  var quote;
  var author;

  function getNewQuote() {
    $.ajax({
      url: "http://api.forismatic.com/api/1.0/",
      dataType: "jsonp",
      jsonp: 'jsonp',

      data: {
        method: 'getQuote',
        lang: 'en',
        format: 'jsonp'
      },
      success: function(response) {
        quote = "\"" + response.quoteText + "\"";
        $("#quote").text(quote);
        if (response.quoteAuthor) {
          $('#author').text("- " + response.quoteAuthor);
        } else {
          $('#author').text('- unknown');
        }
      }
    });
  }
  getNewQuote();

  $(".quoteButton").on("click", function(event) {
    event.preventDefault();
    getNewQuote();
  });

  $('.tweet').on('click', function(e) {
    e.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' +
      encodeURIComponent(quote + author));
  });
});
