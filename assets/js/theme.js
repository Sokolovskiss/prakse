var x, i, j, l, ll, selElmnt, a, b, c, s;
s = document.getElementById("location");
act = document.getElementById("activity");
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select1");
x2 = document.getElementsByClassName("custom-select2");


var biz = document.getElementsByClassName("selectedItemsGrid");
function clearGrid(){
  for (sk = 0; sk < biz.length; sk++){         
    biz[sk].style.display = 'none';                    
  } 
}

l = x.length;
for (i = 0; i < l; i++) {    
  selElmnt = document.getElementById("location");
  leftDropdownBox = document.getElementsByClassName("leftDropdownBox");
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {        
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, h, sl, yl;
        //s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        //s = document.getElementById("location");
        sl = s.length;
        h = this.parentNode.previousSibling;

        
        
        
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;           
            switch(s.selectedIndex){
              case 3:{ initMap({lat: 56.81315313434528, lng:24.60297783265565});
              clearGrid();
            };
            break;
            case 1:{initMap({lat: 56.946285, lng:24.105078});
            clearGrid();
          }
          break;
          case 2:{initMap({lat: 56.65134582941394, lng:23.72147041775676});
          clearGrid();
        }
        break;
      }




      h.innerHTML = this.innerHTML;
      y = this.parentNode.getElementsByClassName("same-as-selected");
      yl = y.length;
      for (k = 0; k < yl; k++) {
        y[k].removeAttribute("class");
      }
      this.setAttribute("class", "same-as-selected");
      break;
    }
  }
  h.click();
});
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/     
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
      
    });
}

