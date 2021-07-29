var val = "X";
// function one(){
//     var i1 = document.getElementById('b1');
//     if(i1.innerHTML==0) {
//         i1.innerHTML = val;
//         val = (val=="X"?"O":"X");
//         console.log("inside if : "+i1.innerHTML+" "+val);
//     }
//     console.log("Element : "+ i1.innerHTML);
//     console.log(val);
// }
var i1,i2,i3,i4,i5,i6,i7,i8,i9;
var count=parseInt(0);
var drawCounter = parseInt(4);
var flag = 0;
var player1Score=0;
var player2Score=0;
var drawScore=0;
var isDraw=0;

$(document).ready(function() {
    
    valChangeStyle();
    $('#b1').click(function(){
        if(flag == 0){
            i1 = $('#b1').html();
            if(i1===""){
                $('#b1').html(val);
                i1 = $('#b1').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b1");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b2').click(function(){
        if(flag == 0){
            i2 = $('#b2').html();
            if(i2===""){
                $('#b2').html(val);
                i2 = $('#b2').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b2");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b3').click(function(){
        if(flag == 0){
            i3 = $('#b3').html();
            if(i3===""){
                $('#b3').html(val);
                i3 = $('#b3').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b3");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b4').click(function(){
        if(flag == 0){
            i4 = $('#b4').html();
            if(i4===""){
                $('#b4').html(val);
                i4 = $('#b4').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b4");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b5').click(function(){
        console.log(flag);
        if(flag == 0){
            i5 = $('#b5').html();
            if(i5===""){
                $('#b5').html(val);
                i5 = $('#b5').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b5");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b6').click(function(){
        if(flag == 0){
            i6 = $('#b6').html();
            if(i6===""){
                $('#b6').html(val);
                i6 = $('#b6').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b6");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b7').click(function(){
        if(flag == 0){
            i7 = $('#b7').html();
            if(i7===""){
                $('#b7').html(val);
                i7 = $('#b7').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b7");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b8').click(function(){
        if(flag == 0){
            i8 = $('#b8').html();
            if(i8===""){
                $('#b8').html(val);
                i8 = $('#b8').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b8");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#b9').click(function(){
        if(flag == 0){
            i9 = $('#b9').html();
            if(i9===""){
                $('#b9').html(val);
                i9 = $('#b9').html();
                val = (val=="X"?"O":"X");
                valChangeStyle("#b9");
                count++;
                if(count>4)
                    checkValue();
            }
        }
    });

    $('#resetBtn').click(function(){
        
        player1Score=0;
        player2Score=0;
        drawScore=0;
        $('#ps1').html("0");
        $('#ps2').html("0");
        $('#draw').html("0");
        resetGame();
        valChangeStyle();
    });
    $('#restartGameBtn').click(function(){
        resetGame();
        valChangeStyle();
    });
});

//valChangeStyle() is for highlighting border of user who's turn is going on.
//for change color of X and O
function valChangeStyle(bId){
    if(val=="X" && isDraw==0){
        //who's turn is on going
        $('.play1').addClass("turnColor");
        $('.play2').removeClass("turnColor");

        //for color of box
        $(bId).removeClass("O");
        $(bId).addClass("X");
        $('.tie').removeClass("turnColor");
    }
    else if(val=="O" && isDraw==0){
        //who's turn is on going
        $('.play2').addClass("turnColor");
        $('.play1').removeClass("turnColor");

        //for color of box
        $(bId).removeClass("X");
        $(bId).addClass("O");
        $('.tie').removeClass("turnColor");
    }
    else if(isDraw==1){
        //color change for tie match....
        $('.tie').addClass("turnColor");
        $('.play1').removeClass("turnColor");
        $('.play2').removeClass("turnColor");
        //for color of box
        $(bId).removeClass("X");
        $(bId).removeClass("O");
    }
}

function showModal(){
    $('#gameover').addClass("show fontSizeofModal");
    $('#mainGame').removeClass("show");
    $('#mainGame').addClass("hide");
    if(val=="X" && isDraw==0){
        $('#showIconX').removeClass("hide");
        $('#showIconY').addClass("hide");
        $('#winName').html("Player 1 Won The Game!!!");
    }
    else if(val=="O" && isDraw==0){
        $('#showIconY').removeClass("hide");
        $('#showIconX').addClass("hide");
        $('#winName').html("Player 2 Won The Game!!!");
    }
    else if(isDraw==1){
        $('#showIconX').addClass("hide");
        $('#showIconY').addClass("hide");
        $('#winName').html("Tie!!");
    }
}
function checkValue() {
    if((i1=="X" && i2=="X" && i3=="X") || (i1=="X" && i4=="X" && i7=="X") || (i1=="X" && i5=="X" && i9=="X")
        || (i2=="X" && i5=="X" && i8=="X") || (i3=="X" && i6=="X" && i9=="X") || (i3=="X" && i5=="X" && i7=="X")
        || (i4=="X" && i5=="X" && i6=="X") || (i7=="X" && i8=="X" && i9=="X"))
    {
        console.log("A win");
        val="X";
        player1Score++;
        $('#ps1').html(player1Score);
        console.log(player1Score);
        flag=1;
        setTimeout(function(){
            showModal();
        },500);
        valChangeStyle();
    }
    else if((i1=="O" && i2=="O" && i3=="O") || (i1=="O" && i4=="O" && i7=="O") || (i1=="O" && i5=="O" && i9=="O")
            || (i2=="O" && i5=="O" && i8=="O") || (i3=="O" && i6=="O" && i9=="O") || (i3=="O" && i5=="O" && i7=="O")
            || (i4=="O" && i5=="O" && i6=="O") || (i7=="O" && i8=="O" && i9=="O"))
    {   
        console.log("B win");
        val="O";
        player2Score++;
        $('#ps2').html(player2Score);
        console.log(player2Score);
        flag=1;
        setTimeout(function(){
            showModal();
        },500);
        valChangeStyle();
    }
    else if(count==9)
    {
        console.log("Draw");
        isDraw=1;
        val = (val=="X"?"O":"X");
        drawScore++;
        $('#draw').html(drawScore);
        setTimeout(function(){
            showModal();
        },500);
        valChangeStyle();
    }
}


//this function is for reset the game and all value will be null.
function resetGame(){
    setTimeout(function(){
        $('.box').html("");
    }, 100);
    valChangeStyle();
    console.log("reset button called");
    isDraw=0;
    flag=0;
    count=0;
    i1="",i2="",i3="",i4="",i5="",i6="",i7="",i8="",i9="";
    $('.gameField').addClass("show");
    $('#gameover').removeClass("show");
}