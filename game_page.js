var player1=localStorage.getItem("User1");
var player2=localStorage.getItem("User2");

var score1=0;
var score2=0;

var question_turn="Player 1";
var answer_turn="Player 2";

document.getElementById("player1_name").innerHTML=player1+": ";
document.getElementById("player1_score").innerHTML=score1;
document.getElementById("player2_name").innerHTML=player2+": ";
document.getElementById("player2_score").innerHTML=score2;

document.getElementById("player_question").innerHTML="Question Turn: "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn: "+player2;

function send() {
    getWord=document.getElementById("word").value;
    word=getWord.toLowerCase();
    console.log(word);

    charAt1=word.charAt(1);
    console.log(charAt1);

    lengthBy2=Math.floor(word.length/2);
    charAt2=word.charAt(lengthBy2);
    console.log(charAt2);

    lengthMinus1=word.length-1;
    charAt3=word.charAt(lengthMinus1);
    console.log(charAt3);

    remove_charAt1=word.replace(charAt1,"_");
    remove_charAt2=remove_charAt1.replace(charAt2,"_");
    remove_charAt3=remove_charAt2.replace(charAt3,"_");
    console.log(remove_charAt3);

    question_word="<h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    inputBox="<br>Answer: <input type='text' id='input_check_box'>";
    checkButton="<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
    row=question_word+inputBox+checkButton;
    document.getElementById("output").innerHTML=row;

    document.getElementById("word").value="";
}
function check() {
    guess=document.getElementById("input_check_box").value;
    answer=guess.toLowerCase();
    console.log(answer);
    if (answer==word) {
        if (answer_turn=="Player 1") {
            score1=score1+1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else {
            score2=score2+1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    else {
        if (answer_turn=="Player 1") {
            score1=score1-1;
            document.getElementById("player1_score").innerHTML=score1;
        }
        else {
            score2=score2-1;
            document.getElementById("player2_score").innerHTML=score2;
        }
    }
    if (question_turn=="Player 1") {
        question_turn="Player 2";
        answer_turn="Player 1";
        document.getElementById("player_question").innerHTML="Question Turn: "+player2;
        document.getElementById("player_answer").innerHTML="Answer Turn: "+player1;
    }
    else {
        question_turn="Player 1";
        answer_turn="Player 2";
        document.getElementById("player_question").innerHTML="Question Turn: "+player1;
        document.getElementById("player_anwer").innerHTML="Answer Turn: "+player2;
    }
    document.getElementById("output").value="";
    document.getElementById("output").innerHTML="";
}
