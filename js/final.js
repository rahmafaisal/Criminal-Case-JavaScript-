var clickresult=new Audio(),
    guessTest=document.getElementById("guess");
challengeBtn.addEventListener("click",function () {
    cover.style.transform = "rotateY(180deg)";
    cover.style.transformStyle= "preserve-3d";
    cover.style.transformOrigin= "left";;
    cover.style.transition = "all .5s ease-in-out";
});
correct.addEventListener("click",function(){
    clickresult.src="/mp3/cong.mp3";
   playAudio();
   var HiddenText=  document.querySelectorAll("div.cardCI p.resultText");
    for (item of HiddenText) {
        item.style.display="none";
    }
    var HiddenImg=  document.querySelectorAll("div.cardCI div.resultContainer img");
    for (item of HiddenImg) {
        item.style.display="none";
    }
    guessTest.textContent="Congratulation";
    document.querySelector("div.cardCI div.resultContainer p").style.display="block";
    var resultImg= document.querySelector("div.cardCI div.resultContainer img")
    resultImg.style.display="block";
    resultImg.src="/img/doctor.png";

})
incorrect.addEventListener("click",function(){
    guessTest.textContent="Try Again";
    clickresult.src="/mp3/btnError.mp3";
    playAudio();
})

function playAudio() {
    clickresult.play();
}





