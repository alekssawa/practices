export default function task_7(str: string) : boolean {
	let countX: number = 0, countO: number = 0;

	for (let i of str.toLowerCase()) {
		if ( i==="x") countX++
		if (i === "o") countO++
	}

// return (str.match(/o/ig) || []).length === (str.match(/x/ig) || []).length


	return countX === countO
}

console.log(task_7('xo'))
console.log(task_7('xxOo'))
console.log(task_7('xxxm'))
console.log(task_7('Oo'))
console.log(task_7('ooom'))

console.log(task_7('ooxx'))
console.log(task_7('xooxx'))
console.log(task_7('ooxXm'))
console.log(task_7('zpzpzpp'))
console.log(task_7('zzoo'))
