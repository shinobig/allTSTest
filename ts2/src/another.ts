let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "vic";

if (typeof userInput === 'string') {
  userName = userInput;
};

function generateError(message: string, code: number): never{
  throw {message: message, errorCode: code}
}

generateError("Taco", 500);