/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * `quotes` array 
***/
const quotes = [
  {
    "author": "Robert Heinlein",
    "quote": `Always listen to experts. They'll tell you what can't be done, and why. Then do it.`,
    "tag": "Motivation"
  },
  {
    "author": "Mark Twain",
    "quote": `The secret of getting ahead is getting started.`,
    "tag": "Motivation"
  },
  {
    "author": "Michael Jordan",
    "quote": `I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.`,
    "tag": "Motivation"
  },
  {
    "author": "Robert Heinlein",
    "quote": `A human being should be able to change a diaper, plan an invasion, butcher a hog, conn a ship, design a building, write a sonnet, balance accounts, build a wall, set a bone, comfort the dying, take orders, give orders, cooperate, act alone, solve equations, analyze a new problem, pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. Specialization is for insects.`,
    "citation": 'Time Enough For Love',
    "year": "1973",
    "tag": "Motivation"
  },
  {
    "author": "Chinese Proverb",
    "quote": `The best time to plant a tree was 20 years ago. The second best time is now.`,
    "tag": "Motivation"
  },
  {
    "author": "Babe Ruth",
    "quote": `It’s hard to beat a person who never gives up.`,
    "tag": "Motivation"
  },
  {
    "author": "Michele Ruiz",
    "quote": `If people are doubting how far you can go, go so far that you can’t hear them anymore.`,
    "tag": "Motivation"
  },
  {
    "author": "Joss Whedon",
    "quote": `Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE.`,
    "tag": "Motivation"
  },
  {
    "author": "Mark Twain",
    "quote": `With courage you will dare to take risks, have the strength to be compassionate, and the wisdom to be humble. Courage is the foundation of integrity.`,
    "tag": "Motivation"
  },
  {
    "author": "Marcus Aurelius",
    "quote": `Waste no more time arguing about what a good man should be. Be one.`,
    "tag": "Motivation"
  }
]


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  let randomNum = Math.round((Math.random() * 9));
  return quotes[randomNum]; 
}


/***
 * `printQuote` function
***/
function printQuote() {
  let quoteObject = getRandomQuote();
  let quote = "";
  quote += `<p class="quote">${quoteObject.quote}</p>
            <p class="source">${quoteObject.author}`
    if(quoteObject.citation) {
    quote += `<span class="citation">${quoteObject.citation}</span>
              <span class="year">${quoteObject.year}</span>`
    }
  quote += `<span class="tag">, ${quoteObject.tag}</span></p>`
  document.getElementById('quote-box').innerHTML = quote;
  changeBackgroundColor()
  return quote;
}


//background-color change function

function changeBackgroundColor() {
  let randomNum1 = Math.round((Math.random() * 255));
  let randomNum2 = Math.round((Math.random() * 255));
  let randomNum3 = Math.round((Math.random() * 255));

  document.body.style.backgroundColor = `rgb(${randomNum1}, ${randomNum2}, ${randomNum3})`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

//auto-refresh quote method

window.setInterval(printQuote,10000);