import { assert } from 'chai'
import task_9 from './task_9'

describe('findUniq', () => {
	it('should handle sample cases', () => {
		assert.strictEqual(task_9([1, 1, 1, 2, 1, 1]), 2)
		assert.strictEqual(task_9([0, 0, 0.55, 0, 0]), 0.55)
	})
})
