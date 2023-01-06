// Code your solution in this file!
let distance = 42;
let value = 50

distanceFromHqInBlocks(distance)
function distanceFromHqInBlocks(distance){
    if (distance<42){
        return(42-distance);
      }
      else {
        return(distance-42);
    }
}

distanceFromHqInFeet(value)
function distanceFromHqInFeet(value){
   return distanceFromHqInBlocks(value) * 264
}

distanceTravelledInFeet(43, 48)

function distanceTravelledInFeet(start, end){
    if (end>start){
        return((end-start)*264);
      }
      else{
        return((start-end)*264);
      }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start,destination);
    if (distance<= 400){
      return 0;
    }
    if (distance>=400 && distance<=2000){
      return (distance-400)* 0.02;
    }
    else if(distance>=2000&& distance<=2500){
      return 25;
    }
    else if (distance > 2500){
      return "cannot travel that far";
    }
}