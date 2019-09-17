document.oncontextmenu = function() {
    event.returnValue = false;
    window.alert("Right click has been disabled!");
}
function alertA() {
	window.alert("Message submitted");
}
