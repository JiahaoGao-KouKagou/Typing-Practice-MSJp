/**
 * Separated functions :
 * GetRequest() - Extract the parameter from url
 * createPracticeCollection(request) - Load practice collection by the parameter
 * chooseCharRandomly(practiceCollection) - Choose a char from the collection randomly
 * isCorrect(nowChar, nowKey)
 * 
 * And the word stock: charCollection
 */

/**
 * Extract the parameter from url
 * @returns {object}
 */
function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var result = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substring(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
        }
    }
    // console.log(result);
    return result;
}

/**
 * Load practice collection by the parameter
 * @param {object} request 
 */
function createPracticeCollection(request) {
    // put parameters into an array
    var selectedLineArr = Object.keys(request)
        // console.log(selectedLineArr);

    // for each element in selectedLineArr, load corresponding lines into result[]
    var result = []
    if (selectedLineArr.length == 0) {
        // if nothing select -> then everything loaded
        for (let i = 0; i < charCollection.line1.length; i++) {
            result.push(charCollection.line1[i])
        }
        for (let i = 0; i < charCollection.lineQ.length; i++) {
            result.push(charCollection.lineQ[i])
        }
        for (let i = 0; i < charCollection.lineA.length; i++) {
            result.push(charCollection.lineA[i])
        }
        for (let i = 0; i < charCollection.lineZ.length; i++) {
            result.push(charCollection.lineZ[i])
        }
    } else {
        selectedLineArr.forEach(lineName => {
            switch (lineName) {
                case "line1":
                    for (let i = 0; i < charCollection.line1.length; i++) {
                        result.push(charCollection.line1[i])
                    }
                    break;
                case "lineQ":
                    for (let i = 0; i < charCollection.lineQ.length; i++) {
                        result.push(charCollection.lineQ[i])
                    }
                    break;
                case "lineA":
                    for (let i = 0; i < charCollection.lineA.length; i++) {
                        result.push(charCollection.lineA[i])
                    }
                    break;
                case "lineZ":
                    for (let i = 0; i < charCollection.lineZ.length; i++) {
                        result.push(charCollection.lineZ[i])
                    }
                    break;
                default:

                    break;
            }
        });
    }

    // console.log(result);

    return result
}

/**
 * Choose a char from the collection randomly
 * @returns {string}
 */
function chooseCharRandomly(practiceCollection) {
    // generate a random num in range [x, y]
    let x = 0,
        y = practiceCollection.length - 1
    var i = Math.round(Math.random() * (y - x) + x)
        // console.log(i);
    if (previousRandomNum == i) {
        // avoid this random num is same to the previous one
        i += 1
    }
    // update the previous random number
    previousRandomNum = i
    let result = practiceCollection[i]
    return result
}

/**
 * Store the previous random number
 * Because if 2 chars are same, it looks like the program does no reaction
 */
var previousRandomNum


/**
 * if the input is same to the char
 * @returns {boolean}
 */
function isCorrect(nowChar, nowKey) {
    var flag = false
    for (let i = 0; i < nowChar.key.length; i++) {
        if (nowChar.key[i] == nowKey) {
            flag = true
            break
        }
    }
    return flag
}


// word stock (charCollection)
var charCollection = {
    "line1": [
        { "theChar": "ろ", "key": ["`", "~"] },
        { "theChar": "ぬ", "key": ["1", "!"] },
        { "theChar": "ふ", "key": ["2", "@"] },
        { "theChar": "あ", "key": ["3", "#"] },
        { "theChar": "う", "key": ["4", "$"] },
        { "theChar": "え", "key": ["5", "%"] },
        { "theChar": "お", "key": ["6", "^"] },
        { "theChar": "や", "key": ["7", "&"] },
        { "theChar": "ゆ", "key": ["8", "*"] },
        { "theChar": "よ", "key": ["9", "("] },
        { "theChar": "わ", "key": ["0"] },
        { "theChar": "を", "key": [")"] },
        { "theChar": "ほ", "key": ["-", "_"] },
        { "theChar": "へ", "key": ["=", "+"] }
    ],
    "lineQ": [
        { "theChar": "た", "key": ["q", "Q"] },
        { "theChar": "て", "key": ["w", "W"] },
        { "theChar": "い", "key": ["e", "E"] },
        { "theChar": "す", "key": ["r", "R"] },
        { "theChar": "か", "key": ["t", "T"] },
        { "theChar": "ん", "key": ["y", "Y"] },
        { "theChar": "な", "key": ["u", "U"] },
        { "theChar": "に", "key": ["i", "I"] },
        { "theChar": "ら", "key": ["o", "O"] },
        { "theChar": "せ", "key": ["p", "P"] },
        { "theChar": "゛", "key": ["["] },
        { "theChar": "「", "key": ["{"] },
        { "theChar": "゜", "key": ["]"] },
        { "theChar": "」", "key": ["}"] },
        { "theChar": "む", "key": ["\\", "|"] }
    ],
    "lineA": [
        { "theChar": "ち", "key": ["a", "A"] },
        { "theChar": "と", "key": ["s", "S"] },
        { "theChar": "し", "key": ["d", "D"] },
        { "theChar": "は", "key": ["f", "F"] },
        { "theChar": "き", "key": ["g", "G"] },
        { "theChar": "く", "key": ["h", "H"] },
        { "theChar": "ま", "key": ["j", "J"] },
        { "theChar": "の", "key": ["k", "K"] },
        { "theChar": "り", "key": ["l", "L"] },
        { "theChar": "れ", "key": [";", ":"] },
        { "theChar": "け", "key": ["\'", "\""] }
    ],
    "lineZ": [
        { "theChar": "つ", "key": ["z", "Z"] },
        { "theChar": "さ", "key": ["x", "X"] },
        { "theChar": "そ", "key": ["c", "C"] },
        { "theChar": "ひ", "key": ["v", "V"] },
        { "theChar": "こ", "key": ["b", "B"] },
        { "theChar": "み", "key": ["n", "N"] },
        { "theChar": "も", "key": ["m", "M"] },
        { "theChar": "ね", "key": [","] },
        { "theChar": "、", "key": ["<"] },
        { "theChar": "る", "key": ["."] },
        { "theChar": "。", "key": [">"] },
        { "theChar": "め", "key": ["/"] },
        { "theChar": "・", "key": ["?"] }
    ]
}