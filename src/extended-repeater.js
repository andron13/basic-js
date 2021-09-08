/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    str = String(str);
    if (!options.separator) {
        options.separator = "+";
    }
    if (!options.additionSeparator) {
        options.additionSeparator = "|";
    }
    if (options.addition === undefined) {
        options.addition = "";
    }
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }

    let singleStr = str + buildString(options.addition, options.additionRepeatTimes, options.additionSeparator);
    return buildString(singleStr, options.repeatTimes, options.separator);
}

function buildString(str, times, sep) {
    let result = "";
    for (let i = 1; i < times; i++) {
        result += str + sep;
    }
    return result + str;
}

