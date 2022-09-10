function myFunction(){
    var randonNumber1 = Math.floor(Math.random()*6)+1;
var randomImageSrc = "images/dice"+randonNumber1+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImageSrc);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randonImageSrc2 = "images/dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randonImageSrc2);

if(randonNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(randonNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins";
}else{
    document.querySelector("h1").innerHTML="Draw";
};
}
