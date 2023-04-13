//Decide on what types of messages you want your program to output.
//ours will be fortune teller

const StartOfMessage = 'You will ';
let fortuneArrayStart = ['gain ', 'seek ', 'lose ', 'get ', 'face', 'learn'];
let fortuneArrayEnd = ['power', 'truth', 'affection from your peers', 'some alone time', 'your deepest fears', 'fortune', 'wealth'];

let finalMessage = [];
finalMessage.push(StartOfMessage);

// Select a random element from the first array
const startMessage = fortuneArrayStart[Math.floor(Math.random() * fortuneArrayStart.length)];
finalMessage.push(startMessage);

// Select a random element from the second array
const endMessage = fortuneArrayEnd[Math.floor(Math.random() * fortuneArrayEnd.length)];
finalMessage.push(endMessage);

console.log(finalMessage.join(""));