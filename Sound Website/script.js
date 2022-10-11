var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");


icon.onclick = function(){
if(mySong.play){
  mySong.play();
  icon.src = "assets/pause.png";
}else{
  mySong.paused();
  icon.src = "assets/pause.png";
  mySong.play();
  icon.src = "assets/play.png";

}
}

