let inputGrade = process.argv[2];

// Check if input is empty or undefined
if(!inputGrade || inputGrade.trim() === ""){
    console.log("Invalid Input");
    process.exit();
}

let grade = Number(inputGrade);

if(Number.isNaN(grade) || grade < 0 || grade > 100){
    console.log("Invalid Input");
    process.exit();
}
else{
    if(grade >= 80){
        console.log("Grade is A");
    }
    else if(grade >= 70){
        console.log("Grade is B");
    }
    else if(grade >= 60){
        console.log("Grade is C");
    }
    else if(grade >= 50){
        console.log("Grade is D");
    }else{
        console.log("Grade is F");
    }
}