//Speed Detection main function
function speedDetection(speed) {
  var message = '';

  // For every 5km/h
  var demeritInterval = 5;
  var speedLimit = 70;
  //Calculates the number of demerit points
  const points = Math.floor((speed-speedLimit)/demeritInterval);

  // Condition handles cases above the speed limit and exits the function
  if (speed > speedLimit) {
    if (points > 12) {
      message = `Licence suspended. Points are: ${points}`
      return message;
    }else{
      message = `Points: ${points}`;
      return message;
    }
  }

  // Condition that handles the message if within speed limit
  if (speed == speedLimit) {
    return message = "Ok";
  }

}

const prompt = require('prompt-sync')();
const speed = prompt("Input the speed of the car: ");

console.log(speedDetection(speed));
