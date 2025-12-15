let inputFoobar = Number(process.argv[2]);

if (Number.isNaN(inputFoobar) || inputFoobar < 0 || inputFoobar === undefined) {
    console.log("Invalid Input");
    process.exit();
}
else {
    for (let i = 1; i <= inputFoobar; i++) {
        if (i % 3 === 0 && i % 7 === 0) {
            console.log("FooBar");
        }
        else if (i % 3 === 0) {
            console.log("Foo");
        }
        else if (i % 7 === 0) {
            console.log("Bar");
        } else {
            console.log(i);
        }
    }
}