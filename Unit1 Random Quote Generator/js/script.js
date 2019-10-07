/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
  Creates an array of quotes and sources, as well as citations, years, and dates (when available). 
  Quote array is logged to the console.  
***/

var quotes = [
{ quote: "Basically, at the very bottom of life, which seduces us all, there is only absurdity, and more absurdity. And maybe that's what gives us our joy for living, because the only thing that can defeat absurdity is lucidity.",
  source: "Albert Camus",
  citation: "", 
  year: "1936", 
  category: "Philosophy"
}, { 
  quote: "The privilege of absurdity; to which no living creature is subject, but man only.",
  source: "Thomas Hobbes",
  citation: "Leviathan, Chapter v. Of Reason and Science",
  year: "1651",
  category: "Philosophy" 
}, { 
  quote: "Funny is as funny does, and funny puts on a walrus mask and slowly gyrates in a mall food court. I laugh at absurdity hardest, then stories, then observations, then bearded men on roller skates.",
  source: "T.J. Miller",
  citation: "interview with Mandatory.com",
  year: "2011",
  category: "Humor"
}, { 
  quote: "Absurdity is what I like most in life, and there's humor in struggling in ignorance. If you saw a man repeatedly running into a wall until he was a bloody pulp, after a while it would make you laugh because it becomes absurd.",
  source: "David Lynch",
  citation: "interview with L.A. Times",
  year: "1989"
}, { 
  quote: "Modern man must descend the spiral of his own absurdity to the lowest point; only then can he look beyond it. It is obviously impossible to get around it, jump over it, or simply avoid it.", 
  source: "Vaclav Havel",
  citation: "Disturbing the Peace",
  year: "1990",
  category: "Philosophy"
}, { 
  quote: "If you and I believe two different things, I can attack you verbally all day, but if I can make you laugh and show you the absurdity of your argument, it will lower you guard. People let you in then.",
  source: "Hasan Minhaj",
  citation: "interview with Rediff.com",
  year: "2017",
  category: "Humor"
}, { 
  quote: "Happiness and the absurd are two sons of the same earth. They are inseparable.",
  source: "Albert Camus",
  citation: "The Myth of Sisyphus",
  year: "1942",
  category: "Philosophy"
}, { 
  quote: "We can regard our life as a uselessly disturbing episode in the blissful repose of nothingness.",
  source: "Arthur Shopenhauer",
  citation: "The Wisdom of Life",
  year: "1851",
  category: "Philosophy"
}, { 
  quote: "Nobody exists on purpose. Nobody belongs anywhere. Everybody's gonna die. Come watch TV",
  source: "Morty Smith",
  citation: "Rick and Morty, Season 1, Episode 8 'Rixty Minutes'",
  year: "2014",
  category: "Humor"
}, { 
  quote: "Strikes and gutters, ups and downs.",
  source: "Jeffrey 'The Dude' Lebowski",
  citation: "The Big Lebowski",
  year: "1998",
  category: "Humor (but also Philosophy)"
   }
];


console.log(quotes);

/***
  Creates a function that stores a random number based on the Math.floor and Math.random methods 
  multiplied by the total number of quotes in the array. 
  It then returns the random number and its corresponding index number/quote in the array.
***/

function getRandomQuote(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  
  return quotes[randomQuote];
}

/*
  Creates a function that stores three random numbers based on the Math.floor and Math.random methods
  multiplied by 256 (RGB colors).
  It then returns those three numbers and coverts them into a random background color. 
*/

function getRandomColor(){
  var a = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var c = Math.floor(Math.random() * 256);
  let randomBgColor = (a + ", " + b + ", " + c);
  console.log(randomBgColor);
  return randomBgColor
  
  document.body.style.backgroundColor = randomBgColor;
  
  console.log(randomBgColor);
  }

/***
  Creates a function that writes the quote object and source object from 'randomQuote' to HTML. 
  It then uses a series of "if" conditional statements to check for the citation, category, and date objects in the array.
  It then writes all available quote objects into a concatenated string and prints them to the quote box.  
***/


function printQuote(){
  let freshQuote = getRandomQuote();
  let html = "<p class= 'quote'>" + freshQuote.quote + "</p>";
  html += "<p class='source'>" + freshQuote.source;
  if ("citation" in freshQuote){
      html += '<span class="citation"> ' + freshQuote.citation + '</span>';
    }
  if ("category" in freshQuote){
      html += '<span class="category">' + freshQuote.category + '</span>';
    }
  if ("year" in freshQuote){
      html += '<span class="year"> ' + freshQuote.year + '</span>' 
      "</p>";
    }
 
    document.getElementById("quote-box").innerHTML = html;
    printColor();
}


printQuote();

/*
  Creates a function that takes the getRandomColor function 
  and prints it to the page.
 */

function printColor(){
  let freshColor = getRandomColor();
  document.body.style.backgroundColor = "rgb(" + freshColor + ")";
  
}

printColor();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
