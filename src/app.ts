import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
import { MyMath } from './myMath';

const rl = createInterface({
  input: stdin,
  output: stdout,
});

console.log("This app will find the least common multiple between two numbers.");

rl.question("Enter the first number: ", (answer: string) => {
    const numOne = parseInt(answer);
    rl.question("Enter the second number: ", (answerTwo: string) => {
        const numTwo = parseInt(answerTwo);
        try {
            const result = MyMath.calculateLeastCommonMultiple(numOne, numTwo);
            console.log(`The answer is: ${result}`);        
            rl.close();
        } catch(error) {
            console.log(`Error: ${error}.`);        
            rl.close();
        }
    });
});
