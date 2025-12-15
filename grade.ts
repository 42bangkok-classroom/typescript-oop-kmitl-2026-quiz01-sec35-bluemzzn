let inputGrade = Number(process.argv[2]);

if(Number.isNaN(inputGrade) || inputGrade < 0 || inputGrade > 100){
    console.log("Invalid Input");
    process.exit();
}
else{
    if(inputGrade >= 80){
        console.log("A");
    }
    else if(inputGrade >= 70){
        console.log("B");
    }
    else if(inputGrade >= 60){
        console.log("C");
    }
    else if(inputGrade >= 50){
        console.log("D");
    }else{
        console.log("F");
    }
}