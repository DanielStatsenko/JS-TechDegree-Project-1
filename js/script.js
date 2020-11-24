/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [ // An Array containing 5 quote objects 
  {
    quote: 'We are what we pretend to be, so we must be careful about what we pretend to be.',
    source: 'Kurt Vonnegut',
    citation: 'Mother Night',
    year: 1999
},
  {    
    quote: 'The flower that blooms in adversity is the rarest and most beautiful of all',
    source: 'Walt Disney Company',
    citation: 'Mulan',
    year: 1998
  },
  {
    quote: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    source: 'Roy T. Bennett',
    citation: 'The Light in the Heart',
    year: 2016,
    publisher: 'Published by: Roy Bennett' //An additional property that prints to the page with the its quote
    
  },
  {
    quote: 'Instead of worrying about what you cannot control, shift your energy to what you can create.',
    source: 'Roy T. Bennett',
    citation: 'The Light in the Heart',
    year: 2016,
    publisher: 'Published by: Roy Bennett' //An additional property that prints to the page with the its quote
  },
  {
    quote: 'Pain is temporary. Quitting lasts forever.',
    source: 'Lance Armstrong Sally Jenkins',
    citation: 'Every Second Counts',
    year: 2003
  }
] 


/***
 * `getRandomQuote` function
***/
function getRandomQuote() { 
  let randomNumber = Math.floor(Math.random() * quotes.length); // randomNumber variable generates a random number
  let randomQute = quotes[randomNumber]; // randomQuote variable returns a random quote object using the random number variable
    return randomQute; // random quote object is logged
}

/*** 
 * `randomColour` function
 ***/
//This function generates three random values for the "rgb" variable
 function randomColour() {
  let red = Math.floor(Math.random() * 255)
  let green = Math.floor(Math.random() * 255)
  let blue = Math.floor(Math.random() * 255)
  let rgb = `rgb(${red},${green},${blue})`

    return document.body.style.background = rgb; /*** code adapted from 
    https://stackoverflow.com/questions/21615441/using-javascript-to-change-rgb-value-of-background-onclick
    ***/
 }

 
/***
 * `printQuote` function
***/

// The interval was set to 4 sec. a new quote will print every 4 sec.
setInterval(function printQuote() {
  let randomQuoteObject = getRandomQuote();
  let randomBackGRoundColor = randomColour();
// The stringHtml variable allows for multiple template literals to be joined 
  let stringHtml = ` 
  <p class="quote"> ${randomQuoteObject.quote} </p>
  <p class="source"> ${randomQuoteObject.source}
  `; 
// This conditional adds a template literal to the "stringHtml" variable
  if (randomQuoteObject.citation) { 
    stringHtml += `<span class="citation">${randomQuoteObject.citation}</span>`
  };
// This conditional adds a template literal to the "stringHtml" variable
  if (randomQuoteObject.year) { 
    stringHtml += `<span class="year">${randomQuoteObject.year}</span>`
  };
// This conditional adds a template literal to the "stringHtml" variable
  if (randomQuoteObject.publisher) { 
    stringHtml += `<br><span class="publisher">${randomQuoteObject.publisher}</span>`
  };
// This conditional adds a template literal to the "stringHtml" variable
  stringHtml += `</p>`; 

    return document.getElementById('quote-box').innerHTML = stringHtml; 
  }, 10000);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);