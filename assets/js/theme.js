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
var playButtonBg = document.getElementById("buttonBackground");
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    video.play();
    playButton.style.display = 'none';
    playButtonBg.style.display = 'none';
    video.controls = true;
  } else {
    video.pause();
  }
});




function submitInfo(){   
    var msg1 = document.getElementById('submitMessage1');
    var msg2 = document.getElementById('submitMessage2');   
    var sb = document.getElementById("submitButton");
    var textCheckbox1 = document.getElementById("underInputText");
    var textCheckbox2 = document.getElementById("checkboxText");
    var cb = document.getElementById("checkboxForm");
          
    if(document.forms['contact'].userName.value ==="" || document.forms['contact'].email.value ==="" || document.forms['contact'].phone.value ==="" || cb.checked == 0){
        alert("Nepieciešamie lauki nav aizpildīti!");
    }else{
        textCheckbox1.style.display = 'none';
        textCheckbox2.style.display = 'none';
        sb.style.display = 'none';
        msg1.style.display = 'block';
        msg2.style.display = 'block';
    }    
};

function showMore(){
    var hiddenGrid = document.getElementsByClassName("hidden");
    var showMoreBut = document.getElementById("showMoreButton");
    var i;    
    for (i = 0; i < hiddenGrid.length; i++){
        hiddenGrid[i].style.display = 'block';
    }   
    showMoreBut.style.display = 'none';
}




