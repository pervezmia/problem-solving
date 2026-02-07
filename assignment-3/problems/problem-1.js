
function newPrice(currentPrice , discount ) {

    if(typeof currentPrice === 'number' && typeof discount === "number" && discount>=0 && discount<=100){
        const totalDiscount = currentPrice * discount / 100;
        const discountPrice = currentPrice - totalDiscount;
        return discountPrice.toFixed(3);

    } else {
        return "Invalid";
    }

}
const currentPrice = 500;
const discount = 10;
const result = newPrice (currentPrice, discount);
console.log(result);

