

const assert = require('assert');

class CompressString {

    compress(string) {
        if(string == null) return string;
        let lastChar = ""
        let count = 0;
        let compressedStr = "";
        let strLen = string.length;
        for(let i = 0; i < strLen; i++){

            if(lastChar == "" || string[i] != lastChar) {
                if(count >= 2) {
                    compressedStr += count;
                    compressedStr += string[i]; //add current char
                    count = 1;
                    lastChar = string[i];
                    continue;
                }

                lastChar = string[i];
                count = 1;
                compressedStr += string[i];
            }
            else {
                if(i == strLen-1) {
                    if(count >= 2) {
                        compressedStr += count + 1;
                    }else {
                        compressedStr += string[i];
                        count = 1;
                        lastChar = string[i];
                        continue;
                    }
                }
                lastChar = string[i];
                count++;
            } 
            
        }
        console.log(compressedStr);
        return compressedStr.length < strLen ? compressedStr : string;
    }
}


class TestCompress {

    testCompress(func){
        assert(func(null) == null);
        assert(func('') == '');
        assert(func('AABBCC')=='AABBCC');
        assert(func('AAABCCDDDDE')=='A3BC2D4E')
        assert(func('BAAACCDDDD')=='BA3C2D4')
        assert(func('AAABAACCDDDD')=='A3BA2C2D4')
        console.log('success', 'compress');
    }
}

let test = new TestCompress();
let compressString = new CompressString();

test.testCompress(compressString.compress);

