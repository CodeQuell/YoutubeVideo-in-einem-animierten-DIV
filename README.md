# YoutubeVideo-in-einem-animierten-DIV
Dieses Beispiel zeigt auf wie man mit der "Youtube Player API" ein YoutubeVideo in einer Webseite einbinden und steuern kann.
Die API wird mit Javascript in die Webseite eingebunden und gesteuert.

Die API-Doku von Google findet man hier: https://developers.google.com/youtube/iframe_api_reference?hl=de

## Das Beispiel im Detail
Auf der Webseite ist ein \<div>-Element mit blauem Rand zu sehen. Darin erscheint animiert ( von unten nach oben bewegend ) ein grau hinterlegtes weiteres \<div>-Element, welches am unteren Ende ein \<iframe>-Element mit einem Youtube-Video enthält.
  
Sobald man mit der Maus auf das grau hinterlegte \<div>-Element fährt stoppt die Animation, bis die Maus die graue Fläche wieder verlässt.
Wenn das Youtube-Video gestartet wird, stoppt die Animation solange bis die Video-Wiedergabe entweder pausiert oder beendet wird.
