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
    questionNum++;
    question();
});

// Sets new display for question
function question() {
    titleEl.textContent = ("Question # " + questionNum);
    GenerateQuestion();

}

function GenerateQuestion() {
    var index = questionNum -1
    cardTextEl.textContent = (questions[index][1]);
    questionNum++;

    btn1.textContent = questions[index].a[0];
    btn2.textContent = questions[index].a[1];
    btn3.textContent = questions[index].a[2];

}

