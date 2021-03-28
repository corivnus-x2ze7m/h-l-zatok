var kérdések;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data));
};

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    kérdések = d;
    feltöltés(0);
};

window.onload = (event) => {
    letöltés();

};

item = 0;

function feltöltés(index) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[index].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[index].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[index].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[index].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[index].image;
};



function előre() {
    visszaszinez()
    item++;
    if (item <= kérdések.length - 1) {
        feltöltés(item);
    }
    else {
        item = 0;
        feltöltés(item);
    }
};

function vissza() {
    visszaszinez()
    item--;
    if (item >= 0) {
        feltöltés(item);
    }
    else {
        item = kérdések.length - 1;
        feltöltés(item);
    }
};

function szinezés(valaszID) {
    if (kérdések[item].correctAnswer == parseInt(valaszID.slice(-1))) {
        document.getElementById(valaszID).style.background = "green";
    }
    else {
        document.getElementById(valaszID).style.background = "red";
    }
};

function visszaszinez() {
    document.getElementById("válasz1").style.background = "white";
    document.getElementById("válasz2").style.background = "white";
    document.getElementById("válasz3").style.background = "white";
}