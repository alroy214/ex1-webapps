let qSyntax = function () {
    let doSomething = function () {
        (function(){
            function buildQuiz(){
                // variable to store the HTML output
                const output = [];

                // for each question...
                myQuestions.forEach(
                    (currentQuestion, questionNumber) => {

                        // variable to store the list of possible answers
                        const answers = [];

                        // and for each available answer...
                        for(let letter in currentQuestion.answers){

                            // ...add an HTML radio button
                            answers.push(
                                `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                            );
                        }

                        // add this question and its answers to the output
                        output.push(
                            `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                        );
                    }
                );

                // finally combine our output list into one string of HTML and put it on the page
                quizContainer.innerHTML = output.join('');
            }

            function showResults(){

                // gather answer containers from our quiz
                const answerContainers = quizContainer.querySelectorAll('.answers');

                // keep track of user's answers
                let numCorrect = 0;

                // for each question...
                myQuestions.forEach( (currentQuestion, questionNumber) => {

                    // find selected answer
                    const answerContainer = answerContainers[questionNumber];
                    const selector = `input[name=question${questionNumber}]:checked`;
                    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                    // if answer is correct
                    if(userAnswer === currentQuestion.correctAnswer){
                        // add to the number of correct answers
                        numCorrect++;

                        // color the answers green
                        answerContainers[questionNumber].style.color = 'lightgreen';
                    }
                    // if answer is wrong or blank
                    else{
                        // color the answers red
                        answerContainers[questionNumber].style.color = 'red';
                    }
                });

                // show number of correct answers out of total
                resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
            }

            const quizContainer = document.getElementById('quiz');
            const resultsContainer = document.getElementById('results');
            const submitButton = document.getElementById('submit');
            const myQuestions = [
                {
                    question: "Who invented JavaScript?",
                    answers: {
                        a: "Douglas Crockford",
                        b: "Sheryl Sandberg",
                        c: "Brendan Eich"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Which one of these is a JavaScript package manager?",
                    answers: {
                        a: "Node.js",
                        b: "TypeScript",
                        c: "npm"
                    },
                    correctAnswer: "c"
                },
                {
                    question: "Which tool can you use to ensure code quality?",
                    answers: {
                        a: "Angular",
                        b: "jQuery",
                        c: "RequireJS",
                        d: "ESLint"
                    },
                    correctAnswer: "d"
                }
            ];
            resultsContainer.innerHTML = `0 out of ${myQuestions.length}`;
            // Kick things off
            buildQuiz();


            // Event listeners
            submitButton.addEventListener('click', showResults);
        })();
    }
    let desc = "We are going to use question one to play a game!\n" +
        "doSomething() let's you do a quiz game based on Javascript.\r\n" +
        "Used 'things': Loops, comparisons, conditional operations" +
        "data types, that we can return 2 parameters, arrays, random\r\n"
    return { doSomething, desc }
}

let q2 = function () {
    let doSomething = function () {
        for (let i=0; i<=5; i++) {
            setTimeout(function clog() {console.log(i)}, i*1000);
        }
    }
    let desc = "with var - the i in every setTimeout callback means the same variable that finally is equal to 6 after the loop iteration ends." +
        "with let - the i in every setTimeout callback means a different variable, each of which has a different value: the first one is 0, the next one is 1 etc."
    return { doSomething, desc }
}


function qCalc() { // A method creating and returning a single {doSomething: ***, desc: ***} object
    this.calcFactory = new Calculator();
    this.desc = "Calculator you can use add or sub to increase or decrease the number to get an answer."
    return this;
}

function Calculator() { // Constructor for Calculator object
    let value = 0;
    this.add = function (num) {
        value = (value + parseInt(num))
    }
    this.sub = function (num) {
        value = (value - num)
    }
    this.getValue = function () {
        return value
    }
}

function qAsync(){
    this.doAsync = function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    this.desc = "This function waits elven and a half seconds then calls exec," +
        " that calls doAsync then the function prints to the log.";
    this.exec =  async function () {
        await this.doAsync(11500);
        const print = "The text changed 11.5 seconds after! Do you remember what it said before?";
        console.log(print)
        return print;
    }
}

function q4() {
    function q4Constructor() {
        let res = {
            doSomething: function () {
                let k = { testValue: 5 }
                let j = Object.create(k)
                let i = Object.create(j)
                let h = Object.create(i)
                let g = Object.create(h)
                let f = Object.create(g)
                let e = Object.create(f)
                let d = Object.create(e)
                let c = Object.create(d)
                let b = Object.create(c)
                let a = Object.create(b)
                console.log("a -> b -> c -> d -> e -> f -> g -> i -> j -> k,    as we saw in mozilla tutorial")
                console.log("Verify a has k in prototype chain: a.testValue === " + a.testValue)
                return [a, b, c, d, e, f, g, h, i, j, k]
            }
        }

        res.desc = "doSomething: Return an array of objects a to k. a inherits b , b inherits c, and so on until k, " +
            "which has a value pair testValue: 5." +
            "Usage: q3().doSomething() returns a new array with mentioned a to k"
        return res
    }

    return q4Constructor()
}