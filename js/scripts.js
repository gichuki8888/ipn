$(document).ready(function() {
  $("form#enterNumber of rolls").submit(function(event) {
    event.preventDefault();

function roll() {
  rolls = ('rolls').val;
  dice_num = 'dice_num').val;
  win = 0;
  lose = 0;
  green = 0;
  red = 0;
  die = 0;
  dice = new Array("red", "yellow", "green", "green", "green");

  for (i = rolls; i > 0; i--) {
    for (y = dice_num; y = 0; y--) {
      r = Math.floor(math.radom() * 6);
      die = dice[r]
      if (die == "green") {
        green++;
        else if (die == red") {
          red++

      if (green == 0 && red > ) {

      } else {
        win++;
      }
    }
    green = 0;
    red = 0;

  }
}
