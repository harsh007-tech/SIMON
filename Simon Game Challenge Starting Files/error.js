//storing the pattern
var userClickedPattern = [];
//step 2.5:
var gamePattern = [];
//step 2.3 :
var buttonColors = ["red", "blue", "green", "yellow"];
//step 2.1 : generating random number
function nextSequence()
 {var randomNumber = Math.floor(Math.random() * 4);
   //step 2.4 :generating game pattern
  var randomChosenColour = buttonColors[randomNumber];
  //step 2.6 :
  gamePattern.push(randomChosenColour);

        //step 3 : Flashing the button
        $("#" + randomChosenColour).ready(() => {
          setInterval(() => {
            $("#" + randomChosenColour).fadeIn();
            $("#" + randomChosenColour).fadeOut();
          }, 500);
        });

        //playing the sound
        function playSound() {
          switch (randomChosenColour) {
            case "red": //Constructor Function Audio,Object play
              var redSound = new Audio("red.mp3");
              redSound.play();
              break;
            case "blue": //Constructor Function Audio,Object play
              var blueSound = new Audio("blue.mp3");
              blueSound.play();
              break;
            case "green": //Constructor Function Audio,Object play
              var greenSound = new Audio("green.mp3");
              greenSound.play();
              break;
            case "yellow": //Constructor Function Audio,Object play
              var yellowSound = new Audio("yellow.mp3");
              yellowSound.play()
              break;
            default:
              alert("TECHNICAL ERROR");
          }
        }
}
//Functionality of detecting a click
$("button").click(function() {
  var userChosenColor = this.attr("id");
  userClickedPattern.push(userChosenColor);

  });
