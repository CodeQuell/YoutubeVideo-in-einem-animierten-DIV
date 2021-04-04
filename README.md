# YoutubeVideo-in-einem-animierten-DIV
Dieses Beispiel zeigt auf wie man mit der "Youtube Player API" ein YoutubeVideo in einer Webseite einbinden und steuern kann.
Die API wird mit Javascript in die Webseite eingebunden und gesteuert.

Die API-Doku von Google findet man hier: https://developers.google.com/youtube/iframe_api_reference?hl=de

## Das Beispiel im Detail
Auf der Webseite ist ein \<div>-Element mit blauem Rand zu sehen. Darin erscheint animiert ( von unten nach oben bewegend ) ein grau hinterlegtes weiteres \<div>-Element, welches am unteren Ende ein \<iframe>-Element mit einem Youtube-Video enthält.
  
Sobald man mit der Maus auf das grau hinterlegte \<div>-Element fährt stoppt die Animation, bis die Maus die graue Fläche wieder verlässt.
Wenn das Youtube-Video gestartet wird, stoppt die Animation solange bis die Video-Wiedergabe entweder pausiert oder beendet wird.

## index.html
Die index.html enthält den Platzhalter für den Youtube-Player: **\<div id="player">\</div>**
Dieses \<div>-Element wird aus dem Javascript-Code in youtubeApi.js mit einem \<iframe>-Element ersetzt.

## youtubeApi.js
In youtubeApi.js wird zuerst die "Youtube Player API" asynchron geladen, anschliessend wird die **function onYouTubeIframeAPIReady()** gefeuert sobald die API bereit steht.
Mit **new YT.Player('player'....** wird der Youtube Player erzeugt und **\<div id="player">\</div>** in index.html wird mit dem **\<iframe>-Element** das vom Player erzeugt wird, ersetzt.

Die **function onPlayerStateChange()** wird jedes Mal ausgeführt wenn sich der Status vom Youtube-Player ändert. Wenn das Video gestartet wird oder wenn es pausiert wird zum Beispiel.

Mögliche Stati vom Youtube-Player sind:
* -1 – nicht gestartet
* 0 – beendet
* 1 – wird wiedergegeben
* 2 – pausiert
* 3 – wird gepuffert
* 5 – Video positioniert

## style.css
In style.css ist das Aussehen der verwendeten Html-Elemente definiert, sowie die Animation des grau hinterlegten div-Elements.
