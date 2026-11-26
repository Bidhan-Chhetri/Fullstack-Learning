import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string = prompt("Enter the string: ");
let number = parseInt(prompt("Enter the number: "));

const truncateString = (string, number) => {
    if (string.length > number) {
        if (string.length > number) {
      return string.replace(string.slice(number,), "...");;
    }
        else {
        return string;
        }
    }
}

console.log(truncateString(string, number));
