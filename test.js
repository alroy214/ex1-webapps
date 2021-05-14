"use strict";


function toggleTestQuestion(elementID) {
    const x = document.getElementById(elementID);
    if (x.style.display === "none") {
        x.style.display = "block";
        return true;
    } else {
        x.style.display = "none";
        return false
    }
}

function testQ1(){
    if(toggleTestQuestion("Q1")) {
        let test = qSyntax();
        test.doSomething();
        document.getElementById("desc1").innerHTML =
            "The description for question 1:\t" + test.desc;
    }
}

function testQ2(){
    let test = q2();
    alert("first let us decribe the function:\n" + test.desc);
    test.doSomething();
}

let calc = new qCalc();
function testQ3() {
    toggleTestQuestion("Q3");
    document.getElementById("desc2").innerHTML = calc.desc + calc.calcFactory.getValue();
}

function submitQ3() {
    document.getElementById("desc2").innerHTML = calc.desc + "calculating";
    let num = document.getElementById("num").value;
    if (isNaN(num)) {
        alert("Input must be a number");
    }

    let method = document.getElementById("method").value;

    if (method.toLowerCase() === "add") {
        calc.calcFactory.add(num);

    } else if (method.toLowerCase() === "sub") {
        calc.calcFactory.sub(num);
    } else {
        alert("The method input isn't correct, please type a legal input ('add' or 'sub')");
    }

    document.getElementById("desc2").innerHTML = calc.desc + calc.calcFactory.getValue();
}

function testQ4(){
    let chainedLetters = q4();
    alert("first let us decribe the function:\n" + chainedLetters.desc);
    alert("now we will run doSomething.");
    let strChain = chainedLetters.doSomething[0].name;
    for(let i=0; i<chainedLetters.doSomething.length-1;i++){
        strChain+="->"+(chainedLetters["doSomething"][i]).prototype.name;
    }
    alert("the chain created is "+ strChain);

}
