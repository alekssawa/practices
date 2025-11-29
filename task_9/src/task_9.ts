export default function task_9(arr: number[]): number {
	const counts: Record<string, number> = {};

	for (let m of arr) {
		counts[String(m)] = (counts[m] ?? 0) + 1;
	}

	for (const num in counts) {
		if (counts[num]===1) return Number(num);
	}

	throw new Error("No unique element");

}

console.log(task_9([1, 1, 1, 2, 1, 1]))

console.log(task_9([0, 0, 0.55, 0, 0]))
