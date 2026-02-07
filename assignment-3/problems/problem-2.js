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
const otp = ["ph-10955"];
const result = validOtp(otp);
console.log(result);
