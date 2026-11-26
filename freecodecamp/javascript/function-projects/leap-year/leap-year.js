import PromptSync from "prompt-sync";
const prompt = PromptSync();

let year = parseInt(prompt("Enter the year to check if it is leap year : "));

const isLeapYear = (year) => {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return `${year} is a leap year.`;
    }
    else{
      return `${year} is not a leap year.`;
    }
}

let result = isLeapYear(year);
console.log(result);