//object to hold key value pairs which form the fortune message
const messages = {
spirits: ['Christmas Past', 'Loki', 'Artemis', 'of your ancestor', 'Xena', 'your first pet'],
feeling: ['postive', 'nostalgic', 'empowered', 'generous', 'lucky', 'overwhelmed'],
warning: ['Tread with caution', 'Take more time to think', 'Speak with family', 'Take the path less trodden', 'Find a 4 leaf clover']
};

//Generate a random number based on the array length
const randomNum = (arr) => {
    let randNum = Math.floor(Math.random()*arr);
    return randNum;
  };

 //Generate the random message componants and log the outcome
const generateRandomMessage = () => {
let messageContent = [];
for(let key in messages) {
    let keyValue = messages[key];
    let randomIndex = randomNum(keyValue.length);
    messageContent.push(keyValue[randomIndex]);
} 
console.log(`The spirit of ${messageContent[0]} is with you today. You are feeling ${messageContent[1]}. ${messageContent[2]} if you want to succeed.`)
};

generateRandomMessage();

