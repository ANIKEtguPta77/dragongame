
let score1=0;
cross =true;
let game=document.querySelector('.gamecontainer');
let audiogo=new Audio('gameover.mp3');
let audio=new Audio('music.mp3');



game.addEventListener('click',()=>{
    console.log("ji");
    let inst=document.querySelector('.intructions');
    let obstacle=document.querySelector('.obstacle');
    inst.style.visibility="hidden";
    obstacle.classList.add('obsta');
     audio.play();


})




document.onkeydown=function(e){
   

    
    if(e.keyCode==38){
        let dino=document.querySelector('.dino');
    dino.classList.add('animated');
    setTimeout(() =>{
        dino.classList.remove('animated');
    },700);
   } 
   if(e.keyCode==39)
   {
    let dino=document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=dinoX+112+"px";
   }
   if(e.keyCode==37)
   {
    let dino=document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dino.style.left=(dinoX-112)+"px";
   }

}

//checking to whether they collide or not
setInterval(()=>{

    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
   obstacle=document.querySelector('.obstacle');
   obsta=document.querySelector('.obsta');
   sc=document.getElementById('score');
    

    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));//finding current left value of dino
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));//finding current top value
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
   
   if(offsetX<73 && offsetY<52)
   {
    gameover.style.visibility='visible';
    obstacle.classList.remove('obsta');
    gameover.classList.add('g');
    sc.classList.add('s');
     sc.style.top="52vh";
     sc.style.right="45vw";
     sc.style.font.size="40px";
     audiogo.play();
     h1.innerHTML="Reload to play again";
     setTimeout(()=>{
        audiogo.pause();
        audio.pause();
     },1000)
    
    
   }
   else if(offsetX<100 && cross){
    
    score1+=1;
    updatescore(score1);
    cross=false;

    setTimeout(()=>{
        cross=true;
    },1000)
    
    setTimeout(()=>{
        animdu=parseFloat(window.getComputedStyle(obsta,null).getPropertyValue('animation-duration'));
    
        animdu=(animdu-0.1);
        obsta.style.animationDuration=animdu+'s';
    },500
    )


   
   }

    

   
},10)


function updatescore(score1){
    score.innerHTML="Your score :"+(score1);
}
    
       

