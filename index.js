var starter = document.querySelector('#starter');
var btn = document.querySelectorAll('.btn');
var toPlay = document.querySelector('#toPlay');
var hide=document.querySelector('#hide');
var botList = [];
var userList = [];
var step2 =false;
var step3=false;
var canPlay=false;
var level=1;
var userClickAudio = new Audio ('./userclick.mp3');
var levelupAudio = new Audio ('./levelup.mp3');
var gameOverAudio = new Audio ('./gameover.mp3');
starter.addEventListener('click', starterfunc);



function starterfunc() {
    // Making Bot Play
    hide.style.display='block';


    starter.style.display = 'none';
    botPlayer();
     toPlay.innerHTML= 'try to remember which box got clicked';

   if (step2==true){
    //    console.log('Botlist contains '+botList);
       userPlayer();
   }
  
   if (step3==true){
    //    console.log('userlist is '+ userList);
   }
  

}




/////////////////////////////////////////////////////

function botPlayer(){
         var randNum = Math.floor(Math.random()*4)+1;
        //  console.log('inside botplayer function ');

         // adding class
          btn[randNum-1].classList.add('changer');

          setInterval(() => {
              btn[randNum-1].classList.remove('changer');
          }, 1000); // Removed Class

       botList.push('btn'+ randNum); // Adding data to botlist
       step2=true;
}



function userPlayer(){
      canPlay=true;
      
}

function btn1(){
    if (canPlay==true){
        userClickAudio.play();
        userList.push('btn1');
        checker();
    }

}

function btn2(){
    if (canPlay==true){
userClickAudio.play();

        userList.push('btn2');
        checker();
    }
}

function btn3(){
    if (canPlay==true){
userClickAudio.play();

        userList.push('btn3');
        checker();
    }
}

function btn4(){
    if (canPlay==true){
userClickAudio.play();

        userList.push('btn4');
        checker();
    }
}


function checker(){
       for(var i=0;i<userList.length;i++){
          if(userList[i]===botList[i]){

             
                    console.log('userlist '+ userList);
                    console.log('botlist '+ botList);
                    console.log('rulayega kya pagle');
                    if(userList.length==botList.length){
                        if(userList[userList.length-1]!=botList[botList.length-1]){
                              console.log('ohhh this was the issue');
                              console.log('yeah');
                              gameOverAudio.play();
                              reseter();
                              return;
                        }
                        console.log('completely equal');
                        level++;
                        levelupAudio.play();
                        document.querySelector('#level').innerHTML=level;
                        userList=[];
                        starterfunc();
                        return;
               
                    }       
          }
          else {
              console.log('yeah');
              gameOverAudio.play();
              reseter();
              return;
          }
       }
          
    
}


function reseter(){
    level=1;
    hide.innerHTML='Level '+level;
    toPlay.innerHTML='Game Over!';
    document.querySelector('#hide').style.display = 'none';
    botList=[];
    userList=[];
    starter.innerHTML='Play Again';
    starter.style.display='initial';
}