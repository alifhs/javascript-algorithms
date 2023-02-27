const assert = require('assert');


class FizzBuzz {

    fizz_buzz(num) {
        if(num == null){
            throw new Error();
        }
        
        let expectedArr = [];

        for(let i = 1; i <= num; i++) {
            if(i % 15 == 0) 
                expectedArr.push('FizzBuzz');
            else if (i % 3 == 0)
                expectedArr.push('Fizz');
            else if (i % 5 == 0) 
                expectedArr.push('Buzz');
            else
                expectedArr.push(i.toString());
        }


        return expectedArr;

    }
}



class TestFizzBuzz{

    test_fizz_buzz(func){

        assert.throws(()=> func(null) , Error);
        assert.deepEqual(func(3), [1,2, 'Fizz']);
        assert.deepEqual(func(15), [
            '1',
            '2',
            'Fizz',
            '4',
            'Buzz',
            'Fizz',
            '7',
            '8',
            'Fizz',
            'Buzz',
            '11',
            'Fizz',
            '13',
            '14',
            'FizzBuzz'
        ])
    }
}

const test = new TestFizzBuzz();
const solution = new FizzBuzz();

test.test_fizz_buzz(solution.fizz_buzz);