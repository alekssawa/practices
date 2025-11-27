import getCount from './task_6';

import {assert} from "chai";

describe("getCount", function(){
    it ("should pass a sample test", function(){
        assert.strictEqual(getCount("abracadabra"), 5)
    });
});
