

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

function showQuestionThree() {
    var questionTwoContent = document.getElementById("question-three");
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

function wrap() {
    var length = document.getElementById("length").value;
    var width = document.getElementById("width").value;
    var height = document.getElementById("height").value;

    var totalSquareFootage = ((length * width) * 2) + ((length * height) * 2) + ((height * width) * 2);

    document.getElementById("wrapping-paper").innerHTML = totalSquareFootage;
}

let arr1 = [7, 4, 10, 0, 1]
let arr2 = [9, 7, 2, 3, 6]

function maximizedArray(array1, array2) {
    var outputArray = [];
    var newArrayCount = 0;
    var counterA = 0;
    var counterB = 0;

    array1 = array1.sort(function(a, b) { return b - a });
    array2 = array2.sort(function(a, b) { return b - a });

    while (newArrayCount !== array1.length) {
        var i = array1[counterA];
        var j = array2[counterB];

        console.log(i, j);
        if (i >= j) {
            if (outputArray.includes(i) === false) {
                outputArray.push(i);
                newArrayCount++;
            }
            counterA++;
        } else {
            if (outputArray.includes(j) === false) {
                outputArray.push(j);
                newArrayCount++;
            }
            counterB++;
        }
    }

    console.log(outputArray);
}

maximizedArray(arr1, arr2);