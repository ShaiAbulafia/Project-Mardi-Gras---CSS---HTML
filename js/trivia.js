let score = 0;
// QUESTION 1 

document.getElementById('answer11').onclick = function (){
    answerCheck1(document.getElementById('answer11'))
};
document.getElementById('answer12').onclick = function (){
    answerCheck1(document.getElementById('answer12'))
};
document.getElementById('answer13').onclick = function (){
    answerCheck1(document.getElementById('answer13'))
};
document.getElementById('answer14').onclick = function (){
    answerCheck1(document.getElementById('answer14'))
};

function answerCheck1($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest2, 1000);
}

function nextQuest2 (){
    document.getElementById('questionWrap1').classList.add("hiddenQuest");
    document.getElementById('questionWrap1').classList.remove("shownQuest");
    document.getElementById('questionWrap2').classList.add("shownQuest");
}

// QUESTION 2
document.getElementById('answer21').onclick = function (){
    answerCheck2(document.getElementById('answer21'))
};
document.getElementById('answer22').onclick = function (){
    answerCheck2(document.getElementById('answer22'))
};
document.getElementById('answer23').onclick = function (){
    answerCheck2(document.getElementById('answer23'))
};
document.getElementById('answer24').onclick = function (){
    answerCheck2(document.getElementById('answer24'))
};

function answerCheck2($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest3, 1000);
}

function nextQuest3 (){
    document.getElementById('questionWrap2').classList.add("hiddenQuest");
    document.getElementById('questionWrap2').classList.remove("shownQuest");
    document.getElementById('questionWrap3').classList.add("shownQuest");
}

// QUESTION 3
document.getElementById('answer31').onclick = function (){
    answerCheck3(document.getElementById('answer31'))
};
document.getElementById('answer32').onclick = function (){
    answerCheck3(document.getElementById('answer32'))
};
document.getElementById('answer33').onclick = function (){
    answerCheck3(document.getElementById('answer33'))
};
document.getElementById('answer34').onclick = function (){
    answerCheck3(document.getElementById('answer34'))
};

function answerCheck3($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest4, 1000);
}

function nextQuest4 (){
    document.getElementById('questionWrap3').classList.add("hiddenQuest");
    document.getElementById('questionWrap3').classList.remove("shownQuest");
    document.getElementById('questionWrap4').classList.add("shownQuest");
}

// QUESTION 4
document.getElementById('answer41').onclick = function (){
    answerCheck4(document.getElementById('answer41'))
};
document.getElementById('answer42').onclick = function (){
    answerCheck4(document.getElementById('answer42'))
};
document.getElementById('answer43').onclick = function (){
    answerCheck4(document.getElementById('answer43'))
};
document.getElementById('answer44').onclick = function (){
    answerCheck4(document.getElementById('answer44'))
};

function answerCheck4($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest5, 1000);
}

function nextQuest5 (){
    document.getElementById('questionWrap4').classList.add("hiddenQuest");
    document.getElementById('questionWrap4').classList.remove("shownQuest");
    document.getElementById('questionWrap5').classList.add("shownQuest");
}

// QUESTION 5
document.getElementById('answer51').onclick = function (){
    answerCheck5(document.getElementById('answer51'))
};
document.getElementById('answer52').onclick = function (){
    answerCheck5(document.getElementById('answer52'))
};
document.getElementById('answer53').onclick = function (){
    answerCheck5(document.getElementById('answer53'))
};
document.getElementById('answer54').onclick = function (){
    answerCheck5(document.getElementById('answer54'))
};

function answerCheck5($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest6, 1000);
}

function nextQuest6 (){
    document.getElementById('questionWrap5').classList.add("hiddenQuest");
    document.getElementById('questionWrap5').classList.remove("shownQuest");
    document.getElementById('questionWrap6').classList.add("shownQuest");
}

// QUESTION 6
document.getElementById('answer61').onclick = function (){
    answerCheck6(document.getElementById('answer61'))
};
document.getElementById('answer62').onclick = function (){
    answerCheck6(document.getElementById('answer62'))
};
document.getElementById('answer63').onclick = function (){
    answerCheck6(document.getElementById('answer63'))
};
document.getElementById('answer64').onclick = function (){
    answerCheck6(document.getElementById('answer64'))
};

