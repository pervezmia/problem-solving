//Problem-01: New Price for Eid Sale


function newPrice(currentPrice , discount ) {

    if(typeof currentPrice === 'number' && typeof discount === "number" && discount>=0 && discount<=100){
        const totalDiscount = currentPrice * discount / 100;
        const discountPrice = currentPrice - totalDiscount;
        return discountPrice.toFixed(3);

    } else {
        return "Invalid";
    }

}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    console.log(typeof otp);
    if(typeof otp ==="string"){
        if(otp.length===8 && otp.startsWith("ph-")){
            return true;
        } else {
            return false;
        }
    } else {
        return "Invalid";
    }

}

//Problem-03: BCS Final Score Calculator

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

//Problem-04: Upcoming Gono Vote

function gonoVote(array) {
    if( Array.isArray(array)){
        let haCount = 0;
        let naCount = 0; 
        for (const arr of array){
            if(arr === "ha"){
                haCount++;
            } else {
                naCount++;
            }
        }
        if(haCount>naCount){
            return true;
        } else if (haCount<naCount){
            return false;
        } else {
            return "equal"
        }
    } else {
        return "Invalid";
    }
}

//Problem-05: Text Analyzer for an AI Company

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

