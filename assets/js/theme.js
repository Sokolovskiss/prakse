function showMenu(){   
    var x = document.getElementById('OM');
    var om = document.getElementById('om');
    var cm = document.getElementById('cm');
    
    if(x.style.display === "block"){
        x.style.display = "none";       
    }else{ x.style.display = "block"}
    
    
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



function openVideo(videoId){
    var gridVideo = document.getElementById("videoOverlay");
    gridVideo.style.display = 'block';
    document.getElementById("videoName").innerHTML = videoId;   
}

function closeVideo(){
    var gridVideo = document.getElementById("videoOverlay");
    gridVideo.style.display = 'none';
}














/* google maps */
var map;
var markersArray = [];
function initMap(loc){
     var options = {
     zoom:14,
     center: loc,
     zoomControl: true,
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
                                  
        }      
        
    //;
       markersArray.push(marker);
    }



function clearOverlays() {
    
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}


 
 
 function changeLocation(){
    var loc = document.getElementById("location");
    var type = document.getElementById("activity");
    var b = document.getElementsByClassName("selectedItemsGrid");
    
    
    
    for (i = 0; i < b.length; i++){
        b[i].style.display = 'none';
    }   
       
    switch(loc.options[loc.selectedIndex].value){
        case "Ogre":{ initMap({lat: 56.81315313434528, lng:24.60297783265565})      
        };
        break;
        case "Rīga": initMap({lat: 56.946285, lng:24.105078});
        break;
        case "Jelgava": initMap({lat: 56.65134582941394, lng:23.72147041775676});
        break;
        }
        
        
}
 
 
function showSelectedBussines(){
    var loc = document.getElementById("location");
    var type = document.getElementById("activity");
    var b = document.getElementsByClassName("selectedItemsGrid");
    
    clearOverlays();
    
    for (i = 0; i < b.length; i++){
        b[i].style.display = 'none';
    }   
    

    if(loc.options[loc.selectedIndex].value == "Rīga"){
        switch(type.options[type.selectedIndex].value){
            case "food":{
                b[0].style.display = 'grid';
                b[1].style.display = 'grid';
                addMarker({coords:{lat:56.955100, lng:24.1046299}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
                addMarker({coords:{lat:56.93412713448401, lng:24.097076887048075}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});
            }
            break;
            case "washing":{
                b[2].style.display = 'grid';
                addMarker({coords:{lat:56.941338175913465, lng:24.08016824251415}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test2</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Rīga</p></div></div>'});               
            }
            break;
        }     
    }

    if(loc.options[loc.selectedIndex].value == "Jelgava"){
        switch(type.options[type.selectedIndex].value){
            case "food":{
                b[3].style.display = 'grid';
                addMarker({coords:{lat:56.65113949683316, lng:23.728744441226375}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
            }
            break;
            case "washing":{
                b[4].style.display = 'grid';
                addMarker({coords:{lat:56.65215394273031, lng:23.728036338100008}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Jelgava</p></div></div>'});
                }
            break;
        }     
    }  

    if(loc.options[loc.selectedIndex].value == "Ogre"){
        switch(type.options[type.selectedIndex].value){
            case "food":{
                b[5].style.display = 'grid';
                addMarker({coords:{lat:56.81732998746353, lng:24.59903922324193}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>AUCH beuty home</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
            }
            break;
            case "washing":{
                b[6].style.display = 'grid';
                addMarker({coords:{lat:56.80722878565132, lng:24.611398842736396}, content:'<div class="mapMarkerDesc"><div><img src="assets/img/AUCHlogo1.png"></div><div><h6>Test1</h6><p>+371 28361686, +371 23202079<br>auchbeuty@gmail.com<br>Cēsu iela 20, Ogre</p></div></div>'});
                }
            break;
        }     
    }     
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
    controlUI.style.right = '200px;';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '50px';
    controlUI.style.height = '50px';
    
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
    controlUI.style.left = '0';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '50px';
    controlUI.style.height = '50px';
    
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








 
























