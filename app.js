
let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 =document.querySelector("h2");

document.addEventListener("keypress",function(){
  if(started == false){
    console.log("game started");
    started = true;

    levelUp ();
  }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },200);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
     btn.classList.remove("userflash");
    },200);
 }

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}


function checkAns(idx){
   

   if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp(),1000);
    }
   }
   else{
    h2.innerHTML = `Game over! <b>${level}<b> <br> Press any key to start`;
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor = "white";
    },150);
    reset();
   }
}

function btnPress (){
    let btn = this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

