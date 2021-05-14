"use strict";

function testQ1(){
    const x = document.getElementById("Q1");
    if (x.style.display === "none") {
        x.style.display = "block";
        let test = qSyntax();
        test.doSomething();
        document.getElementById("desc1").innerHTML =
            "The description for question 1:\t"+test.desc;
    } else {
        x.style.display = "none";
    }
}

function testQ2(){
    let test = q2();
    alert("first let us decribe the function:\n" + test.desc);
    test.doSomething();
}

function testQ3(){
    let chainedLetters = q3();
    alert("first let us decribe the function:\n" + chainedLetters.desc);
    alert("now we will run doSomething.");
    let strChain = chainedLetters.doSomething[0].name;
    for(let i=0; i<chainedLetters.doSomething.length-1;i++){
        strChain+="->"+(chainedLetters["doSomething"][i]).prototype.name;
    }
    alert("the chain created is "+ strChain);

}

function testQ4() {
    let calc = new qCalc();


    alert("first let us decribe the function:\n" + calc.desc);
    alert(" now, we are going to test our calculator together\n");

    let continueCalc = true;
    while (continueCalc) {
        let choseNum = +(prompt("choose a number for the calculations"));
        let choseMethod = prompt("choose a method: add or sub");
        if (choseMethod.toLowerCase() == "add") {
            calc.doSomething.add(choseNum);

        } else if (choseMethod.toLowerCase() == "sub") {
            calc.doSomething.sub(choseNum);
        }else{
            alert("the method you chose isn't correct, please try again");
            continue;
        }
        continueCalc = +prompt(`the current result is: ${calc.doSomething.getValue()}. To continue write 1, to exist write 0`)

    }
}
function submitQ3() {
    let num = document.forms["calcForm"]["num"].value;
    if (isNaN(num)) {
        alert("Input must be a number");
        return false;
    }
}