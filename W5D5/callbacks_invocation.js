/*
window.setTimeout(function() {
  alert('HAMMERTIME');
}, 5000);

const hammertime = function(time) {
  setTimeout(() => alert(`${time} is hammertime!`), 5000);
};

hammertime('9 o\'clock');
*/

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits() {
  reader.question('Would you like some tea?: ', (answer) => {
    console.log(`${answer}`);
    reader.question('Woukd you like some biscuits?: ', (answer2) => {
      console.log(`${answer2}`);

      const one = answer === 'yes' ? 'do' : 'don\'t';
      const two = answer2 === 'yes' ? 'do' : 'don\'t';
      console.log(`So you ${one} want tea and you ${two} want biscuits.`);
      reader.close();
    });
  });
};

teaAndBiscuits();


/* ------------
const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function teaAndBiscuits() {
  reader.question("Would you like some tea?", function(res) {
    console.log(`You replied ${res}.`);
    reader.question("Would you like some biscuits?", function(res2) {
      console.log(`You replied ${res2}.`);
      const first = res === "yes" ? "do" : "don't";
      const second = res2 === "yes" ? "do" : "don't";
      console.log(`So you ${first} want tea and you ${second} want biscuits.`);
      reader.close();
    });
  });
}
function Cat() {
  this.name = "Markov";
  this.age = 3;
}
function Dog() {
  this.name = "Noodles";
  this.age = 4;
}
Dog.prototype.chase = function(cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`);
};
const Markov = new Cat();
const Noodles = new Dog();
Noodles.chase(Markov);
Noodles.chase.call(Markov, Noodles);
Noodles.chase.apply(Markov, [Noodles]);

*/