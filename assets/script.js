// script.js
// Define a constant variable for the Quotable API URL
const API_URL = 'https://api.quotable.io/random';

// Define a function to get a random quote from the Quotable API
function getRandomQuote() {
  // Use fetch to make an API request and get a response
  fetch(API_URL)
    // Convert the response to JSON format
    .then(response => response.json())
    // Use the JSON data to display the quote and the author in the quote container
    .then(data => {
      // Get the quote text and author from the data
      const quoteText = data.content;
      const quoteAuthor = data.author;

      // Get the quote text and author elements from the document
      const quoteTextElement = document.getElementById('quote-text');
      const quoteAuthorElement = document.getElementById('quote-author');

      // Set the innerHTML of the quote text and author elements to the quote text and author
      quoteTextElement.innerHTML = `"${quoteText}"`;
      quoteAuthorElement.innerHTML = `- ${quoteAuthor}`;
    })
    // Catch any errors and log them to the console
    .catch(error => console.error(error));
}

// Call the getRandomQuote function when the page loads
getRandomQuote();

// Get the new quote button element from the document
const newQuoteButton = document.getElementById('new-quote');

// Add an event listener to the new quote button to call the getRandomQuote function when clicked
newQuoteButton.addEventListener('click', getRandomQuote);