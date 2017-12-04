
var A = [];
var B = [];
var C = [];
var D = [];
var F = [];
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

function gradeSort() {
 for (i=0; i<scores.length;i++){
      var grade = scores[i];
     if (grade < 100 && grade > 91) {
            A.push(grade);
     } else if (grade < 90 && grade > 81) {
             B.push(grade);
            } else if (grade < 80 && grade > 71) {
                C.push(grade); 
                } else if (grade < 70 && grade > 61){
                    D.push(grade);
                }   else if (grade < 60) {
                        F.push(grade);
                } 
 }
}
function outputGrades () {
    console.log ("The A's: " + A)
    console.log ("The B's: " + B)
    console.log ("The C's: " + C)
    console.log ("The D's: " + D)
    console.log ("The F's: " + F)
}
function gradeRange(a, b) {
       (scores.sort(function(a, b){return a - b}))
       console.log( "Lowest Grade: " + scores.shift())
       console.log("Highest Grade: "  +scores.pop())
    } 




    gradeSort();
    outputGrades();
    gradeRange();
   



        
 