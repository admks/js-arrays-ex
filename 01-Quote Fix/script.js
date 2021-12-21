//Transform a string into an array and fix it!
//"Some body can write code that a very well designed code machines can understand. Good programmers write code that humans can understand.” – Martin Fowler. Agile Software Design";

let favoriteQuote="Some body can write code that a very well designed code machines can understand. Good programmers write code that first humans can understand. - Martin Fowler. Agile Software Design.";

favoriteQuote = favoriteQuote.split(" ")

console.log(favoriteQuote);
console.log(favoriteQuote.length);


favoriteQuote.pop();
console.log(favoriteQuote);
console.log(favoriteQuote.length);

favoriteQuote.push(" Development"," ThoughtWorks ","Inc");
console.log(favoriteQuote);

let indexNum=favoriteQuote.indexOf("body");

favoriteQuote[indexNum]="fool";
console.log(favoriteQuote);

favoriteQuote.shift();
favoriteQuote.unshift("Any");
console.log(favoriteQuote);

let indexNum1=favoriteQuote.indexOf("very");
favoriteQuote.splice(indexNum1,5,"computer");
console.log(favoriteQuote);

favoriteQuote = favoriteQuote.join(" ")
console.log(favoriteQuote);






