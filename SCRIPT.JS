var timer = 6;
var score = 0;
var hitrn = 0;

function incScore(){
score += 10;
document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
  hitrn = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
var clutter="";

for(var i=1; i<=120; i++){
   var rn = Math.floor(Math.random()*10)
  clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
var timerInt = setInterval(function(){
  if(timer>0){
  timer--;
  document.querySelector("#timerval").textContent = timer;
}
else{
  clearInterval(timerInt);
  document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER!<\h1>`;
}
}, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(details){
  var clickedNum = Number(details.target.textContent);
  if(clickedNum === hitrn ){
    incScore();
    makeBubble();
    getNewHit();
  }
});

runTimer();
makeBubble();
getNewHit();
