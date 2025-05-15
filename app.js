let game=document.querySelector('#game');
let dinosaur=document.querySelector('#dinosaur');
let cactus=document.querySelector('#cactus');
let myPoint=document.querySelector('#mypoint');
let gameOver=document.querySelector('#gameover');
let restartBtn = document.querySelector('#restart');

let cactusflag=false;
let point=0;

restartBtn.addEventListener('click', () => {
    location.reload();
});

function jump_dinosaur(){
    if(!dinosaur.classList.contains("jump")){
        dinosaur.classList.add("jump");
        cactusflag =true;

        setTimeout((e) => {
            dinosaur.classList.remove("jump");
        },600);
    }
     
}
document.addEventListener("keydown",(e)=>{
    if(e.code == "Space"){
        jump_dinosaur();
    }
})

let check_live_game=setInterval((e)=>{
    let dinosaur_top =parseInt(window.getComputedStyle(dinosaur).getPropertyValue("top"));
    let cactus_left= parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactus_left > 50 && cactus_left < 100 && dinosaur_top > 130) {
        dinosaur.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        game.style.animationPlayState = "paused";
        clearInterval(check_live_game);
    
        gameOver.style.display = "block";
}


    if (cactus_left < 10 && cactusflag){
        point+=100;
        cactusflag=false;
     myPoint.innerHTML=point
    }
},10); 



