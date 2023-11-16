let nlp = require("compromise");
var in_a = require("in-a-nutshell");
let moment = require("moment");
// let doc = nlp('i am going to school');
// doc.verbs().toPastTense();

var content = `
Once upon a time, the animals of a jungle lived happily together. But one fine day, a ferocious and strong lion came to stay with them. Since the lion was big and strong, he started causing trouble and bullying the other animals. Fed up with this, the animals assembled together to discuss a way out of this.


The animals discussed and one of them said, “The lion needs to be taught a lesson. He has troubled us enough.” Everyone agreed, but another animal said, “But who will dare to do it?” Each of them looked at each other but no one volunteered. Suddenly, the owl came up and said, “I’ll do it. I’ll fight the lion.” All the other animals laughed and joked about the owl but agreed since no one else came forward. When the news reached the lion, he rolled on the ground in peals of laughter.


The next morning, the animals of the jungle gathered in front of the lion’s den who stood there arrogantly, waiting for the owl to arrive for the fight. They kept waiting for a long time but there was no sign of the owl. Soon it was time for sunset and the animals began leaving. The owl finally arrived and said, “Sorry for the delay everyone. I met this huge lion and a stronger one. I was so afraid of him I had to hide for him to leave before I could come here.” The lion stared in disbelief. “You say that lion is stronger than me? Take me to him. I’ll show him who’s stronger.” The owl took the lion to a deep well. When the lion looked into the well, he assumed his own reflection to be the other lion and roared at him. The roar echoed and returned louder which scared the lion and he ran away never to be seen again.
`;

let doc = nlp("two thousand");
doc.numbers().add(20);
doc.text();

console.log(doc.text());

var summary = in_a.nutshell(content);

const dateC = moment("2023-01-31");
const dateB = moment("2023-12-31");

console.log(`Difference is ${dateB.diff(dateC, "days")} days`);

// console.log("SUMMARY OF THE TEXT : ", summary);

// let number1 = 'seventy';
// let number2 = 20;

// if(number1 === 'fifty'){
//     number1 = 50
// }
// else if('seventy'){
//     number1 = 70
// }

// let result = number1 + number2 ;
// console.log(result);
