var koran1 = document.querySelector('.koran')
var koran2 = document.querySelector(".koranpopup2")
var kertas = document.querySelector(".clue") 

var paper = document.querySelector(".paper")
var surat = document.querySelector(".surat1")

var bayang = document.querySelector(".bayang")

var hantu = document.querySelector(".berdiri")

var full = document.querySelector(".bg")

var font = document.querySelector(".font")

var hitung = 0

var tom1 = new Audio("suara/epic-storm-thunder-rainwindwaves-no-loops-106800.mp3");
    tom1.play();


    

koran1.addEventListener("click",function(){
    document.querySelector(".koranpopup2").style.display="block"
    koran1.style.display="none"
    var tom2 = new Audio("suara/click-button-140881.mp3");
    tom2.play();
    
})



function myGreeting() {
    kertas.style.display="block"
  }

function penampakan1() {
    bayang.style.display="block"
    var tom4 = new Audio("suara/halloween-impact-05-93808.mp3");
    tom4.play();
  }
  function penampakan2() {
    hantu.style.display="block";
    var tom3 = new Audio("suara/four_voices_whispering-6943.mp3");
    tom3.play();
    var tom5 = new Audio("suara/a-short-horror-with-a-build-up-153269.mp3");
    tom5.play();
    
  }

koran2.addEventListener("click",function(){
    koran1.style.display="block"
    koran2.style.display="none"
    var tom2 = new Audio("suara/click-button-140881.mp3");
    tom2.play();
    const myTimeout = setTimeout(myGreeting, 1000);
    
})

paper.addEventListener("click",function(){
    hitung = hitung +1
    switch(hitung){
        case 1:
            surat.src="img/Asset 3.png"
            surat.style.display = "block"
            koran1.style.display="none"
            var tom2 = new Audio("suara/click-button-140881.mp3");
            tom2.play();
            break
        case 2:
            surat.src="img/Asset 2.png"
            surat.style.display = "block"
            paper.style.display="none"
            var tom2 = new Audio("suara/click-button-140881.mp3");
            tom2.play();
            break
    }
    
    console.log(hitung)
    
})

surat.addEventListener("click",function(){
    switch (hitung) {
        case 1:
            surat.style.display="none";
            var tom2 = new Audio("suara/click-button-140881.mp3");
            tom2.play();
            const mTimeout = setTimeout(penampakan1, 500);            
            break;
    
        case 2:
            surat.style.display="none";
            var tom2 = new Audio("suara/click-button-140881.mp3");
            tom2.play();
            setTimeout(penampakan2, 500);
            break;
    }

    
})

function penampakan3() {
    full.style.backgroundImage="url(img/jumscare.jpg)";
    var tom6 = new Audio("suara/cryo_outage-94622.mp3");
    tom6.play();
    font.style.display="block";
  }

hantu.addEventListener("click",function(){
    hantu.style.display="none";
    var tom2 = new Audio("suara/click-button-140881.mp3");
    tom2.play();
    setTimeout(penampakan3, 1000);

})
