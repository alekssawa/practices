export default function getCount(str: string): number {
  let count: number = 0;

  for (let i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u") {
      count++;
    }
  }

// const vowels = new Set(["a", "e", "i", "o", "u"]);
// let count = 0;

// for (const ch of str) {
//   if (vowels.has(ch)) count++;
// }

  return count
}


console.log(getCount("abracadabra"))