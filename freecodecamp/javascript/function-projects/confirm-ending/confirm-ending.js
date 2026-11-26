import PromptSync from "prompt-sync";
const prompt = PromptSync();

let string1 = prompt("Enter the first string: ");
let string2 = prompt("Enter the secodn string: ");

const confirmEnding = (string1, string2) => {
    let length = -(string2.length);
    if (string1.slice(length) === string2) {
            return true;
    }
    else {
        return false;
    }
}

let result = confirmEnding(string1, string2);

if (result === true) {
    console.log(`${string1} does end with ${string2}.`);
}
else {
    console.log(`${string1} doesn't end with ${string2}.`);
}
