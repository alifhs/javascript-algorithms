const assert = require('assert');

















class TestPriorityQueue {

    testPermutation(func){
        assert.equal(func(null, 'foo') , false);
        assert.equal(func('fooo', 'foo') , false);
        assert.equal(func('Nib', 'bin'), false);
        assert.equal(func('act', 'cat'), true);
        assert.equal(func('a ct', 'ca t'), true);
        assert.equal(func('foo', 'oof') , true);
        assert.equal(func('dog', 'doggo'), false);
  
        console.log('success', 'compress');
    }
}

let test = new TestPriorityQueue();
let pq = new PriorityQueue();

test.testPermutation(permuation.isPermutation);