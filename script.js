const playbar = document.querySelector("#playbar");
const r = document.querySelector(':root');

function getPos(e){
			let rect = playbar.getBoundingClientRect();
    		x=e.clientX;
    		y=e.clientY;
    		cursor="Your Mouse Position Is : " + (x-rect.left) + " and " + y;
            r.style.setProperty('--hover-location', (x-rect.left)+"px");
    		document.getElementById("displayArea").innerHTML=cursor
    	}
    
    	function stopTracking(){
            r.style.setProperty('--hover-location', "0px");
    	}
        
playbar.onclick = (e) => {
	let rect = playbar.getBoundingClientRect();
	document.getElementById("displayArea").innerHTML=e.clientX-rect.left;
   r.style.setProperty('--current-video-position', (e.clientX-rect.left)+"px");
}

const togglePlay = (e) => {
  console.log(e);
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