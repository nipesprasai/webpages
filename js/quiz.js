var quiz = [
    ['Which programming language name resembles with a reptile?', 'python'],
    ['Where is Mt. Everest located?', 'nepal'],
    ['Who founded Apple Inc.?', 'steve jobs']
];
var correctAnswer = 0;
var answer;
var question;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
    var outputDiv = document.getElementById('output');
    outputDiv.innerHTML = message;
}

function buildList(arr) {
    var listHTML = '<ol>';
    for (var i = 0; i < arr.length; i++) {
        listHTML += '<li>' + arr[i] + '</li>';
    }
    listHTML += '</ol>';
    return listHTML;
}
for (var i = 0; i < quiz.length; i++) {
    question = quiz[i][0];
    answer = quiz[i][1];
    response = prompt(question).toLowerCase();
    if (response === answer) {
        correctAnswer += 1;
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

    html = "You got " + correctAnswer + " question(s) right";
    html += '<h2>You got these questions correct:</h2>';
    html += buildList(correct);
    html += '<h2>You got these questions wrong:</h2>';
    html += buildList(wrong);
    print(html);
