var titleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var startBtnEl = document.querySelector("#startQuiz");
var questionBtnEl = document.querySelector("#questionButtons");
var footerEl = document.querySelector(".card-footer");

var btn1 = questionBtnEl.children[0];
var btn2 = questionBtnEl.children[1];
var btn3 = questionBtnEl.children[2];

var score = 0
var questionNum = 0

var questions = [
    {1: "Dwight owns and runs a farm in his spare time. What does his farm primarily produce?",
        a: ["Apples", "Potatoes", "Beets"]},
 
    {2: "What does Micheal burn his foot on?",
        a: ["A George Foreman Grill", "The fire Ryan started", "Kevin's homemade chili"]},

    {3: "Who are the three main members of the party planning committee",
        a: ["Angela, Phyllis, and Kelly", "Phyllis, Angela, and Pam", "Phyllis, Kelly, and Pam"]},

    {4: "What is Andy's nickname for Jim?", 
        a: ["Small Flounder", "Medium Swordfish", "Big Tuna"]},

    {5: "What is Phyllis' husbands name?",
        a: ["Kevin Malone", "Bob Ross", "Bob Vance, Vance Refridgeration"]}
]

// When user clicks "start quiz" button
startBtnEl.addEventListener("click", function() {
    startBtnEl.style.display = "none";
    questionBtnEl.style.display = "inline-block";
    generateQuestion();
    //setTimer();
});

// Set timer 

// Generate new question and answers
function generateQuestion() {
    footerEl.textContent = "";
    titleEl.textContent = ("Question # " + parseInt(questionNum + 1));
    var index = questionNum
    cardTextEl.textContent = (questions[index][index + 1]);

    btn1.textContent = questions[index].a[0];
    btn2.textContent = questions[index].a[1];
    btn3.textContent = questions[index].a[2];

}

// Event listener to answer buttons
questionBtnEl.addEventListener("click", function(){
userChoice = event.target.value;
console.log(userChoice);
checkAnswer();
});

// Check answer and display result
function checkAnswer() {
    
    if ((questionNum === 0 && userChoice == 3) || 
        (questionNum === 1 && userChoice == 1) ||
        (questionNum === 2 && userChoice == 2) ||
        (questionNum === 3 && userChoice == 3) ||
        (questionNum === 4 && userChoice == 3)) {

            footerEl.textContent = ("Correct!");
        }else {
            footerEl.textContent = ("False.")
            // If false, remove 10 seconds from timer
        }
    questionNum++;

    setTimeout(function() {
        generateQuestion();
    }, 500);
    
    
};
