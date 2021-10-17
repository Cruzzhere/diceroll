document.querySelector(".Clkbutton").addEventListener("click",refreshplay);
function refreshplay(){
var n=Math.random();
n=Math.floor((n*6)+1);
document.querySelector("img").setAttribute("src","images/dice"+n+".png");
var i=Math.random();
i=Math.floor((i*6)+1);
document.querySelector("img.img2").setAttribute("src","images/dice"+i+".png");
if(n===i){
    document.querySelector("h1").innerHTML="Draw";
}
if(n>i){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}
if(n<i){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}
}
