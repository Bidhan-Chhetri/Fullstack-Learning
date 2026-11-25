import prompSync from "prompt-sync";
const prompt = prompSync();

let email = "";
while(email === "") {
email = prompt("Enter your email to mask it : ");
}

const maskEmail = (email) => {
  if (email.indexOf("@") === -1){
    return "Invalid email";
  }

  return email.replace(email.slice(1, email.indexOf("@")-1), "*".repeat((email.indexOf("@") - 2)));
}

console.log(maskEmail(email))