for (i = 0; i < x2.length; i++) {
  var biz = document.getElementsByClassName("selectedItemsGrid");

  
  selElmnt = document.getElementById("activity");
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x2[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, h, sl, yl;
        //s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        act = document.getElementById("activity");
        sl = act.length;
        h = this.parentNode.previousSibling;
        
        for (i = 0; i < sl; i++) {
          if (act.options[i].innerHTML == this.innerHTML) {
            act.selectedIndex = i;
            
            
            
            if(s.selectedIndex == 1 || s.selectedIndex == 0){
              switch(act.selectedIndex){
                case 1:{
                  clearOverlays()
                  clearGrid();
                  biz[0].style.display = 'grid';
                  biz[1].style.display = 'grid';
                  addMarker({coords:{lat:56.955100, lng:24.1046299}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
                  addMarker({coords:{lat:56.93412713448401, lng:24.097076887048075}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
                }
                break;
                case 2:{
                  clearOverlays()
                  clearGrid();
                  biz[2].style.display = 'grid';
                  addMarker({coords:{lat:56.941338175913465, lng:24.08016824251415}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test2</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});               
                }
                break;
              }               
            }

            if(s.selectedIndex == 2){
             switch(act.selectedIndex){
              case 1:{
                clearOverlays()
                clearGrid();
                biz[3].style.display = 'grid';
                addMarker({coords:{lat:56.65113949683316, lng:23.728744441226375}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
              }
              break;
              case 2:{
                clearOverlays()
                clearGrid();
                biz[4].style.display = 'grid';
                addMarker({coords:{lat:56.65215394273031, lng:23.728036338100008}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});                       
              }
              break;
            }               
          }

          if(s.selectedIndex == 3){
           switch(act.selectedIndex){
            case 1:{
              clearOverlays()
              clearGrid();
              biz[5].style.display = 'grid';
              addMarker({coords:{lat:56.81732998746353, lng:24.59903922324193}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
            }
            break;
            case 2:{
              clearOverlays()
              clearGrid();
              biz[6].style.display = 'grid';
              addMarker({coords:{lat:56.81775276908641, lng:24.617449905816287}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test6</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'}); 
            }
            break;
          }               
        }     
        





        h.innerHTML = this.innerHTML;
        y = this.parentNode.getElementsByClassName("same-as-selected");
        yl = y.length;
        for (k = 0; k < yl; k++) {
          y[k].removeAttribute("class");
        }
        this.setAttribute("class", "same-as-selected");
        break;
      }
    }
    h.click();
  });
b.appendChild(c);
}
x2[i].appendChild(b);
a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}


function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

function showMenu(){   
  var x = document.getElementById('OM');
  var om = document.getElementById('om');
  var cm = document.getElementById('cm');

  if(x.style.display === "block"){
    x.style.display = "none"; 
    document.body.style.overflow = "initial";      
  }else{
    x.style.display = "block";
    document.body.style.overflow = "hidden";   
  }


  if(x.style.display === "block"){
    om.style.display = "none";      
    cm.style.display = "block";    
  }else{
    cm.style.display = "none";    
    om.style.display = "block";   
  }      
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
if(playButton){
  playButton.addEventListener("click", function() {
    if (video.paused == true) {
      video.play();
      playButton.style.display = 'none';
      playButtonBg.style.display = 'none';
      video.controls = true;
    } else {
      video.pause();
    }
  })
};




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

/* google maps */
var map;
var markersArray = [];
function initMap(loc){
 var options = {
   zoom:14,
   center: loc,
   zoomControl: false,
   styles:[
   {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
    {
      "color": "#444444"
    }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
    {
      "color": "#f2f2f2"
    }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "road",
    "elementType": "all",
    "stylers": [
    {
      "saturation": -100
    },
    {
      "lightness": 45
    }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "simplified"
    }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
    {
      "visibility": "off"
    }
    ]
  },
  {
    "featureType": "water",
    "elementType": "all",
    "stylers": [
    {
      "color": "#dbdbdb"
    },
    {
      "visibility": "on"
    }
    ]
  }
  ]
}
markersArray = [];
map = new google.maps.Map(document.getElementById('map'),options);

var customZoomInControlDiv = document.createElement('div');
var customZoomInControl = new CustomZoomInControl(customZoomInControlDiv, map);
var customZoomOutControlDiv = document.createElement('div');
var customZoomOutControl = new CustomZoomOutControl(customZoomOutControlDiv, map);

customZoomInControlDiv.index = 1;
customZoomOutControlDiv.index = 1;
map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(customZoomInControlDiv);
map.controls[google.maps.ControlPosition.BOTTOM_RIGHT].push(customZoomOutControlDiv);

    //Riga
    addMarker({coords:{lat:56.955100, lng:24.1046299}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.93412713448401, lng:24.097076887048075}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.941338175913465, lng:24.08016824251415}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test2</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.94717329824607, lng:24.165581584535094}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test3</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.94202350256237, lng:24.126271131760802}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test4</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.947828675766736, lng:24.114083174787112}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test5</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    addMarker({coords:{lat:56.95428820916915, lng:24.118031386201125}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test6</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
    
    //Jelgava
    addMarker({coords:{lat:56.65113949683316, lng:23.728744441226375}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
    addMarker({coords:{lat:56.65215394273031, lng:23.728036338100008}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
    addMarker({coords:{lat:56.6525667908046, lng:23.726319724460325}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test2</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
    addMarker({coords:{lat:56.65018400538949, lng:23.728529864521416}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test3</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
    addMarker({coords:{lat:56.649086929799374, lng:23.728465491509926}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test4</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
    addMarker({coords:{lat:56.64719941323011, lng:23.72943108668225}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test5</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});

    //Ogre  
    addMarker({coords:{lat:56.81732998746353, lng:24.59903922324193}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.80722878565132, lng:24.611398842736396}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.81150451035851, lng:24.623500968896174}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test2</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.814229443020665, lng:24.630925322887805}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test3</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.815662302256534, lng:24.62358679957816}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test4</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.816625340790296, lng:24.619681503547877}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test5</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
    addMarker({coords:{lat:56.81775276908641, lng:24.617449905816287}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test6</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'}); 
  }  

  var marker;
  function addMarker(props){
    var marker = new google.maps.Marker({
     position:props.coords,
     map:map,
     icon:'assets/img/pin.png',
   });      

    if(props.content){
      var infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){


        if(!infoWindow.getMap()){
          infoWindow.open(map, marker);

        }else{
          infoWindow.close(map, marker);
        }          
      });


      google.maps.event.addListener(marker, 'click', function() {

        if(!infoWindow.getMap()){
          marker.setIcon("assets/img/pin.png");                                    
        }else{
          marker.setIcon("assets/img/pinSelected.png");
        }

      });

      google.maps.event.addListener(map, 'click', function() {                                                
       infoWindow.close(map, marker);
       marker.setIcon("assets/img/pin.png");   


     });   

    }      

    markersArray.push(marker);
  }



  function clearOverlays() {

    for (var i = 0; i < markersArray.length; i++ ) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }


  /* zoom pogas*/

  function CustomZoomInControl(controlDiv, map) {
    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.background = 'rgba(255, 168, 0, 0.5)'
    controlUI.style.borderRadius = '10px';
    controlUI.style.cursor = 'pointer';  
    controlUI.style.position = 'absolute';
    controlUI.style.bottom = '180px';
    controlUI.style.right = '-220px';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '50px';
    controlUI.style.height = '50px';
    controlUI.classList.add("zoomButtons");
    controlDiv.appendChild(controlUI);
    
    
    
    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Montserrat, sans-serif';
    controlText.style.fontSize = '35px';
    controlText.style.fontWeight = '900';
    controlText.style.color = '#2F4858';
    controlText.innerHTML = '+';
    controlUI.appendChild(controlText);
    controlText.style.marginTop = '2px';

    // Setup the click event listeners
    google.maps.event.addDomListener(controlUI, 'click', function () {
      map.setZoom(map.getZoom() + 1);
    });

  }

  function CustomZoomOutControl(controlDiv, map) {

    // Set CSS for the control border
    var controlUI = document.createElement('div');
    controlUI.style.background = 'rgba(255, 168, 0, 0.5)'
    controlUI.style.borderRadius = '10px';
    controlUI.style.cursor = 'pointer';
    controlUI.style.position = 'absolute';
    controlUI.style.bottom = '100px';
    controlUI.style.right = '-220px';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '50px';
    controlUI.style.height = '50px';
    controlUI.classList.add("zoomButtons");
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior
    var controlText = document.createElement('div');
    controlText.style.fontFamily = 'Montserrat, sans-serif';
    controlText.style.fontSize = '55px';
    controlText.style.fontWeight = 'bold';
    controlText.style.color = '#2F4858';
    controlText.innerHTML = '-';
    controlText.style.marginTop = '-11px';
    
    
    controlUI.appendChild(controlText);

    // Setup the click event listeners
    google.maps.event.addDomListener(controlUI, 'click', function () {
      map.setZoom(map.getZoom() - 1);
    });

  }

//slick slider

$('.carousel').slick({
  arrows: true,
  infinite: false,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_next'
});


$('.carousel').on('afterChange', function(event, slick, currentSlide) {
  $('.arrow1').css("opacity", "1");
  $('.arrow2').css("opacity", "1");
  $('.arrow1').css("cursor", "pointer");
  $('.arrow2').css("cursor", "pointer");
  console.log(slick, currentSlide);
  if (0 == currentSlide) {
    console.log("Last slide");
    $('.arrow1').css("opacity", "0.5");
    $('.arrow1').css("cursor", "default");
  }

  if (slick.$slides.length-1 == currentSlide) {
    console.log("Last slide");
    $('.arrow2').css("opacity", "0.5");
    $('.arrow2').css("cursor", "default");
  }
})

//fancybox

function gridVid(Id, vidId, source, imgTitle, element){
  var container = document.createElement("div");
  var wrapper = document.createElement("div");
  var title = document.createElement("div");
  var vid = document.createElement("video");
  var src = document.createElement("source");
  var playBut = document.createElement("img");

  var gridElem = document.getElementsByClassName("grid-item");
  if(vidId != null ){
    element.firstElementChild.setAttribute("href", "#" + Id);
    element.firstElementChild.setAttribute("data-fancybox","");    

    container.style.display = 'none';
    wrapper.style.position = 'relative';
    document.body.appendChild(container);
    container.appendChild(wrapper);
    wrapper.appendChild(vid);
    wrapper.appendChild(title);
    wrapper.appendChild(playBut);
    vid.appendChild(src);

    wrapper.style.background = "transparent";
    vid.style.maxWidth = "100%"
    vid.style.width = "912px";

    playBut.src = "assets/img/playBut.png";
    playBut.style.position = "absolute";
    playBut.style.top = "50%";
    playBut.style.left = "50%";
    playBut.style.transform = "translate(-50%,-50%)"
    playBut.style.maxWidth = "100%";
    playBut.style.width = "15%";
    playBut.style.cursor = "pointer";

    title.style.position = "absolute";
    title.style.bottom = "0";
    title.style.left = "0";
    title.style.width = "100%";
    title.style.height = "30px";
    title.innerHTML = imgTitle;
    title.className = "videoName";

    vid. id = vidId
    wrapper.id = Id;
    src.src = "assets/img/gridVideo/" + source;

    playBut.addEventListener('click', function(){
      document.getElementById(vidId).play();
      vid.controls = true;
      playBut.style.display = "none";
    })
  }
}
























