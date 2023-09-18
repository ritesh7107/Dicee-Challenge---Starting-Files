let randomnumber1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+randomnumber1+".png";
var randomimgsource1="images/"+randomimg;
document.querySelector(".img1").setAttribute("src",randomimgsource1)
let randomnumber2=Math.floor(Math.random()*6)+1;
var randomimg1="dice"+randomnumber2+".png";
var randomimgsource2="images/"+randomimg1;
document.querySelector(".img2").setAttribute("src",randomimgsource2);
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Win";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 Win";
}
else
{
    document.querySelector("h1").innerHTML="Draw";
}