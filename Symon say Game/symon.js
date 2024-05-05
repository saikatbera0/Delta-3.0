let bdy=document.querySelector("body");
let gameseq=[];
let userseq=[];
let started=false;
let level=0;
let high=0;
let btns=["one","two","three","four"];
let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
})
// function random(){
//     let rand=Math.floor(Math.random())
// }
function gameflash(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameseq.push(randColor);
    gameflash(randbtn);
} 
function cheak(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        h2.innerHTML=`Game Over! <b>Your Score is ${level}.</b>\n Press any key to start.`;
        bdy.style.backgroundColor="red";
        setTimeout(function(){
            bdy.style.backgroundColor="white";
        },150);
        reset();
    }
}
function btnPress(){
    let btn=this;
    userflash(btn);
    let color=btn.getAttribute("id");
    userseq.push(color);
    cheak(userseq.length-1);
}
let btnss=document.querySelectorAll(".item");
for(bbtn of btnss){
    bbtn.addEventListener("click",btnPress);
}

function reset(){
    gameseq=[];
    started=false;
    userseq=[];
    level=0;
}