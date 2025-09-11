function gradingSystem(marks) {
  let message = "";

  //Validates if the marks are within the right range
  if (marks < 0 || marks > 100) {
    throw new Error("Invalid input" + marks);
  }

  //Checks the marks and returns the grade
  if (marks > 79) {
    return message = "A";
  }else if (marks >= 60 && marks <= 79) {
    return message = "B";
  }else if (marks >= 49 && marks <= 59) {
    return message = "C";
  }else if (marks >= 40 && marks <= 49) {
    return message = "D";
  }else if (marks < 40) {
    return message = "E";
  }

}

//Infinite loop that doesn't terminate on its own
for(;;) {
 try {
    const prompt = require('prompt-sync')();
    const marks = prompt("Input your marks: ");
    console.log(gradingSystem(marks));
    break; // Breaks out of the loop when a valid direction is given
 } catch (error) {
    console.log("Something went wrong: " + error);
  }
}

