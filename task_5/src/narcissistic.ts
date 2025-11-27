export function narcissistic(value: number): boolean {
  const stringValue = value.toString();
  const countValue = stringValue.length;
  let sum: number = 0;
  for (let i of stringValue) {
    sum += (Number(i)**Number(countValue))
  }
  return sum===value;
}

console.log(narcissistic(7))
console.log(narcissistic(153))
console.log(narcissistic(1634))
console.log(narcissistic(1652))
