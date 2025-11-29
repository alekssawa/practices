import { assert } from "chai"
import task_7 from './task_7'

describe("xo", function() {
  it("Basic Tests", function() {
    assert.strictEqual(task_7('xo'),true);
    assert.strictEqual(task_7("xxOo"),true);
    assert.strictEqual(task_7("xxxm"),false);
    assert.strictEqual(task_7("Oo"),false);
    assert.strictEqual(task_7("ooom"),false);
  });
});