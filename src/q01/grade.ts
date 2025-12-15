let inputGrade = Number(process.argv[2]);

if(Number.isNaN(inputGrade) || inputGrade < 0 || inputGrade > 100){
    console.log("Invalid Input");
    process.exit();
}
else{
    if(inputGrade >= 80){
        console.log("Grade is A");
    }
    else if(inputGrade >= 70){
        console.log("Grade is B");
    }
    else if(inputGrade >= 60){
        console.log("Grade is C");
    }
    else if(inputGrade >= 50){
        console.log("Grade is D");
    }else{
        console.log("Grade is F");
    }
}