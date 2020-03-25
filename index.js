var drumNumbers=document.querySelectorAll(".drum").length;

// Function tpo make sound on an addEventListener

function playSound(value)
{
  var path="sounds/";
  switch (value)
  {
    case "w":  path+="crash.mp3";
               break;

    case "a":  path+="kick-bass.mp3";
               break;

    case "s":  path+="snare.mp3";
               break;

    case "d":  path+="tom-1.mp3";
               break;

    case "j":  path+="tom-2.mp3";
               break;

    case "k":  path+="tom-3.mp3";
               break;

    case "l":  path+="tom-4.mp3";
               break;

    default :  console.log("invalid input");
  }
  var audio=new Audio(path);
  audio.play();
}
function buttonAnimation(activeKey)
{
   var activeButton = document.querySelector("." + activeKey);
   activeButton.classList.add("pressed");
   setTimeout(function(){
     activeButton.classList.remove("pressed");
   },200);


}
// Making sound via clicking mouse

for(i=0;i<drumNumbers;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    playSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
// Making sound via pressing key on keyboard

document.addEventListener("keypress",function() {
  playSound(event.key);
  buttonAnimation(event.key);
});
