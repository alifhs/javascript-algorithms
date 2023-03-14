
const assert = require('assert');

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 1) return strs[0];
    let matchExists = true;
    let strIndex = 0;
    let prefix = "";
    let currentChar = "";
    for(let i = 0; i < strs.length; ){
        if(i == 0){
            currentChar = strs[0][strIndex];
        } else if(strs[i][strIndex] != currentChar || prefix.length == strs[0].length){
                break;
        }


        if(i == strs.length - 1 ){
            prefix += currentChar;
            i = 0;
            strIndex++;

        } else i++;

    }
    return prefix;
    
};






assert.equal(longestCommonPrefix(["flower"]), 'flower');
assert.equal(longestCommonPrefix(["flower","flow","flight"]), 'fl');
assert.equal(longestCommonPrefix(["dog","racecar","car"]), "")
assert.equal(longestCommonPrefix(["doggggggggg","doggggggggg","doggggg"]), "doggggg")
assert.equal(longestCommonPrefix(["doggggggggg","doggggggggg","doggggggggg"]), "doggggggggg")