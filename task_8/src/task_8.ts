export default function task_8(sq: number): number {
	if (Number.isInteger(Math.sqrt(sq) + 1)) return (Math.sqrt(sq) + 1)**2
	else return -1

	// return Math.sqrt(sq) % 1 == 0 ? (Math.sqrt(sq) + 1) ** 2 : -1
}

console.log(task_8(121))
console.log(task_8(625))
console.log(task_8(319225))
console.log(task_8(15241383936))
console.log(task_8(155))
console.log(task_8(342786627))

console.log(Math.sqrt(155)%1)