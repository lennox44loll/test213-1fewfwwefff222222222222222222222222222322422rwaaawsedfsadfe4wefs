// ▶️ VIDEO automatisch abspielen
const video = document.createElement('video');
video.src = 'https://www.youtube.com/watch?v=xjbpewWO6nc'; // Ersetze durch echte Video-URL
video.autoplay = true;
video.muted = false; // Muss meist "muted" sein, damit Autoplay ohne Nutzerinteraktion funktioniert
video.style.position = 'fixed';
video.style.top = '10px';
video.style.left = '10px';
video.style.width = '320px';
video.style.zIndex = '9999';
document.body.appendChild(video);

// 🌐 Seite mehrfach öffnen (⚠️ gefährlich & kann blockiert werden)
for (let i = 0; i < 5; i++) {
    window.open('https://guns.lol/lennox350', '_blank');
}