function answerCheck6($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest7, 1000);
}

function nextQuest7 (){
    document.getElementById('questionWrap6').classList.add("hiddenQuest");
    document.getElementById('questionWrap6').classList.remove("shownQuest");
    document.getElementById('questionWrap7').classList.add("shownQuest");
}

// QUESTION 7
document.getElementById('answer71').onclick = function (){
    answerCheck7(document.getElementById('answer71'))
};
document.getElementById('answer72').onclick = function (){
    answerCheck7(document.getElementById('answer72'))
};
document.getElementById('answer73').onclick = function (){
    answerCheck7(document.getElementById('answer73'))
};
document.getElementById('answer74').onclick = function (){
    answerCheck7(document.getElementById('answer74'))
};

function answerCheck7($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest8, 1000);
}

function nextQuest8 (){
    document.getElementById('questionWrap7').classList.add("hiddenQuest");
    document.getElementById('questionWrap7').classList.remove("shownQuest");
    document.getElementById('questionWrap8').classList.add("shownQuest");
}

// QUESTION 8
document.getElementById('answer81').onclick = function (){
    answerCheck8(document.getElementById('answer81'))
};
document.getElementById('answer82').onclick = function (){
    answerCheck8(document.getElementById('answer82'))
};
document.getElementById('answer83').onclick = function (){
    answerCheck8(document.getElementById('answer83'))
};
document.getElementById('answer84').onclick = function (){
    answerCheck8(document.getElementById('answer84'))
};

function answerCheck8($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest9, 1000);
}

function nextQuest9 (){
    document.getElementById('questionWrap8').classList.add("hiddenQuest");
    document.getElementById('questionWrap8').classList.remove("shownQuest");
    document.getElementById('questionWrap9').classList.add("shownQuest");
}

// QUESTION 9
document.getElementById('answer91').onclick = function (){
    answerCheck9(document.getElementById('answer91'))
};
document.getElementById('answer92').onclick = function (){
    answerCheck9(document.getElementById('answer92'))
};
document.getElementById('answer93').onclick = function (){
    answerCheck9(document.getElementById('answer93'))
};
document.getElementById('answer94').onclick = function (){
    answerCheck9(document.getElementById('answer94'))
};

function answerCheck9($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest10, 1000);
}

function nextQuest10 (){
    document.getElementById('questionWrap9').classList.add("hiddenQuest");
    document.getElementById('questionWrap9').classList.remove("shownQuest");
    document.getElementById('questionWrap10').classList.add("shownQuest");
}

// QUESTION 10
document.getElementById('answer101').onclick = function (){
    answerCheck10(document.getElementById('answer101'))
};
document.getElementById('answer102').onclick = function (){
    answerCheck10(document.getElementById('answer102'))
};
document.getElementById('answer103').onclick = function (){
    answerCheck10(document.getElementById('answer103'))
};
document.getElementById('answer104').onclick = function (){
    answerCheck10(document.getElementById('answer104'))
};

function answerCheck10($answer){
    if ($answer.classList.contains('trueAnswer')){
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#47c247';
        $answer.style.color = '#fff';
        score += 1;
    }
    else{
        $answer.style.border = '2px solid #fff';
        $answer.style.backgroundColor = '#b10202';
        $answer.style.color = '#fff';
    }
    
    document.getElementById('scoreCount').innerHTML= " "+score;
    setTimeout(nextQuest11, 1000);
}

function nextQuest11 (){
    document.getElementById('questionWrap10').classList.add("hiddenQuest");
    document.getElementById('questionWrap10').classList.remove("shownQuest");
    document.getElementById('wrapScore').style.fontSize = '2em';
    if (score>8){
        document.getElementById('wrapScore').style.color = '#47c247';
    }
    else if(score>=6){
        document.getElementById('wrapScore').style.color = '#eb9a04';
    }
    else{
        document.getElementById('wrapScore').style.color = '#b10202';
    }
}