// Code your solution in this file!
function returnFirstTwoDrivers(drivers){
    const firstTwoDrivers=drivers.slice(0, 2);
    return firstTwoDrivers;
}
function returnLastTwoDrivers(drivers){
    const lastTwoDrivers= drivers.slice(2);
    return lastTwoDrivers;
}
const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(){
    return function fareMultiplier(value){
        return value*5;
    }
}
function fareDoubler(fares){
    return fares*2;
}
function fareTripler(fares){
    return fares*3;
}
function selectDifferentDrivers(arrayOfDrivers,driverSelectionFunction){
    return driverSelectionFunction(arrayOfDrivers);
}