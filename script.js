const playbar = document.querySelector("#playbar");
const r = document.querySelector(':root');
const playButton = document.querySelector("#playButton");

// Video Info
let player;
let videoPaused = true;
let videoTimePercentage = 10;
let videoLength = 1000;
let videoVolume = 100;
let timebarHover = false;

const getPos = (e) => {
    if (e.buttons === 0) {
        let rect = playbar.getBoundingClientRect();
        x=e.clientX;
        y=e.clientY;
        cursor="Your Mouse Position Is : " + (x-rect.left) + " and " + y;
        r.style.setProperty('--hover-location', (x-rect.left)+"px");
        document.getElementById("displayArea").innerHTML=cursor;
    } else {
        timebarHover = true;
        let rect = playbar.getBoundingClientRect();
        document.getElementById("displayArea").innerHTML=e.clientX-rect.left;
        player.currentTime = ((e.clientX-rect.left)/rect.width)*player.duration;
        r.style.setProperty('--current-video-position', ((e.clientX-rect.left)/rect.width*100)+"%");
        timebarHover = false;
    }
}

const clickPos = (e) => {
    timebarHover = true;
    let rect = playbar.getBoundingClientRect();
    document.getElementById("displayArea").innerHTML=e.clientX-rect.left;
    player.currentTime = ((e.clientX-rect.left)/rect.width)*player.duration;
    r.style.setProperty('--current-video-position', ((e.clientX-rect.left)/rect.width*100)+"%");
    timebarHover = false;
}

const stopTracking = () => {
    r.style.setProperty('--hover-location', "0px");
}

const togglePlay = (e) => {
    if (!videoPaused) {
        pauseVideo();
    } else {
        unPauseVideo();
    }
}

const pauseVideo = () => {
    playButton.classList.remove("pause-button");
    playButton.classList.add("play-button");
    pause_vid();
}

const unPauseVideo = () => {
    playButton.classList.remove("play-button");
    playButton.classList.add("pause-button");
    play_vid();
}

const startup = () => {
    if (videoPaused) {
        playButton.classList.remove("pause-button");
        playButton.classList.add("play-button");
    }
}

const clickVideo = () => {
    if (!videoPaused) {
        pauseVideo();
    } else {
        unPauseVideo();
    }
}

startup();

document.addEventListener('keydown', (e) => {
    if (e.code === "Space") {
        clickVideo();
    }
});

document.addEventListener("DOMContentLoaded", () => { startplayer(); }, false);

const startplayer = () => {
    player = document.getElementById('video_player');
    player.controls = false;
    setInterval(() => {
        console.log((player.buffered.end(0) / player.duration * 100));
        r.style.setProperty("--preloaded-video-position", (player.buffered.end(0) / player.duration * 100)+"%");
        if (!videoPaused && !timebarHover) {
            r.style.setProperty('--current-video-position', (player.currentTime / player.duration * 100)+"%");
        }
    }, 200);
}

const play_vid = () => {
    player.play();
    videoPaused = false;
}

const pause_vid = () => {
    player.pause();
    videoPaused = true;
}

const stop_vid = () => {
    player.pause();
    player.currentTime = 0;
}

const change_vol = () => {
    player.volume=document.getElementById("change_vol").value;
}

// var isDown = false;
// playbar.addEventListener('mousedown', function(e) {
//     isDown = true;
// }, true);

// playbar.addEventListener('mouseup', function() {
//   isDown = false;
// }, true);
// console.log("wow");
// playbar.addEventListener('mousemove', function(event) {
//    event.preventDefault();
//    if (isDown) {
// //   var deltaX = event.movementX;
//  //  var deltaY = event.movementY;
// //  var rect = divOverlay.getBoundingClientRect();
// //  divOverlay.style.left = rect.x + deltaX + 'px';
// //  divOverlay.style.top  = rect.x + deltaX + 'px';
//   let rect = playbar.getBoundingClientRect();
// 	document.getElementById("displayArea").innerHTML=e.clientX-rect.left;
//     r.style.setProperty('--current-video-position', (e.clientX-rect.left)+"px");
//  }
// }, true);