
function analyzeText(str) {
    if (typeof str === "string" && str !== "") {
        const words = str.split(" ");
        let longwords = "";
        let newObj = [];
        for (const word of words) {
            newObj.push(word);
            if (word.length > longwords.length) {
                longwords = word;
            }
        }

        const makeNewSentenceWithoutSpace = newObj.join("");
        const token = makeNewSentenceWithoutSpace.length;

        // let token = 0;
        // for (const letter of makeNewSentenceWithoutSpace) {
        //     token++;
        // }

        return {
            longwords,
            token
        }


    } else {
        return "Invalid";
    }


}
const sentence = "I am a little honest person";
const result = analyzeText(sentence);
console.log(result);