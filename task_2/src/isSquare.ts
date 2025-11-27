export default function isSquare(n: number): boolean {
  let result = Math.sqrt(n);
  return result % 1 === 0 
}

console.log(Math.sqrt(1));
console.log(5 ** 2);

console.log(Math.round(Math.sqrt(26) ** 2));

console.log(isSquare(-1));
console.log(isSquare(0));
console.log(isSquare(3));
console.log(isSquare(4));
console.log(isSquare(25));
console.log(isSquare(26));
