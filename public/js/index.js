

// var myStringArray = ["Hello", "World"];

// for ( let index = 0; index < myStringArray.length; index++) {
//     const element = myStringArray[index];
//     console.log(element);
// }

function showQuestionOne() {
    var questionOneContent = document.getElementById("question-one");
    if (questionOneContent.style.display === "none") {
        questionOneContent.style.display = "block";
    } else {
        questionOneContent.style.display = "none";
    }
}

function showQuestionTwo() {
    var questionTwoContent = document.getElementById("question-two");
    if (questionTwoContent.style.display === "none") {
        questionTwoContent.style.display = "block";
    } else {
        questionTwoContent.style.display = "none";
    }
}


/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys() {

    var lengthOfPath = document.getElementById("path-length-input").value;
    var path = document.getElementById("path-input").value;

    let numValleys = 0;
    let distanceToSeaLevel = 0;
    
    /* Using for-of loop. Doesn't necessarily happen in index order. 
    for(const step of path) {
        console.log(step);
        if (step === "D") {
            distanceToSeaLevel--;
        } else if (step === "U") {
            distanceToSeaLevel++;
            if (distanceToSeaLevel == 0) {
                numValleys++;
            }
        }
    }*/

    for (let index = 0; index < lengthOfPath; index++) {
        if (path[index] === "D") {
            distanceToSeaLevel--;
        } else {
            distanceToSeaLevel++;
            if (distanceToSeaLevel === 0) {
                numValleys++;
            }
        }
    }

    document.getElementById("num-valleys").innerHTML = numValleys;
}
