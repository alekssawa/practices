export class PaginationHelper {
	private collection: unknown[]
	itemsPerPage: number

	public constructor(collection: unknown[], itemsPerPage: number) {
		this.collection = collection
		this.itemsPerPage = itemsPerPage
	}

	public itemCount(): number {
		return this.collection.length
	}

	public pageCount(): number {
		return Math.ceil(this.collection.length / this.itemsPerPage)
	}

	public pageItemCount(pageIndex: number): number {
		if (pageIndex < 0) return -1
		if (pageIndex >= Math.ceil(this.collection.length / this.itemsPerPage))
			return -1
		if (pageIndex < Math.ceil(this.collection.length / this.itemsPerPage) - 1)
			return this.itemsPerPage

		return this.collection.length % this.itemsPerPage === 0
			? this.itemsPerPage
			: this.collection.length % this.itemsPerPage
	}

	public pageIndex(itemIndex: number): number {
		console.log(`itemIndex: ${itemIndex}`)
		console.log(`length: ${this.collection.length}`)
		if (itemIndex < 0) return -1
		if (itemIndex >= this.collection.length) return -1
		if (itemIndex === 0) return 0
		return itemIndex <= this.collection.length - 1 ?
			(Math.ceil(itemIndex / this.itemsPerPage) - 1): -1;
	}
}
const collection = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]
const helper = new PaginationHelper(collection, 19)

// console.log(helper.itemCount())
// console.log(helper.pageCount())
// console.log(`pageItemCount -1: ${helper.pageItemCount(-1)}`)
// console.log(`pageItemCount 0: ${helper.pageItemCount(0)}`)
// console.log(`pageItemCount 1: ${helper.pageItemCount(1)}`)
// console.log(`pageItemCount 2: ${helper.pageItemCount(2)}`)
// console.log(helper.pageIndex(7))

// console.log(`pageItemCount 7: ${helper.pageItemCount(7)}`)
// console.log(`pageItemCount 8: ${helper.pageItemCount(8)}`)
// console.log(`pageItemCount 9: ${helper.pageItemCount(9)}`)
// console.log(`pageItemCount 22: ${helper.pageItemCount(22)}`)

console.log(helper.pageIndex(-1))
console.log(helper.pageIndex(0))
console.log(helper.pageIndex(18))
console.log(helper.pageIndex(19))
console.log(helper.pageIndex(20))

// console.log(0/3)
// console.log(0 < 24)
// console.log(Math.round(24 / 3))
// console.log(Math.ceil(24 / 3))
// console.log(Math.floor(24 / 3))
// console.log(Number.isInteger(6/4))
// console.log(Number.isInteger(0))
// console.log(Number.isInteger(-1))
