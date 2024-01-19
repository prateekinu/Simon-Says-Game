let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","green","purple"];

let started = false;
let level = 0;

let maxScore = 0;
let h2 = document.querySelector("h2");
let h22 = document.createElement("h2");
h22.innerText = maxScore;
h2.appendChild(h22);

let h3 = document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(started == false)
    {
        console.log("Game Started");
        started = true;
        lvlUp();
        
    }
});
function btnFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash"); 
    }, 250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash"); 
    }, 250);
}

function lvlUp()
{
    userSeq = [];
    level++;
    h3.innerText =  `Level ${level}`;
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);
    gameSeq.push(randColor);
    // console.log(gameSeq);
}

function btnpress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");  
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};

let allBtn = document.querySelectorAll(".box");
for(btn of allBtn)
{
    btn.addEventListener("click",btnpress);
}


function checkAns(idx){
    
    if(gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length == userSeq.length)
        {
            setTimeout(lvlUp,1000);
        }
    }
    else
    {
       h3.innerHTML =  `Game Over!Your Score was <b>${level}</b><br> Press any key to start again`;
       document.querySelector("body").style.backgroundColor = "red";
       setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "burlywood"; 
       },100);
       if(maxScore < level )
        {
            maxScore = level;
        }
        h22.innerText = maxScore-1;
        
       gameSeq = [];
       userSeq = [];
       started = false;
       level = 0;
    }
}