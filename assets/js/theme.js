function showMenu(){   
    var x = document.getElementById('OM');
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{ x.style.display = "block"}
}

window.onscroll = function() {scrollUp()};

function scrollUp() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("fixedAnchorLink").style.display = 'block';
  } else {
    document.getElementById("fixedAnchorLink").style.display = 'none';
  }
}


var playButton = document.getElementById("playButton");
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.style.display = 'none';
    video.controls = true;
  } else {
    video.pause();
  }
});