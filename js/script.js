$(document).ready(function(){
  var turn = 1;
  var player;

  $("#board").on("click",".drop", function(event){
    event.preventDefault();
    var board = $(this).parent();
    var column = $(this).parent().children();
    console.log(board);

    if (isOdd(turn)){
      player = "red"
    }else{
      player ="black"
    }

     for(var i = 1; i< 7; i++){
       if ($(column[i]).hasClass('red') || $(column[i]).hasClass('black') || i == 6 ){
        $(column[i-1]).addClass(player)
        break;
      }
    }
    turn ++;
  })
});



function isOdd(number) {
  // console.log(number)
  if(number%2){
    return false
  }else{
    return true
  }
}
