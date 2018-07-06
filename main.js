function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//return true if current date on coupon doesnt pass expir. and parse to display correct format
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)

}
