/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
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
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

function getRandomQuote(){
  let randomQuote = Math.floor(Math.random() * quotes.length);
  
  return quotes[randomQuote];
}


/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
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
}

printQuote();
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.