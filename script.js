var ballVelocityVer=-2 ;
var ballVelocityHor=2 ;

var rodSpeed=10 ;
var moveRodPlayer1=null ;
var moveRodPlayer2=null ;

var keyDownPlayer1=false ;
var keyDownPlayer2=false ;

var rods=document.getElementsByClassName('rod') ;

alert("Welcome to Ping Pong. Press enter to play.\nPlayer 1 Controls :\nLeft : A\nRight : D\n\nPlayer 2 Controls :\nLeft : Left Arrow Key\nRight : Right Arrow Key") ;

document.addEventListener('keydown',function(event){
    
    if(event.keyCode==37){
        if(keyDownPlayer2==true)
        {
            return ;
        }

        keyDownPlayer2=true ;

        if(rods[1].getBoundingClientRect().x<=25){
            return ;
        }

        moveRodPlayer2=setInterval(function(){

            if(rods[1].getBoundingClientRect().x<=25){
                clearInterval(moveRodPlayer2) ;
            }

            rods[1].style.left=rods[1].getBoundingClientRect().x-15+"px" ; 
        },20) ;
    }

    if(event.keyCode==39){
        if(keyDownPlayer2==true)
        {
            return ;
        }

        keyDownPlayer2=true ;

        if(window.screen.availWidth-(rods[1].getBoundingClientRect().x+rods[1].getBoundingClientRect().width)<=25){
            return ;
        }

        moveRodPlayer2=setInterval(function(){

            if(window.screen.availWidth-(rods[1].getBoundingClientRect().x+rods[1].getBoundingClientRect().width)<=25){
                clearInterval(moveRodPlayer2) ;
            }

            rods[1].style.left=rods[1].getBoundingClientRect().x+15+"px" ;
        },20) ;
    }

}) ;

document.addEventListener('keydown',function(event){

    if(event.keyCode==65){
        if(keyDownPlayer1==true)
        {
            return ;
        }

        keyDownPlayer1=true ;

        if(rods[0].getBoundingClientRect().x<=25){
            return ;
        }

        moveRodPlayer1=setInterval(function(){

            if(rods[0].getBoundingClientRect().x<=25){
                clearInterval(moveRodPlayer1) ;
            }

            rods[0].style.left=rods[0].getBoundingClientRect().x-15+"px" ; 
        },20) ;
    }

    else if(event.keyCode==68){
        if(keyDownPlayer1==true)
        {
            return ;
        }

        keyDownPlayer1=true ;

        if(window.screen.availWidth-(rods[0].getBoundingClientRect().x+rods[0].getBoundingClientRect().width)<=25){
            return ;
        }

        moveRodPlayer1=setInterval(function(){

            if(window.screen.availWidth-(rods[0].getBoundingClientRect().x+rods[0].getBoundingClientRect().width)<=25){
                clearInterval(moveRodPlayer1) ;
            }

            rods[0].style.left=rods[0].getBoundingClientRect().x+15+"px" ;
        },20) ;
    }

}) ;

document.addEventListener('keyup',function(event){

    if((event.keyCode==65)||(event.keyCode==68))
    {
        clearInterval(moveRodPlayer1) ;
        keyDownPlayer1=false ;
    }

    else if((event.keyCode==37)||(event.keyCode==39))
    {
        clearInterval(moveRodPlayer2) ;
        keyDownPlayer2=false ;
    }

}) ;

var ball=document.getElementById('ball') ;

var moveBall=setInterval(function(){

    if(ball.getBoundingClientRect().x<=3){
        ballVelocityHor=-1*ballVelocityHor ;
    }

    if(window.innerWidth-(ball.getBoundingClientRect().x+ball.getBoundingClientRect().width)<=3){
        ballVelocityHor=-1*ballVelocityHor ;
    }

    if(ball.getBoundingClientRect().y<=3){
        alert("Game Over. Refresh page to play again.") ;
        clearInterval(moveBall) ;
        return ;
    }

    if(window.innerHeight -(ball.getBoundingClientRect().y+ball.getBoundingClientRect().height)<=3){
        alert("Game Over. Refresh page to play again.") ;
        clearInterval(moveBall) ;   
        return ;
    }

    if((ball.getBoundingClientRect().y<=rods[0].getBoundingClientRect().y+rods[0].getBoundingClientRect().height)){
        
        if(((ball.getBoundingClientRect().x+((ball.getBoundingClientRect().width)/2))>=rods[0].getBoundingClientRect().x)&&((ball.getBoundingClientRect().x)<=rods[0].getBoundingClientRect().x+rods[0].getBoundingClientRect().width-((ball.getBoundingClientRect().width)/2))){
            ballVelocityVer=-1*ballVelocityVer ;
        }

        else{
            alert("Game Over. Refresh page to play again.") ;
            clearInterval(moveBall) ;   
            clearInterval(moveRodPlayer1) ;
            clearInterval(moveRodPlayer2) ;
            return ;
        }
    }

    if((ball.getBoundingClientRect().y+ball.getBoundingClientRect().height>=rods[1].getBoundingClientRect().y)){
        
        if(((ball.getBoundingClientRect().x+((ball.getBoundingClientRect().width)/2))>=rods[1].getBoundingClientRect().x)&&((ball.getBoundingClientRect().x)<=rods[1].getBoundingClientRect().x+rods[1].getBoundingClientRect().width-((ball.getBoundingClientRect().width)/2))){
            ballVelocityVer=-1*ballVelocityVer ;
        }

        else{
            alert("Game Over. Refresh page to play again.") ;
            clearInterval(moveBall) ;   
            clearInterval(moveRodPlayer1) ;
            clearInterval(moveRodPlayer2) ;
            return ;
        }
    }

    ball.style.left=ball.getBoundingClientRect().x+ballVelocityHor+"px" ;
    ball.style.top=ball.getBoundingClientRect().y+ballVelocityVer+"px" ;
},5) ;

