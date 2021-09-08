/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    let minArr, maxArr;
    if (s1.length >= s2.length) {
        minArr = s1.split("");
        maxArr = s2.split("");
    } else {
        minArr = s2.split("");
        maxArr = s1.split("");
    }
    return myCompare(minArr, maxArr);
}

function myCompare(littleArr, bigArr) {
    let count = 0;
    for (let i = 0; i < bigArr.length; i++) {
        let index = littleArr.indexOf(bigArr[i]);
        if (index !== -1) {
            count++;
            littleArr[index] = "";
            console.log(littleArr)
        }
    }
    return count;
}
