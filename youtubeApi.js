// 1. Die IFrame Player API wird asynchron geladen.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. Diese Funktion erzeugt ein <iframe> (und den YouTube player)
//    nachdem der API Code in Schritt 2 heruntergeladen wurde.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '180',
      width: '320',
      videoId: 'M7lc1UVf-VE',
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
}

// 3. Die API ruft diese Funktion auf wenn der Video-Player bereit ist.
function onPlayerReady(event) {
    /*event.target.playVideo();*/
}

// 5. Die API ruft diese Funktion auf wenn der Status vom Player ändert.
// Mögliche Werte sind:
// -1 – nicht gestartet
// 0 – beendet
// 1 – wird wiedergegeben
// 2 – pausiert
// 3 – wird gepuffert
// 5 – Video positioniert
var done = false;
var playerState;
function onPlayerStateChange(event) {
    //Den Status des Videos holen. 
    var state = player.getPlayerState();
    playerState = player.getPlayerState();
    
    if (state == 1)
    {
        // Das Video läuft, die Animation stoppen
        stopAnimation();
    }
    else if (state == 2 || state == 0){
        // Das Video ist pausiert oder beendet, die Animation starten
        startAnimation();
    }
}

function startAnimation(){
    var style;
    for (var i = 0; i < cq_scrollitem.length; i++) {
        style = cq_scrollitem[i].style;
        style.webkitAnimationPlayState = 'running';
        document.body.className = '';
    }
}

function stopAnimation(){
    var style;
    for (var i = 0; i < cq_scrollitem.length; i++) {
        style = cq_scrollitem[i].style;
        style.webkitAnimationPlayState = 'paused';
        document.body.className = 'paused';
    }
}

function toggleAnimation() {
    // Toggelt die Animation -> stoppt oder startet die Animation
    // Wenn das Video läuft playerState 1, kann die Animation nicht gestartet werden
    if(playerState != 1){
        var style;
        for (var i = 0; i < cq_scrollitem.length; i++) {
            style = cq_scrollitem[i].style;
            if (style.webkitAnimationPlayState === 'running') {
                style.webkitAnimationPlayState = 'paused';
                document.body.className = 'paused';
            } 
            else 
            {
                style.webkitAnimationPlayState = 'running';
                document.body.className = '';
            }
        }
    }
}

function stopVideo() {
    player.stopVideo();
} 

// cq_scrollitem muss ausserhalb vom Event window.onload zur Verfügung stehen, 
// damit das toggeln der Animation mit toggleAnimation() klappt
cq_scrollitem = {};

// Nach dem Laden der Seite
window.onload = function(e){ 
    // Alle Elemente mit der Klasse "cq_scrollitem" holen und im Array cq_scrollitem ablegen
    cq_scrollitem = document.querySelectorAll('.cq_scrollitem');
}
