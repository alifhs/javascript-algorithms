const assert = require('assert');


class Permuation {

    isPermutation(str1, str2){
        if(str1 == null || str2 == null || str1.length !== str2.length)
            return false;
        let map1 ,map2;
        map1 = {};
        map2 = {};

        for(let i = 0 ; i < str1.length; i++) {
            if(!(str1[i] in map1)) {
                map1[str1[i]] = 1;
            } else 
              map1[str1[i]]++;

            if(!(str2[i] in map2)) {
                map2[str2[i]] = 1;
            } else 
              map2[str2[i]]++;
        }
        let pState = true;

        for (const prop in map1) {
            if(map1[prop] != map2[prop]){
                pState = false;
                break
            }
        }
        return pState;
        // console.log(map1, map2);

    }
}










class TestPermutation {

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

let test = new TestPermutation();
let permuation = new Permuation();

test.testPermutation(permuation.isPermutation);