
const params = process.argv;

console.log(params);

const num1 = parseFloat(params[2]);
const num2 = parseFloat(params[3]);

if (params.length < 3) {
  console.error("ERROR: SCRIPT NEEDED 2 PARAMETERS (NUMBER1, NUMBER2)");
  return;
}

const output = `
La Suma es ${num1} + ${num2} = ${num1 + num2}
La Resta es ${num1} - ${num2} = ${num1 - num2}
La Multiplicación es ${num1} * ${num2} = ${num1 * num2}
La División es ${num1} / ${num2} = ${num1 / num2}
`;

console.log(output);
