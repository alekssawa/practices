import { assert } from 'chai'
import task_8 from './task_8'

describe('findNextSquare', function () {
	it('should return the next square for perfect squares', function () {
		assert.equal(task_8(121), 144, 'Wrong output for 121')
		assert.equal(task_8(625), 676, 'Wrong output for 625')
		assert.equal(task_8(319225), 320356, 'Wrong output for 319225')
		assert.equal(
			task_8(15241383936),
			15241630849,
			'Wrong output for 15241383936'
		)
	})

	it("should return -1 for numbers which aren't perfect squares", function () {
		assert.equal(task_8(155), -1, 'Wrong output for 155')
		assert.equal(task_8(342786627), -1, 'Wrong output for 342786627')
	})
})
