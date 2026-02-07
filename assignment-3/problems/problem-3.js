
function finalScore(omr) {

    let totalMarks = 0;
    let keys = [];
    for (const key in omr) {
        totalMarks = totalMarks + omr[key];
        keys.push(key);
    }

    if (totalMarks === 100) {
        let sum = 0;
        for (const question of keys) {

            if ("right" === question) {
                const rm = omr[question] * 1;
                sum = sum + rm;
            }
            if ("wrong" === question) {
                const wm = omr[question] * .5;
                sum = sum - wm;
            }
            if ("skip" === question) {
                const sm = omr[question] * 0;
                sum = sum + sm;
            }
        }
    
        const roundedMark = Math.round(sum);
        return roundedMark;
    } else {
        return "Invalid";
    }
}
const marksArray = { right: 30, wrong: 30, skip: 40 };
const result = finalScore(marksArray);
console.log(result);