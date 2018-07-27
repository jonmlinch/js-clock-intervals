function clock(){
	var d = new Date;
	var h = 30 * ((d.getHours() %12) + d.getMinutes()/60);
	var m = 6 * d.getMinutes();
	var s = 6 * d.getSeconds();

	setAttr("hour", h);
	setAttr("minute", m);
	setAttr("second", s);

	setTimeout(clock, 1000);
	console.log ("tick")
};

function setAttr(id, val){
	var v = "rotate(" + val + "deg)";
	document.getElementById(id).style.transform = v;
	console.log("tock")
};

window.onload=clock;

// var secondHand = document.getElementById("second");

// var minuteHand = document.getElementById("minute");

// var hourHand = document.getElementById("hour");


// function minSecRotation(minSec) {
// 	return (minute/60)*360;
// }

// function hourRotation(minute) {
// 	return (minute/12)*360;
// }

// secondHand.style.transform = "rotate(" + degrees + "deg)";
// minuteHand.style.transform = "rotate(" + degrees + "deg)";
// hourHand.style.transform = "rotate(" + degrees + "deg)";