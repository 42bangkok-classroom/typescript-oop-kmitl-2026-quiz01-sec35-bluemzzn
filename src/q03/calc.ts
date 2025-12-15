
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.log("Invalid input");
  process.exit(0);
}

const operator = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Invalid input");
  process.exit(0);
}

if (operator === "div" && num2 === 0) {
  console.log("Invalid input");
  process.exit(0);
}

let result: number;

switch (operator) {
  case "add":
    result = num1 + num2;
    break;
  case "sub":
    result = num1 - num2;
    break;
  case "mul":
    result = num1 * num2;
    break;
  case "div":
    result = num1 / num2;
    break;
  default:
    console.log("Invalid operator");
    process.exit(0);
}

console.log(result);