let gameSeq=[];
let userSeq=[];

let btns=["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if (started == false) {
        console.log("Game Stared");
        started = true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 350);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let rndIndx= Math.floor(Math.random() * 3);
    let rndClr= btns[rndIndx];
    let rndBtn=document.querySelector(`.${rndClr}`);
    gameSeq.push(rndClr);
    console.log(`Game Sequence : ${gameSeq}`);
    gameFlash(rndBtn);
}
function checkColor(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length)
            setTimeout(levelUp(), 1000);
    }
    else{
        h2.innerHTML=`Game Over. Your Score was <b>${level}<br> Press any key to start`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
        reset();
    }
}
function btnPress() {
    let btn =this;
    userFlash(btn);

    userClr=btn.getAttribute("id");
    userSeq.push(userClr);
    console.log(`User Sequence : ${userSeq}`);
    checkColor(userSeq.length-1);
}

let allBtns= document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}