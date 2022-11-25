// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc) {
    const x = 42
    let distance;
    if(pickUpLoc > x) {
        distance = pickUpLoc - x
    }
    else{
        distance = x - pickUpLoc
    }
    return distance
}
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(pickUpLoc) {
    let b = distanceFromHqInBlocks(pickUpLoc)
    return 264 * b
}
console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(customerLoc, destination) {
    let distanceTrav;
    if(destination > customerLoc) {
        distanceTrav = (destination-customerLoc)*264
    }
    else{
        distanceTrav = (customerLoc-destination)*264
    }
    return distanceTrav
}
console.log(distanceTravelledInFeet(50,40));

function calculatesFarePrice(customerLoc, destination) {
    let amount;
    let c = distanceTravelledInFeet(customerLoc, destination)
    if(c < 400) {
        amount = 0
    }
    else if(c > 400 && c <= 2000) {
        amount = (c -400) * 0.02
    }
    else if(c > 2000 && c <= 2500) {
        amount = 25
    }
    else{
        amount = 'cannot travel that far'
    }
    return amount
}
console.log(calculatesFarePrice(50, 70));