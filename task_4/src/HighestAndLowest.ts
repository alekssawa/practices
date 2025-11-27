export function highAndLow(numbers: string): string {
    let max: number = NaN, min: number = NaN;
    for (let num of numbers.split(' ')) {
        if (Number.isNaN(min) && Number.isNaN(max)) {
            min = Number(num);
            max = Number(num);
            continue;
        }
        if (Number(num) < min) {
            min = Number(num);
        } else if ( Number(num) > max) {
            max = Number(num);
        }
    }
    return `${max} ${min}`;

    // const numberList = numbers.split(' ').map(Number);   
    // return `${Math.max(...numberList)} ${Math.min(...numberList)}`;
}

console.log(highAndLow("1 2 3"))
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"))
