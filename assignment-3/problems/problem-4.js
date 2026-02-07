
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

const sampleInput = ["ha", "ha", "ha", "na"];
const result = gonoVote(sampleInput);
console.log(result);

