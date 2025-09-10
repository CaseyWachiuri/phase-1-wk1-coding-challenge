/*Write a program that takes as input the speed of a car e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”*/


function speedDetection(speed) {
  var message = '';

  var demeritInterval = 5;
  var speedLimit = 70;
  const points = Math.floor((speed-speedLimit)/demeritInterval);

  if (speed > speedLimit) {
    if (points > 12) {
      message = `Licence suspended. Points are: ${points}`
      return message;
    }else{
      message = `Points: ${points}`;
      return message;
    }
  }else if (speed == speedLimit) {
    return message = "Ok";
  }

}

const prompt = require('prompt-sync')();
const speed = prompt("Input the speed of the car: ");

console.log(speedDetection(speed));
