var titleEl = document.querySelector(".card-title");
var cardTextEl = document.querySelector(".card-text");
var startBtnEl = document.querySelector("#startQuiz");
var questionBtnEl = document.querySelector("#questionButtons");
var footerEl = document.querySelector(".card-footer");

var score = 0
var questionNum = 0
var questions = [
    {q1: "Dwight owns and runs a farm in his spare time. What does his farm primarily produce?",
        a: ["Beets", "Apples", "Potatoes"]},
 
    {q2: "What does Micheal burn his foot on?",
        a: ["A George Foreman Grill", "The fire Ryan started", "Kevin's homemade chili"]},

    {q3: "Who are the three main members of the party planning committee",
        a: ["Phyllis, Angela, and Pam", "Angela, Phyllis, and Kelly", "Phyllis, Kelly, and Pam"]},

    {q4: "What is Andy's nickname for Jim?", 
        a: ["Big Tuna", "Small Flounder", "Medium Swordfish"]},

    {q5: "What is Phyllis' husbands name?",
        a: ["Bob Vance, Vance Refridgeration", "Kevin Malone", "Bob Ross"]}
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

}

//function GenerateQuestion() {
    //for (i = 0; i < questions.length; i++)


